import LegalPage from "../components/LegalPage";

export default function RefundCancellationPolicy() {
  return (
    <LegalPage
      badge="Refund Policy"
      title="Refund & Cancellation Policy"
      description="This policy explains how refunds and cancellation-related cases are handled in the current MVP version of CampusBite."
      updatedAt="May 2026"
      sections={[
        {
          title: "1. Current Cancellation Availability",
          content: [
            "In the current MVP version of CampusBite, users do not have a direct in-app option to cancel an order after placing it.",
            "Users should carefully review their selected items, quantity, pickup slot, total amount, and payment details before confirming an order.",
            "If a user faces an urgent issue after placing an order, they may contact CampusBite support or the respective vendor, but cancellation is not guaranteed.",
          ],
        },
        {
          title: "2. No Cancellation After Order Processing Starts",
          content: [
            "Once an order has been placed and the vendor has accepted it or started preparing the food, cancellation may not be possible.",
            "Food preparation involves vendor time, ingredients, and operational cost, so orders cannot always be reversed after processing begins.",
          ],
        },
        {
          title: "3. Refund Eligibility",
          content: [
            "A refund may be considered if payment is deducted but the order is not successfully created in the CampusBite system due to a technical issue.",
            "Refund may also be considered in cases of duplicate payment, accidental payment, failed order creation, or confirmed technical failure.",
            "Refund approval depends on payment proof, order status, vendor confirmation, and verification by CampusBite support.",
          ],
        },
        {
          title: "4. Payment Deducted but Order Not Placed",
          content: [
            "If payment is deducted but the order does not appear in CampusBite, the user should contact support with valid payment proof.",
            "CampusBite will verify the issue and assist with refund coordination where applicable.",
            "Users should share details such as registered phone number, vendor/shop name, payment screenshot, UPI reference or UTR number, amount, and transaction time.",
          ],
        },
        {
          title: "5. QR-Based or UPI Payments",
          content: [
            "In the current MVP version, payments may be made directly to the vendor through QR code or UPI.",
            "Since payment may go directly to the vendor, the refund may need to be processed by the respective vendor.",
            "CampusBite may help coordinate between the user and vendor, but CampusBite may not directly hold or control vendor-received payments.",
            "Users should keep payment screenshots, UTR number, payer name, order details, and transaction time for verification.",
          ],
        },
        {
          title: "6. No Refund Cases",
          content: [
            "Refund may not be provided after the vendor has accepted the order and started preparing the food.",
            "Refund may not be applicable for incorrect orders placed by the user, wrong pickup slot selection, failure to collect the order on time, or change of mind after placing the order.",
            "Taste preference, personal dissatisfaction, or delays caused by user-side issues may not always qualify for refund.",
          ],
        },
        {
          title: "7. Vendor-Related Issues",
          content: [
            "If a vendor is unable to fulfill an accepted order, CampusBite may help coordinate a resolution between the user and vendor.",
            "Refund or replacement decisions may depend on vendor confirmation, food preparation status, payment verification, and the nature of the issue.",
          ],
        },
        {
          title: "8. Technical Failure Refund Clause",
          content: [
            "If payment is deducted due to a technical failure but the order is not successfully placed, users should contact CampusBite support as soon as possible.",
            "CampusBite will review the technical issue and assist with refund processing or coordination where applicable.",
          ],
        },
        {
          title: "9. Refund Timeline",
          content: [
            "Refund timelines may depend on the payment provider, bank, UPI platform, or vendor involved.",
            "Approved refunds may take several business days to reflect in the user's account.",
            "CampusBite cannot guarantee exact bank, UPI, payment provider, or vendor processing timelines.",
          ],
        },
        {
          title: "10. How to Request Refund Support",
          content: [
            "To request refund support, contact support.campusbite@gmail.com with your name, registered phone number, order details, vendor/shop name, payment proof, UPI reference or UTR number if available, and a clear description of the issue.",
            "Please mention 'Refund Request' in your email subject for faster support.",
          ],
        },
        {
          title: "11. Contact Us",
          content: [
            "For refund-related support, contact CampusBite at support.campusbite@gmail.com.",
          ],
        },
      ]}
    />
  );
}