#!/usr/bin/env python3
"""Build responsive portrait assets and deterministic social cards.

The original high-resolution portrait remains untouched. Generated files are
small, web-facing derivatives that can be reproduced from this script.
"""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageEnhance, ImageFont, ImageOps


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "images" / "19.jpg"
PORTRAIT_DIR = ROOT / "images" / "portrait"
SOCIAL_DIR = ROOT / "images" / "social"
WIDTHS = (480, 768, 1200, 1600)

INK = "#10161b"
INK_SOFT = "#46525b"
CREAM = "#fcfaf5"
PAPER = "#f4f1e9"
RED = "#b23a2b"
BLUE = "#153d59"


def font(candidates: tuple[str, ...], size: int) -> ImageFont.FreeTypeFont:
    for candidate in candidates:
        path = Path(candidate)
        if path.exists():
            return ImageFont.truetype(str(path), size=size)
    return ImageFont.load_default(size=size)


DISPLAY = (
    r"C:\Windows\Fonts\georgiab.ttf",
    r"C:\Windows\Fonts\cambriaz.ttf",
)
BODY = (
    r"C:\Windows\Fonts\segoeui.ttf",
    r"C:\Windows\Fonts\arial.ttf",
)
BODY_BOLD = (
    r"C:\Windows\Fonts\segoeuib.ttf",
    r"C:\Windows\Fonts\arialbd.ttf",
)


def build_portraits(source: Image.Image) -> None:
    PORTRAIT_DIR.mkdir(parents=True, exist_ok=True)
    ratio = source.height / source.width

    for width in WIDTHS:
        height = round(width * ratio)
        resized = source.resize((width, height), Image.Resampling.LANCZOS)
        stem = PORTRAIT_DIR / f"zhejian-wang-{width}"
        resized.save(stem.with_suffix(".avif"), "AVIF", quality=50, speed=6)
        resized.save(stem.with_suffix(".webp"), "WEBP", quality=78, method=6)
        resized.save(
            stem.with_suffix(".jpg"),
            "JPEG",
            quality=82,
            optimize=True,
            progressive=True,
            subsampling=2,
        )


def portrait_crop(source: Image.Image, size: tuple[int, int]) -> Image.Image:
    crop = ImageOps.fit(
        source,
        size,
        method=Image.Resampling.LANCZOS,
        centering=(0.5, 0.36),
    )
    crop = ImageEnhance.Contrast(crop).enhance(1.04)
    desaturated = ImageEnhance.Color(crop).enhance(0.25)
    return Image.blend(desaturated, Image.new("RGB", size, BLUE), 0.1)


def draw_grid(draw: ImageDraw.ImageDraw, size: tuple[int, int], color: str) -> None:
    width, height = size
    for x in range(0, width, 48):
        draw.line((x, 0, x, height), fill=color, width=1)
    for y in range(0, height, 48):
        draw.line((0, y, width, y), fill=color, width=1)


def save_social(image: Image.Image, path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    image.save(
        path,
        "JPEG",
        quality=82,
        optimize=True,
        progressive=True,
        subsampling=2,
    )


def build_profile_social_card(source: Image.Image) -> None:
    size = (1200, 630)
    card = Image.new("RGB", size, PAPER)
    draw = ImageDraw.Draw(card)
    draw_grid(draw, size, "#ded8cc")

    photo_width = 410
    photo = portrait_crop(source, (photo_width, size[1]))
    card.paste(photo, (size[0] - photo_width, 0))
    draw.rectangle((0, 0, 18, size[1]), fill=RED)
    draw.rectangle((742, 0, 790, size[1]), fill=INK)

    draw.text((76, 74), "ZW", font=font(BODY_BOLD, 24), fill=RED)
    draw.text((76, 150), "Zhejian", font=font(DISPLAY, 82), fill=INK)
    draw.text((76, 235), "Wang", font=font(DISPLAY, 82), fill=INK)
    draw.text((80, 352), "APPLIED MICROECONOMIST", font=font(BODY_BOLD, 26), fill=BLUE)
    draw.text(
        (80, 415),
        "Digital regulation · Education · Households",
        font=font(BODY, 23),
        fill=INK_SOFT,
    )
    draw.text((80, 538), "zhejianwang.com", font=font(BODY_BOLD, 22), fill=INK)

    save_social(card, SOCIAL_DIR / "zhejian-wang-social-card.jpg")


def build_paper_social_card() -> None:
    size = (1200, 630)
    card = Image.new("RGB", size, INK)
    draw = ImageDraw.Draw(card)
    draw_grid(draw, size, "#1d282f")
    draw.rectangle((0, 0, 22, size[1]), fill=RED)
    draw.rectangle((850, 0, size[0], size[1]), fill=BLUE)
    draw.ellipse((950, -80, 1280, 250), fill="#1d516f")

    draw.text((82, 70), "PEER-REVIEWED ARTICLE", font=font(BODY_BOLD, 22), fill="#d69c90")
    draw.text((82, 143), "Restricting video games", font=font(DISPLAY, 59), fill=CREAM)
    draw.text((82, 211), "in China", font=font(DISPLAY, 59), fill=CREAM)
    draw.text(
        (86, 318),
        "Effects on time use, educational achievement, and health",
        font=font(BODY, 25),
        fill="#cfd4d7",
    )
    draw.text((86, 406), "Journal of Development Economics · 182 · 103812 · 2026", font=font(BODY_BOLD, 22), fill=CREAM)
    draw.text((86, 530), "Zhejian Wang  ·  zhejianwang.com", font=font(BODY, 21), fill="#aeb7bc")

    save_social(card, SOCIAL_DIR / "restricting-video-games-china.jpg")


def main() -> None:
    source = ImageOps.exif_transpose(Image.open(SOURCE)).convert("RGB")
    build_portraits(source)
    build_profile_social_card(source)
    build_paper_social_card()

    generated = sorted(PORTRAIT_DIR.glob("zhejian-wang-*")) + sorted(SOCIAL_DIR.glob("*.jpg"))
    for path in generated:
        print(f"{path.relative_to(ROOT).as_posix()}\t{path.stat().st_size}")


if __name__ == "__main__":
    main()
