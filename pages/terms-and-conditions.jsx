import LegalPage from "../components/LegalPage";

export default function TermsAndConditions() {
  return (
    <LegalPage
      badge="Terms & Conditions"
      title="Terms & Conditions"
      description="These Terms & Conditions explain the rules for using CampusBite as a student, user, shopkeeper, vendor, admin, or visitor."
      updatedAt="June 2026"
      sections={[
        {
          title: "1. Acceptance of Terms",
          content: [
            "By accessing or using CampusBite, you agree to these Terms & Conditions, the Privacy Policy, and the Refund & Cancellation Policy.",
            "If you do not agree with these terms, you should not use CampusBite services.",
          ],
        },
        {
          title: "2. About CampusBite",
          content: [
            "CampusBite is a smart dining and queue management platform that enables users to discover campus food outlets, place pickup orders, view order status, and coordinate with shopkeepers.",
            "CampusBite acts as a technology and coordination platform. Food preparation, menu accuracy, pricing, fulfilment, food quality, shop operations, and applicable refunds are primarily the responsibility of the relevant shopkeeper or vendor.",
          ],
        },
        {
          title: "3. Account and Login",
          content: [
            "CampusBite may use Google Sign-In for authentication. Users must provide accurate profile information, including name, phone number, role, and campus or shop-related details where required.",
            "Users are responsible for keeping their Google account and device secure. CampusBite does not ask for or store Google account passwords.",
            "CampusBite may restrict, suspend, or block accounts that provide false information, misuse the platform, create operational issues, or violate these terms.",
          ],
        },
        {
          title: "4. User Responsibilities",
          content: [
            "Users must place orders responsibly, check item details, shop details, price, pickup slot, and payment details before confirming or paying for an order.",
            "Users must provide a valid and reachable phone number. If an incorrect phone number is provided, order support, refund support, and dispute resolution may be affected.",
            "Users must keep payment proof such as UPI screenshot, transaction ID, amount, time, and payer details until the order is completed and any refund issue is resolved.",
            "Users must not place fake orders, misuse payment screenshots, harass shopkeepers, abuse support channels, attempt fraud, or interfere with CampusBite operations.",
          ],
        },
        {
          title: "5. Shopkeeper and Vendor Responsibilities",
          content: [
            "Shopkeepers must keep their menu, price, item availability, shop availability, UPI ID, phone number, pickup slots, and operational status accurate and updated.",
            "If an item is unavailable, the shopkeeper should mark it unavailable. If the shop cannot accept orders, the shopkeeper should close the shop or relevant slots in the dashboard.",
            "If a shopkeeper receives payment but cannot fulfil the order due to item unavailability, shop emergency, gas or electricity issue, unexpected closure, or any other shop-side reason, the shopkeeper is responsible for resolving the refund with the user.",
            "Shopkeepers must not mark a refund as settled unless the refund has actually been sent to the user. False refund settlement marking may lead to admin action or account restrictions.",
          ],
        },
        {
          title: "6. Orders and Pickup",
          content: [
            "Order availability depends on shop status, item availability, pickup slot availability, shop capacity, and operational conditions.",
            "Pickup slots are estimates and may be affected by crowd, preparation time, shop workload, campus conditions, or other operational factors.",
            "Users are responsible for collecting orders during the selected pickup slot and showing the order screen or order details if requested by the shopkeeper.",
          ],
        },
        {
          title: "7. Payments",
          content: [
            "CampusBite may support scan-and-pay or manual UPI payment verification in the MVP version. In this flow, users may pay directly to the shopkeeper or vendor using the shown payment details.",
            "CampusBite is currently not a bank, wallet, escrow service, or payment gateway for such direct payments. CampusBite may record payment status for order tracking and support purposes.",
            "Users should pay only to the payment details shown for the relevant shop and should verify payment details before sending money. Users should never share UPI PINs, passwords, OTPs, or sensitive financial credentials with anyone.",
          ],
        },
        {
          title: "8. Cancellation and Refunds",
          content: [
            "Cancellations and refunds are governed by the CampusBite Refund & Cancellation Policy.",
            "If payment was not received by the shopkeeper, the shopkeeper may cancel the order as payment not received and refund may not be applicable.",
            "If payment was received and the order cannot be fulfilled due to shopkeeper-side or shop-side reasons, the shopkeeper must use the proper cancellation reason and refund pending flow and must manually settle the refund with the user.",
            "Users must provide valid contact details and payment proof for refund support. If the user provides incorrect contact details or cannot provide payment proof, refund support may be limited.",
          ],
        },
        {
          title: "9. Admin Rights and Platform Control",
          content: [
            "CampusBite admins may approve, reject, block, or restrict shopkeeper accounts, users, shops, menu items, orders, or platform access where required for safety, misuse prevention, operational control, or policy enforcement.",
            "Admins may review order, payment status, cancellation, and refund information to support dispute handling and platform operations.",
          ],
        },
        {
          title: "10. Prohibited Activities",
          content: [
            "Users and shopkeepers must not misuse CampusBite, submit false information, create fake orders, fake payment proofs, manipulate order status, misrepresent refunds, abuse other users, attempt unauthorized access, or interfere with the app or website.",
            "Any misuse may result in account blocking, shop restrictions, removal from the platform, or further action as permitted by law.",
          ],
        },
        {
          title: "11. Food Quality and Shop Operations",
          content: [
            "Food quality, hygiene, packaging, preparation, pricing, menu accuracy, and fulfilment are the responsibility of the relevant shopkeeper or vendor.",
            "CampusBite may help users communicate issues to shopkeepers, but CampusBite does not independently prepare, sell, or deliver food unless explicitly stated otherwise.",
          ],
        },
        {
          title: "12. Limitation of Liability",
          content: [
            "CampusBite provides a technology platform to coordinate campus ordering and pickup. We aim to keep the service reliable, but we do not guarantee uninterrupted availability, error-free operation, exact pickup timing, or absence of operational delays.",
            "To the maximum extent permitted by law, CampusBite will not be liable for indirect losses, payment mistakes made outside the platform instructions, shopkeeper-side operational failures, food quality issues, or delays beyond our reasonable control.",
          ],
        },
        {
          title: "13. Privacy",
          content: [
            "Use of CampusBite is also governed by the CampusBite Privacy Policy. By using the platform, you agree that CampusBite may collect and process information as described in the Privacy Policy.",
          ],
        },
        {
          title: "14. Changes to Terms",
          content: [
            "CampusBite may update these Terms & Conditions from time to time. Updated terms will be posted on this page with a revised update date.",
            "Continued use of CampusBite after updates means you accept the updated terms.",
          ],
        },
        {
          title: "15. Contact",
          content: [
            "For questions about these Terms & Conditions, contact CampusBite at support.campusbite@gmail.com.",
          ],
        },
      ]}
    />
  );
}
