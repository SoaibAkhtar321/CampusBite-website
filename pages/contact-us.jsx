import Head from "next/head";

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Contact Us | CampusBite</title>
        <meta
          name="description"
          content="Contact CampusBite support for partnerships, orders, payments, refunds, vendors, and campus food ordering support."
        />
      </Head>

      <section className="min-h-screen bg-orange-50 px-4 pb-20 pt-28">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-14 text-center">
            <div className="mb-4 inline-block rounded-full bg-orange-100 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-700">
              Get In Touch
            </div>

            <h1 className="mb-4 font-heading text-4xl font-bold text-gray-900 sm:text-5xl">
              Contact CampusBite
            </h1>

            <p className="mx-auto max-w-lg text-gray-500">
              Whether you want to partner with us, have a query, or need support,
              we would love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Contact Cards */}
            <div className="space-y-5">
              <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm">
                <div className="mb-3 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-xl">
                    👤
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Founder
                    </p>
                    <p className="font-heading text-lg font-bold text-gray-900">
                      Soaib Akhtar
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-xl">
                    ✉️
                  </div>

                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Email Us
                    </p>

                    <a
                      href="mailto:support.campusbite@gmail.com"
                      className="break-all font-semibold text-orange-600 transition-colors hover:text-orange-700"
                    >
                      support.campusbite@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-xl">
                    📞
                  </div>

                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Call / WhatsApp
                    </p>

                    <a
                      href="tel:+918957833269"
                      className="font-semibold text-orange-600 transition-colors hover:text-orange-700"
                    >
                      +91 8957833269
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-orange-500 p-7 text-white">
                <h3 className="mb-2 font-heading text-lg font-bold">
                  Want to Partner?
                </h3>

                <p className="mb-4 text-sm leading-relaxed text-orange-100">
                  If you run a canteen, cafe, or food outlet on a campus, we
                  would love to onboard you. Reach out and let us discuss.
                </p>

                <a
                  href="mailto:support.campusbite@gmail.com?subject=Partnership%20Inquiry%20-%20CampusBite"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-orange-600 transition-colors hover:bg-orange-50"
                >
                  Send Partnership Request →
                </a>
              </div>
            </div>

            {/* FAQ Block */}
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <h2 className="mb-5 font-heading text-xl font-bold text-gray-900">
                Frequently Asked
              </h2>

              <div className="space-y-6">
                {[
                  {
                    q: "What is CampusBite?",
                    a: "CampusBite is a campus food ordering platform that helps students order food from campus vendors, reduce waiting time, and manage pickup more easily.",
                  },
                  {
                    q: "When is the app launching?",
                    a: "CampusBite is currently in MVP development and testing. We are preparing it for campus-level launch and Play Store release.",
                  },
                  {
                    q: "Which campuses can use CampusBite?",
                    a: "CampusBite is designed for colleges, universities, hostels, corporate campuses, hospitals, and other closed-campus food ecosystems.",
                  },
                  {
                    q: "How do I register my food outlet?",
                    a: "Reach out to us at support.campusbite@gmail.com or call us. Our team will guide you through the vendor onboarding process.",
                  },
                  {
                    q: "How can I get support for an order or payment?",
                    a: "Email us with your registered phone number, order details, payment proof, and a clear explanation of the issue.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-100 pb-5 last:border-0 last:pb-0"
                  >
                    <p className="mb-1.5 text-sm font-semibold text-gray-900">
                      {faq.q}
                    </p>

                    <p className="text-sm leading-relaxed text-gray-500">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}