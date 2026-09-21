import Image from 'next/image'
import type { CompanyId } from '../lib/companies'

export type { CompanyId }

interface CompanyLogoProps {
  id: CompanyId
  size?: 'md' | 'lg'
  decorative?: boolean
}

const INK = 'oklch(0.14 0.003 260)'

export default function CompanyLogo({ id, size = 'md', decorative = false }: CompanyLogoProps) {
  const height = size === 'lg' ? 'h-12 sm:h-14' : 'h-9 sm:h-10'

  if (id === 'munchify') {
    return (
      <Image
        src="/images/brand-munchify.png"
        alt={decorative ? '' : 'Munchify'}
        width={487}
        height={160}
        className={`${height} w-auto`}
      />
    )
  }

  if (id === 'zyranet') {
    return (
      <Image
        src="/images/brand-zyranet.png"
        alt={decorative ? '' : 'Zyra Net'}
        width={507}
        height={160}
        className={`${height} w-auto`}
      />
    )
  }

  const mark = size === 'lg' ? 'h-14 sm:h-16' : 'h-10 sm:h-12'
  const word = size === 'lg' ? 'text-[2rem] sm:text-[2.25rem]' : 'text-[1.5rem] sm:text-[1.75rem]'

  return (
    <span className="flex items-center gap-3">
      <Image src="/images/brand-cyzora.png" alt="" width={106} height={160} className={`${mark} w-auto`} />
      <span
        className={`${word} font-bold leading-none tracking-[-0.03em]`}
        style={{ color: INK }}
      >
        Cyzora
      </span>
      <span
        className="rounded-md px-1.5 py-1 text-[0.625rem] font-bold leading-none tracking-[0.12em] text-white"
        style={{ background: INK }}
      >
        PAY
      </span>
      {decorative ? null : <span className="sr-only">Cyzora Pay</span>}
    </span>
  )
}
