const words = ['Food delivery', 'Payments', 'Internet', 'Maseno', 'Kisumu', 'Kenya']

export default function Marquee() {
  return (
    <div aria-hidden="true" className="marquee overflow-hidden border-y border-line py-7 select-none">
      <div data-marquee-track className="flex w-max">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {words.map((word) => (
              <span
                key={word}
                className="display flex items-center whitespace-nowrap px-8 text-[clamp(2.5rem,6vw,5rem)] text-transparent [-webkit-text-stroke:1px_rgb(255_255_255/0.3)]"
              >
                {word}
                <span className="ml-16 inline-block h-2 w-2 rounded-full bg-[rgb(255_255_255/0.3)]" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
