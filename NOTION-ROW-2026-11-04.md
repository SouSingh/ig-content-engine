# Pending Notion row — "Instagram Carousel & Post Pipeline"

Could not be filed automatically. The Notion connector is disconnected for this session:
`ListConnectors` reports Notion with installState "disconnected" (connected: false,
enabledInChat: false), and a tool search for Notion returns no Notion tools at all, so there is
no API path to the database. No .env file exists in this environment and no NOTION_TOKEN is
configured, so the scripted path (src/notion.ts via src/publish.ts) is also unavailable.

This is the THIRTEENTH consecutive day it has failed. Reconnect at
claude.ai -> Settings -> Connectors -> Notion. Backlog to paste, oldest first:
  NOTION-ROW-2026-10-23.md
  NOTION-ROW-2026-10-24.md
  NOTION-ROW-2026-10-25.md
  NOTION-ROW-2026-10-26.md
  NOTION-ROW-2026-10-27.md
  NOTION-ROW-2026-10-28.md
  NOTION-ROW-2026-10-29.md
  NOTION-ROW-2026-10-30.md
  NOTION-ROW-2026-10-31.md
  NOTION-ROW-2026-11-01.md
  NOTION-ROW-2026-11-02.md
  NOTION-ROW-2026-11-03.md
  NOTION-ROW-2026-11-04.md  (this file)

Because the database could not be read, dedupe was done against the 12 pending row files above
(their Topic lines) plus the post slugs already in posts/ig/, not against the live Topic column.

Everything below is final, rendered, pushed, and every slide URL verified HTTP 200 image/png at
1080x1350 via curl -w '%{http_code} %{content_type}'. Paste as one new row.

---

## Topic

Stop Killing The Flailing Run

## Ready to Post

unchecked

## Image URL (slide 1)

https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-11-04/stop-killing-the-flailing-run/01.png

## Bio

I kill agent runs that look stuck. Turns out that is the expensive habit.

Four researchers at NC State replayed 147,002 SWE-agent and OpenHands traces. Under a shared 75k-token cap, letting a run continue solved 28.71% of attempts at 68.10k mean tokens. Restarting on a learned failure score solved 20.66% at 69.93k. Worse, and dearer. Across 224 budget-threshold configurations, continuing won 216.

My admission: I have watched a step counter climb and felt certain the run was cooked. What I was reading was task difficulty. A monitor fine-tuned on 32,406 attempts scored a within-task AUC of 0.50 — a coin flip. I was looking at which ticket I drew, not at the agent.

Worth knowing: these are cold restarts on open-weight setups. Restarting with the context the first attempt earned is untested.

Do you kill stuck runs?

#buildinpublic #indiehackers #solofounder #devtools #aicoding #codingagents #claudecode #sweagent #openhands #aiagents #llm #softwareengineering

---

## Page body

### 1. Carousel preview (embed each as an image block, in order)

https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-11-04/stop-killing-the-flailing-run/01.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-11-04/stop-killing-the-flailing-run/02.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-11-04/stop-killing-the-flailing-run/03.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-11-04/stop-killing-the-flailing-run/04.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-11-04/stop-killing-the-flailing-run/05.png

### 2. Plain list of raw URLs (for downloading)

https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-11-04/stop-killing-the-flailing-run/01.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-11-04/stop-killing-the-flailing-run/02.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-11-04/stop-killing-the-flailing-run/03.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-11-04/stop-killing-the-flailing-run/04.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-11-04/stop-killing-the-flailing-run/05.png

### 3. Sources

Primary source for every number on the slides:
- https://arxiv.org/abs/2610.35971 — "Continue or Restart? The Limits of Early Failure
  Prediction in Coding Agents", Srinath Srinivasan, Lunxiao Li, Tim Menzies, Wesley Assuncao
  (NC State University), 26 Oct 2026. Abstract plus Tables I, IV, V and VI supply: 147,002
  traces across four model-framework settings; within-task AUC 0.50 [0.48, 0.51] over 32,406
  attempts at the 20k landmark; continuation Pareto-dominating 216 of 224 budget-threshold
  configurations; and the SWE-agent/Qwen3.5 figures at the 75k cap (continue 28.71% at 68.10k
  mean tokens, median learned restart 20.66% at 69.93k).

