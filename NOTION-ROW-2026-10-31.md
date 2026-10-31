# Pending Notion row — "Instagram Carousel & Post Pipeline"

Could not be filed automatically. The Notion connector is unauthenticated in this session:
`ListConnectors` reports Notion with installState "disconnected", and a tool search for Notion
returns no tools at all, so there is no API path to the database. No NOTION_TOKEN is configured
either, so the scripted path (src/notion.ts, reached via src/publish.ts) is also unavailable.

This is the NINTH consecutive day it has failed. Reconnect at
claude.ai -> Settings -> Connectors -> Notion. Backlog to paste, oldest first:
  NOTION-ROW-2026-10-23.md
  NOTION-ROW-2026-10-24.md
  NOTION-ROW-2026-10-25.md
  NOTION-ROW-2026-10-26.md
  NOTION-ROW-2026-10-27.md
  NOTION-ROW-2026-10-28.md
  NOTION-ROW-2026-10-29.md
  NOTION-ROW-2026-10-30.md
  NOTION-ROW-2026-10-31.md  (this file)

Because the database could not be read, dedupe was done against the 100 post slugs already in
posts/ig/ plus the eight pending row files above, not against the live Topic column.

Everything below is final, rendered, pushed, and every slide URL verified HTTP 200 (real status
checked with curl -w '%{http_code}', not the proxy's CONNECT line; all six return image/png).
Paste as one new row.

---

## Topic
40% Upfront. 64% Drip-Fed.

## Ready to Post
unchecked

## Image URL (slide 1)
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-31/40-percent-upfront-64-in-stages/01.png

## Bio

Writing a longer spec made the agent worse, not better.

Tencent and CUHK ran 61 tasks from 34 repos through 12 frontier models, every one of them on Claude Code. Whole spec upfront: 40.3% finished. Same requirements fed in stages, with the user reporting bugs: 64.1%. Identical tasks, identical acceptance tests.

My admission: I've been writing three-page PRDs before letting Claude Code touch anything, convinced I was saving myself turns. The turns were the point.

Spec first or stages?

#buildinpublic #indiehackers #solofounder #devtools #aicoding #codingagents #claudecode #promptengineering #contextengineering #softwareengineering #llm #agents

---

## Page body

### 1. Carousel preview (embed each as an image block, in order)

https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-31/40-percent-upfront-64-in-stages/01.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-31/40-percent-upfront-64-in-stages/02.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-31/40-percent-upfront-64-in-stages/03.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-31/40-percent-upfront-64-in-stages/04.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-31/40-percent-upfront-64-in-stages/05.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-31/40-percent-upfront-64-in-stages/06.png

### 2. Raw URLs for downloading (plain list)

https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-31/40-percent-upfront-64-in-stages/01.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-31/40-percent-upfront-64-in-stages/02.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-31/40-percent-upfront-64-in-stages/03.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-31/40-percent-upfront-64-in-stages/04.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-31/40-percent-upfront-64-in-stages/05.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-31/40-percent-upfront-64-in-stages/06.png

### 3. Sources

Every factual claim on every slide traces to a single primary source, opened and read in full
(abstract plus body through section 4.4) — not from search snippets:

- Jia Feng, Alyssa Wu, Cuiyun Gao, Yunlong Wang, Songyuanyi Lu, Zhichao Hu,
  "FeatureLoop: Benchmarking Coding Agents under Evolving Requirements",
  arXiv 2610.35488 (Oct 26, 2026). Hunyuan Team, Tencent + The Chinese University of Hong Kong.
  PRIMARY AND ONLY SOURCE for all six slides.
  https://arxiv.org/abs/2610.35488  /  https://arxiv.org/pdf/2610.35488
    - Slide 1 + 3: "Across models, final success rises from 40.3% with an upfront specification
      (Full), to 51.6% with progressive requests (Evo), and to 64.1% with progressive requests
      and correction (Evo+Comp). The target and final checks are the same" (section 4.1, and
      the Pooled row of Table 1). Section heading: "Providing the entire specification at the
      outset does not produce the highest completion rate."
    - Slide 2: "We evaluate 12 frontier models on all 61 tasks under the three development
      scenarios, yielding 2,196 runs. All models use Claude Code as the shared coding harness."
      (section 3). "FeatureLoop contains 61 tasks from 34 repositories" (section 1).
    - Slide 3 row wording, from section 2.2: Full = "The user specifies the entire target at the
      outset and asks the agent to deliver it in one coding session." Evo = "introduces further
      requirements as development proceeds... leaves debugging to the agent." Evo+Comp = "The
      user also reports problems encountered in the current implementation."
    - Slide 4: "Only 15.4% become fully correct within the two permitted revisions. Moreover,
      fixing an individual requirement is not always enough: 20.9% of successful individual
      repairs still leave another stated requirement unmet." (section 4.2)
    - Slide 5: "In 75.3% of these failures, the agent either omits a relevant user-path check or
      validates a helper, stub, or proxy instead." (section 4.4; "these failures" = every run
      that ends unsuccessfully)

