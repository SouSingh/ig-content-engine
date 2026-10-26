# Pending Notion row — "Instagram Carousel & Post Pipeline"
Could not be filed automatically. The Notion connector reports installState "disconnected"
(connected: false) — this is a hard disconnect, not an expired session, so it needs a manual
reconnect at claude.ai -> Settings -> Connectors -> Notion. No NOTION_TOKEN is set in this
environment either, so the scripted path (src/notion.ts) is also unavailable.

This is the FOURTH consecutive day it has failed. Backlog to paste, oldest first:
  NOTION-ROW-2026-10-23.md
  NOTION-ROW-2026-10-24.md
  NOTION-ROW-2026-10-25.md
  NOTION-ROW-2026-10-26.md  (this file)

Everything below is final, rendered, pushed, and every slide URL verified HTTP 200.
Paste as one new row.

---

## Topic
temperature=0 Now Returns 400

## Ready to Post
unchecked

## Image URL (slide 1)
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-26/temperature-0-now-returns-400/01.png

## Bio

I've set temperature=0 in every project I own. On the new API version that's a 400.

Claude API version 2026-10-21 is Anthropic's first new API version since 2023-06-01. temperature, top_p and top_k aren't deprecated, they're removed: 400 on every model, even if you send the default value. The catch is that your SDK picks the version for you, so a major-version bump flips you over without you choosing it.

My admission: I cargo-culted temperature=0 for years because it felt more deterministic. On Claude 4.7 and later it was already the only value allowed — I'd been sending a no-op and calling it rigour.

What's your temperature set to?

#claudeapi #anthropic #claudecode #aicoding #devtools #apidesign #buildinpublic #indiehackers #solofounder #python #typescript #softwareengineering

---

## Page body — embed these six images in order

https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-26/temperature-0-now-returns-400/01.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-26/temperature-0-now-returns-400/02.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-26/temperature-0-now-returns-400/03.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-26/temperature-0-now-returns-400/04.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-26/temperature-0-now-returns-400/05.png
https://raw.githubusercontent.com/SouSingh/ig-content-engine/main/posts/ig/2026-10-26/temperature-0-now-returns-400/06.png

## Sources

Anthropic, "Versions" (API version history) — PRIMARY
https://platform.claude.com/docs/en/api/versioning
  -> Version history lists exactly three entries: `2026-10-21`, `2023-06-01`, `2023-01-01`.
     This is what supports "first new API version since 2023-06-01" on slide 1.
  -> "The `temperature`, `top_p`, and `top_k` request parameters are removed. A request that
     sends any of them returns a 400 error on every model."
  -> Also in 2026-10-21: a `document` block placed directly in an `assistant` message returns
     400; a `text` block with a non-empty `citations` array in a `user` message returns 400.
  -> Admin API renames: RBAC groups `roles`->`role_ids`; members `group_id`->`rbac_group_id`;
     roles `name`->`display_name`; rate limits `group_type`->`group.type`; API keys
     `workspace_id`->`scope.workspace_id`. (Not used on a slide — solo builders rarely touch
     the Admin API, so including it would have padded the post.)
  -> On Amazon Bedrock, 2026-10-21 is available only for Claude 4.7 and later models.