Secondary coverage, read in full and used for the caveat slide:
- https://andreasrau.tech/writing/agentic-coding-paper-2026-10-29/ — Andreas Rau, 29 Oct 2026.
  Source of the "cold restarts only / state-preserving recovery untested", "four open-weight
  setups, mostly Python" and "token counts ignore caching discounts and latency" limits, and of
  the corpus split (OpenHands/Qwen3-Coder-480B 67,074 runs; SWE-agent/Qwen3.5-122B 15,098;
  OpenHands/Qwen3.5-122B 30,957; OpenHands/MiniMax-M2.5 33,873).
- https://nosov.ai/library/lib-2026-10-26-continue-or-restart-the-limits-of-early-failure/ —
  26 Oct 2026. Independent restatement of the key numbers; confirms "closed frontier agents were
  not tested" and "restarts are cold; state-preserving recovery is out of scope".

Brand confirmation (Brandfetch connector, brand_search):
- Qwen -> qwen.ai (verified). MiniMax -> minimax.io (verified). NVIDIA -> nvidia.com
  (claimed + verified).
  Brandfetch get_brand_data returned HTTP 403 ("the plan behind this API key includes no API
  credits"), so no primary hex could be pulled and no "color" field was set on any icon. Per the
  house rule, the colour was skipped rather than guessed; the logos render in default black,
  which matches the near-black-on-white house style.

### 4. Editorial notes

Why 5 slides: this is a tight argument, not a list — claim, receipt, mechanism, limit, CTA. A
1-slide cut was considered ("continuing beat restarting in 216 of 224 configurations" is a
strong standalone stat) but rejected, because the claim is counterintuitive enough that without
the 28.71%-vs-20.66% receipt and the AUC 0.50 mechanism it reads as an opinion. Nothing was
padded to reach 5; slide 4 earns its place by bounding the claim rather than extending it.

Shape rotation: the last twelve posts all led with a number or a percentage in the hook. Today's
hook is a claim ("Stop Killing The Flailing Run") with the number demoted to the sub, which
rotates the shape to a contrarian take. Subject also rotates away from the last two security
posts (2026-10-30, 2026-11-01) and the payments market-share post (2026-11-03).

Dedupe: no overlap with 2026-10-27 ("20 of 21 Agent Configs Scored Lower"), which is about a
benchmark version swap changing scores, not about mid-run stopping policy.

Candidates considered and dropped:
- MCP destructive-tool-approval audit (arXiv 2611.02527, 2 Nov) — strong, but would have been
  the third agent-security post in six days.
- MCPhantom, agents installing deprecated MCP servers (Glow Labs, 2 Nov) — same reason.
- "What Does a Harness Buy? Tokens, Mostly" (Shandong Univ., covered 3 Nov) — genuinely good and
  nearly chosen; held back as a future post because it is adjacent to this one on agent cost.
- TokenEconomizer (Microsoft Research / UC Berkeley, 30 Oct) — held for a future post.
- ViBench 2.0 (Replit, 28 Oct) — a leaderboard post, too close in shape to 2026-10-27.

Deliberately NOT put on a slide:
- The learned-vs-random restart gap of up to +1.98 points under the 75k cap. It sounds like a
  win for restarting and needs the between-task/within-task decomposition to explain away, which
  is more nuance than a slide can carry. It is implied by the "coin flip" slide instead.
- The side result that SWE-agent solved 47.30% against OpenHands' 33.24% on shared Qwen3.5
  tasks. True and interesting, but it is a scaffold-comparison point and would have split the
  post's argument in two.
