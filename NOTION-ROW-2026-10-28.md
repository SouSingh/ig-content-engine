# Pending Notion row — "Instagram Carousel & Post Pipeline"

Could not be filed automatically. The Notion connector is unauthenticated in this session: it
exposes no tools at all (a tool search for Notion returns nothing), so there is no API path to
the database. No NOTION_TOKEN is set in this environment either, so the scripted path
(src/notion.ts) is also unavailable.

This is the SIXTH consecutive day it has failed. Reconnect at
claude.ai -> Settings -> Connectors -> Notion. Backlog to paste, oldest first:
  NOTION-ROW-2026-10-23.md
  NOTION-ROW-2026-10-24.md
  NOTION-ROW-2026-10-25.md
  NOTION-ROW-2026-10-26.md
  NOTION-ROW-2026-10-27.md
  NOTION-ROW-2026-10-28.md  (this file)

Everything below is final, rendered, pushed, and every slide URL verified HTTP 200.
Paste as one new row.

---

## Topic
40% of Agent PRs Never Merge

## Ready to Post
unchecked

## Image URL (slide 1)
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-28/40-of-agent-prs-never-merge/01.png

## Bio

Agent-written pull requests get abandoned twice as often as the ones you write yourself.

Jellyfish's October AI Engineering Trends report covers 1,300+ companies and 100M+ pull requests. Human-authored PRs fail to merge about 20% of the time. Agent-authored ones, 40%. At the median company AI is the only reviewer on 0.5% of merges, and roughly 2x the pull requests across 2026 bought only 40-50% more shipped features.

My admission: I have been measuring myself by PRs opened, which is the one number an agent inflates for free. The thing in the report that actually tracked with merged work was boring. Six or more edits to your agent context files, 2.3 more merged PRs a week.

What's in your CLAUDE.md?

#claudecode #codingagents #aiagents #aicoding #devtools #buildinpublic #indiehackers #solofounder #softwareengineering #pullrequests #devops #llm

---

## Page body

### 1. Carousel preview (embed each as an image block, in order)

https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-28/40-of-agent-prs-never-merge/01.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-28/40-of-agent-prs-never-merge/02.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-28/40-of-agent-prs-never-merge/03.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-28/40-of-agent-prs-never-merge/04.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-28/40-of-agent-prs-never-merge/05.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-28/40-of-agent-prs-never-merge/06.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-28/40-of-agent-prs-never-merge/07.png

### 2. Raw URLs for downloading (plain list)

01.png  https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-28/40-of-agent-prs-never-merge/01.png
02.png  https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-28/40-of-agent-prs-never-merge/02.png
03.png  https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-28/40-of-agent-prs-never-merge/03.png
04.png  https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-28/40-of-agent-prs-never-merge/04.png
05.png  https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-28/40-of-agent-prs-never-merge/05.png
06.png  https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-28/40-of-agent-prs-never-merge/06.png
07.png  https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-28/40-of-agent-prs-never-merge/07.png

### 3. Sources

Jellyfish — AI Engineering Trends, October 2026 (primary; opened in full). Source for: median
company auto-merges 0.5% of PRs with AI as the only reviewer and lead adopters 9%; median
company ended Q3 at 98% of Q1 headcount while spending 3.8x more per engineer; cost per merged
PR fell about a third from $1,202 to $820; 28% of merged PRs have agent involvement at the
median company and 58% at leading companies; 1,300+ companies:
https://jellyfish.co/ai-engineering-trends/

Nicholas Arcolano (Head of AI & Research, Jellyfish) — "There Aren't Enough Chaperones for All
Your Coding Agents", Oct 21 2026 (opened in full). Source for the headline claim: human-authored
PRs fail to merge about 20% of the time, agent-authored ones 40% ("the abandonment rate is
double"); and roughly 2x the pull requests across 2026 against only a 40-50% rise in features
shipped:
https://tessl.io/blog/there-arent-enough-chaperones-for-all-your-coding-agents

R&D World — "Jellyfish: Claude Code bills hit $252 a month per developer", Oct 27 2026 (opened
in full). Source for: median Claude Code spend of $63 per active developer per week in late
September ($252/month on the report's four-week conversion); context-file finding — six or more
edits associated with 2.3 more merged PRs a week, each doubling of context investment with 29%
more merged PRs, controlling for AI usage; 27.7% of PRs touched by agents at the median company,
up from ~2% in January:
https://www.rdworldonline.com/jellyfish-claude-code-bills-hit-252-a-month-per-developer-as-software-factories-automate-code-production-among-early-adopters/

DevOps.com — "Report: Claude Code Exceeds GitHub Copilot for Merging Pull Requests", Oct 27 2026
(opened in full; independent corroboration of the 28% agent involvement, 0.5% AI-only merge, and
$1,202 -> $820 cost-per-PR figures):
https://devops.com/report-claude-code-exceeds-github-copilot-for-merging-pull-requests

Note on access: none of the hosts above resolve from this sandbox (DNS is restricted, the same
way claudelog.com is), so every page was opened in full through the Exa connector's fetch rather
than curled directly. curl -sI against them returns 000 here for that reason, not because the
URLs are wrong. The four sources above were each read end to end and agree on every figure used.

Note on figures: the Jellyfish landing page (updated Oct 23) states 294K engineers / 110M PRs
while the Oct 27 launch coverage states 276K developers / 100M PRs. The slides therefore cite
only "1,300+ companies", which every source agrees on, and the caption says "100M+ pull
requests", which is true under both. The $1,666/month 90th-percentile Claude Code figure from
R&D World was deliberately left off the slides because the Jellyfish page shows a differently
scoped "$1,121 per month for top users"; only the unambiguous median was used.

### Candidates considered and dropped

- Linux Foundation / Red Hat maintainer survey (25% of incoming PRs are "AI slop", 52% less
  code-authoring time). Published Oct 20, just outside the 7-day window, and the review-burden
  angle overlaps 2026-10-19 "agents-made-review-49-slower".
- Harvard/Jellyfish 718-firm study (InfoQ, Oct 22) — already covered on 2026-10-19.
- Artificial Analysis Coding Agent Index v2.0 — covered yesterday, 2026-10-27.
- DX/Microsoft 331-developer "Faster / Further / Afresh" study (Oct 21) — real, but the
  percentages are survey self-reports with no tool or number specific enough for a slide.
- BairesDev Q3 Dev Barometer (42% let AI write half their code) — vendor survey, fielded in
  August, and already covered in press on Oct 13.
- JetBrains Developer Ecosystem adoption shares (Claude Code 39%) — survey ran May-July, stale.
- Claude Code changelog Oct 21-27 (safety_event added then removed within a week) — a genuinely
  nice micro-story but too thin to carry a post; hold for a changelog teardown.
