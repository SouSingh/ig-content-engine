# ig-content-engine

Slide JSON -> 1080x1350 PNG carousel slides. White bg, Inter Tight bold, brand logos
pulled from simpleicons at render time (cached in `.cache/`).

    npm install
    npx tsx src/publish.ts post.json --local     # writes posts/ig/<date>/<slug>/NN.png

Slide types: `cover`, `feature`, `grid`, `compare`, `list`, `cta` (see `src/types.ts`).
Set `R2_*` + `NOTION_*` in `.env` to upload and file a Notion draft instead.
