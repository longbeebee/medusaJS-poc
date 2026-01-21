import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import { Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"

export default async function ProductRail({
  collection,
  region,
}: {
  collection: HttpTypes.StoreCollection
  region: HttpTypes.StoreRegion
}) {
  const {
    response: { products: pricedProducts },
  } = await listProducts({
    regionId: region.id,
    queryParams: {
      collection_id: collection.id,
      fields: "*variants.calculated_price",
    },
  })

  if (!pricedProducts) {
    return null
  }

  return (
    <section className="content-container py-12 small:py-20">
      <div className="mb-10 flex flex-col gap-4 small:flex-row small:items-center small:justify-between">
        <div>
          <Text className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
            Featured Collection
          </Text>
          <Text className="mt-2 text-3xl font-display text-[color:var(--ink)]">
            {collection.title}
          </Text>
        </div>
        <InteractiveLink href={`/collections/${collection.handle}`}>
          View all
        </InteractiveLink>
      </div>
      <ul className="grid grid-cols-1 gap-8 xsmall:grid-cols-2 small:grid-cols-3">
        {pricedProducts &&
          pricedProducts.map((product) => (
            <li key={product.id} className="h-full">
              <ProductPreview product={product} region={region} isFeatured />
            </li>
          ))}
      </ul>
    </section>
  )
}
