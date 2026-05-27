import Layout from '../components/Layout';

function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">{title}</h2>
      <div className="text-gray-600 leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

export default function PrivacyPolicy() {
  return (
    <Layout
      title="Privacy Policy – CampusBite"
      description="CampusBite's privacy policy explains how we collect, use, and protect your personal information."
    >
      <div className="min-h-screen bg-gray-50 pt-24 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-12">
            {/* Header */}
            <div className="mb-10 pb-8 border-b border-gray-100">
              <div className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">
                Legal
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Privacy Policy</h1>
              <p className="text-sm text-gray-400">Last updated: June 2025</p>
            </div>

            <Section title="1. Introduction">
              <p>
                Welcome to CampusBite ("we," "our," or "us"). CampusBite is a smart dining and queue management platform for closed-campus ecosystems. This Privacy Policy explains how we collect, use, and protect your personal information when you use our application or services.
              </p>
              <p>
                By using CampusBite, you agree to the collection and use of information in accordance with this policy.
              </p>
            </Section>

            <Section title="2. Information We Collect">
              <p>We may collect the following types of information when you register or use CampusBite:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li><strong>Personal Information:</strong> Your name, email address, and phone number when you create an account.</li>
                <li><strong>Order Details:</strong> Information about food orders you place, including outlet name, items ordered, order time, and pickup slot.</li>
                <li><strong>Payment Information:</strong> If applicable, payment confirmation details such as a payment screenshot or UTR (Unique Transaction Reference) number for QR-based UPI payments. We do not store full payment card details.</li>
                <li><strong>Device Information:</strong> Basic device type and operating system information for app compatibility purposes.</li>
                <li><strong>Usage Data:</strong> How you interact with the app, including pages visited and features used, to improve our service.</li>
              </ul>
            </Section>

            <Section title="3. How We Use Your Information">
              <p>The information we collect is used solely for the following purposes:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li>Processing and fulfilling your food orders</li>
                <li>Sending order status updates and notifications</li>
                <li>Verifying payments where required</li>
                <li>Providing customer support and resolving disputes</li>
                <li>Improving our platform, features, and user experience</li>
                <li>Communicating service-related updates</li>
              </ul>
              <p>We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
            </Section>

            <Section title="4. Firebase & Technology Stack">
              <p>
                CampusBite uses <strong>Google Firebase</strong> for authentication (Firebase Auth), database management (Firestore), and cloud storage. Your data is stored securely on Firebase servers in compliance with Google's data protection standards.
              </p>
              <p>
                By using CampusBite, you acknowledge that your data may be processed by Firebase/Google in accordance with their Privacy Policy.
              </p>
            </Section>

            <Section title="5. Data Security">
              <p>
                We implement industry-standard security measures to protect your personal data. Access to user data is restricted to authorized personnel only. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </Section>

            <Section title="6. Data Retention">
              <p>
                We retain your personal data only for as long as necessary to provide our services or as required by applicable laws. You may request deletion of your account and associated data by contacting us.
              </p>
            </Section>

            <Section title="7. Your Rights">
              <p>You have the right to:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your account and data</li>
                <li>Withdraw consent for data processing (which may affect service availability)</li>
              </ul>
            </Section>

            <Section title="8. Contact Us">
              <p>
                If you have any questions about this Privacy Policy or how your data is handled, please contact us at:
              </p>
              <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 mt-3">
                <p className="text-sm font-semibold text-gray-800">CampusBite Support</p>
                <p className="text-sm text-gray-600">Email: <a href="mailto:support.campusbite@gmail.com" className="text-orange-600 hover:underline">support.campusbite@gmail.com</a></p>
                <p className="text-sm text-gray-600">Phone: +91 8957833269</p>
              </div>
            </Section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
