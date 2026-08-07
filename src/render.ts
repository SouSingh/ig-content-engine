import satori from 'satori'
import { Resvg } from '@resvg/resvg-js'
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { W, H } from './theme.js'
import { renderSlide } from './templates.js'
import type { Slide } from './types.js'

const require = createRequire(import.meta.url)
const fontFile = (w: number) =>
  readFileSync(require.resolve(`@fontsource/inter-tight/files/inter-tight-latin-${w}-normal.woff`))

const fonts = [
  { name: 'Inter Tight', data: fontFile(400), weight: 400 as const, style: 'normal' as const },
  { name: 'Inter Tight', data: fontFile(500), weight: 500 as const, style: 'normal' as const },
  { name: 'Inter Tight', data: fontFile(700), weight: 700 as const, style: 'normal' as const },
  { name: 'Inter Tight', data: fontFile(800), weight: 800 as const, style: 'normal' as const },
]

export async function slideToPng(slide: Slide): Promise<Buffer> {
  const svg = await satori(await renderSlide(slide), { width: W, height: H, fonts })
  return Buffer.from(new Resvg(svg, { fitTo: { mode: 'width', value: W } }).render().asPng())
}
