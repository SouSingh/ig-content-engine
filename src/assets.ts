import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import type { Icon } from './types.js'

const CACHE = join(process.cwd(), '.cache', 'icons')
mkdirSync(CACHE, { recursive: true })

/**
 * Brand logos come from simpleicons' CDN (3k+ brands, no API key, transparent SVG).
 * Cached on disk so a rerun is offline and deterministic.
 */
export async function iconDataUri(icon: Icon): Promise<string | null> {
  const color = (icon.color ?? 'default').replace('#', '')
  const file = join(CACHE, `${icon.slug}-${color}.svg`)
  if (!existsSync(file)) {
    const url = `https://cdn.simpleicons.org/${icon.slug}${icon.color ? `/${color}` : ''}`
    const res = await fetch(url)
    if (!res.ok) return null
    const svg = await res.text()
    if (!svg.startsWith('<svg')) return null
    writeFileSync(file, svg)
  }
  return `data:image/svg+xml;base64,${readFileSync(file).toString('base64')}`
}

export async function resolveIcons(icons: Icon[]) {
  return Promise.all(icons.map(async (i) => ({ ...i, uri: await iconDataUri(i) })))
}

export type ResolvedIcon = Icon & { uri: string | null }
