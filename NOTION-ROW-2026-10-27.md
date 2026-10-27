# Pending Notion row — "Instagram Carousel & Post Pipeline"

Could not be filed automatically. The Notion connector is unauthenticated in this session: it
exposes no tools at all (a tool search for Notion returns nothing), so there is no API path to
the database. No NOTION_TOKEN is set in this environment either, so the scripted path
(src/notion.ts) is also unavailable.

This is the FIFTH consecutive day it has failed. Reconnect at
claude.ai -> Settings -> Connectors -> Notion. Backlog to paste, oldest first:
  NOTION-ROW-2026-10-23.md
  NOTION-ROW-2026-10-24.md
  NOTION-ROW-2026-10-25.md
  NOTION-ROW-2026-10-26.md
  NOTION-ROW-2026-10-27.md  (this file)

Everything below is final, rendered, pushed, and every slide URL verified HTTP 200.
Paste as one new row.

---

## Topic
20 of 21 Agent Configs Scored Lower

## Ready to Post
unchecked

## Image URL (slide 1)
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-27/20-of-21-scored-lower/01.png

## Bio

Every coding agent on the leaderboard got worse last week. None of them changed.

Artificial Analysis shipped Coding Agent Index v2.0 on October 23. Of the 21 configurations measured on both versions, 20 scored lower and the mean fell from 54.8 to 47.4. Almost all of it is one swap: FrontierCode v1.1 replaced DeepSWE v1.1, and the same configs that averaged 65.6% on the old benchmark average 45.1% on the new one. Fail a single blocking check on FrontierCode and the attempt scores zero even if the code runs, because it is graded on whether a maintainer would merge it.

My admission: I have quoted index numbers in arguments without once checking which version they came from. I was comparing screenshots, not tools.

Which benchmark do you actually trust?

#claudecode #codingagents #aicoding #devtools #benchmarks #anthropic #aiagents #buildinpublic #indiehackers #solofounder #softwareengineering #llm

---

## Page body

### 1. Carousel preview (embed each as an image block, in order)

https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-27/20-of-21-scored-lower/01.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-27/20-of-21-scored-lower/02.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-27/20-of-21-scored-lower/03.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-27/20-of-21-scored-lower/04.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-27/20-of-21-scored-lower/05.png

### 2. Raw URLs for downloading (plain list)

01.png  https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-27/20-of-21-scored-lower/01.png
02.png  https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-27/20-of-21-scored-lower/02.png
03.png  https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-27/20-of-21-scored-lower/03.png
04.png  https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-27/20-of-21-scored-lower/04.png
05.png  https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-27/20-of-21-scored-lower/05.png

### 3. Sources

Artificial Analysis — Coding Agent Index methodology (index composition, FrontierCode v1.1
blocking-check grading, v2.0 version history):
https://artificialanalysis.ai/methodology/coding-agents-benchmarking

Artificial Analysis — Coding Agent Index v2.0 launch announcement (verbatim changelog, the
54.8 -> 47.4 mean, 20 of 21 down, 65.6% vs 45.1% on FrontierCode, cost frontier):
https://www.linkedin.com/posts/artificial-analysis_announcing-artificial-analysis-coding-agent-activity-7519196310160187392-sz2O

DEV Community — "20 of 21 agent configs just scored lower: what the Coding Agent Index v2.0
reset measures" (opened in full; independent restatement of every figure used):
https://dev.to/piekwerk/20-of-21-agent-configs-just-scored-lower-what-the-coding-agent-index-v20-reset-measures-70j

AI Aulis — "Artificial Analysis updates its coding agent index" (opened in full; second
independent restatement, incl. the leaderboard and cost-frontier table):
https://aiaulis.com/en/juttu/artificial-analysis-updates-its-coding-agent-index-claude-code-and-6b0017248b51/

Note on sourcing: artificialanalysis.ai does not resolve from this sandbox (DNS blocked), so
the methodology page was read through the Exa connector's fetch rather than opened directly.
Every number on the slides is corroborated by the two secondary sources above, which were
opened in full and agree exactly.

### Candidates considered and dropped

- MCP Inspector: three advisories on Oct 21 incl. PowerShell subexpression-injection RCE
  (GHSA-q978-78c7-phqw). Strong, but the security-advisory shape ran on Oct 25 and Oct 11.
  Hold for a teardown.
- Railway security incident, deployments halted Oct 21 — too thin, no primary writeup found.
- XDA / Hakky same-model three-harness test (Oct 22) — overlaps 2026-10-08
  "same-score-3x-the-bill".
- Cursor X Subscription pricing fork — already covered 2026-10-18 "cursor-plus-is-8-grok-only".
- MCP fetch reference server advisories (Oct 24) — same shape as the Inspector item.
- Neon free-tier allowances, Vercel Hobby retention — outside the 7-day window or already
  covered by 2026-10-10 "rollbacks-expire-october-23".
