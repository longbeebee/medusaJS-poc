import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b border-[color:var(--outline)] bg-[color:var(--paper)]">
      <div className="absolute inset-0 hero-grid" />
      <div className="absolute -top-20 -right-28 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.45),_transparent_70%)] blur-2xl animate-float-slow" />
      <div className="absolute -bottom-16 left-10 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.35),_transparent_70%)] blur-2xl animate-float-fast" />
      <div className="absolute inset-0 grain" />
      <div className="content-container relative z-10 py-20 small:py-28">
        <div className="grid items-center gap-12 small:grid-cols-[1.1fr,0.9fr]">
          <div className="animate-rise">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--outline)] bg-white/70 px-4 py-1 text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
              Atelier Edit
            </div>
            <h1 className="mt-6 text-balance text-4xl font-display text-[color:var(--ink)] small:text-6xl">
              Modern essentials for a slower, richer day.
            </h1>
            <p className="mt-4 max-w-xl text-base text-[color:var(--muted)] small:text-lg">
              A Medusa-powered storefront for curated collections, intentional
              materials, and effortless checkout. Crafted to feel editorial,
              elevated, and unmistakably yours.
            </p>
            <div className="mt-8 flex flex-col gap-3 xsmall:flex-row">
              <LocalizedClientLink
                href="/store"
                className="inline-flex items-center justify-center rounded-full bg-[color:var(--ink)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:translate-y-[-1px]"
              >
                Shop New Arrivals
              </LocalizedClientLink>
              <LocalizedClientLink
                href="/collections"
                className="inline-flex items-center justify-center rounded-full border border-[color:var(--outline)] bg-white/70 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--ink)] transition hover:bg-white"
              >
                Browse Collections
              </LocalizedClientLink>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 text-xs uppercase tracking-[0.2em] text-[color:var(--muted)] small:grid-cols-3">
              <div className="rounded-2xl border border-[color:var(--outline)] bg-white/70 px-4 py-3">
                Ships in 48 Hours
              </div>
              <div className="rounded-2xl border border-[color:var(--outline)] bg-white/70 px-4 py-3">
                Limited Edition Drops
              </div>
              <div className="rounded-2xl border border-[color:var(--outline)] bg-white/70 px-4 py-3">
                Carbon Neutral
              </div>
            </div>
          </div>
          <div className="relative animate-rise">
            <div className="glass-panel rounded-[32px] p-6">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-[26px] border border-white/60 bg-[conic-gradient(from_210deg,_#fef3c7,_#fde68a,_#d97706,_#fef3c7)] p-4">
                <div className="flex h-full w-full flex-col justify-between rounded-[20px] border border-white/50 bg-white/60 p-6">
                  <div className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                    Signature Set
                  </div>
                  <div>
                    <div className="text-3xl font-display text-[color:var(--ink)]">
                      Coastal Linen
                    </div>
                    <p className="mt-2 text-sm text-[color:var(--muted)]">
                      Soft, breathable, and woven for sunlit spaces.
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-sm font-semibold text-[color:var(--ink)]">
                    <span>From $98</span>
                    <span className="rounded-full border border-[color:var(--outline)] px-3 py-1 text-xs uppercase tracking-[0.2em]">
                      Bestseller
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-[color:var(--outline)] bg-white/80 px-4 py-3 text-xs uppercase tracking-[0.3em] text-[color:var(--muted)] shadow-[0_18px_36px_rgba(31,28,23,0.16)]">
              Free Returns
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
