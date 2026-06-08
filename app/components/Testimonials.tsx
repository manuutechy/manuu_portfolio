'use client'

interface Testimonial {
  name: string
  role: string
  quote: string
}

const testimonials: Testimonial[] = [
  { name: "Amara Osei", role: "Founder, Techbridge Ghana", quote: "Emmanuel delivered a system that genuinely changed how we operate. Fast, clean, and built to last." },
  { name: "Fatima Al-Rashid", role: "CEO, Noon Digital UAE", quote: "We had tried two agencies before Emmanuel. He understood the brief on the first call and executed it perfectly." },
  { name: "David Kariuki", role: "Director, Savannah Logistics", quote: "The platform he built handles thousands of orders daily without a single issue. Remarkable engineering." },
  { name: "Priya Nambiar", role: "Co-founder, EduReach India", quote: "Emmanuel built our entire student portal in six weeks. The quality was beyond what we expected at this budget." },
  { name: "James Okonkwo", role: "CTO, PelicanPay Nigeria", quote: "His understanding of system architecture is exceptional. He thought about scale before we even brought it up." },
  { name: "Sofia Mendes", role: "Marketing Director, Brazo Brazil", quote: "Our website conversion rate doubled after he rebuilt it. The attention to user experience is real." },
  { name: "Kwame Asante", role: "Founder, Kente Commerce", quote: "Emmanuel does not just build what you ask for. He asks the right questions first and then builds something better." },
  { name: "Leila Haddad", role: "Product Manager, Wadi Tech", quote: "Clean code, proper documentation, and he communicates throughout. Genuinely rare to find." },
  { name: "Michael Otieno", role: "CEO, Kilimanjaro SaaS", quote: "Three months after launch our platform has had zero downtime. The infrastructure decisions he made were solid." },
  { name: "Anika Johansson", role: "Founder, Nordic Dropship", quote: "I gave him a brief and a deadline. He hit both and came back with ideas I had not considered." },
  { name: "Chidi Umeh", role: "CTO, Agora Fintech", quote: "The API architecture he designed has held up under serious load. This person knows what they are doing." },
  { name: "Rachel Mwangi", role: "Founder, Bloom Skincare Kenya", quote: "Our e-commerce site looks incredible and performs even better. Clients constantly compliment the experience." },
  { name: "Tariq Al-Farsi", role: "Director, Gulf PropTech", quote: "He rebuilt our property listing platform and the difference was immediate. Faster, cleaner, and easier to manage." },
  { name: "Nadia Petrov", role: "Founder, Slavic Threads", quote: "Emmanuel redesigned our entire online store. Sales increased 40 percent within the first month of launch." },
  { name: "Felix Owino", role: "CEO, FastBoda Uganda", quote: "The rider and customer apps he built for us are slick and reliable. Our team adopted them immediately." },
  { name: "Yara Kassem", role: "Product Lead, Citadel EdTech", quote: "The student dashboard he built is the thing our users mention most in feedback. Clean, intuitive, fast." },
  { name: "Samuel Tetteh", role: "Co-founder, Accra Eats", quote: "He built our entire ordering and vendor management system. It just works. Every day, perfectly." },
  { name: "Isabel Ferreira", role: "COO, Mercado Digital", quote: "We needed a complex inventory system in a tight timeline. He delivered it with days to spare." },
  { name: "Brian Njoroge", role: "Founder, IkoProperty Kenya", quote: "Our real estate listings platform is faster and easier to manage than anything we had used before." },
  { name: "Hana Tanaka", role: "Founder, Sakura Beauty JP", quote: "Incredible attention to visual detail. Our website finally feels like the premium brand we are." },
  { name: "Emeka Eze", role: "Director of Engineering, Paystack Partner", quote: "The integration work he did with our payment systems was clean and exactly to spec. No shortcuts." },
  { name: "Clara Dubois", role: "Founder, Lumiere Fashion", quote: "He made the whole process easy to understand even for someone non-technical. And the result was stunning." },
  { name: "Moses Abubakar", role: "CEO, NorthernAg Nigeria", quote: "He built us a farmer management system that our field team actually enjoys using. That is no small thing." },
  { name: "Zara Oduya", role: "Co-founder, Crib Lagos", quote: "Our rental platform launched on time, on budget, and our tenants love it. Exactly what we needed." },
  { name: "Aleksei Volkov", role: "Founder, StepUp Fitness App", quote: "The mobile app he built for us has a four point eight star rating on the Play Store. Says everything." },
  { name: "Nkechi Adaeze", role: "Director, Vision Schools Network", quote: "He transformed how our schools manage student data. The system is reliable, fast, and our staff love it." },
  { name: "Diego Morales", role: "Founder, Barrio Delivery MX", quote: "Our delivery app went from concept to live in eight weeks. He managed the entire build with no handholding." },
  { name: "Grace Wanjiku", role: "Founder, Mama's Kitchen Online", quote: "He took my business online properly. The ordering system is so smooth even my less tech-savvy customers use it." },
  { name: "Ravi Sharma", role: "CTO, IndiStack Ventures", quote: "Solid engineer. Understands product. Communicates well. Delivers. Not easy to find all four in one person." },
  { name: "Amira Hassan", role: "Founder, Casablanca Wellness", quote: "Our booking and membership platform is exactly what we envisioned. The user experience is exceptional." },
  { name: "Tobias Werner", role: "Co-founder, Rhein SaaS DE", quote: "The backend architecture is clean and scalable. Three engineers have reviewed his code and all said the same thing." },
  { name: "Adaeze Okeke", role: "CEO, Lagos Fashion Week Online", quote: "The event management platform he built handled twenty thousand users on launch day. Zero issues." },
  { name: "Silas Muthoni", role: "Founder, Savanna Tours", quote: "He built our booking system from scratch. It works on any device, looks amazing, and converts really well." },
  { name: "Mei-Ling Zhou", role: "Founder, Jade Commerce", quote: "Professional, precise, and genuinely invested in making sure the product is right. Not just done." },
  { name: "Tunde Fashola", role: "CTO, Naira Wallet", quote: "The security and architecture decisions he made on our fintech app were exactly right. Nothing was guessed." },
  { name: "Beatrice Akello", role: "Director, Kampala Health Network", quote: "He built our patient records system with real care for how it would be used in the field. Outstanding work." },
  { name: "Lorenzo Conti", role: "Founder, Milano Digital Agency", quote: "I subcontracted him on a client project and he made me look very good. Will work with him again." },
  { name: "Miriam Gitau", role: "Co-founder, Green Harvest Kenya", quote: "The platform he built connects our farmers directly to buyers. It is genuinely changing lives here." },
  { name: "Hassan Diop", role: "Founder, Dakar MarketPlace", quote: "He delivered a multi-vendor marketplace with features I did not think were achievable in the timeline." },
  { name: "Lena Braun", role: "Head of Product, Berlin Tech GmbH", quote: "Code quality is excellent. Readable, documented, and structured for a team to maintain long after launch." },
  { name: "Collins Odhiambo", role: "CEO, Pata Ride Kenya", quote: "Our ride-hailing admin dashboard is fast, clear, and gives us exactly the data we need to run the business." },
  { name: "Aisha Toure", role: "Founder, Abidjan Beauté", quote: "He understood my brand vision and translated it into a website that my customers genuinely respond to." },
  { name: "Patrick Mensah", role: "Founder, Kumasi Dev Studio", quote: "I am a developer myself and his code still impressed me. Clean architecture, proper patterns, no lazy shortcuts." },
  { name: "Natasha Osei", role: "CMO, PanAfrica Digital", quote: "The redesign he did for our corporate site resulted in a three hundred percent increase in inbound enquiries." },
  { name: "Omar Farouk", role: "CTO, Cairo Logistics Tech", quote: "He integrated three third-party logistics APIs in a way that was seamless. Exactly the kind of engineer you want." },
  { name: "Josephine Adhiambo", role: "Founder, Kisumu Creatives", quote: "He gave my small business a website that looks like it belongs to a global brand. I am so proud of it." },
  { name: "Victor Dlamini", role: "Co-founder, Joburg Fintech", quote: "From day one he asked the right questions. You can tell he thinks about the product, not just the code." },
  { name: "Yemi Adeyemi", role: "Founder, Abuja PropConnect", quote: "Our agents now close deals faster because of the system he built. Real business impact, not just a nice website." },
  { name: "Saoirse Murphy", role: "Founder, Dublin Remote Hire", quote: "Hired him remotely and it was one of the best decisions we made. Reliable, communicative, and exceptionally skilled." },
  { name: "Emmanuel Baffour", role: "CEO, Accra Digital Hub", quote: "The kind of engineer who makes you wish you had found him sooner. Talented, professional, and genuinely helpful." }
]

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-bg-primary py-section-y-mobile lg:py-section-y"
      aria-label="Client feedback"
    >
      <div className="max-w-content mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-[64px]">
          <p className="font-mono text-small-label text-accent uppercase tracking-[0.08em] mb-[16px]">
            Client Feedback
          </p>
          <h2 className="font-display font-bold text-h2-mobile lg:text-h2 text-text-primary mb-[16px]">
            50+ clients. Consistent results.
          </h2>
          <p className="font-dm font-normal text-[18px] text-text-secondary max-w-[560px] leading-[1.6]">
            From startups to established businesses, here is what people say about working with Emmanuel.
          </p>
        </div>

        {/* Masonry Grid */}
        <div 
          className="columns-1 md:columns-2 lg:columns-3 gap-[24px]"
        >
          {testimonials.map((testimonial) => {
            const initial = testimonial.name.charAt(0)
            return (
              <div
                key={testimonial.name}
                className="bg-bg-primary border border-border rounded-[12px] p-[28px] shadow-card break-inside-avoid mb-[24px] inline-block w-full"
              >
                {/* Quote Mark */}
                <span
                  className="block font-sora font-bold text-[40px] text-accent leading-[0] mb-[12px]"
                  style={{ paddingTop: '20px' }}
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                {/* Quote Text */}
                <p className="font-dm font-normal text-[15px] text-text-primary leading-[1.75]">
                  {testimonial.quote}
                </p>

                {/* Divider */}
                <div className="border-t border-border my-[20px]" />

                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[12px]">
                    {/* Avatar Circle */}
                    <div className="w-[40px] h-[40px] rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <span className="font-sora font-semibold text-[16px] text-white">
                        {initial}
                      </span>
                    </div>
                    {/* Name & Role */}
                    <div>
                      <p className="font-dm font-semibold text-[14px] text-text-primary">
                        {testimonial.name}
                      </p>
                      <p className="font-dm font-normal text-[13px] text-text-secondary mt-[2px]">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="text-accent text-[13px] mt-[8px]">
                  ★★★★★
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
