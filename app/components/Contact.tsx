const WHATSAPP = 'https://wa.me/254758335592'
const EMAIL = 'hi@manuutech.com'

const supportLinks = [
  { name: 'Munchify', url: 'https://munchify.co.ke', note: 'Orders, riders and merchants' },
  { name: 'Cyzora', url: 'https://cyzora.co.ke', note: 'Accepting payments' },
  { name: 'Zyra Net', url: 'https://zyranet.co.ke', note: 'Internet in Kisumu' },
]

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-paper py-24 lg:py-36"
    >
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <h2
          id="contact-heading"
          className="display text-[clamp(2.1rem,5.2vw,4rem)] max-w-[14ch]"
        >
          Talk to me directly.
        </h2>
        <p className="mt-6 max-w-[52ch] text-[1.125rem] text-mute">
          Investing, partnering, press or hiring: message me on WhatsApp or write to me. I read everything myself.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={`${WHATSAPP}?text=${encodeURIComponent('Hello Emmanuel, ')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center min-h-[56px] px-9 bg-ink text-paper font-bold no-underline hover:bg-black transition-colors"
          >
            Message on WhatsApp
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center justify-center min-h-[56px] px-9 border-2 border-ink font-bold no-underline hover:bg-ink hover:text-paper transition-colors"
          >
            {EMAIL}
          </a>
        </div>

        <div className="mt-20 border-t-[3px] border-ink pt-8">
          <h3 className="font-bold text-[1.0625rem]">Need help with one of the companies?</h3>
          <p className="mt-2 text-mute max-w-[52ch]">
            Customers get a faster answer from each company&rsquo;s own support team.
          </p>
          <ul className="mt-6 list-none grid sm:grid-cols-3 gap-x-8">
            {supportLinks.map((link) => (
              <li key={link.name} className="border-t border-rule py-4">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline underline-offset-4 decoration-2"
                >
                  {link.name}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <p className="text-[0.9375rem] text-mute mt-1">{link.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
