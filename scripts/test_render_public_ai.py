"""Regression checks for the optional research direction in public AI exports."""

import copy
import json
import unittest
from unittest.mock import patch

import render_public_ai as renderer


class PublicAIExportTests(unittest.TestCase):
    def render(self, person):
        load_yaml = renderer.load_yaml
        outputs = {}

        def load_source(path):
            return person if path == "_data/person.yml" else load_yaml(path)

        with patch.object(renderer, "load_yaml", side_effect=load_source), \
                patch.object(renderer, "write_or_check", side_effect=lambda path, text, check: outputs.update({path: text})), \
                patch("sys.argv", ["render_public_ai.py"]):
            renderer.main()
        return outputs

    def test_homepage_paragraph_count_does_not_control_exports(self):
        original = renderer.load_yaml("_data/person.yml")
        expected = self.render(original)
        for paragraphs in ([], ["A separate homepage introduction."], ["First paragraph.", "Second paragraph."]):
            with self.subTest(paragraphs=paragraphs):
                person = copy.deepcopy(original)
                person["about_paragraphs"] = paragraphs
                self.assertEqual(self.render(person), expected)
        self.assertEqual(json.loads(expected["ai/context.json"])["research"]["developing_direction"], original["developing_direction"])

    def test_optional_direction_is_omitted_when_missing_or_blank(self):
        original = renderer.load_yaml("_data/person.yml")
        for value in (None, "", "  ", "missing"):
            with self.subTest(value=value):
                person = copy.deepcopy(original)
                if value == "missing":
                    person.pop("developing_direction", None)
                else:
                    person["developing_direction"] = value
                outputs = self.render(person)
                self.assertNotIn("developing_direction", json.loads(outputs["ai/context.json"])["research"])
                self.assertNotIn("developing_direction", json.loads(outputs["ai/profile.json"])["research_profile"])
                self.assertNotIn("Developing research direction:", outputs["ai/context.txt"])
                self.assertNotIn("**Developing direction:**", outputs["ai/context.md"])
                self.assertEqual(len(json.loads(outputs["ai/context.json"])["confirmed_publications"]), 2)


if __name__ == "__main__":
    unittest.main()
