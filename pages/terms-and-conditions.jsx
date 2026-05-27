import LegalPage from "../components/LegalPage";

export default function TermsAndConditions() {
  return (
    <LegalPage
      badge="Terms & Conditions"
      title="Terms & Conditions"
      description="These Terms & Conditions govern the use of CampusBite by students, vendors, and other users of the platform."
      updatedAt="May 2026"
      sections={[
        {
          title: "1. Acceptance of Terms",
          content: [
            "By accessing or using CampusBite, you agree to follow these Terms & Conditions. If you do not agree with these terms, you should not use the platform.",
          ],
        },
        {
          title: "2. About CampusBite",
          content: [
            "CampusBite is a campus food ordering platform that connects students with campus food vendors such as canteens, cafes, mess counters, and snack shops.",
            "CampusBite helps users place food orders, select pickup slots, reduce queues, and manage campus food ordering more efficiently.",
          ],
        },
        {
          title: "3. Accurate Information",
          content: [
            "Users must provide accurate and complete information during registration, ordering, payment confirmation, and communication.",
            "CampusBite may restrict or block accounts that provide false, misleading, incomplete, or fraudulent information.",
          ],
        },
        {
          title: "4. Platform Role",
          content: [
            "CampusBite acts only as a platform connecting students with campus food vendors.",
            "CampusBite does not directly prepare, cook, package, or deliver food items.",
            "Food preparation, pricing, menu accuracy, hygiene, availability, and order fulfillment are the responsibility of the respective vendor.",
          ],
        },
        {
          title: "5. Vendor Responsibility",
          content: [
            "Vendors are responsible for preparing food, accepting or rejecting orders, managing menu items, maintaining shop timings, and handing over orders to users.",
            "Any issue related to food taste, quality, ingredients, hygiene, incorrect items, or preparation delay should be addressed with the vendor first.",
            "CampusBite may help coordinate support but cannot guarantee a specific resolution in every vendor-related dispute.",
          ],
        },
        {
          title: "6. User Responsibilities",
          content: [
            "Users must review order details carefully before placing an order.",
            "Users are responsible for selecting the correct food items, quantity, pickup slot, and payment information.",
            "Users should collect their order within the selected pickup slot or as instructed by the vendor.",
            "Users must not misuse the platform for fake orders, spam, abusive behavior, fraudulent payment claims, or any unlawful activity.",
          ],
        },
        {
          title: "7. Orders and Cancellation",
          content: [
            "Orders once placed may not always be cancellable, especially if the vendor has accepted the order or started food preparation.",
            "Cancellation availability may depend on order status, vendor confirmation, and operational conditions.",
            "Users should refer to the Refund & Cancellation Policy for more details.",
          ],
        },
        {
          title: "8. Payments",
          content: [
            "Users are responsible for completing payments correctly using the available payment method.",
            "For QR-based or UPI payments, users must ensure payment is made to the correct vendor account and provide correct payment confirmation details when required.",
            "Payment verification may be required before the vendor prepares or hands over the order.",
            "CampusBite does not store sensitive bank details, UPI PINs, card numbers, CVV, or payment passwords.",
          ],
        },
        {
          title: "9. Misuse and Account Blocking",
          content: [
            "CampusBite may temporarily or permanently block users, vendors, or accounts involved in fake orders, spam activity, abusive behavior, repeated misuse, fraudulent payments, or violation of these terms.",
            "CampusBite may also restrict access if an account creates operational, security, or trust-related issues for the platform.",
          ],
        },
        {
          title: "10. Service Availability",
          content: [
            "CampusBite service availability may vary depending on campus, vendor availability, shop timings, internet connectivity, technical issues, maintenance, or operational conditions.",
            "We do not guarantee uninterrupted, error-free, or always-available service.",
          ],
        },
        {
          title: "11. Intellectual Property",
          content: [
            "The CampusBite name, logo, branding, website design, app design, content, and software are owned by CampusBite or its founders unless otherwise stated.",
            "Users may not copy, reproduce, modify, distribute, or misuse CampusBite branding, content, or software without permission.",
          ],
        },
        {
          title: "12. Limitation of Liability",
          content: [
            "CampusBite is not responsible for indirect, incidental, or consequential damages arising from vendor issues, food quality concerns, service interruptions, user mistakes, payment provider delays, or technical failures.",
            "CampusBite’s role is limited to providing a digital platform for campus food ordering and support coordination.",
          ],
        },
        {
          title: "13. Changes to Terms",
          content: [
            "CampusBite may update these Terms & Conditions from time to time. Updated versions will be posted on this page with a revised update date.",
            "Continued use of CampusBite after updates means you accept the updated terms.",
          ],
        },
        {
          title: "14. Contact Us",
          content: [
            "For questions about these Terms & Conditions, contact CampusBite support at support.campusbite@gmail.com.",
          ],
        },
      ]}
    />
  );
}