import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "Atelier Supply | Modern Essentials",
  description:
    "A curated Medusa storefront for modern essentials, crafted for an editorial shopping experience.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <section className="content-container py-16 small:py-20">
        <div className="grid gap-6 small:grid-cols-3">
          {[
            {
              title: "Curated Materials",
              text: "Natural fibers, minimal dyes, and thoughtful finishes for everyday luxury.",
            },
            {
              title: "Considered Delivery",
              text: "Carbon-neutral shipping with reusable packaging and mindful logistics.",
            },
            {
              title: "Made to Last",
              text: "Timeless silhouettes and repair-forward design across every collection.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="glass-panel rounded-3xl p-6 text-[color:var(--ink)]"
            >
              <h3 className="text-xl font-display">{item.title}</h3>
              <p className="mt-3 text-sm text-[color:var(--muted)]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
      <div className="py-8">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
    </>
  )
}