Anthropic, "Migrating to API version 2026-10-21" — PRIMARY
https://platform.claude.com/docs/en/api/migration-2026-10-21
  -> "In `2026-10-21`, a request that sends `temperature`, `top_p`, or `top_k` returns a 400
     error, even at the parameter's default value."  (slide 2)
  -> "On models that accept other values, such as Claude Sonnet 4.6, a request that lowered
     `temperature` for more consistent output loses that effect. No other setting replaces it."
     (slide 3 — the quote is verbatim)
  -> "Without these parameters, a request samples with their defaults, including a
     `temperature` of 1.0 ... Models that already accept only the defaults, such as Claude 4.7
     and later models, sample as before."  (the caption's admission rests on this)
  -> "If you use an SDK, your requests use the API version that was current when your SDK's
     major version was released."  (slide 5, item 01 — the actual footgun)
  -> "If a request relies on a non-default value, either stop sending the parameter, or keep
     that request on `2023-06-01`."  (slide 5, item 03)
  -> SDK major versions that are the first to use 2026-10-21 (slide 4):
     Python `anthropic` 2.0.0 · TypeScript `@anthropic-ai/sdk` 1.0.0 · Go SDK 2.0.0 (module
     path now .../v2) · Ruby gem 2.0.0 · PHP `anthropic-ai/sdk` 1.0.0 · Java
     `com.anthropic:anthropic-java` 3.0.0 · C# `Anthropic` 13.0.0 · `ant` CLI 2.0.0.
     Slide 4 shows the six with real simple-icons marks; C# and the CLI are omitted because
     `csharp` is not a simple-icons slug and would have fallen back to a lettermark box.

Anthropic, Claude Code CHANGELOG (2.1.300–2.1.310) — PRIMARY, CONTEXT ONLY (not used on a slide)
https://raw.githubusercontent.com/anthropics/claude-code/main/CHANGELOG.md
  -> Read while scouting a competing candidate (a run of Linux/macOS sandbox-containment fixes
     across 2.1.304–2.1.310). Rejected on dedupe — see below.

## Notes on selection and rendering

- Shape rotation: 6 slides, built as a contrarian claim -> evidence -> checklist. The last four
  posts were 4, 5, 5 and then a 7-slide teardown that was itself preceded by mostly single-stat
  posts, so both "another teardown" and "another single stat" were off the table. 6 slides is a
  count not used recently and no slide is padding: each carries a distinct sourced claim.
- Why not 1 slide: "temperature=0 now 400s" is a strong enough single line, but the two facts
  that make it actionable — that nothing replaces a lowered temperature, and that an SDK major
  bump flips the version for you — are the reason a reader would act. A single stat would have
  warned without informing.
- Candidates dropped on dedupe against the 47 existing posts:
  * Harvard/Jellyfish study (30% more code, no change in shipped software) — already shipped as
    `agents-made-review-49-slower` (same 718 firms / 300M events dataset).
  * MCP registry dead-server rate — already shipped as `400-mcp-servers-195-answered`.
  * Cursor's $8 Grok-only Plus tier — already shipped as `cursor-plus-is-8-grok-only`.
  * Claude Code sandbox-containment fixes (2.1.304–2.1.310) — genuinely fresh and primary, but
    the "a safety feature you switched on didn't hold" lane has already been worked twice, by
    `deny-rules-silently-never-ran` and `mods-approve-before-youre-asked`. Held back rather
    than run a third variation. Worth revisiting later with a different angle.
  * GitHub Copilot's $10/$100 plan reshuffle — the pricing lane is saturated (at least five
    prior posts).
- Unverified claim deliberately NOT used: an aggregator reported that the new SDKs send the key
  as `Authorization: Bearer`. Anthropic's own migration guide still shows `x-api-key` in its
  cURL example, so the claim was dropped rather than repeated. For the same reason slide 1 does
  not assert a release date — the docs establish the version name 2026-10-21 and its position in
  the version history, not a published ship date.
- Brandfetch: brand_search (free) confirms anthropic.com as a claimed, verified brand
  (qualityScore 1.00). get_brand_data returned 403 again — "the plan behind this API key includes
  no API credits" — so no primary hex was available and the "color" field is omitted throughout,
  per the brief. Logos therefore render near-black, which matches house style anyway.
- Icons: resolved from the bundled simple-icons package (the CDN is unreachable from this
  sandbox). All seven slugs used — claude, python, typescript, go, ruby, php, openjdk — were
  checked against the package before rendering and every one resolved to a real mark. No
  lettermark boxes on any slide.
- All six PNGs were opened and inspected at 1080x1350. No overflow, no clipped labels.
- The CTA's straight quotes around "MIGRATE" come from templates.ts, which hardcodes them; left
  as-is for consistency with every prior post rather than editing the shared template.
