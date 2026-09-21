import { ogContentType, ogSize, renderOg } from '../lib/og'

export const alt = 'Cyzora Pay: Get paid instantly with M-Pesa'
export const size = ogSize
export const contentType = ogContentType

export default function Image() {
  return renderOg('Cyzora Pay', 'Get paid instantly with M-Pesa')
}
