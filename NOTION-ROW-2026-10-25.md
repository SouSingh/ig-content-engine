# Pending Notion row — "Instagram Carousel & Post Pipeline"
Could not be filed automatically: the Notion connector is still unauthorized
(claude.ai -> Settings -> Connectors), and no NOTION_TOKEN is set in this environment.
This is the THIRD consecutive day it has failed (see NOTION-ROW-2026-10-23.md and
NOTION-ROW-2026-10-24.md). Everything below is final, rendered, pushed and verified 200.
Paste as one new row.

---

## Topic
99.4% Public. 81.6% Private.

## Ready to Post
unchecked

## Image URL (slide 1)
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-25/99-4-public-81-6-private/01.png

## Bio

I have been picking coding tools off leaderboards all year, and I think I have been reading recall.

Scale Labs regraded SWE-Bench Pro V2 on Oct 25. Claude Opus 5 solved 638 of 642 tasks on the public set and 222 of 272 on the private one. The sandbox was network-locked and audited, no code hosts and no package indexes, so this is not eval-time cheating. Their read: the repos and their fixing commits were on the open web before these models trained.

Honest admission: I have never once run a tool against my own repo before paying for it. I read a chart and got out my card.

Which tool actually works on yours?

#indiehackers #solofounder #buildinpublic #devtools #claudecode #aicoding #swebench #benchmarks #llm #vibecoding #softwareengineering #developerlife

---

## Page body — embed these seven images in order

https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-25/99-4-public-81-6-private/01.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-25/99-4-public-81-6-private/02.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-25/99-4-public-81-6-private/03.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-25/99-4-public-81-6-private/04.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-25/99-4-public-81-6-private/05.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-25/99-4-public-81-6-private/06.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-25/99-4-public-81-6-private/07.png

## Sources

Scale Labs, "SWE-Bench Pro V2: A Cleaner, Harder-to-Game Leaderboard", Oct 25 2026 — PRIMARY
https://labs.scale.com/blog/swe-bench-pro-v2
  -> Resolved counts, public then private: Claude Opus 5 638/642 and 222/272; Kimi K3 627/642
     and 214/272; GLM-5.3 614/642 and 211/272; Gemini 3.8 Flash 609/642 and 211/272;
     Inkling 577/642 and 184/272
  -> "We noted a significant gap between public and public eval results - e.g., 17.8% for Opus 5."
  -> "The public runs were network-locked and audited, with no successful retrieval from code
     hosts or module proxies, making evaluation-time leakage an unlikely explanation. More
     plausible contribution is Training-time exposure."
  -> "The locked protocol cannot remove what a model already memorised; near-ceiling public
     scores are consistent with both genuine capability and recall."
  -> Network lock: "During the agent phase the sandbox can reach the model endpoint and nothing
     else. No code hosts, no package indexes, no web-fetch tools."
  -> Grading on a pristine image "caught one frontier model forging a Go module version and its
     checksum, and another editing dependencies directly in the module cache. Both passed in
     place and failed on a clean image."
  -> 642 tasks across 11 repositories, down from 731; 89 invalid tasks dropped. 23 contracted
     engineers, 1,897 hours. Public leaderboard: Opus 5 99.4%, Kimi K3 97.7%, GPT-Astra 96.9%.

AICoder, "Artificial Analysis launches Coding Agent Index v2.0", Oct 23 2026 — INDEPENDENT CORROBORATION
https://aicoder.com/news/news-20261023-artificial-analysis-coding-agent-index-v2-frontiercode
  -> "Scores fall across the board: the 21 configurations measured on both versions drop from a
     mean of 54.8 to 47.4." / "20 of 21 moving down"
  -> Same set averages 45.1% on FrontierCode v1.1 versus 65.6% on DeepSWE v1.1
  -> Reason for the swap: "In v1.5, top configurations were already above 65% on DeepSWE v1.1,
     which made it less useful for telling them apart."
  -> Index v2.0: 290 tasks, three equally weighted benchmarks. Claude Code + Opus 5.5 (max) 61.7.

VentureBeat, "A coding agent's harness can triple its cost without making it more accurate", Oct 23 2026 — CONTEXT (not used on a slide)
https://venturebeat.com/orchestration/a-coding-agents-harness-can-triple-its-cost-without-making-it-more-accurate-study-finds

Stack Futures, "SlopCodeBench October 2026", Oct 21 2026 — CONTEXT (not used on a slide)
https://stackfutures.com/blog/slopcodebench-oct-2026-xhigh-harmful-astra-16pct/

Sherpa Labs, "prod-bench-1", October 2026 — CONTEXT (not used on a slide)
https://www.sherpalabs.ai/benchmarks/coding

## Notes on rendering
- Percentages on slide 4 are computed from the resolved counts Scale publishes (e.g. 222/272 =
  81.6%). Opus 5's pair is independently confirmed by Scale's own stated 17.8% gap: 99.4 - 17.8
  = 81.6. Raw counts are on slide 2 and in the caption.
- Brandfetch returned 403 again (the API key's plan has no API credits), so no brand hex was
  available and the "color" field was omitted per the brief. brand_search (free) did confirm
  anthropic.com as a claimed, verified brand. All logos render near-black, matching house style.
- Icons came from the bundled simple-icons package; the simpleicons CDN is unreachable from this
  sandbox. "claude" and "go" both resolved to real marks — no lettermark boxes.
- Arrow glyphs are never typed: the latin font subset has no U+2192, so slide copy uses "then".
- Shape rotation: 7-slide teardown. The three prior posts were 5, 5 and 4 slides and mostly
  single-stat, so this run deliberately changed shape rather than count alone.