Caveats recorded but deliberately NOT put on a slide:
- This is a preprint with 0 citations, not peer-reviewed. The slides do not call it peer-reviewed.
- Conflict of interest worth knowing: the benchmark's authors include Tencent's Hunyuan team, and
  two Hunyuan models are in the evaluation. Against cherry-picking: their own Hy3 places last of
  12 (21.3 / 32.8 / 36.1) and needs the most correction (4.03 messages per task). The headline
  finding is pooled across all 12 models, so it does not rest on either Hunyuan entry.
- The 64.1% is NOT free. It costs the user about 2.27 new-requirement messages and 2.35 corrective
  messages per task (Table 1, Pooled). Slide 3 says "plus reported failures" so the reader can see
  the trade; the post never claims staged delivery is cheaper in user effort, only that it finishes
  more tasks.
- Also true but left off: 11.4% of previously-passing requirements fail at a later check, and
  agents implement newly requested behavior on the first response in 77.3% of cases. Both are real
  and were cut to keep the post to one argument rather than padding it into a stat stack.

### 4. Candidates considered and dropped

Ten candidates collected across the three beats, Oct 24-31.

- Snowflake SnowPR, benchmarking coding agents on a 43M-line monorepo (Oct 27). All four harnesses
  within 84.1-85.1%, differing mainly on cost (REM $6.34, Claude Code $6.51, Cursor $6.93, code
  mode $8.19); cross-language Java+C++ tasks pass 55% vs 80% Java alone.
  DROPPED — the cost angle duplicates 10-08 ("same-score-3x-the-bill") almost exactly. Also
  www.snowflake.com does not resolve under this session's network policy, so the post could only
  have rested on an extracted copy, not a page I opened.
  https://www.snowflake.com/en/blog/engineering/Benchmarking-coding-agents/
- Agents followed existing repository code over new instructions in 359 of 360 conflicting trials
  (arXiv 2610.38244), and a companion finding that Claude Code flagged a stale CLAUDE.md then
  followed it anyway in 79 of 80 runs (arXiv 2610.30571).
  DROPPED — genuinely novel and a strong future post, but the two findings point in opposite
  directions (code beats instructions / instructions beat code) under setups I could not reconcile
  without opening both papers. Surfaced only via an aggregator. Worth doing properly another day.
  https://mindpattern.ai/s/2026-10-30-coding-agents-followed-existing-repository-code-over-new-instructions-in-359-of-360-c
- 147,002 coding-agent trajectories: at 20,000 tokens, predicting failure is a coin flip
  (AUC 0.50), and 216 of 224 configurations solved more with fewer tokens by running to the end
  (arXiv 2610.35971). DROPPED — strong contrarian candidate and the closest runner-up, but
  secondary coverage only; the abstract reportedly omits which models and problem sets were used.
  https://secondsource.io/en/research/2026-10-29-3/
- Microsoft Research / UC Berkeley TokenEconomizer: cost down 18.4-30.9% across 5 agent-model
  settings on 277 SWE-Bench tasks (arXiv 2610.22732). DROPPED — cost-reduction posts ran 10-08,
  09-26 and 09-24. https://www.marktechpost.com/2026/10/30/microsoft-tokeneconomizer-coding-agent-cost-control/
- Replit ViBench 2.0 (Oct 28): GPT-6.1 Sol 65% of builds fully passing, GPT-6 Astra 60%,
  Opus 5.5 49%. DROPPED — benchmark-leaderboard shape ran 10-27, 10-08 and 10-07. Four in a month
  is too many. https://ainewsway.com/news/vibench-2-0-top-agent-finishes-65-of-apps
- Claude Code changelog 2.1.311 / 2.1.312 / 2.1.314 / 2.1.316 (Oct 26-31), including Opus 4.8 fast
  mode deprecated Oct 30 and removed Nov 30 (requests then error rather than falling back), and
  2.1.314 shipping 81 bug fixes. DROPPED — the deadline shape ran on 10-10
  ("rollbacks-expire-october-23") and the release-volume shape on 10-22. Kept on the shortlist:
  the Nov 30 fast-mode removal is a real dated deadline and deserves its own post closer to the
  date. https://code.claude.com/docs/en/changelog
- Self-improving coding agents vs textbook baselines (Oct 28): a single textbook change recovers
  ~90% of the best loop agent's gain at under half the cost. DROPPED — overlaps the "agents are
  oversold" register of 10-19 and 10-29, and it is a single-author preprint on a non-arXiv host.
  https://hexagonmath.org/2610.00598v1
