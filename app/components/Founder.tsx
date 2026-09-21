export default function Founder() {
  return (
    <section
      id="founder"
      aria-labelledby="founder-heading"
      className="bg-night pb-24 lg:pb-36"
    >
      <div className="hairline" aria-hidden="true" />
      <div className="max-w-[900px] mx-auto px-6 pt-16 lg:pt-24 text-center">
        <h2
          id="founder-heading"
          data-fill
          className="display text-[clamp(1.9rem,4.4vw,3.5rem)]"
        >
          Food, money and connectivity are what a town needs working before anything else can.
        </h2>

        <div className="mt-10 max-w-[54ch] mx-auto text-[1.125rem] leading-[1.7] text-dim space-y-5">
          <p>I build the companies that keep them working, and I keep running them after launch.</p>
          <p>
            I design and write the software behind each one and stay close to the people who use it. The aim is companies that outlast any one person, in the places I live and work.
          </p>
        </div>

        <p className="mt-10 text-[0.8125rem] uppercase tracking-[0.2em] text-fg">Emmanuel Charles, Kenya</p>
      </div>
    </section>
  )
}
