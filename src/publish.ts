import 'dotenv/config'
import { readFileSync } from 'node:fs'
import { slideToPng } from './render.js'
import { put, r2Configured } from './store.js'
import type { Post } from './types.js'

const file = process.argv[2]
const localOnly = process.argv.includes('--local')
if (!file) {
  console.error('usage: npm run publish -- <post.json> [--local]')
  process.exit(1)
}

const post: Post = JSON.parse(readFileSync(file, 'utf8'))
const date = new Date().toISOString().slice(0, 10)

const urls: string[] = []
for (const [i, slide] of post.slides.entries()) {
  const png = await slideToPng(slide)
  urls.push(await put(`ig/${date}/${post.slug}/${String(i + 1).padStart(2, '0')}.png`, png))
  console.log(`  slide ${i + 1}/${post.slides.length}  ${slide.type}`)
}

if (localOnly || !r2Configured || !process.env.NOTION_TOKEN) {
  console.log(`\n${urls.length} slides rendered:\n${urls.join('\n')}`)
  if (!localOnly) console.log('\n(skipped Notion — set R2_* + NOTION_TOKEN/NOTION_DB_ID in .env)')
} else {
  const { createPost } = await import('./notion.js')
  const page: any = await createPost(post, urls, date)
  console.log(`\nNotion draft: ${page.url}`)
}
