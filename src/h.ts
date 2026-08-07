type Child = any

/** Minimal hyperscript producing React-element-shaped nodes for satori (no React dep). */
export function h(type: string, style: Record<string, any> = {}, children?: Child | Child[]): any {
  return { type, props: { style, children: children as any } }
}

export const col = (style: Record<string, any>, children?: Child | Child[]) =>
  h('div', { display: 'flex', flexDirection: 'column', ...style }, children)

export const row = (style: Record<string, any>, children?: Child | Child[]) =>
  h('div', { display: 'flex', flexDirection: 'row', ...style }, children)

export const img = (src: string, w: number, hgt = w) =>
  ({ type: 'img', props: { src, width: w, height: hgt, style: { objectFit: 'contain' } } }) as any
