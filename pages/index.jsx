import Layout from '../components/Layout';
import Link from 'next/link';

// ─── Icons ──────────────────────────────────────────────────────────────────

const Icon = ({ path, className = 'w-6 h-6' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={path} />
  </svg>
);

const icons = {
  queue: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
  token: 'M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z',
  clock: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  live: 'M13 10V3L4 14h7v7l9-11h-7z',
  vendor: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
  qr: 'M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z',
  realtime: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
  campus: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  check: 'M5 13l4 4L19 7',
  arrow: 'M13 7l5 5m0 0l-5 5m5-5H6',
  phone: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
};

// ─── Hero Section ────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50">
      {/* Background blobs */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-orange-100/60 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-20 w-[400px] h-[400px] rounded-full bg-amber-100/50 blur-3xl pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle, #f9731630 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 animate-fade-up">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            Smart Dining & Queue Management Platform
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 animate-fade-up animate-delay-100">
            Smarter Dining for{' '}
            <span className="text-gradient">Modern Campus</span>{' '}
            Ecosystems
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl animate-fade-up animate-delay-200">
            CampusBite helps users preorder meals, reduce waiting time, and experience faster food pickup through smart queue management, digital tokens, and real-time order coordination.
          </p>

          <p className="text-sm font-semibold text-orange-600 italic mb-8 animate-fade-up animate-delay-200">
            "Bhukh Mitao, Time Bachao"
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animate-delay-300">
            <button className="flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3.5 rounded-2xl font-semibold hover:bg-gray-800 transition-all shadow-lg hover:-translate-y-0.5">
              <Icon path={icons.phone} className="w-5 h-5" />
              Download App
              <span className="ml-1 text-xs bg-orange-500 text-white px-2 py-0.5 rounded-full">Coming Soon</span>
            </button>
            <Link
              href="#partner"
              className="flex items-center justify-center gap-2 bg-orange-500 text-white px-6 py-3.5 rounded-2xl font-semibold hover:bg-orange-600 transition-all shadow-lg shadow-orange-200 hover:-translate-y-0.5"
            >
              Partner With Us
              <Icon path={icons.arrow} className="w-4 h-4" />
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 animate-fade-up animate-delay-400">
            {[
              { val: '5+', label: 'Campus Types' },
              { val: '0 min', label: 'Queue Wait Goal' },
              { val: '100%', label: 'Digital Ordering' },
            ].map(stat => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-gray-900 font-heading">{stat.val}</div>
                <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* App Mockup */}
        <div className="flex justify-center lg:justify-end animate-fade-up animate-delay-200">
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 bg-orange-400/20 blur-3xl rounded-full scale-110" />

            {/* Phone frame */}
            <div className="relative w-64 sm:w-72 bg-gray-900 rounded-[3rem] p-2.5 shadow-2xl shadow-gray-900/40 animate-float">
              <div className="bg-white rounded-[2.5rem] overflow-hidden h-[520px] sm:h-[580px] relative">
                {/* Status bar */}
                <div className="bg-orange-500 px-6 pt-6 pb-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-white/70 text-xs">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 border border-white/70 rounded-sm">
                        <div className="w-3/4 h-full bg-white/70 rounded-sm" />
                      </div>
                    </div>
                  </div>
                  <p className="text-white/80 text-xs">Good Morning 👋</p>
                  <p className="text-white font-bold text-lg font-heading">What's for lunch?</p>
                </div>

                {/* Search bar */}
                <div className="mx-4 -mt-4 bg-white rounded-2xl shadow-lg p-3 flex items-center gap-2 border border-gray-100">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span className="text-gray-400 text-xs">Search outlets...</span>
                </div>

                {/* Outlets */}
                <div className="px-4 mt-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Nearby Outlets</p>
                  {[
                    { name: 'Main Canteen', tag: 'Open', wait: '~3 min', color: 'bg-green-100 text-green-700' },
                    { name: 'Juice Corner', tag: 'Busy', wait: '~8 min', color: 'bg-orange-100 text-orange-700' },
                    { name: 'Snack Cafe', tag: 'Open', wait: '~1 min', color: 'bg-green-100 text-green-700' },
                  ].map(outlet => (
                    <div key={outlet.name} className="flex items-center justify-between bg-gray-50 rounded-xl p-3 mb-2 border border-gray-100">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 text-sm">🍽️</div>
                        <div>
                          <p className="text-xs font-semibold text-gray-800">{outlet.name}</p>
                          <p className="text-[10px] text-gray-500">Wait: {outlet.wait}</p>
                        </div>
                      </div>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${outlet.color}`}>
                        {outlet.tag}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom nav */}
                <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 flex justify-around">
                  {['🏠', '🔍', '📋', '👤'].map((icon, i) => (
                    <div key={i} className={`flex flex-col items-center ${i === 0 ? 'text-orange-500' : 'text-gray-400'}`}>
                      <span className="text-lg">{icon}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -left-8 top-16 bg-white shadow-xl rounded-2xl p-3 flex items-center gap-2.5 border border-orange-100 animate-pulse-soft">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-sm">✓</span>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-800">Order Ready!</p>
                <p className="text-[10px] text-gray-500">Token #A-12</p>
              </div>
            </div>

            <div className="absolute -right-6 bottom-32 bg-white shadow-xl rounded-2xl p-3 border border-orange-100">
              <p className="text-[10px] text-gray-500 mb-1">Queue Status</p>
              <p className="text-sm font-bold text-orange-500 font-heading">2 min</p>
              <p className="text-[10px] text-gray-400">estimated wait</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── About Section ───────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 text-white shadow-2xl shadow-orange-200">
              <div className="text-5xl mb-4">🏫</div>
              <h3 className="font-heading text-2xl font-bold mb-3">Built for Campus Ecosystems</h3>
              <p className="text-orange-100 text-sm leading-relaxed">
                From college canteens to corporate cafeterias — CampusBite powers every closed-campus dining experience.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {['Colleges', 'Hostels', 'Corporates', 'Hospitals', 'Cafeterias', 'Society Hubs'].map(tag => (
                  <div key={tag} className="bg-white/10 rounded-xl px-3 py-2 text-sm font-medium text-white">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-amber-400 rounded-2xl w-28 h-28 flex items-center justify-center shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-white font-heading">0</div>
                <div className="text-xs text-amber-100 font-medium">min waste</div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">
              About CampusBite
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-5 leading-tight">
              Designed for Where You Eat Every Day
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              CampusBite is built for closed-campus food ecosystems where users depend on internal food outlets such as canteens, cafes, hostel mess, juice corners, snack shops, and institutional cafeterias.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The platform helps organize food ordering, reduce queue congestion, and improve vendor efficiency during peak hours — transforming the chaotic lunch rush into a smooth, digital experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Problem Section ─────────────────────────────────────────────────────────

function Problems() {
  const problems = [
    { icon: '⏳', title: 'Long Food Queues', desc: 'Peak hours bring crushing queues, leaving students and employees starving during short breaks.' },
    { icon: '⏱️', title: 'Time Wasted on Breaks', desc: 'Limited break windows mean users often skip meals or return to work hungry and late.' },
    { icon: '🗂️', title: 'Manual Token Confusion', desc: 'Paper tokens and verbal ordering cause order mix-ups, disputes, and frustration for everyone.' },
    { icon: '📊', title: 'No Rush Visibility', desc: 'Users have no way to see how busy an outlet is before walking over — wasting precious time.' },
    { icon: '📦', title: 'Vendor Overwhelm', desc: 'High-volume orders during rush hours make it nearly impossible for vendors to manage efficiently.' },
  ];

  return (
    <section className="section-pad bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-block bg-red-100 text-red-600 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">
            The Problem
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Campus Dining Is Broken
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Every campus has the same daily battle — disorganized queues, confused orders, and missed meals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover">
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="font-heading font-semibold text-gray-900 mb-2">{p.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Solution Section ─────────────────────────────────────────────────────────

function Solutions() {
  const columns = [
    {
      icon: '👤',
      title: 'For Users',
      color: 'from-orange-500 to-orange-600',
      bg: 'bg-orange-50',
      border: 'border-orange-200',
      points: [
        'Discover internal food outlets',
        'Preorder meals in advance',
        'Get assigned pickup slots',
        'Skip long queues entirely',
        'Track order status in real-time',
      ],
    },
    {
      icon: '🏪',
      title: 'For Vendors',
      color: 'from-amber-500 to-orange-500',
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      points: [
        'Receive organized digital orders',
        'Manage menu items digitally',
        'Handle peak-hour rush efficiently',
        'Improve order coordination',
        'View sales and order insights',
      ],
    },
    {
      icon: '🏛️',
      title: 'For Campuses',
      color: 'from-blue-500 to-indigo-600',
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      points: [
        'Reduce crowd congestion',
        'Improve cafeteria operations',
        'Enable smoother food pickup',
        'Support digital campus infrastructure',
        'Improve overall user experience',
      ],
    },
  ];

  return (
    <section id="solution" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">
            The Solution
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            One Platform, Three Perspectives
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            CampusBite brings value to every stakeholder in the campus dining ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {columns.map((col, i) => (
            <div key={i} className={`${col.bg} border ${col.border} rounded-3xl p-7 card-hover`}>
              <div className={`w-14 h-14 bg-gradient-to-br ${col.color} rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-md`}>
                {col.icon}
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-900 mb-5">{col.title}</h3>
              <ul className="space-y-3">
                {col.points.map((pt, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-gray-600">
                    <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      <Icon path={icons.check} className="w-3 h-3 text-green-500" />
                    </div>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Features Section ─────────────────────────────────────────────────────────

function Features() {
  const features = [
    { icon: icons.queue, title: 'Smart Queue Management', desc: 'Intelligent queue flow reduces wait time and crowd congestion at peak hours.' },
    { icon: icons.token, title: 'Digital Token System', desc: 'Unique digital tokens ensure accurate order tracking and pickup without confusion.' },
    { icon: icons.clock, title: 'Pickup Slot Scheduling', desc: 'Users book preferred pickup slots so food is ready exactly when they arrive.' },
    { icon: icons.live, title: 'Live Rush Indicator', desc: 'Real-time visibility into outlet busyness so users can plan their visit smartly.' },
    { icon: icons.vendor, title: 'Vendor Order Management', desc: 'Vendors get a clean, organized dashboard to handle high-volume orders efficiently.' },
    { icon: icons.qr, title: 'QR-Based UPI Payment', desc: 'Seamless QR code payment support for quick, cashless transactions at any outlet.' },
    { icon: icons.realtime, title: 'Real-Time Order Updates', desc: 'Users receive live notifications on order progress, from placement to pickup.' },
    { icon: icons.campus, title: 'Campus-Focused Experience', desc: 'Purpose-built for closed-campus ecosystems — not generic food delivery platforms.' },
  ];

  return (
    <section id="features" className="section-pad bg-gray-950 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-block bg-orange-500/20 text-orange-400 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">
            Key Features
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Everything You Need for <span className="text-orange-400">Smart Dining</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Powerful features built specifically for campus dining — not retrofitted from generic food apps.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300 card-hover"
            >
              <div className="w-11 h-11 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                <Icon path={f.icon} className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="font-heading font-semibold text-white text-sm mb-2">{f.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ────────────────────────────────────────────────────────────

function HowItWorks() {
  const steps = [
    { num: '01', title: 'Select Outlet & Item', desc: 'User browses available campus outlets and selects their desired food items from the digital menu.', emoji: '🍽️' },
    { num: '02', title: 'Place Your Order', desc: 'Confirm order details, select a pickup slot, and submit — all within the app in seconds.', emoji: '📱' },
    { num: '03', title: 'Pay via QR / UPI', desc: 'Complete payment by scanning the vendor QR code or using the available payment option.', emoji: '💳' },
    { num: '04', title: 'Vendor Prepares Order', desc: 'The vendor verifies payment and begins preparing the order at the right time for the pickup slot.', emoji: '👨‍🍳' },
    { num: '05', title: 'Pick Up with Token', desc: 'User arrives, shows digital token, and picks up their food — no waiting, no confusion.', emoji: '✅' },
  ];

  return (
    <section id="how-it-works" className="section-pad bg-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">
            How It Works
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            From Hunger to Pickup in 5 Steps
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Simple, fast, and stress-free — the way campus dining should be.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-orange-200 mx-20 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-white rounded-full shadow-lg border-4 border-orange-200 flex flex-col items-center justify-center mb-5 relative">
                  <span className="text-2xl">{step.emoji}</span>
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{i + 1}</span>
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-gray-900 text-sm mb-2">{step.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed max-w-[160px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Who It's For ────────────────────────────────────────────────────────────

function ForWho() {
  const audiences = [
    { emoji: '🎓', title: 'Colleges & Universities', desc: 'Student canteens, campus cafes, and food courts serving thousands daily.' },
    { emoji: '🏠', title: 'Hostels', desc: 'Mess management and quick snack ordering for residential students.' },
    { emoji: '🏢', title: 'Corporate Campuses', desc: 'Employee cafeterias managing high-volume lunch orders during office hours.' },
    { emoji: '🏥', title: 'Hospitals', desc: 'Staff and patient dining with scheduled pickup to reduce corridor crowding.' },
    { emoji: '🍴', title: 'Institutional Cafeterias', desc: 'Any large institutional dining facility needing organized order management.' },
    { emoji: '🏘️', title: 'Society Campuses', desc: 'Residential society canteens and food courts for gated communities.' },
  ];

  return (
    <section id="for-who" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">
            Who It's For
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Built for Every Closed Campus
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            If people eat together inside a campus, CampusBite is built for them.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((a, i) => (
            <div key={i} className="group bg-gray-50 border border-gray-100 rounded-2xl p-7 card-hover hover:border-orange-200 hover:bg-orange-50/50">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{a.emoji}</div>
              <h3 className="font-heading font-bold text-gray-900 mb-2">{a.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why CampusBite ───────────────────────────────────────────────────────────

function WhyCampusBite() {
  const points = [
    'Purpose-built for closed-campus dining ecosystems',
    'Not a generic food delivery clone',
    'Focused on internal food operations',
    'Queue intelligence that adapts to rush patterns',
    'Vendor coordination at its core',
    'Faster pickup, happier users',
  ];

  return (
    <section className="section-pad bg-gradient-to-br from-orange-500 to-orange-600 relative overflow-hidden">
      {/* Blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-400/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-700/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-5">
              Why CampusBite?
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Not Just Another Food App
            </h2>
            <p className="text-orange-100 leading-relaxed text-lg">
              CampusBite is purpose-built for closed-campus dining ecosystems. Unlike generic food delivery platforms, it focuses on internal food operations, queue intelligence, vendor coordination, and faster pickup experiences.
            </p>
          </div>

          <div className="space-y-4">
            {points.map((pt, i) => (
              <div key={i} className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl px-5 py-4 border border-white/20">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon path={icons.check} className="w-4 h-4 text-orange-500" />
                </div>
                <span className="text-white font-medium">{pt}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Partner Section ──────────────────────────────────────────────────────────

function Partner() {
  return (
    <section id="partner" className="section-pad bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-5">
          Partner With Us
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-5 leading-tight">
          Grow Your Food Business with CampusBite
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto text-lg">
          Food vendors, canteens, cafes, and institutional dining operators can use CampusBite to manage orders better, reduce rush-hour confusion, and serve users faster. Join the ecosystem that puts organization first.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {[
            { emoji: '📈', title: 'More Sales', desc: 'Digital ordering brings more orders per hour' },
            { emoji: '⚡', title: 'Less Chaos', desc: 'Organized queue and order flow at peak hours' },
            { emoji: '😊', title: 'Happy Customers', desc: 'Faster service means more returning users' },
          ].map((b, i) => (
            <div key={i} className="bg-orange-50 border border-orange-100 rounded-2xl p-6">
              <div className="text-3xl mb-3">{b.emoji}</div>
              <h3 className="font-heading font-bold text-gray-900 mb-1">{b.title}</h3>
              <p className="text-sm text-gray-500">{b.desc}</p>
            </div>
          ))}
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-orange-600 transition-all shadow-xl shadow-orange-200 hover:-translate-y-0.5"
        >
          Contact Us to Partner
          <Icon path={icons.arrow} className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}

// ─── Page Export ──────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Problems />
      <Solutions />
      <Features />
      <HowItWorks />
      <ForWho />
      <WhyCampusBite />
      <Partner />
    </Layout>
  );
}
