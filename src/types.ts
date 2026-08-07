export type Icon = { slug: string; label?: string; color?: string }

export type Slide =
  | { type: 'cover'; headline: string; sub?: string; icons?: Icon[]; arrow?: boolean }
  | { type: 'feature'; icon: Icon; title: string; sub?: string }
  | { type: 'grid'; title: string; icons: Icon[] }
  | { type: 'compare'; leftHead: string; rightHead: string; rows: { left: Icon; right: Icon; note?: string }[] }
  | { type: 'list'; title: string; items: string[] }
  | { type: 'cta'; headline: string; keyword: string; sub?: string }

export type Post = {
  slug: string          // kebab-case, used for filenames
  title: string         // Notion page title
  caption: string       // IG caption
  hashtags: string[]
  slides: Slide[]
}
