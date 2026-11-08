# Pending Notion row — "Instagram Carousel & Post Pipeline"

Could not be filed automatically. The Notion connector is disconnected for this session:
`ListConnectors` reports Notion with installState "disconnected" (connected: false,
enabledInChat: false), and a tool search for "notion" returns no Notion tools at all, so there
is no API path to the database. No .env file exists in this environment and no NOTION_TOKEN is
configured, so the scripted path (src/notion.ts via src/publish.ts) is also unavailable.

This is the FIFTEENTH run in a row that could not file. (Not fifteen consecutive calendar days —
there was no run on 2026-11-05 or 2026-11-06.) Reconnect at
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
  NOTION-ROW-2026-11-04.md
  NOTION-ROW-2026-11-07.md
  NOTION-ROW-2026-11-08.md  (this file)

Because the database could not be read, dedupe was done against the 14 pending row files above
(their Topic lines) plus the 89 post slugs already in posts/ig/, not against the live Topic column.

Everything below is final, rendered, pushed, and every slide URL verified HTTP 200 image/png at
1080x1350 via curl -sI. Paste as one new row.

---

## Topic

Same Model. 24 Points Apart.

## Ready to Post

unchecked

## Image URL (slide 1)

https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-11-08/same-model-24-points-apart/01.png

## Bio

I spent two years picking models and never once questioned the wrapper around them.

Joel Niklaus ran 28,849 trials holding the model, provider and reasoning effort fixed, changing only the coding-agent harness. A bash-only agent, mini-swe-agent, came out top at 51.4%. OpenClaw, same model, 27.3%. Claude Code is one of four harnesses that only statistically tie the bash shell. And the cost column is wilder than the score column: Pi solves a task for $0.29, OpenCode for $3.35.

The part that changed my setup: the winner flips per model. mini-swe-agent on GLM-5.3-Flash, Hermes Agent on DeepSeek-V4.1-Flash, Kimi Code on Flint. In his separate SWE-bench Pro run the rank correlation between two models was -0.05, basically nothing.

My admission: I picked my harness off a launch video, not a number.

Which harness are you running?

#claudecode #codingagents #aiagents #devtools #buildinpublic #indiehackers #solofounder #opensource #llm #softwareengineering #huggingface #terminalbench

## Page body

### 1. Carousel preview (embed each as an image block, in order)

https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-11-08/same-model-24-points-apart/01.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-11-08/same-model-24-points-apart/02.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-11-08/same-model-24-points-apart/03.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-11-08/same-model-24-points-apart/04.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-11-08/same-model-24-points-apart/05.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-11-08/same-model-24-points-apart/06.png

### 2. Raw URLs for downloading (plain list)

https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-11-08/same-model-24-points-apart/01.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-11-08/same-model-24-points-apart/02.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-11-08/same-model-24-points-apart/03.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-11-08/same-model-24-points-apart/04.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-11-08/same-model-24-points-apart/05.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-11-08/same-model-24-points-apart/06.png

### 3. Sources

Primary (every on-slide claim traces to one of these two, both opened in full):

- Joel Niklaus, launch post for the Harness Leaderboard, 2026-11-05
  https://www.linkedin.com/posts/joelniklaus_i-burned-a-shitload-of-compute-so-you-dont-activity-7524139509324873728-YlfG
  Author's own words. Supports: "I ran 28,849 trials"; nine coding-agent harnesses on open
  models; "only the harness changes: the model, provider and reasoning effort stay fixed, and
  every task gets three attempts"; GLM-5.3-Flash, DeepSeek-V4.1-Flash and Flint on Terminal-Bench
  2.1 and DeepSWE for $4,746 of inference; "mini-swe-agent (Kilian Lieret), a bash-only agent,
  solves 51.4% of tasks and OpenClaw (OpenClaw Foundation) 27.3%"; "Four others are statistically
  tied with mini-swe-agent"; "Pi (Earendil), at 49.4% for $0.29 per solved task, about 45% less
  than mini-swe-agent's $0.53"; "OpenCode costs $3.35 per solved task, 11.7 times as much as Pi";
  per-model winners (mini-swe-agent on GLM-5.3-Flash, Hermes Agent on DeepSeek-V4.1-Flash,
  Kimi Code on Flint).

- JoelNiklaus/harness-optimization (Meta-Harness reference code, MIT), README section
  "How Much Is The Harness Worth? (SWE-bench Pro)"
  https://github.com/JoelNiklaus/harness-optimization
  Supports slide 5: ten off-the-shelf harnesses against two models on "the same 250 held-out
  SWE-bench Pro tasks"; "Swapping the harness moves pass@1 from 23.2% to 52.4% on GLM-5.2 and
  from 15.2% to 36.0% on Gemma 4 -- and the ranking does not transfer between them
  (Spearman -0.05)"; "Vendor-shipped harnesses fall on the small model while model-agnostic
  ones climb."

Supporting (opened; used for method/identity confirmation, not for an on-slide number):

