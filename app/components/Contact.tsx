const WHATSAPP = 'https://wa.me/254758335592'
const EMAIL = 'hi@manuutech.com'

const supportLinks = [
  { name: 'Munchify', url: 'https://munchify.co.ke', note: 'Orders, riders and merchants' },
  { name: 'Cyzora', url: 'https://cyzora.co.ke', note: 'Accepting payments' },
  { name: 'Zyra Net', url: 'https://zyranet.co.ke', note: 'Internet' },
]

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-night pb-28 lg:pb-40"
    >
      <div className="hairline" aria-hidden="true" />
      <div className="max-w-[900px] mx-auto px-6 pt-16 lg:pt-24 text-center">
        <h2
          id="contact-heading"
          data-reveal-lines
          className="display text-[clamp(2.25rem,6vw,4.5rem)]"
        >
          Talk to me directly.
        </h2>
        <p className="mt-6 max-w-[46ch] mx-auto text-[1.125rem] leading-[1.65] text-dim">
          Investing, partnering, press or hiring: message me on WhatsApp or write to me. I read everything myself.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={`${WHATSAPP}?text=${encodeURIComponent('Hello Emmanuel, ')}`}
            target="_blank"
            rel="noopener noreferrer"
            data-magnetic
            className="inline-flex items-center justify-center min-h-[56px] px-9 rounded-full bg-fg text-night font-semibold text-[1.0625rem] no-underline hover:bg-white transition-colors"
          >
            Message on WhatsApp
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            data-magnetic
            className="inline-flex items-center justify-center min-h-[56px] px-9 rounded-full border border-[rgb(255_255_255/0.22)] text-fg font-semibold text-[1.0625rem] no-underline hover:border-fg transition-colors"
          >
            {EMAIL}
          </a>
        </div>

        <div className="mt-20 border-t border-line pt-10">
          <h3 className="font-semibold text-[1.0625rem]">Need help with one of the companies?</h3>
          <p className="mt-2 text-[1rem] text-dim">
            Customers get a faster answer from each company&rsquo;s own support team.
          </p>
          <ul className="mt-8 list-none grid sm:grid-cols-3 gap-6">
            {supportLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-1 font-semibold text-[1.0625rem] underline underline-offset-[6px] decoration-1 hover:decoration-2"
                >
                  {link.name}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <p className="text-[0.9375rem] text-dim">{link.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
