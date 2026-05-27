import LegalPage from "../components/LegalPage";

export default function PrivacyPolicy() {
  return (
    <LegalPage
      badge="Privacy Policy"
      title="Privacy Policy"
      description="This Privacy Policy explains how CampusBite collects, uses, stores, and protects user information when students and campus vendors use our platform."
      updatedAt="May 2026"
      sections={[
        {
          title: "1. Introduction",
          content: [
            "CampusBite is a campus food ordering platform that helps students order food from campus vendors, reduce waiting time, and manage pickup more efficiently.",
            "This Privacy Policy explains how we collect, use, store, and protect your information when you use our website, app, or services.",
          ],
        },
        {
          title: "2. Information We Collect",
          content: [
            "We may collect personal information such as your name, email address, phone number, university or campus details, user role, and account information required to provide CampusBite services.",
            "We may also collect order-related information including food items, quantity, price, pickup slot, order status, vendor/shop details, and order history.",
          ],
        },
        {
          title: "3. Payment Information",
          content: [
            "CampusBite may collect limited payment-related information such as payment status, UPI payer name, transaction reference, payment screenshot, or confirmation details required for order verification.",
            "CampusBite does not store sensitive bank account details, UPI PINs, card numbers, CVV, or payment passwords.",
          ],
        },
        {
          title: "4. Device and Usage Information",
          content: [
            "We may collect basic device and usage information such as device type, operating system, app activity, login status, crash logs, and technical data to improve reliability, security, and user experience.",
          ],
        },
        {
          title: "5. Firebase and Backend Usage",
          content: [
            "CampusBite uses Firebase and backend services for authentication, database storage, order management, vendor management, notifications, and app functionality.",
            "Your data may be stored securely on cloud infrastructure provided by trusted third-party service providers such as Google Firebase.",
          ],
        },
        {
          title: "6. Permissions",
          content: [
            "CampusBite may request permissions such as notification, phone, contact, or internet access only when required for specific app features such as order updates, support, communication, or account verification.",
            "Users can manage app permissions from their device settings.",
          ],
        },
        {
          title: "7. How We Use Your Information",
          content: [
            "We use collected information to create and manage accounts, process orders, verify payments, show order status, support vendors, provide customer support, improve service quality, and prevent misuse of the platform.",
            "We do not sell, rent, or trade your personal information to third parties for marketing purposes.",
          ],
        },
        {
          title: "8. Data Security",
          content: [
            "We take reasonable technical and organizational measures to protect user data from unauthorized access, misuse, loss, or alteration.",
            "However, no digital platform can guarantee absolute security, and users are responsible for keeping their login credentials safe.",
          ],
        },
        {
          title: "9. Data Retention",
          content: [
            "We retain user data only as long as necessary to provide our services, resolve disputes, comply with legal requirements, prevent misuse, or improve platform operations.",
            "Users may request deletion of their account and associated data by contacting CampusBite support.",
          ],
        },
        {
          title: "10. User Rights",
          content: [
            "Users may request access, correction, or deletion of their personal information by contacting CampusBite support.",
            "Certain data may be retained where required for legal, security, payment verification, dispute resolution, or operational purposes.",
          ],
        },
        {
          title: "11. Policy Updates",
          content: [
            "CampusBite may update this Privacy Policy from time to time. Updated versions will be posted on this page with a revised update date.",
            "Continued use of CampusBite after policy updates means you accept the updated Privacy Policy.",
          ],
        },
        {
          title: "12. Contact Us",
          content: [
            "If you have any questions about this Privacy Policy or how your data is handled, contact us at support.campusbite@gmail.com.",
          ],
        },
      ]}
    />
  );
}