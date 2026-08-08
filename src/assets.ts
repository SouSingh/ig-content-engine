import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import * as simpleIcons from 'simple-icons'
import type { Icon } from './types.js'

const CACHE = join(process.cwd(), '.cache', 'icons')
mkdirSync(CACHE, { recursive: true })

/**
 * The same marks the CDN serves, straight from the npm package, for sandboxes
 * that can't reach cdn.simpleicons.org. Defaults to black to match the CDN,
 * which serves black — not the brand hex — when no colour is requested.
 */
function bundledSvg(icon: Icon): string | null {
  const entry = (simpleIcons as Record<string, any>)[
    `si${icon.slug.charAt(0).toUpperCase()}${icon.slug.slice(1)}`
  ]
  return entry ? entry.svg.replace('<svg ', `<svg fill="${icon.color ?? '#000000'}" `) : null
}

/**
 * Brand logos come from simpleicons' CDN (3k+ brands, no API key, transparent SVG).
 * Cached on disk so a rerun is offline and deterministic.
 */
export async function iconDataUri(icon: Icon): Promise<string | null> {
  const color = (icon.color ?? 'default').replace('#', '')
  const file = join(CACHE, `${icon.slug}-${color}.svg`)
  if (!existsSync(file)) {
    const url = `https://cdn.simpleicons.org/${icon.slug}${icon.color ? `/${color}` : ''}`
    let svg: string | null = null
    try {
      const res = await fetch(url)
      if (res.ok) {
        const body = await res.text()
        if (body.startsWith('<svg')) svg = body
      }
    } catch {
      // unreachable CDN (offline, or blocked by a network egress policy)
    }
    svg ??= bundledSvg(icon)
    if (!svg) return null
    writeFileSync(file, svg)
  }
  return `data:image/svg+xml;base64,${readFileSync(file).toString('base64')}`
}

export async function resolveIcons(icons: Icon[]) {
  return Promise.all(icons.map(async (i) => ({ ...i, uri: await iconDataUri(i) })))
}

export type ResolvedIcon = Icon & { uri: string | null }
