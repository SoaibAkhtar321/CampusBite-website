import LegalPage from "../components/LegalPage";

export default function PrivacyPolicy() {
  return (
    <LegalPage
      badge="Privacy Policy"
      title="Privacy Policy"
      description="This Privacy Policy explains how CampusBite collects, uses, stores, and protects information of students, shopkeepers, admins, and other users who access CampusBite services."
      updatedAt="June 2026"
      sections={[
        {
          title: "1. Introduction",
          content: [
            "CampusBite is a smart campus dining and pickup-ordering platform that helps users discover campus food outlets, place pickup orders, track order status, and communicate with shopkeepers when required.",
            "This Privacy Policy applies to the CampusBite website, mobile application, admin panel, shopkeeper panel, and related services. By using CampusBite, you agree to the collection and use of information as described in this policy.",
          ],
        },
        {
          title: "2. Information We Collect",
          content: [
            "When you use CampusBite, we may collect your name, Google account email address, phone number, role, account status, campus or university details where applicable, and profile information required to operate the service.",
            "For students or users placing orders, we collect order-related information such as selected shop, food items, quantity, total amount, pickup date, pickup slot, order status, payment status, cancellation reason, refund status, and order history.",
            "For shopkeepers or vendors, we may collect shop name, owner or shopkeeper contact details, campus or location details, shop status, menu items, item availability, prices, preparation time, pickup slot controls, UPI ID or payment collection details, and shop operational information.",
          ],
        },
        {
          title: "3. Google Sign-In and Account Data",
          content: [
            "CampusBite uses Google Sign-In for account authentication. We may receive basic information from your Google account, such as your name, email address, and profile information made available by Google for sign-in purposes.",
            "CampusBite does not ask users to create or store a password for Google Sign-In accounts. We do not store your Google password.",
          ],
        },
        {
          title: "4. Phone Number and Profile Information",
          content: [
            "CampusBite collects phone numbers to support order coordination, payment verification, cancellation communication, and refund support. For the MVP version, phone number verification through OTP may not be implemented.",
            "Users are responsible for providing a valid and reachable phone number. Incorrect or unreachable phone numbers may make order support, refund coordination, or dispute resolution difficult.",
          ],
        },
        {
          title: "5. Payment-Related Information",
          content: [
            "CampusBite may collect limited payment-related information such as payment status, UPI payer name, payment verification status, refund status, refund reference ID, refund notes, and cancellation or refund reasons.",
            "CampusBite does not collect or store UPI PINs, card numbers, CVV, net banking passwords, bank login details, or other sensitive payment credentials.",
            "Where CampusBite uses scan-and-pay or manual UPI payment verification, payment may be made directly by the user to the shopkeeper or vendor. CampusBite may record payment status for order tracking and support purposes, but CampusBite may not directly hold or settle such funds.",
          ],
        },
        {
          title: "6. How We Use Information",
          content: [
            "We use collected information to create and manage accounts, verify user roles, process and track orders, show shop menus, manage pickup slots, support payment verification, enable cancellation and refund workflows, send order notifications, improve platform performance, and provide customer support.",
            "We may also use information to prevent misuse, detect suspicious activity, enforce our terms, support admin review, maintain platform security, and improve the CampusBite user experience.",
          ],
        },
        {
          title: "7. Information Shared With Shopkeepers and Admins",
          content: [
            "When a user places an order, the relevant shopkeeper may see order details necessary to prepare and fulfil the order, including items ordered, pickup slot, user name, phone number, UPI payer name where provided, payment status, and cancellation or refund-related details.",
            "CampusBite admins may access user, shopkeeper, shop, order, payment status, cancellation, and refund information for approval, moderation, support, operational review, dispute handling, and platform safety.",
            "We do not sell, rent, or trade personal information to third parties for marketing purposes.",
          ],
        },
        {
          title: "8. Notifications and Communications",
          content: [
            "CampusBite may send order-related notifications such as order placed, accepted, preparing, ready for pickup, cancelled, refund pending, or refund settled notifications.",
            "Users may contact shopkeepers or CampusBite support through call, WhatsApp, email, or other available support channels. Communication details may be used only for support and operational purposes.",
          ],
        },
        {
          title: "9. Firebase, Cloud Services, and Technical Data",
          content: [
            "CampusBite may use third-party infrastructure and services such as Firebase, Firestore, Firebase Authentication, Firebase Cloud Messaging, hosting providers, analytics, crash reporting, and other technical tools to operate and secure the service.",
            "We may collect technical information such as device type, app version, operating system, crash logs, login status, and usage activity to improve reliability, security, and performance.",
          ],
        },
        {
          title: "10. Data Security",
          content: [
            "We take reasonable technical and organizational measures to protect user data from unauthorized access, misuse, loss, or alteration. These measures may include authenticated access, database security rules, role-based access, and controlled admin access.",
            "However, no digital platform can guarantee absolute security. Users should keep their devices, Google accounts, and payment apps secure and should not share payment credentials or sensitive information with anyone.",
          ],
        },
        {
          title: "11. Data Retention",
          content: [
            "We retain account, order, payment status, cancellation, and refund-related data for as long as necessary to provide the service, resolve disputes, comply with legal obligations, prevent misuse, maintain business records, and improve platform operations.",
            "Certain order and refund records may be retained even after account deletion requests where required for legal, security, fraud prevention, accounting, dispute resolution, or operational purposes.",
          ],
        },
        {
          title: "12. User Rights and Requests",
          content: [
            "Users may request access, correction, or deletion of their personal information by contacting CampusBite support. We may need to verify your identity before processing such requests.",
            "If certain information is necessary for ongoing order handling, payment verification, refund settlement, legal compliance, or dispute resolution, we may retain it for a reasonable period as required.",
          ],
        },
        {
          title: "13. Children and Campus Users",
          content: [
            "CampusBite is intended for campus and institution-related food ordering use. Users should use the platform responsibly and in accordance with applicable laws, institutional rules, and shop policies.",
          ],
        },
        {
          title: "14. Updates to This Policy",
          content: [
            "CampusBite may update this Privacy Policy from time to time. Updated versions will be posted on this page with a revised update date.",
            "Continued use of CampusBite after policy updates means you accept the updated Privacy Policy.",
          ],
        },
        {
          title: "15. Contact Us",
          content: [
            "For privacy questions, correction requests, deletion requests, or support, contact CampusBite at support.campusbite@gmail.com.",
          ],
        },
      ]}
    />
  );
}
