# Setup Layer — Translation Correspondence and Semantic Audit

- Chinese source: `ai/prompts/setup/index.md`
- Chinese blob SHA: `be3ccfa1d7d7dd6501c8e52b16de0b5bbc67a6f6`
- English candidate: `01_english_sources/setup/index.md`
- Chinese route: `/ai/prompts/setup/`
- English route: `/ai/prompts/en/setup/`
- Status: reviewed functional counterpart

## Prompt correspondence

| Anchor | Chinese function | English counterpart | Semantic invariants |
| --- | --- | --- | --- |
| `idea-feasibility-gate` | 将一句 research idea 发展为可核实的 applied-micro proposal，并给出立项裁决 | Develop a one-sentence idea into a verifiable applied-micro proposal and a go / wait / stop decision | Must require actual verification of policy, literature, and data; must distinguish ideal and feasible data; must allow project termination; publication ceiling remains an upper bound, not acceptance probability. |
| `project-workspace-bootstrap` | 建立固定目录、artifact 规则、CLAUDE / PROJECT / HANDOFF 三类记忆 | Create the standard workspace and three distinct memory files | Do not turn the workflow into irreversible gates; preserve one current Brief and manuscript; formal artifacts remain English; `CLAUDE.md` stays short; no auto-import of PROJECT/HANDOFF. |
| `environment-bootstrap` | 验证 Stata 与 LaTeX 真正可调用并记录长期配置 | Verify Stata and LaTeX by actual execution | “Installed” is insufficient; a `.do` file and `.tex` file must actually run / compile. Do not introduce a complex environment-management layer. |
| `project-map-refresh` | 让 PROJECT.md 保持为长期地图，而非 notes / brief / handoff | Keep PROJECT.md as a durable map | Current estimates, significance, temporary branches, and recent session history must remain excluded. Brief owns the paper identity once established. |
| `session-handoff-refresh` | 压缩前完成 context-dependent 收尾并写可冷启动 HANDOFF | Complete high-value context-dependent closing work, then refresh the handoff | Must not open a new large branch; keep 1–2 minute readability; report the exact HANDOFF path; do not paste the body into chat. |

## Delicate translation choices

### “值不值得真正开项目”

Rendered as “whether the project is genuinely worth opening,” preserving the investment decision rather than softening it to “develop the idea further.”

### “值得立即推进 / 先验证关键数据后再决定 / 暂不值得做”

Rendered as **advance immediately / verify a key data condition before deciding / not currently worth pursuing**. The middle category remains conditional rather than becoming a weak recommendation.

### `CLAUDE.md` workflow language

The English version preserves the direction:

`Data / Analysis → Notes / Evidence → Brief → Manuscript → Submission / Replication`

and explicitly preserves the source’s statement that these are working layers, not irreversible gates.

### Interaction and artifact language

The source requires Chinese interaction and English formal artifacts. The English counterpart retains this rule exactly because it is a project convention, not merely page localization.

## Review checklist

- [ ] Five prompt anchors match exactly.
- [ ] Directory tree is unchanged.
- [ ] Personal website URL remains `https://zhejianwang.com/`.
- [ ] All artifact paths and filenames remain unchanged.
- [ ] No current research result or paper framing is introduced into PROJECT.md or CLAUDE.md.
- [ ] The HANDOFF remains a current-state snapshot, not an append-only history.
