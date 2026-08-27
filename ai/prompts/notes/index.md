---
layout: single
title: "Prompt 库 · Notes / Evidence Layer"
permalink: /ai/prompts/notes/
author_profile: false
lang: zh-CN
sitemap: false
noindex: true
visibility: public
status: current
last_updated: 2026-08-27
---

**Layers：[Manuscript](/ai/prompts/) · Notes / Evidence**

本页收录用于可复现探索、证据积累与研究路线管理的 Prompts。Notes / evidence layer 用于保存完整探索过程；只有通过明确准入标准的材料才进入 manuscript brief。

## 总控工作流

### Notes Prompt 1：Evidence-First Exploration Workflow（CGSS 案例）★★★★★

**推荐模式：Pro 用于总体规划、最终综合与 manuscript-brief 准入裁决；边界明确的 analysis family 可用 Extra High；不建议使用 High 单独执行整条 Prompt**

~~~text
基于目录中现有的自动科研工作流，对“中国成年人的幸福感与抑郁/沮丧是否出现分化？——基于 CGSS 2012–2023 七期重复截面的证据”开展可复现、分层推进的系统探索。

目标是尽可能扩充高质量、可复用的 notes/evidence layer，而不是尽快形成故事，也不是寻找显著结果。

开始估计前，先完成三项工作：

1. 审计现有 workflow、README / HANDOFF、数据说明、代码入口、已有 notes 和 logs，确认 authoritative inputs、数据版本、变量 lineage、样本构造及已有输出是否可追溯。在扩展前先复现一个已有 baseline；如果无法复现，先记录并隔离问题，不要在不稳定的基础上继续扩展，也不要默认现有流程一定正确。
2. 明确定义“分化”可能对应的 substantive concept，并建立 estimand map。每个 estimand 都应写明 target population、outcome construct / coding、比较对象、时间维度、权重和可支持的解释。区分人口总体趋势、composition-adjusted pattern 和 exploratory association；除非 design 本身允许，不使用 causal language。
3. 建立有限且有优先级的 exploration plan，区分 core estimands、针对明确 measurement / inference / interpretation concern 的 alternative specifications，以及有实质动机的 exploratory extensions。为每个 analysis family 预先说明进入、继续和关闭条件；不得因为出现显著结果而停止，也不得因为没有显著结果而无边界扩张。

系统探索有 substantive meaning 且 defensible 的 estimand 和 specification families，包括合理的 dependent variables / codings、controls、FE、clustering / inference、functional forms、weights、sample restrictions，以及 distributional、heterogeneity、decomposition 等分析。主动补充我没有点到但值得探索的方向，但每个新增方向必须对应明确的 substantive question，或可信的 measurement、inference、interpretation concern。

不要机械生成 specification 笛卡尔积。每个 specification family 都必须说明它回答什么问题、改变了什么，以及是否改变 estimand；不同 estimand 的结果不得被直接当作同一个 effect 比较。不要按显著性筛选、排序或保留结果。

特别审计 CGSS 七期重复截面的跨期可比性，包括题项 availability、wording、coding 和 scale direction，sampling frame、survey timing、weights、strata / PSU、地区覆盖、missingness、item nonresponse、样本构成变化及异常 wave。无法可靠 harmonize 的内容应明确标记，不能通过静默 recoding 制造可比性。

为每项有信息价值的探索建立唯一 analysis ID，并记录：

- substantive question 与 estimand；
- specification 及采用理由；
- data / wave / version 和 sample construction；
- code、command、log 与 output 路径；
- estimate、uncertainty、sample size 和必要 diagnostics；
- 状态及判断理由。

null、unstable、failed 和被关闭的路线均应保留。区分“精确的近零结果”和“估计不精确”；区分 computational failure、data limitation 与 substantive route closure，并记录关闭理由。

原始 outputs 和完整 logs 可以保留在运行产物层；notes 应以 evidence card、decision log 和中央索引进行整理，而不是复制堆积全部输出。相同分析不得产生无法辨认的重复 notes，后续修改不得静默覆盖既有判断。

完成各 exploration family 后，基于 effect magnitude、uncertainty、跨合理选择的稳定性、measurement quality、substantive meaning 和 counterevidence 进行综合，不把“稳定”定义为持续显著。

只有在相关路线已经充分探索或明确关闭后，仍然稳定、有意义、可辩护且可复现的素材，才进入 manuscript brief。manuscript brief 同时保留重要的 null、counterevidence、boundary conditions 和 evidence / code pointers，再由 manuscript brief 加工到 manuscript。除非另有明确要求，不要在这一阶段直接撰写或修改 manuscript。
~~~