- Harness Leaderboard Space README, huggingface.co/spaces/joelniklaus/harness-leaderboard
  Confirms the nine harnesses by name (Claude Code, Codex, Pi, OpenCode, Hermes Agent,
  mini-swe-agent, Kimi Code, Qwen Code, OpenClaw), the benchmarks, the metering proxy, the
  macro-average resolve rate with 95% CI, and the tie rule: harnesses "whose paired difference
  to the leader has a 95% bootstrap CI that covers 0" are marked tied.
- explainx.ai, "Harness Leaderboard v0.1.1", 2026-11-07
  https://explainx.ai/blog/joel-niklaus-harness-leaderboard-reliability-hermes-agent-2026
  Second source placing Claude Code specifically inside the tied-for-first group. This is why
  slide 3 states the tie qualitatively and puts no decimal on Claude Code — see note below.

Scanned while surveying the week, not used:
- https://arxiv.org/abs/2611.02207  (BOBA-Bench)
- https://arxiv.org/abs/2611.07166  (Multi-step SWE)
- https://arxiv.org/abs/2611.05620  (ViBench 2.0)
- https://arxiv.org/abs/2611.07307  (project takeover)
- https://aiweekly.co/alerts/switch-swe-benchmark-coding-agents-drop-115pp-on-task-resumption

### 4. Candidates considered and dropped

1. BOBA-Bench (arXiv 2611.02207, Nov 1): agents complete 95% of requests alone but 51% when
   chained; self-review is right 53% of the time; one external correction lifts 51% to 59%.
   Excellent material, DROPPED for direct overlap with "Two Corrections Fix 15%" (11-02), which
   already ran the "corrective feedback mostly does not repair it" argument.
2. Multi-step SWE (2611.07166, Nov 4): best model 18.5% solve rate, 38 of 69 tasks unsolved by
   any model. Same chained-degradation lane as 11-02 and as "10 Correct Builds, 4 Shipped"
   (09-29).
3. ViBench 2.0 (2611.05620, Nov 3): top models pass up to 98% of test plans but ship a fully
   working product in at most 65% of builds. Adjacent to "91% Works, 25% Is Secure" (10-20) and
   again the benchmark-reliability lane.
4. Switch-SWE (Nov 4): 11.5pp average drop when a session interleaves other work. Strong, but a
   third consecutive "agents degrade over long horizons" post.
5. Claude Code 2.1.317-2.1.319 (Nov 3-7): background MCP tasks, auto-mode and gateway controls.
   Changelog material, no single claim worth a slide.
6. Solo-founder MRR figures surfaced in search (Zigpoll ~$125K MRR, ShipFast portfolio).
   All mid-2026 or older; nothing inside the 7-day window.

### 5. Shape rotation note

Chose 6 slides. The last five posts ran 4, 5, 5, 6 and 8 slides and leaned contrarian-take and
teardown; the shape that was overdue is the ranked comparison / tool-stack, which this is. Six
is what the material actually holds: the spread, the winner, the tie, the cost, the
non-transfer, the ask. A first render had a seventh beat as a fourth bullet on slide 4 ("Same
tasks, same model. Only the harness differs.") — it carried no specifics and repeated the cover
subhead, so it was cut and the slide re-rendered. Templates: cover, feature, feature, list,
list, cta. Deliberately no grid: the recent run was already heavy on grid, and most of the nine
harnesses (mini-swe-agent, Pi, Hermes Agent, OpenClaw) have no simpleicons slug, so a logo wall
would have been half lettermark boxes.

### 6. Rendering notes

Brandfetch confirmed all three brands exist and are real: Hugging Face (huggingface.co,
verified, qualityScore 0.92), Claude (claude.com, verified, qualityScore 0.96) and GNU
(gnu.org). But get_brand_data returned 403 — "the plan behind this API key includes no API
credits" — so no primary hex could be pulled for any of them. Per the brief the "color" field
was therefore omitted on every icon and all three logos render in default near-black, which is
the house palette anyway. This is the same Brandfetch credit failure the 11-07 run hit.

All three simpleicons slugs resolve to real marks in the bundled simple-icons package:
"huggingface" (Hugging Face), "gnubash" (GNU Bash), "claude" (Claude). No lettermark fallback
boxes anywhere. Note "openai" does NOT resolve under this resolver's si+Capitalize scheme, which
is one more reason Codex got no slide of its own.

Accuracy note on slide 3: the author's own post says four harnesses are statistically tied with
mini-swe-agent but does not name them or give Claude Code a figure. The widely-quoted
"Claude Code 49.2%" comes only from secondary write-ups, and the one carrying the full per-harness
table (pasqualepillitteri.it) does not resolve from this session's network, so it was never
opened. Slide 3 therefore makes the tie claim qualitatively and puts no number on Claude Code.
All six PNGs were opened with the Read tool and inspected after the final render.

Git note: clean this time. HEAD was on main and in sync with origin/main before the commit;
pushed 314eaf1..8bd9017 on the first attempt.
