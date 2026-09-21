const sections = [
  { id: 'top', label: 'Intro' },
  { id: 'companies', label: 'Companies' },
  { id: 'journey', label: 'The path' },
  { id: 'founder', label: 'Founder' },
  { id: 'contact', label: 'Contact' },
]

export default function SectionRail() {
  return (
    <nav
      aria-label="Page sections"
      className="fixed right-6 top-1/2 z-30 hidden -translate-y-1/2 mix-blend-difference xl:block"
    >
      <ul className="flex list-none flex-col gap-3">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              data-rail-link={section.id}
              aria-label={section.label}
              className="group flex items-center justify-end gap-3 py-1.5 text-white no-underline"
            >
              <span className="text-[0.6875rem] uppercase tracking-[0.18em] opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                {section.label}
              </span>
              <span data-rail-dot className="block h-1.5 w-1.5 rounded-full bg-white opacity-40" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
