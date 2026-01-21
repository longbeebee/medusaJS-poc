import { HttpTypes } from "@medusajs/types"
import { Text } from "@medusajs/ui"

type OrderDetailsProps = {
  order: HttpTypes.StoreOrder
  showStatus?: boolean
}

const OrderDetails = ({ order, showStatus }: OrderDetailsProps) => {
  const formatStatus = (str: string) => {
    const formatted = str.split("_").join(" ")

    return formatted.slice(0, 1).toUpperCase() + formatted.slice(1)
  }

  return (
    <div className="rounded-2xl border border-[color:var(--outline)] bg-white/70 p-6">
      <Text>
        We have sent the order confirmation details to{" "}
        <span
          className="text-ui-fg-medium-plus font-semibold"
          data-testid="order-email"
        >
          {order.email}
        </span>
        .
      </Text>
      <Text className="mt-2">
        Order date:{" "}
        <span data-testid="order-date">
          {new Date(order.created_at).toDateString()}
        </span>
      </Text>
      <Text className="mt-2 text-ui-fg-interactive">
        Order number: <span data-testid="order-id">{order.display_id}</span>
      </Text>

      <div className="mt-5 flex flex-wrap items-center gap-3 text-compact-small">
        {showStatus && (
          <>
            <span className="rounded-full border border-[color:var(--outline)] bg-white px-3 py-1 text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
              Order status:{" "}
              <span className="text-[color:var(--ink)]" data-testid="order-status">
                {formatStatus(order.fulfillment_status)}
              </span>
            </span>
            <span className="rounded-full border border-[color:var(--outline)] bg-white px-3 py-1 text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
              Payment status:{" "}
              <span
                className="text-[color:var(--ink)]"
                sata-testid="order-payment-status"
              >
                {formatStatus(order.payment_status)}
              </span>
            </span>
          </>
        )}
      </div>
    </div>
  )
}

export default OrderDetails
