import { ogContentType, ogSize, renderOg } from '../lib/og'

export const alt = 'Emmanuel Charles: Founder of Munchify, Cyzora and Zyra Net'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return renderOg('Emmanuel Charles', 'Founder of Munchify, Cyzora and Zyra Net')
}
