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
          justifyContent: 'space-between',
          padding: 72,
          background: '#FF5C00',
          color: '#141210',
        }}
      >
        <div style={{ fontSize: 34, fontWeight: 700 }}>Emmanuel Charles</div>
        <div style={{ fontSize: 96, fontWeight: 800, lineHeight: 1.02, letterSpacing: -3 }}>
          Founder of Munchify, Cyzora and Zyra Net.
        </div>
        <div style={{ fontSize: 30, fontWeight: 500 }}>
          Food delivery. Payments. Internet. Kenya.
        </div>
      </div>
    ),
    { ...size }
  )
}
