import 'dotenv/config'
import { createDatabase } from './notion.js'
const parent = process.argv[2]
if (!parent) { console.error('usage: npm run setup:notion -- <notion_page_id>'); process.exit(1) }
console.log('NOTION_DB_ID=' + (await createDatabase(parent)).replace(/-/g, ''))
