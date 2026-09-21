import { ogContentType, ogSize, renderOg } from '../lib/og'

export const alt = 'Munchify: Food delivery in Maseno'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return renderOg('Munchify', 'Food delivery in Maseno')
}
