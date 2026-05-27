import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/#about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-and-conditions', label: 'Terms & Conditions' },
    { href: '/refund-cancellation-policy', label: 'Refund & Cancellation' },
  ];

  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-md shadow-orange-900/30">
                <span className="text-white font-bold text-lg font-heading">C</span>
              </div>
              <span className="font-heading font-bold text-xl">
                Campus<span className="text-orange-400">Bite</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-3">
              Smart Dining & Queue Management Platform for closed-campus ecosystems.
            </p>
            <p className="text-xs text-orange-400 font-medium italic">"Bhukh Mitao, Time Bachao"</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {links.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-orange-400 mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <span className="text-sm text-gray-400">Soaib Akhtar, Founder</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-400 mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <a href="mailto:support.campusbite@gmail.com" className="text-sm text-gray-400 hover:text-orange-400 transition-colors break-all">
                  support.campusbite@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-400 mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <a href="tel:+918957833269" className="text-sm text-gray-400 hover:text-orange-400 transition-colors">
                  +91 8957833269
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">© {year} CampusBite. All rights reserved.</p>
          <p className="text-xs text-gray-600">Built with ❤️ for campus ecosystems across India</p>
        </div>
      </div>
    </footer>
  );
}
