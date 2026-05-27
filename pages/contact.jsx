import Layout from '../components/Layout';
import Link from 'next/link';

export default function Contact() {
  return (
    <Layout
      title="Contact – CampusBite"
      description="Reach out to CampusBite for partnership, support, or general inquiries."
    >
      <div className="min-h-screen bg-orange-50 pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">
              Get In Touch
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Contact CampusBite
            </h1>
            <p className="text-gray-500 max-w-lg mx-auto">
              Whether you want to partner with us, have a query, or need support — we'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Cards */}
            <div className="space-y-5">
              <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-xl">👤</div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Founder</p>
                    <p className="font-heading font-bold text-gray-900 text-lg">Soaib Akhtar</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-1">
                  <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-xl">✉️</div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Email Us</p>
                    <a
                      href="mailto:support.campusbite@gmail.com"
                      className="font-semibold text-orange-600 hover:text-orange-700 transition-colors break-all"
                    >
                      support.campusbite@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-xl">📞</div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Call / WhatsApp</p>
                    <a
                      href="tel:+918957833269"
                      className="font-semibold text-orange-600 hover:text-orange-700 transition-colors"
                    >
                      +91 8957833269
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-orange-500 rounded-2xl p-7 text-white">
                <h3 className="font-heading font-bold text-lg mb-2">Want to Partner?</h3>
                <p className="text-orange-100 text-sm leading-relaxed mb-4">
                  If you run a canteen, cafe, or food outlet on a campus, we'd love to onboard you. Reach out and let's discuss.
                </p>
                <a
                  href="mailto:support.campusbite@gmail.com?subject=Partnership%20Inquiry%20-%20CampusBite"
                  className="inline-flex items-center gap-2 bg-white text-orange-600 font-semibold px-5 py-2.5 rounded-xl hover:bg-orange-50 transition-colors text-sm"
                >
                  Send Partnership Request →
                </a>
              </div>
            </div>

            {/* Info block */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="font-heading font-bold text-xl text-gray-900 mb-5">Frequently Asked</h2>
              <div className="space-y-6">
                {[
                  {
                    q: 'When is the app launching?',
                    a: 'CampusBite is currently in development. Follow us or sign up to get notified when we launch in your region.',
                  },
                  {
                    q: 'Which campuses can use CampusBite?',
                    a: 'Any closed-campus ecosystem — colleges, universities, hostels, corporate campuses, hospitals, and society campuses.',
                  },
                  {
                    q: 'How do I register my food outlet?',
                    a: 'Reach out to us at support.campusbite@gmail.com or call us. Our team will guide you through the vendor onboarding process.',
                  },
                  {
                    q: 'Is there a fee to partner?',
                    a: 'Onboarding details and pricing will be shared during the partnership discussion. Contact us to know more.',
                  },
                ].map((faq, i) => (
                  <div key={i} className="border-b border-gray-100 pb-5 last:border-0 last:pb-0">
                    <p className="font-semibold text-gray-900 mb-1.5 text-sm">{faq.q}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
