import { h, col, row, img } from './h.js'
import { t, size, fit, W, H } from './theme.js'
import { resolveIcons, type ResolvedIcon } from './assets.js'
import type { Slide } from './types.js'

const page = (children: any[], style: Record<string, any> = {}) =>
  col(
    {
      width: W,
      height: H,
      backgroundColor: t.bg,
      color: t.ink,
      padding: t.pad,
      fontFamily: t.font,
      justifyContent: 'space-between',
      ...style,
    },
    children,
  )

const headline = (text: string, px: number) =>
  h('div', {
    display: 'flex',
    fontSize: px,
    fontWeight: 800,
    letterSpacing: -px * 0.035,
    lineHeight: 1.02,
    whiteSpace: 'pre-wrap',
  }, text)

const sub = (text: string, px = size.body) =>
  h('div', { display: 'flex', fontSize: px, fontWeight: 400, color: t.muted, lineHeight: 1.25, marginTop: 24, whiteSpace: 'pre-wrap' }, text)

/** The latin font subset has no U+2192, so arrows are drawn, not typed. */
const arrowUri = (color = t.ink) =>
  'data:image/svg+xml;base64,' +
  Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 32"><path d="M2 16h56M44 4l14 12-14 12" fill="none" stroke="${color}" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  ).toString('base64')

const arrow = (w = 84) =>
  row({ alignSelf: 'center' }, [img(arrowUri(), w, w / 2)])

/** Logo, or a lettermark box when the brand isn't in the icon set. */
const logo = (i: ResolvedIcon, px: number) =>
  i.uri
    ? img(i.uri, px)
    : col(
        {
          width: px, height: px, borderRadius: px * 0.22, backgroundColor: t.ink, color: '#fff',
          alignItems: 'center', justifyContent: 'center', fontSize: px * 0.5, fontWeight: 700,
        },
        (i.label ?? i.slug).slice(0, 1).toUpperCase(),
      )

const capsule = (i: ResolvedIcon, px: number, labelPx = size.label) =>
  col({ alignItems: 'center', width: px * 1.9 }, [
    logo(i, px),
    i.label
      ? h('div', { display: 'flex', marginTop: 18, fontSize: labelPx, fontWeight: 700, textAlign: 'center' }, i.label)
      : h('div', { display: 'flex' }, ''),
  ])

export async function renderSlide(s: Slide): Promise<any> {
  switch (s.type) {
    case 'cover': {
      const icons = s.icons?.length ? await resolveIcons(s.icons) : []
      return page([
        col({}, [headline(s.headline, fit(s.headline, size.hero)), s.sub ? sub(s.sub) : h('div', { display: 'flex' }, '')]),
        icons.length
          ? row({ flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', rowGap: 56 },
              icons.map((i) => capsule(i, icons.length > 6 ? 130 : 170)))
          : h('div', { display: 'flex' }, ''),
        s.arrow === false ? h('div', { display: 'flex' }, '') : arrow(),
      ])
    }

    case 'feature': {
      const [i] = await resolveIcons([s.icon])
      return page([
        h('div', { display: 'flex' }, ''),
        col({ alignItems: 'center' }, [
          logo(i, 220),
          h('div', { display: 'flex', marginTop: 56, fontSize: fit(s.title, size.h1), fontWeight: 800, letterSpacing: -2.5, textAlign: 'center' }, s.title),
          s.sub
            ? h('div', { display: 'flex', marginTop: 24, fontSize: size.body, color: t.muted, textAlign: 'center', lineHeight: 1.28 }, s.sub)
            : h('div', { display: 'flex' }, ''),
        ]),
        arrow(),
      ])
    }

    case 'grid': {
      const icons = await resolveIcons(s.icons)
      const cols = icons.length > 9 ? 4 : 3
      const px = cols === 4 ? 128 : 168
      return page([
        headline(s.title, fit(s.title, size.h1)),
        row({ flexWrap: 'wrap', justifyContent: 'space-between', rowGap: 52, width: '100%' },
          icons.map((i) => col({ width: (W - t.pad * 2) / cols, alignItems: 'center' }, [capsule(i, px)]))),
        h('div', { display: 'flex' }, ''),
      ])
    }

    case 'compare': {
      const rows = await Promise.all(
        s.rows.map(async (r) => {
          const [l, rr] = await resolveIcons([r.left, r.right])
          return row({ alignItems: 'center', justifyContent: 'space-between', width: '100%' }, [
            capsule(l, 118),
            img(arrowUri(), 76, 38),
            capsule(rr, 118),
          ])
        }),
      )
      return page([
        row({ justifyContent: 'space-between', width: '100%' }, [
          h('div', { display: 'flex', width: 380, fontSize: size.h2 * 0.62, fontWeight: 700, lineHeight: 1.15 }, s.leftHead),
          h('div', { display: 'flex', width: 380, fontSize: size.h2 * 0.62, fontWeight: 700, lineHeight: 1.15, textAlign: 'right', justifyContent: 'flex-end' }, s.rightHead),
        ]),
        col({ rowGap: 64, width: '100%' }, rows),
        h('div', { display: 'flex' }, ''),
      ])
    }

    case 'list':
      return page([
        headline(s.title, fit(s.title, size.h1)),
        col({ rowGap: 34, width: '100%' },
          s.items.map((item, n) =>
            row({ alignItems: 'flex-start' }, [
              h('div', { display: 'flex', width: 74, fontSize: size.body, fontWeight: 800, color: t.muted }, String(n + 1).padStart(2, '0')),
              h('div', { display: 'flex', width: W - t.pad * 2 - 74, fontSize: size.body, fontWeight: 500, lineHeight: 1.25 }, item),
            ]),
          )),
        arrow(),
      ])

    case 'cta':
      return page([
        h('div', { display: 'flex' }, ''),
        col({}, [
          headline(s.headline, fit(s.headline, size.hero)),
          h('div', { display: 'flex', marginTop: 44, fontSize: size.body, fontWeight: 400, lineHeight: 1.3, whiteSpace: 'pre-wrap' },
            `comment "${s.keyword}"\n${s.sub ?? 'and I’ll send it over'}`),
        ]),
        h('div', { display: 'flex' }, ''),
      ])
  }
}
