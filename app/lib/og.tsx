import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'

export const ogSize = { width: 1200, height: 630 }
export const ogContentType = 'image/png'

const mark = `data:image/png;base64,${readFileSync(join(process.cwd(), 'public/images/logo-mark.png')).toString('base64')}`

export function renderOg(title: string, subtitle: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#050507',
          color: '#F2F2F4',
          textAlign: 'center',
          padding: 80,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={mark} width={112} height={114} alt="" style={{ marginBottom: 40 }} />
        <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: 2 }}>{title}</div>
        <div style={{ marginTop: 26, fontSize: 28, letterSpacing: 6, color: '#A7A7AD', textTransform: 'uppercase' }}>
          {subtitle}
        </div>
      </div>
    ),
    { ...ogSize }
  )
}
