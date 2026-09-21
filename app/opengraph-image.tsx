import { ImageResponse } from 'next/og'

export const alt = 'Emmanuel Charles, founder of Munchify, Cyzora and Zyra Net'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default function Image() {
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
        }}
      >
        <div style={{ fontSize: 104, fontWeight: 700, letterSpacing: 6, textTransform: 'uppercase' }}>
          Emmanuel Charles
        </div>
        <div style={{ marginTop: 28, fontSize: 30, letterSpacing: 8, color: '#A7A7AD', textTransform: 'uppercase' }}>
          Founder of Munchify, Cyzora and Zyra Net
        </div>
      </div>
    ),
    { ...size }
  )
}
