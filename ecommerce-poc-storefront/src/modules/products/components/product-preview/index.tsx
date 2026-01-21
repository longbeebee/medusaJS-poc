import { Text } from "@medusajs/ui"
import { listProducts } from "@lib/data/products"
import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  // const pricedProduct = await listProducts({
  //   regionId: region.id,
  //   queryParams: { id: [product.id!] },
  // }).then(({ response }) => response.products[0])

  // if (!pricedProduct) {
  //   return null
  // }

  const { cheapestPrice } = getProductPrice({
    product,
  })

  return (
    <LocalizedClientLink
      href={`/products/${product.handle}`}
      className="group block"
    >
      <div
        data-testid="product-wrapper"
        className="h-full rounded-3xl border border-[color:var(--outline)] bg-white/70 p-4 shadow-[0_18px_40px_rgba(31,28,23,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(31,28,23,0.16)]"
      >
        <Thumbnail
          thumbnail={product.thumbnail}
          images={product.images}
          size="full"
          isFeatured={isFeatured}
          className="rounded-2xl"
        />
        <div className="mt-5 flex items-center justify-between">
          <Text
            className="text-base font-semibold text-[color:var(--ink)]"
            data-testid="product-title"
          >
            {product.title}
          </Text>
          <div className="flex items-center gap-x-2 text-sm text-[color:var(--muted)]">
            {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
