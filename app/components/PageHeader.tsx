import Link from 'next/link'

interface PageHeaderProps {
  trail: string
  title: string
  lead: string
  children?: React.ReactNode
  actions?: React.ReactNode
}

export default function PageHeader({ trail, title, lead, children, actions }: PageHeaderProps) {
  return (
    <header className="max-w-content mx-auto px-6 lg:px-8 pt-32 lg:pt-40 pb-12 lg:pb-16">
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-[0.875rem] text-dim list-none">
          <li>
            <Link href="/" className="no-underline hover:text-fg transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-fg">
            {trail}
          </li>
        </ol>
      </nav>

      {children ? <div className="mt-10">{children}</div> : null}

      <h1 className="display mt-8 max-w-[22ch] text-[clamp(2.25rem,5.4vw,4.25rem)]">{title}</h1>
      <p className="mt-6 max-w-[60ch] text-[1.25rem] leading-[1.6] text-dim">{lead}</p>
      {actions ? <div className="mt-9 flex flex-wrap gap-4">{actions}</div> : null}
    </header>
  )
}
