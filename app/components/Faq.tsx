interface FaqProps {
  items: { q: string; a: string }[]
  heading?: string
}

export default function Faq({ items, heading = 'Frequently asked questions' }: FaqProps) {
  return (
    <section aria-labelledby="faq-heading" className="mt-20 lg:mt-28">
      <h2 id="faq-heading" data-reveal-lines className="display text-[clamp(1.75rem,3vw,2.375rem)]">
        {heading}
      </h2>
      <div className="mt-8 border-y border-line divide-y divide-[rgb(255_255_255/0.09)]">
        {items.map((item) => (
          <details key={item.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[1.125rem] font-semibold [&::-webkit-details-marker]:hidden">
              {item.q}
              <span
                aria-hidden="true"
                className="text-[1.5rem] leading-none text-dim transition-transform duration-200 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 max-w-[64ch] text-[1.0625rem] leading-[1.7] text-dim">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