- SciPy Proceedings, "Vibes, meet rigor" (Oct 29): Opus 4.8 agentic with tools scored 98.7% on a
  domain exam; agents invoked skills only 13.1% of the time unprompted, rising to 45.2% when
  nudged. DROPPED — the skills-underuse number is interesting, but the paper's own six-month
  staleness note ("our initial findings are no longer valid") makes it a weak hook.
  https://proceedings.scipy.org/articles/wwjp7762
- PricingSaaS week 44: 314 pricing changes, the busiest of the last eight weeks; Vercel cut
  Enterprise firewall rules 1,000 -> 250; Baseten cut Reflection Beam tokens $1.30 -> $0.40.
  DROPPED — platform-pricing posts ran 10-06, 09-20 and 09-19. https://pricingsaas.com/
- MailCheap: Marc Lou's newsletter tool at $1,320/mo from 40 subscriptions 10 days after launch,
  read from Stripe by TrustMRR on Oct 26 (up from $653 on Oct 21). DROPPED — Stripe-verified and
  tempting, but solo-revenue posts ran 10-01 and 10-05, and the honest caveat (a 417k-follower
  head start, nobody has renewed yet) is the real story, which makes it a weaker carousel than it
  looks. https://proofofincome.beehiiv.com/p/a-2-week-old-newsletter-tool-at-1-320-a-month

### 5. Shape rotation note

Chosen shape: contrarian take, 6 slides.

The last seven posts were 5, 7, 6, 5, 7, 4 and 7 slides, and every one of them was a stat stack or
a vendor teardown built from a single report — a column of figures about something that broke.
Today is the first post in that run that argues against a practice the audience already follows,
rather than reporting an incident. The spine is a claim ("your spec is costing you 24 points"),
not a list of findings, and the slides are ordered as an argument: claim, isolate the variable,
show the ladder, then two slides on why the upfront route loses.

Why not 1 slide: "40% upfront, 64% drip-fed" is a strong enough single stat to stand alone, but on
its own it reads as a prompting trick. The reason it matters is the mechanism — reported bugs
mostly do not get fixed (15.4%), and three quarters of failures never exercised the user's path.
Without those two slides the reader has a number and no reason to change anything on Monday.

Why not 9: there was no seventh fact worth a slide. The retention figure (11.4%) and the
first-response figure (77.3%) are real, and including them would have turned an argument back into
the stat stack this post exists to rotate away from.

### 6. Rendering notes

- simpleicons' CDN (cdn.simpleicons.org) is still unreachable under this session's network policy
  (HTTP 000), so icons resolve from the bundled simple-icons 16.28.0 package, as on 10-30.
- Only one logo is used: `claude` on slide 2, for the harness every one of the 2,196 runs went
  through. Confirmed by opening the PNG that it renders as the real Claude starburst mark, not a
  lettermark fallback box. Deliberately NOT logo-ed: the 12 evaluated models. `openai` is absent
  from this simple-icons version, and `grok`, `zhipu`, `moonshot` and `tencent` have no slug at
  all, so a model grid would have rendered mostly lettermark boxes, which the brief rules out.
- The Claude logo sits on the methodology slide, not on a failure slide. Claude Code was only the
  shared harness; the models under test were GPT-6, GPT-5.6, Kimi, DeepSeek, GLM, Qwen, Grok and
  Hunyuan. Putting the mark next to a failure number would have implied a Claude defect the paper
  does not report.
- Brandfetch: brand_search confirmed Claude (claude.com, verified, quality 0.96), but
  get_brand_data returned 403 — the plan behind the API key still has no API credits. No primary
  hex was retrievable, so the icon "color" field was omitted per the brief, and the mark renders
  in the default near-black, which matches the house palette.
- Slide 3 was rendered three times. First pass: three short rows left a ~400px void under the
  title. Second pass: longer rows wrapped and orphaned "40.3%" and "51.6%" onto lines of their own.
  Third pass: rows trimmed to fit one line each, so the three percentages form a clean right edge.
- Slide 1 was re-rendered once after review. The first sub read "the only thing that changed was
  when the user spoke", which undersold the difference — the third scenario adds bug reports, not
  just different timing. Changed to "Only the delivery changed."
- All six PNGs opened and inspected at 1080x1350. No text overflow on any slide.
- The CTA slide's straight quotes around "STAGES" come from the template itself
  (src/templates.ts writes `comment "\${s.keyword}"`), not from post.json. Consistent with every
  prior post; left alone.

### 7. Push note

Clean fast-forward this time. The session started on `main` in sync with origin (07e2498), so the
detached-HEAD problem noted on 10-30 did not recur. Two commits: the post, then this row file.
