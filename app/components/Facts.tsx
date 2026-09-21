import type { Fact } from '../lib/companies'

interface FactsProps {
  facts: Fact[]
  className?: string
}

export default function Facts({ facts, className = '' }: FactsProps) {
  return (
    <dl className={className}>
      {facts.map((fact) => (
        <div data-fact key={fact.label} className="flex flex-col-reverse justify-end border-l border-line pl-4">
          <dt className="mt-1 text-[0.875rem] leading-[1.4] text-dim">{fact.label}</dt>
          <dd
            data-count={fact.count?.to}
            data-prefix={fact.count?.prefix}
            data-suffix={fact.count?.suffix}
            className="font-semibold tracking-[-0.02em] text-[1.5rem] leading-[1.2]"
          >
            {fact.value}
          </dd>
        </div>
      ))}
    </dl>
  )
}
