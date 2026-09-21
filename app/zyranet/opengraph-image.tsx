import { ogContentType, ogSize, renderOg } from '../lib/og'

export const alt = 'Zyra Net: WiFi internet in Kisumu'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return renderOg('Zyra Net', 'WiFi internet in Kisumu')
}
