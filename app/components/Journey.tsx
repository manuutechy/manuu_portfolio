const steps = [
  {
    title: 'A friend couldn’t order food.',
    text: 'Glovo told him it wasn’t available here. In a hostel room, a small, annoying problem turned into a “what if”.',
  },
  {
    title: 'I taught myself to build it.',
    text: 'First year doesn’t teach web or app development, so I learned from YouTube tutorials on free campus wifi and wrote Munchify without AI.',
  },
  {
    title: 'Real money changed everything.',
    text: 'Once orders and payments moved, Munchify needed systems: how money flows, who touches what, how staff get paid.',
  },
  {
    title: '26,000 orders. 30+ people.',
    text: 'Munchify became the largest platform in the university and now employs over 30 people.',
  },
  {
    title: 'Focus over speed.',
    text: 'Before spreading, I made Munchify work deeply in Maseno. Kakamega opens in January 2027 and Kisumu Central in June 2027.',
  },
  {
    title: 'More companies, same idea.',
    text: 'Cyzora now handles payments for 500+ Kenyan businesses, and Zyra Net connects 2,500+ subscribers in Kisumu.',
  },
  {
    title: 'Building the next builders.',
    text: 'I chair GDG on Campus Maseno, pulling students into tech and showing them what starting looks like.',
  },
]

export default function Journey() {
  return (
    <section id="journey" aria-labelledby="journey-heading" className="bg-night">
      <div data-journey className="overflow-hidden py-20 lg:py-0 lg:flex lg:min-h-screen lg:flex-col lg:justify-center">
        <div className="max-w-content mx-auto w-full px-6 lg:px-8">
          <h2
            id="journey-heading"
            data-reveal-lines
            data-proximity
            className="display text-[clamp(2rem,4.6vw,3.5rem)] [font-kerning:none]"
          >
            The path so far.
          </h2>
        </div>

        <ol
          data-journey-track
          className="mt-12 flex list-none flex-col gap-5 px-6 lg:mt-14 lg:w-max lg:flex-row lg:gap-6 lg:pl-[max(2rem,calc((100vw-1200px)/2+2rem))] lg:pr-[22vw]"
        >
          {steps.map((step, index) => (
            <li
              key={step.title}
              data-journey-card
              className="relative flex flex-col justify-between rounded-[24px] border border-line p-8 lg:h-[380px] lg:w-[min(500px,40vw)] lg:shrink-0"
            >
              <span
                aria-hidden="true"
                data-journey-num
                className="display text-[4.5rem] leading-none text-transparent [-webkit-text-stroke:1px_rgb(255_255_255/0.3)]"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="display mt-10 text-[clamp(1.6rem,2.3vw,2.125rem)]">{step.title}</h3>
                <p className="mt-4 max-w-[38ch] text-[1.0625rem] leading-[1.65] text-dim">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mx-auto mt-10 hidden w-full max-w-content px-8 lg:block" aria-hidden="true">
          <div className="h-px w-full bg-[var(--color-line)]">
            <div data-journey-progress className="h-px origin-left bg-fg" style={{ transform: 'scaleX(0)' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
