import LegalPage from "../components/LegalPage";

export default function RefundCancellationPolicy() {
  return (
    <LegalPage
      badge="Refund & Cancellation Policy"
      title="Refund & Cancellation Policy"
      description="This policy explains how cancellations, payment verification, and manual refunds are handled on CampusBite for students, users, shopkeepers, and admins."
      updatedAt="June 2026"
      sections={[
        {
          title: "1. Overview",
          content: [
            "CampusBite helps users place pickup orders from campus shops and helps shopkeepers manage order fulfilment. This policy applies to orders placed through CampusBite.",
            "CampusBite currently supports a scan-and-pay or manual UPI payment verification flow for MVP usage. This means the user may pay directly to the shopkeeper or vendor using the payment method shown for that shop.",
          ],
        },
        {
          title: "2. CampusBite's Role in Payments",
          content: [
            "CampusBite is currently not a payment gateway, wallet, escrow service, bank, or payment settlement provider. In the scan-and-pay flow, CampusBite may not directly receive, hold, or settle the user's money.",
            "Payment verification may be handled manually by the shopkeeper based on UPI payer name, payment proof, or shopkeeper confirmation. Users should keep their UPI transaction screenshot or payment proof until the order is completed.",
          ],
        },
        {
          title: "3. User Cancellation",
          content: [
            "A user should place an order only after checking the shop, menu item, price, pickup slot, and payment details carefully.",
            "Once payment has been made and the order has been accepted or preparation has started, cancellation may not be available unless the shopkeeper agrees or the shop is unable to fulfil the order.",
            "If a user does not complete payment, the order may remain pending or may be cancelled by the shopkeeper.",
          ],
        },
        {
          title: "4. Shopkeeper Cancellation Before Payment",
          content: [
            "If the shopkeeper has not received payment, the shopkeeper may cancel the order as payment not received.",
            "In such cases, no refund is applicable through CampusBite because payment was not confirmed as received by the shopkeeper.",
          ],
        },
        {
          title: "5. Shopkeeper Cancellation After Payment",
          content: [
            "If the shopkeeper has received full or partial payment but cannot fulfil the order, the shopkeeper must select the correct payment received status and cancellation reason in the CampusBite shopkeeper panel.",
            "Reasons may include item or menu unavailable, shop emergency, gas or electricity issue, shop closing unexpectedly, or other operational issues.",
            "When payment has been received and the order is cancelled by the shopkeeper, the order may be marked as refund pending. The shopkeeper is responsible for manually settling the refund with the user.",
          ],
        },
        {
          title: "6. Refund Responsibility",
          content: [
            "If payment was received by the shopkeeper and the order could not be fulfilled due to shopkeeper-side or shop-side reasons, the shopkeeper is responsible for refunding the user.",
            "If the menu item was unavailable but the shopkeeper forgot to mark it unavailable, or if the shop or slot was open but the shopkeeper could not fulfil the order, the shopkeeper remains responsible for resolving the refund if payment was received.",
            "CampusBite may show refund pending orders to the shopkeeper and admin for tracking and support, but CampusBite may not directly process the refund unless a payment gateway or wallet flow is introduced in the future.",
          ],
        },
        {
          title: "7. Refund Settlement Process",
          content: [
            "When a paid order is cancelled, the user will be able to see the cancellation reason and refund pending status in the app. The user may call the shopkeeper if required.",
            "The shopkeeper should refund the user manually using a suitable payment method and then mark the refund as settled in the CampusBite shopkeeper panel with a refund reference ID or note.",
            "Once the shopkeeper marks the refund as settled, the user may see the refund settled status. If the user has not actually received the refund, the user should contact the shopkeeper and CampusBite support with payment proof.",
          ],
        },
        {
          title: "8. Expected Refund Time",
          content: [
            "Because the current MVP uses manual UPI or scan-and-pay verification, refund timing depends on the shopkeeper's manual settlement. Shopkeepers are expected to settle valid refunds as soon as reasonably possible.",
            "CampusBite recommends that shopkeepers settle valid refund pending orders on the same day where possible, or within a reasonable operational timeframe.",
          ],
        },
        {
          title: "9. User Responsibilities for Refund Support",
          content: [
            "Users must provide a correct and reachable phone number in their CampusBite profile. If the user provides an incorrect or invalid phone number, CampusBite and the shopkeeper may not be able to contact the user for refund support.",
            "Users must keep valid payment proof such as UPI transaction screenshot, transaction ID, payer name, date, time, and amount. Without payment proof, refund support may be limited.",
            "If the user pays to the wrong UPI ID, pays outside the CampusBite shown shop payment method, or pays without confirming the shop details, refund support may be difficult and will depend on the facts of the case.",
          ],
        },
        {
          title: "10. Non-Refundable or Limited Support Cases",
          content: [
            "Refund may not be applicable where payment was not received by the shopkeeper, the user failed to pay, the user did not collect the order after it was prepared, the user entered an incorrect phone number and cannot be contacted, or the user cannot provide payment proof.",
            "Refund support may also be limited where the payment was made outside the CampusBite order flow, to an incorrect recipient, or in a manner that cannot be verified by the shopkeeper or CampusBite.",
          ],
        },
        {
          title: "11. Disputes",
          content: [
            "If there is a dispute between a user and a shopkeeper regarding payment or refund, CampusBite may review order data, payment status, refund status, cancellation reason, and communication details available on the platform.",
            "CampusBite may assist in coordination, but final manual refund settlement in the current MVP scan-and-pay flow remains the responsibility of the shopkeeper who received the payment.",
          ],
        },
        {
          title: "12. Policy Updates",
          content: [
            "CampusBite may update this Refund & Cancellation Policy as the platform evolves, especially if online payment gateway, wallet, automated refund, or escrow-based payment flows are introduced.",
            "Updated versions will be posted on this page with the revised update date.",
          ],
        },
        {
          title: "13. Contact",
          content: [
            "For refund or cancellation support, contact CampusBite at support.campusbite@gmail.com with your order ID, phone number, payment proof, transaction ID, and a clear description of the issue.",
          ],
        },
      ]}
    />
  );
}
