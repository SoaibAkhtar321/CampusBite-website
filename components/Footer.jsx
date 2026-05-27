import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#features", label: "Features" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  const legalLinks = [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-and-conditions", label: "Terms & Conditions" },
    {
      href: "/refund-cancellation-policy",
      label: "Refund & Cancellation Policy",
    },
  ];

  return (
    <footer className="bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-md shadow-orange-900/30">
                <span className="font-heading text-lg font-bold text-white">
                  CB
                </span>
              </div>

              <span className="font-heading text-xl font-bold">
                Campus<span className="text-orange-400">Bite</span>
              </span>
            </div>

            <p className="max-w-md text-sm leading-6 text-gray-400">
              CampusBite is a campus food ordering platform that helps students
              order food from campus vendors, reduce queues, and save time.
            </p>

            <p className="mt-3 text-xs font-medium italic text-orange-400">
              “Bhukh Mitao, Time Bachao”
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
              Quick Links
            </h4>

            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-orange-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-300">
              Legal
            </h4>

            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-orange-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Support */}
        <div className="mt-10 rounded-2xl border border-gray-800 bg-gray-900/60 p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
                Support
              </h4>

              <p className="mt-2 text-sm text-gray-400">
                For order, payment, refund, vendor, or account support, contact
                CampusBite.
              </p>
            </div>

            <a
              href="mailto:support.campusbite@gmail.com"
              className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              support.campusbite@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-gray-800 pt-6 sm:flex-row">
          <p className="text-xs text-gray-500">
            © {year} CampusBite. All rights reserved.
          </p>

          <p className="text-xs text-gray-600">
            Built for campus ecosystems across India.
          </p>
        </div>
      </div>
    </footer>
  );
}