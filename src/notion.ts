import { Client } from '@notionhq/client'
import type { Post } from './types.js'

const notion = new Client({ auth: process.env.NOTION_TOKEN })
const DB = process.env.NOTION_DB_ID!

/** One-time: creates the content-queue DB under an existing page. */
export async function createDatabase(parentPageId: string) {
  const db = await notion.databases.create({
    parent: { type: 'page_id', page_id: parentPageId },
    title: [{ type: 'text', text: { content: 'IG Content Queue' } }],
    properties: {
      Name: { title: {} },
      Status: { select: { options: [{ name: 'Draft' }, { name: 'Approved' }, { name: 'Posted' }, { name: 'Killed' }] } },
      Date: { date: {} },
      Slides: { number: {} },
      Caption: { rich_text: {} },
      Hashtags: { multi_select: {} },
      Images: { files: {} },
    },
  })
  return db.id
}

export async function createPost(post: Post, urls: string[], date: string) {
  return notion.pages.create({
    parent: { database_id: DB },
    properties: {
      Name: { title: [{ text: { content: post.title } }] },
      Status: { select: { name: 'Draft' } },
      Date: { date: { start: date } },
      Slides: { number: urls.length },
      Caption: { rich_text: [{ text: { content: post.caption.slice(0, 2000) } }] },
      Hashtags: { multi_select: post.hashtags.slice(0, 10).map((name) => ({ name: name.replace(/^#/, '') })) },
      Images: { files: urls.map((u, i) => ({ name: `slide-${i + 1}.png`, external: { url: u } })) },
    },
    children: [
      { object: 'block', type: 'paragraph', paragraph: { rich_text: [{ text: { content: post.caption } }] } },
      { object: 'block', type: 'paragraph', paragraph: { rich_text: [{ text: { content: post.hashtags.join(' ') } }] } },
      ...urls.map((u) => ({
        object: 'block' as const, type: 'image' as const,
        image: { type: 'external' as const, external: { url: u } },
      })),
    ],
  })
}
