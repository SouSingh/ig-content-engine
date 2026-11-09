# Pending Notion row — "Instagram Carousel & Post Pipeline"

Could not be filed automatically. The Notion connector is still disconnected for this session:
`ListConnectors` reports Notion with installState "disconnected" (connected: false,
enabledInChat: false), and a tool search for "notion" returns no Notion tools, so there is no API
path to the database. No .env file exists and no NOTION_TOKEN is configured, so the scripted path
(src/notion.ts via src/publish.ts) is unavailable too.

This is the SIXTEENTH run in a row that could not file. Reconnect at
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
  NOTION-ROW-2026-11-08.md
  NOTION-ROW-2026-11-09.md  (this file)

Because the database could not be read, dedupe was done against the 15 pending row files above
(their Topic lines) plus the 90 post slugs already in posts/ig/, not against the live Topic column.

Also note: Brandfetch returned "no API credits" for get_brand_data and get_brands this run, so no
brand hex could be pulled. Per the house rules the colour field was skipped and every logo renders
in default near-black, which matches the style. brand_search (free) confirmed stripe.com and
tiktok.com. Slack was dropped from the grid because the slug is absent from simple-icons v16 and
would have fallen back to a lettermark box.

Everything below is final, rendered, pushed, and all seven slide URLs verified HTTP 200 image/png
at 1080x1350 via curl. Paste as one new row.

---

## Topic

Claimed $84k. Stripe Said $62,946.

## Ready to Post

unchecked

## Image URL (slide 1)

https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-11-09/claimed-84k-stripe-said-62946/01.png

## Bio

I almost bought this one.

Heyron is a $49/month hosted AI agent for solo founders, founded February 2026. In July the founder posted that his agent had built an $84k/month business. Stripe's best month ever was $62,946 — back in April. July itself came in at $33,133.

Verified revenue went $62,946 in April, $33,133 in July, $18,225 in October. On Nov 8 TrustMRR read $17,490 MRR from 605 subscriptions and $312,797 all time, straight off the Stripe API. Median across 58 ranked AI businesses is $21,900, so it is sitting under the pack. The product is real — hosted agent, 1,000+ app connections, a community. The attention just didn't renew.

My admission: I have quoted a peak month as if it were my run rate. Most people building in public have.

Which month are you in?

#buildinpublic #indiehackers #solofounder #solopreneur #microsaas #aiagents #mrr #bootstrapped #saas #startuprevenue #devtools #aitools

---

## Page body — slide images (embed in this order)

https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-11-09/claimed-84k-stripe-said-62946/01.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-11-09/claimed-84k-stripe-said-62946/02.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-11-09/claimed-84k-stripe-said-62946/03.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-11-09/claimed-84k-stripe-said-62946/04.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-11-09/claimed-84k-stripe-said-62946/05.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-11-09/claimed-84k-stripe-said-62946/06.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-11-09/claimed-84k-stripe-said-62946/07.png

## Page body — plain URL list for downloading

Same seven URLs as above, in order 01 through 07.

## Sources

Claims on the slides trace to these three, each opened and read in full:

- https://theaireceipts.beehiiv.com/p/heyron-6-straight-drops
  (The AI Receipts, 4 Nov 2026) — the $84k/month claim posted in July; verified monthly revenue
  $62,946 April, $33,133 July, $18,225 October; $21,900 median MRR across 58 ranked AI businesses
  with a processor sync in the last 30 days; the $100-to-an-agent origin and the million-view TikTok.
- https://trustmrr.com/startup/heyron
  (TrustMRR, Stripe-API-verified, synced 8 Nov 2026 06:49 PM) — $17,490 MRR, 605 active
  subscriptions, $312,797 all-time, founded February 2026, $49/month, team of 1, bootstrapped.
- https://heyron.ai/blog/self-hosting-openclaw-vs-heyron
  (Heyron's own blog, 24 Oct 2026) — what $49/month includes: hosted agent, $15 AI usage budget,
  dedicated 2 vCPU / 4 GB server, 1,000+ app connections naming Gmail, Google Sheets, Notion and
  GitHub, chat on Telegram / WhatsApp / Discord / Slack, and the Solo Software Studio community
  with its 90-day plan.

Candidates researched and rejected (opened, not used for any slide claim):

- https://cursor.com/blog/improved-token-efficiency — the 46.9% MCP dynamic-context figure is real
  but the post is dated 23 Sep 2026 and the figure is older still, so it fails the 7-day window.
- https://m3.sineframe.com/blog/same-model-different-agent and the Harness Leaderboard coverage —
  both duplicate the 2026-11-08 post "Same Model. 24 Points Apart."
- "Take It From Here" project-takeover study, Multi-step SWE, the repo-maps paper, Claude Code
  2.1.317-319, the ACM coding-agent adoption study, Conductor, Postiz and BankStatementConverter —
  all live candidates, all passed over for today in favour of the strongest single story.
