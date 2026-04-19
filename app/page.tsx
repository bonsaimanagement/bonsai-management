export default function Home() {
  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <section className="mx-auto max-w-4xl px-6 py-20 sm:py-28 text-center">
        <div className="inline-block rounded-full bg-forest/10 px-4 py-1.5 text-sm font-medium text-forest mb-6">
          Coming Soon
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-charcoal mb-6 leading-tight">
          Professional Property Management for Single-Family Homes
        </h1>
        <p className="text-lg sm:text-xl text-charcoal-light max-w-2xl mx-auto leading-relaxed">
          Bonsai Management oversees a portfolio of single-family rental homes in
          Columbus, Georgia. We take a hands-on approach to property management —
          careful, deliberate, and focused on doing it well.
        </p>
        <p className="mt-4 text-base text-charcoal-light/70 italic">
          Growing steadily, one home at a time.
        </p>
      </section>

      {/* What We Do Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-charcoal text-center mb-4">
            What We Do
          </h2>
          <p className="text-charcoal-light text-center max-w-2xl mx-auto mb-12">
            We manage every aspect of our rental properties — from finding great
            tenants to keeping homes in excellent condition.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Card: Property Oversight */}
            <div className="rounded-xl border border-cream-dark bg-cream/50 p-6">
              <div className="w-10 h-10 rounded-lg bg-forest/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Property Oversight</h3>
              <p className="text-sm text-charcoal-light leading-relaxed">
                Active monitoring of property condition, regular assessments, and
                coordination with local teams to keep every home well-maintained
                and performing.
              </p>
            </div>

            {/* Card: Tenant Coordination */}
            <div className="rounded-xl border border-cream-dark bg-cream/50 p-6">
              <div className="w-10 h-10 rounded-lg bg-forest/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Tenant Coordination</h3>
              <p className="text-sm text-charcoal-light leading-relaxed">
                Responsive communication, clear move-in and move-out processes,
                and a commitment to making our rental homes comfortable places
                to live.
              </p>
            </div>

            {/* Card: Maintenance Management */}
            <div className="rounded-xl border border-cream-dark bg-cream/50 p-6">
              <div className="w-10 h-10 rounded-lg bg-forest/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.573-1.066z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Maintenance Management</h3>
              <p className="text-sm text-charcoal-light leading-relaxed">
                Proactive upkeep and timely repairs through a vetted network of
                local contractors. We coordinate everything so issues get
                resolved quickly and correctly.
              </p>
            </div>

            {/* Card: Market-Informed Pricing */}
            <div className="rounded-xl border border-cream-dark bg-cream/50 p-6">
              <div className="w-10 h-10 rounded-lg bg-forest/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Market-Informed Pricing</h3>
              <p className="text-sm text-charcoal-light leading-relaxed">
                Rental rates based on real market data — comparable properties,
                local vacancy trends, and neighborhood conditions — not
                guesswork.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Details */}
      <section className="mx-auto max-w-4xl px-6 py-16 sm:py-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-4">
          Full Site Under Development
        </h2>
        <p className="text-charcoal-light max-w-2xl mx-auto mb-10 leading-relaxed">
          We&apos;re building out the complete Bonsai Management website. Here&apos;s
          what&apos;s coming:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left max-w-3xl mx-auto">
          {[
            { title: "Property Listings", desc: "Detailed pages for each rental home with photos, amenities, and neighborhood info" },
            { title: "Tenant Resources", desc: "Move-in guides, maintenance procedures, emergency contacts, and FAQs" },
            { title: "Area Guides", desc: "Neighborhood profiles and local information for our Columbus, GA properties" },
            { title: "Market Reports", desc: "Rental market analysis and pricing trends for the Columbus area" },
            { title: "Vendor Directory", desc: "Our network of trusted local contractors and service providers" },
            { title: "Contact & Inquiries", desc: "Easy way to reach us with questions about rentals or management services" },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-cream-dark bg-white p-4">
              <h3 className="text-sm font-semibold text-forest mb-1">{item.title}</h3>
              <p className="text-xs text-charcoal-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-forest">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-cream mb-3">
            Questions? Get in Touch
          </h2>
          <p className="text-cream/80 mb-6 max-w-lg mx-auto">
            Whether you&apos;re a current tenant, prospective renter, or interested
            in our management services — we&apos;d like to hear from you.
          </p>
          <a
            href="mailto:info@bonsaimgmt.com"
            className="inline-block rounded-lg bg-amber px-6 py-3 text-sm font-semibold text-charcoal hover:bg-amber-light transition-colors no-underline"
          >
            Email Us
          </a>
        </div>
      </section>
    </div>
  );
}
