export type CompanyId = 'munchify' | 'cyzora' | 'zyranet'

export interface Fact {
  value: string
  label: string
  count?: { to: number; prefix?: string; suffix?: string }
}

export interface Company {
  id: CompanyId
  name: string
  path: string
  caption: string
  hook: string
  story: string[]
  facts: Fact[]
  url: string
  host: string
  image: string
  alt: string
}

export const companies: Company[] = [
  {
    id: 'munchify',
    name: 'Munchify',
    path: '/munchify',
    caption: 'Food delivery',
    hook: 'It began with a broken Glovo screen in a hostel room.',
    story: [
      'A friend opened Glovo to order food and was told it was not available in Maseno. I built a simple site from scratch, taught myself from YouTube tutorials on free campus wifi, and got delivery riders on the road.',
      '26,000 orders later it is the largest platform in the university and employs over 30 people, bringing meals, groceries and pharmacy runs to the door in 20 to 30 minutes. Kakamega opens in January 2027 and Kisumu Central in June 2027.',
    ],
    facts: [
      { value: '26,000+', label: 'orders delivered', count: { to: 26000, suffix: '+' } },
      { value: '30+', label: 'people employed', count: { to: 30, suffix: '+' } },
      { value: '50+', label: 'local kitchens and stores', count: { to: 50, suffix: '+' } },
      { value: '20–30 min', label: 'average delivery' },
    ],
    url: 'https://munchify.co.ke',
    host: 'munchify.co.ke',
    image: '/images/company-munchify-v2.webp',
    alt: 'The Munchify home page: good food and daily essentials delivered to your door in Maseno',
  },
  {
    id: 'cyzora',
    name: 'Cyzora',
    path: '/cyzora',
    caption: 'Payments',
    hook: 'Getting paid, without the chasing.',
    story: [
      'Small Kenyan businesses lose hours chasing payments and matching them to orders. Cyzora removes both. The customer taps pay and enters their M-Pesa PIN, the money lands in the business’s account, and the payment matches its order on its own.',
      'It works from a website or app checkout, a payment link sent over WhatsApp, or a single API call, and it pays out staff and suppliers in bulk. From corner kiosks to delivery fleets, Kenyan businesses run on it.',
    ],
    facts: [
      { value: '500+', label: 'Kenyan businesses', count: { to: 500, suffix: '+' } },
      { value: '< 800 ms', label: 'for the payment prompt to reach the phone' },
      { value: '1.8%', label: 'fee on deposits, 1.1% on withdrawals' },
      { value: 'KES 0', label: 'setup fees' },
    ],
    url: 'https://cyzora.co.ke',
    host: 'cyzora.co.ke',
    image: '/images/company-cyzora.webp',
    alt: 'The Cyzora Pay home page: get paid instantly with M-Pesa',
  },
  {
    id: 'zyranet',
    name: 'Zyra Net',
    path: '/zyranet',
    caption: 'Internet',
    hook: 'Internet that just works, in Kisumu.',
    story: [
      'Zyra Net is a local internet provider for Kisumu: home WiFi, business broadband, hotspot and school internet over a fibre-backed wireless network, paid for through M-Pesa with no contracts.',
      'Local technicians install in as little as 24 hours, and support answers on WhatsApp, phone and email at any hour. The network keeps expanding across Kisumu County.',
    ],
    facts: [
      { value: '2,500+', label: 'active subscribers', count: { to: 2500, suffix: '+' } },
      { value: '100 Mbps', label: 'top speed', count: { to: 100, suffix: ' Mbps' } },
      { value: '15+', label: 'areas covered in Kisumu', count: { to: 15, suffix: '+' } },
      { value: 'KSh 1,500', label: 'a month for home plans', count: { to: 1500, prefix: 'KSh ' } },
    ],
    url: 'https://zyranet.co.ke',
    host: 'zyranet.co.ke',
    image: '/images/company-zyranet.webp',
    alt: 'The Zyra Net home page: internet that just works in Kisumu',
  },
]

export function getCompany(id: CompanyId) {
  const company = companies.find((item) => item.id === id)
  if (!company) throw new Error(`Unknown company: ${id}`)
  return company
}
