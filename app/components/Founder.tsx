export default function Founder() {
  return (
    <section
      id="founder"
      aria-labelledby="founder-heading"
      className="bg-ink text-paper py-24 lg:py-36"
    >
      <div className="max-w-content mx-auto px-6 lg:px-8 grid lg:grid-cols-[1fr_1.1fr] gap-x-20 gap-y-10">
        <h2
          id="founder-heading"
          className="display text-[clamp(2.1rem,5.2vw,4rem)] max-w-[12ch]"
        >
          Why these three.
        </h2>

        <div className="max-w-[56ch] text-[1.1875rem] leading-[1.7] space-y-6 text-[oklch(0.9_0_0)]">
          <p>
            Food, money and connectivity are what a town needs working before anything else can. I build the companies that keep them working, and I keep running them after launch.
          </p>
          <p>
            I design and write the software behind each one and stay close to the people who use it. The aim is companies that outlast any one person, in the places I live and work.
          </p>
          <p className="font-bold text-paper">Emmanuel Charles, Kenya</p>
        </div>
      </div>
    </section>
  )
}
