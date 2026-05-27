import Layout from '../components/Layout';

function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h2 className="font-heading text-xl font-bold text-gray-900 mb-3">{title}</h2>
      <div className="text-gray-600 leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

export default function RefundPolicy() {
  return (
    <Layout
      title="Refund & Cancellation Policy – CampusBite"
      description="Understand CampusBite's refund and cancellation policy for food orders placed on our platform."
    >
      <div className="min-h-screen bg-gray-50 pt-24 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-12">
            <div className="mb-10 pb-8 border-b border-gray-100">
              <div className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">
                Legal
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Refund & Cancellation Policy</h1>
              <p className="text-sm text-gray-400">Last updated: June 2025</p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8">
              <p className="text-sm text-amber-800 font-medium leading-relaxed">
                <strong>Important Notice:</strong> CampusBite is a platform that connects users with campus food vendors. Since payments on CampusBite are primarily QR-based and made directly to the vendor, refunds are handled in coordination with the respective vendor.
              </p>
            </div>

            <Section title="1. Order Cancellation">
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Users may request order cancellation <strong>before the vendor begins food preparation</strong>. Once preparation has started, cancellation may not be possible.</li>
                <li>To cancel an order, users should contact the vendor directly or reach out to CampusBite support immediately.</li>
                <li>CampusBite cannot guarantee cancellation acceptance once the order has been confirmed by the vendor.</li>
                <li>Repeated cancellations after confirmation may result in suspension of the user's account.</li>
              </ul>
            </Section>

            <Section title="2. Refund Eligibility">
              <p>Refunds may be considered in the following situations:</p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>The vendor confirms the order cannot be fulfilled (e.g., item unavailability after payment).</li>
                <li>Incorrect order preparation confirmed by the vendor.</li>
                <li>Duplicate or accidental payment made by the user, with proof of transaction.</li>
                <li>Technical error on the platform that led to incorrect charging.</li>
              </ul>
              <p className="text-sm">
                Refunds are <strong>not guaranteed</strong> simply by request and are subject to vendor confirmation and investigation.
              </p>
            </Section>

            <Section title="3. QR-Based Payment Refunds">
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Since payments are made directly to the vendor's UPI/QR code, the refund must be initiated by the vendor to the user's original payment source.</li>
                <li>CampusBite does not directly process or hold payments and therefore cannot independently initiate refunds for QR-based transactions.</li>
                <li>Users should retain their payment screenshot or UTR number as proof for any refund request.</li>
                <li>CampusBite support will act as a coordinator between the user and vendor to facilitate refund resolution.</li>
              </ul>
            </Section>

            <Section title="4. Refund Process">
              <p>To request a refund, please follow these steps:</p>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>Contact the vendor at the outlet directly, explaining the issue.</li>
                <li>If unresolved, reach out to CampusBite support with:
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Your order details (outlet name, items, date/time)</li>
                    <li>Payment screenshot or UTR number</li>
                    <li>Description of the issue</li>
                  </ul>
                </li>
                <li>Our team will review the case and coordinate with the vendor.</li>
                <li>Resolution timeline depends on vendor cooperation and typically takes 3–7 business days.</li>
              </ol>
            </Section>

            <Section title="5. Non-Refundable Cases">
              <p>Refunds will generally NOT be processed in the following cases:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li>User placed the order by mistake but food preparation has already started.</li>
                <li>User failed to pick up the order within the designated pickup slot.</li>
                <li>User provided incorrect order details and the vendor prepared as instructed.</li>
                <li>Taste or personal preference dissatisfaction (not a quality defect).</li>
              </ul>
            </Section>

            <Section title="6. Contact for Refund Support">
              <div className="bg-orange-50 border border-orange-100 rounded-xl p-4">
                <p className="text-sm font-semibold text-gray-800 mb-2">CampusBite Support Team</p>
                <p className="text-sm text-gray-600">📧 Email: <a href="mailto:support.campusbite@gmail.com" className="text-orange-600 hover:underline">support.campusbite@gmail.com</a></p>
                <p className="text-sm text-gray-600">📞 Phone / WhatsApp: <a href="tel:+918957833269" className="text-orange-600 hover:underline">+91 8957833269</a></p>
                <p className="text-sm text-gray-500 mt-2">Please mention "Refund Request" in your subject line for faster resolution.</p>
              </div>
            </Section>
          </div>
        </div>
      </div>
    </Layout>
  );
}
