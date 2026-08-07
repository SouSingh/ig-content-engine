export const W = 1080
export const H = 1350

export const t = {
  bg: '#FFFFFF',
  ink: '#0A0A0A',
  muted: '#8E8E93',
  line: '#E8E8E8',
  pad: 84,
  font: 'Inter Tight',
}

export const size = {
  hero: 104,
  h1: 78,
  h2: 54,
  body: 38,
  label: 30,
}

/** Shrink headline so long copy still fits the canvas. */
export function fit(text: string, base: number, perChar = 0.42, min = 52) {
  const longest = Math.max(...text.split('\n').map((l) => l.length))
  const px = Math.min(base, (W - t.pad * 2) / (longest * perChar))
  return Math.max(min, Math.round(px))
}
