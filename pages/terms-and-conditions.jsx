import Layout from '../components/Layout';

function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">{title}</h2>
      <div className="text-gray-600 leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

export default function Terms() {
  return (
    <Layout
      title="Terms & Conditions – CampusBite"
      description="Read CampusBite's terms and conditions governing use of our smart dining platform."
    >
      <div className="min-h-screen bg-gray-50 pt-24 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-12">
            <div className="mb-10 pb-8 border-b border-gray-100">
              <div className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">
                Legal
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Terms & Conditions</h1>
              <p className="text-sm text-gray-400">Last updated: June 2025</p>
            </div>

            <Section title="1. Acceptance of Terms">
              <p>
                By downloading, accessing, or using the CampusBite application or website ("Platform"), you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.
              </p>
            </Section>

            <Section title="2. About CampusBite">
              <p>
                CampusBite is a smart dining and queue management platform designed for closed-campus ecosystems. CampusBite connects users with internal food vendors (canteens, cafes, mess, snack shops, etc.) operating within a campus. CampusBite acts as a facilitator and is not directly responsible for food preparation, quality, or fulfillment.
              </p>
            </Section>

            <Section title="3. Vendor Responsibility">
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li>The food vendor or outlet is solely responsible for food preparation, quality, hygiene, and timely fulfillment of orders.</li>
                <li>CampusBite does not prepare, handle, or deliver food items.</li>
                <li>Any disputes related to food quality, incorrect orders, or preparation should be addressed directly with the vendor in the first instance.</li>
                <li>CampusBite may assist in dispute coordination but cannot guarantee resolution outcomes.</li>
              </ul>
            </Section>

            <Section title="4. User Obligations">
              <p>As a user of CampusBite, you agree to:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li>Provide accurate and correct order, contact, and payment details at all times.</li>
                <li>Collect your order within the designated pickup slot/time. Missed pickups are the user's responsibility.</li>
                <li>Not misuse the platform for fraudulent orders, fake payments, or any unlawful purpose.</li>
                <li>Be respectful toward vendors and campus staff.</li>
              </ul>
            </Section>

            <Section title="5. Payments">
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li>Payments on CampusBite may be facilitated through QR-based UPI payments at the vendor's shop or through other available payment options.</li>
                <li>Payment verification is conducted by the vendor at the time of order confirmation.</li>
                <li>Users must ensure payments are completed correctly before their order is considered confirmed.</li>
                <li>CampusBite does not store payment card details. UPI payment references (UTR) may be stored for verification and dispute resolution purposes.</li>
              </ul>
            </Section>

            <Section title="6. Order Cancellations">
              <p>
                Please refer to our Refund & Cancellation Policy for details on order cancellations. Once food preparation has begun, cancellations may not be accepted.
              </p>
            </Section>

            <Section title="7. Intellectual Property">
              <p>
                All content, branding, and technology on the CampusBite platform, including the name, logo, design, and software, are the intellectual property of CampusBite and its founders. Unauthorized reproduction or use is prohibited.
              </p>
            </Section>

            <Section title="8. Limitation of Liability">
              <p>
                CampusBite is provided on an "as-is" basis. To the maximum extent permitted by law, CampusBite shall not be liable for any indirect, incidental, or consequential damages arising from:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li>Food quality or vendor non-fulfillment</li>
                <li>Technical downtime or service interruptions</li>
                <li>Payment disputes between user and vendor</li>
                <li>Loss of data due to circumstances beyond our control</li>
              </ul>
            </Section>

            <Section title="9. Modifications">
              <p>
                CampusBite reserves the right to update or modify these Terms at any time. Continued use of the platform after changes constitutes acceptance of the revised Terms.
              </p>
            </Section>

            <Section title="10. Contact">
              <div className="bg-orange-50 border border-orange-100 rounded-xl p-4">
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
