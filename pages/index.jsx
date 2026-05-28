import Link from "next/link";

// ─── Icons ──────────────────────────────────────────────────────────────────

const Icon = ({ path, className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d={path}
    />
  </svg>
);

const icons = {
  queue:
    "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
  token:
    "M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z",
  clock:
    "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  live:
    "M13 10V3L4 14h7v7l9-11h-7z",
  vendor:
    "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
  qr:
    "M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z",
  realtime:
    "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
  campus:
    "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  check: "M5 13l4 4L19 7",
  arrow: "M13 7l5 5m0 0l-5 5m5-5H6",
  phone:
    "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
};

// ─── Hero Section ────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-orange-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-[400px] w-[400px] rounded-full bg-amber-100/50 blur-3xl" />

      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, #f9731630 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 py-28 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1.5 text-xs font-semibold text-orange-700 animate-fade-up">
            <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />
            Smart Dining & Queue Management Platform
          </div>

          <h1 className="mb-6 font-heading text-4xl font-bold leading-tight text-gray-900 animate-fade-up animate-delay-100 sm:text-5xl lg:text-6xl">
            Smarter Dining for{" "}
            <span className="text-gradient">Modern Campus</span> Ecosystems
          </h1>

          <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-600 animate-fade-up animate-delay-200">
            CampusBite helps users preorder meals, reduce waiting time, and
            experience faster food pickup through smart queue management,
            digital tokens, and real-time order coordination.
          </p>

          <p className="mb-8 text-sm font-semibold italic text-orange-600 animate-fade-up animate-delay-200">
            “Bhukh Mitao, Time Bachao”
          </p>

          <div className="flex flex-col gap-4 animate-fade-up animate-delay-300 sm:flex-row">
            <button className="flex items-center justify-center gap-2 rounded-2xl bg-gray-900 px-6 py-3.5 font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-gray-800">
              <Icon path={icons.phone} className="h-5 w-5" />
              Download App
              <span className="ml-1 rounded-full bg-orange-500 px-2 py-0.5 text-xs text-white">
                Coming Soon
              </span>
            </button>

            <Link
              href="#partner"
              className="flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-orange-200 transition-all hover:-translate-y-0.5 hover:bg-orange-600"
            >
              Partner With Us
              <Icon path={icons.arrow} className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 animate-fade-up animate-delay-400">
            {[
              { val: "5+", label: "Campus Types" },
              { val: "0 min", label: "Queue Wait Goal" },
              { val: "100%", label: "Digital Ordering" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-2xl font-bold text-gray-900">
                  {stat.val}
                </div>
                <div className="text-xs font-medium text-gray-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center animate-fade-up animate-delay-200 lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 scale-110 rounded-full bg-orange-400/20 blur-3xl" />

            <div className="relative w-64 rounded-[3rem] bg-gray-900 p-2.5 shadow-2xl shadow-gray-900/40 animate-float sm:w-72">
              <div className="relative h-[520px] overflow-hidden rounded-[2.5rem] bg-white sm:h-[580px]">
                <div className="bg-orange-500 px-6 pb-8 pt-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs text-white/70">9:41</span>
                    <div className="flex gap-1">
                      <div className="h-2 w-4 rounded-sm border border-white/70">
                        <div className="h-full w-3/4 rounded-sm bg-white/70" />
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-white/80">Good Morning 👋</p>
                  <p className="font-heading text-lg font-bold text-white">
                    What&apos;s for lunch?
                  </p>
                </div>

                <div className="mx-4 -mt-4 flex items-center gap-2 rounded-2xl border border-gray-100 bg-white p-3 shadow-lg">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <span className="text-xs text-gray-400">
                    Search outlets...
                  </span>
                </div>

                <div className="mt-4 px-4">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Nearby Outlets
                  </p>

                  {[
                    {
                      name: "Main Canteen",
                      tag: "Open",
                      wait: "~3 min",
                      color: "bg-green-100 text-green-700",
                    },
                    {
                      name: "Juice Corner",
                      tag: "Busy",
                      wait: "~8 min",
                      color: "bg-orange-100 text-orange-700",
                    },
                    {
                      name: "Snack Cafe",
                      tag: "Open",
                      wait: "~1 min",
                      color: "bg-green-100 text-green-700",
                    },
                  ].map((outlet) => (
                    <div
                      key={outlet.name}
                      className="mb-2 flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 p-3"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-100 text-sm text-orange-600">
                          🍽️
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-gray-800">
                            {outlet.name}
                          </p>
                          <p className="text-[10px] text-gray-500">
                            Wait: {outlet.wait}
                          </p>
                        </div>
                      </div>

                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${outlet.color}`}
                      >
                        {outlet.tag}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-0 left-0 right-0 flex justify-around border-t border-gray-100 bg-white px-6 py-3">
                  {["🏠", "🔍", "📋", "👤"].map((item, index) => (
                    <div
                      key={item}
                      className={`flex flex-col items-center ${
                        index === 0 ? "text-orange-500" : "text-gray-400"
                      }`}
                    >
                      <span className="text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -left-8 top-16 flex items-center gap-2.5 rounded-2xl border border-orange-100 bg-white p-3 shadow-xl animate-pulse-soft">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                <span className="text-sm text-green-600">✓</span>
              </div>

              <div>
                <p className="text-xs font-bold text-gray-800">Order Ready!</p>
                <p className="text-[10px] text-gray-500">Token #A-12</p>
              </div>
            </div>

            <div className="absolute -right-6 bottom-32 rounded-2xl border border-orange-100 bg-white p-3 shadow-xl">
              <p className="mb-1 text-[10px] text-gray-500">Queue Status</p>
              <p className="font-heading text-sm font-bold text-orange-500">
                2 min
              </p>
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
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <div className="rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 p-8 text-white shadow-2xl shadow-orange-200">
              <div className="mb-4 text-5xl">🏫</div>
              <h3 className="mb-3 font-heading text-2xl font-bold">
                Built for Campus Ecosystems
              </h3>
              <p className="text-sm leading-relaxed text-orange-100">
                From college canteens to corporate cafeterias — CampusBite
                powers every closed-campus dining experience.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  "Colleges",
                  "Hostels",
                  "Corporates",
                  "Hospitals",
                  "Cafeterias",
                  "Society Hubs",
                ].map((tag) => (
                  <div
                    key={tag}
                    className="rounded-xl bg-white/10 px-3 py-2 text-sm font-medium text-white"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 flex h-28 w-28 items-center justify-center rounded-2xl bg-amber-400 shadow-xl">
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-white">
                  0
                </div>
                <div className="text-xs font-medium text-amber-100">
                  min waste
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-4 inline-block rounded-full bg-orange-100 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-700">
              About CampusBite
            </div>

            <h2 className="mb-5 font-heading text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Designed for Where You Eat Every Day
            </h2>

            <p className="mb-6 leading-relaxed text-gray-600">
              CampusBite is built for closed-campus food ecosystems where users
              depend on internal food outlets such as canteens, cafes, hostel
              mess, juice corners, snack shops, and institutional cafeterias.
            </p>

            <p className="leading-relaxed text-gray-600">
              The platform helps organize food ordering, reduce queue
              congestion, and improve vendor efficiency during peak hours —
              transforming the chaotic lunch rush into a smooth, digital
              experience.
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
    {
      icon: "⏳",
      title: "Long Food Queues",
      desc: "Peak hours bring crushing queues, leaving students and employees starving during short breaks.",
    },
    {
      icon: "⏱️",
      title: "Time Wasted on Breaks",
      desc: "Limited break windows mean users often skip meals or return to work hungry and late.",
    },
    {
      icon: "🗂️",
      title: "Manual Token Confusion",
      desc: "Paper tokens and verbal ordering cause order mix-ups, disputes, and frustration for everyone.",
    },
    {
      icon: "📊",
      title: "No Rush Visibility",
      desc: "Users have no way to see how busy an outlet is before walking over — wasting precious time.",
    },
    {
      icon: "📦",
      title: "Vendor Overwhelm",
      desc: "High-volume orders during rush hours make it nearly impossible for vendors to manage efficiently.",
    },
  ];

  return (
    <section className="section-pad bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <div className="mb-4 inline-block rounded-full bg-red-100 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-red-600">
            The Problem
          </div>

          <h2 className="mb-4 font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
            Campus Dining Is Broken
          </h2>

          <p className="mx-auto max-w-xl text-gray-500">
            Every campus has the same daily battle — disorganized queues,
            confused orders, and missed meals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm card-hover"
            >
              <div className="mb-4 text-3xl">{problem.icon}</div>
              <h3 className="mb-2 font-heading font-semibold text-gray-900">
                {problem.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500">
                {problem.desc}
              </p>
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
      icon: "👤",
      title: "For Users",
      color: "from-orange-500 to-orange-600",
      bg: "bg-orange-50",
      border: "border-orange-200",
      points: [
        "Discover internal food outlets",
        "Preorder meals in advance",
        "Get assigned pickup slots",
        "Skip long queues entirely",
        "Track order status in real-time",
      ],
    },
    {
      icon: "🏪",
      title: "For Vendors",
      color: "from-amber-500 to-orange-500",
      bg: "bg-amber-50",
      border: "border-amber-200",
      points: [
        "Receive organized digital orders",
        "Manage menu items digitally",
        "Handle peak-hour rush efficiently",
        "Improve order coordination",
        "View sales and order insights",
      ],
    },
    {
      icon: "🏛️",
      title: "For Campuses",
      color: "from-blue-500 to-indigo-600",
      bg: "bg-blue-50",
      border: "border-blue-200",
      points: [
        "Reduce crowd congestion",
        "Improve cafeteria operations",
        "Enable smoother food pickup",
        "Support digital campus infrastructure",
        "Improve overall user experience",
      ],
    },
  ];

  return (
    <section id="solution" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <div className="mb-4 inline-block rounded-full bg-green-100 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-green-700">
            The Solution
          </div>

          <h2 className="mb-4 font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
            One Platform, Three Perspectives
          </h2>

          <p className="mx-auto max-w-xl text-gray-500">
            CampusBite brings value to every stakeholder in the campus dining
            ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {columns.map((column) => (
            <div
              key={column.title}
              className={`${column.bg} ${column.border} rounded-3xl border p-7 card-hover`}
            >
              <div
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${column.color} text-2xl shadow-md`}
              >
                {column.icon}
              </div>

              <h3 className="mb-5 font-heading text-xl font-bold text-gray-900">
                {column.title}
              </h3>

              <ul className="space-y-3">
                {column.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm text-gray-600"
                  >
                    <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                      <Icon
                        path={icons.check}
                        className="h-3 w-3 text-green-500"
                      />
                    </div>
                    {point}
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
    {
      icon: icons.queue,
      title: "Smart Queue Management",
      desc: "Intelligent queue flow reduces wait time and crowd congestion at peak hours.",
    },
    {
      icon: icons.token,
      title: "Digital Token System",
      desc: "Unique digital tokens ensure accurate order tracking and pickup without confusion.",
    },
    {
      icon: icons.clock,
      title: "Pickup Slot Scheduling",
      desc: "Users book preferred pickup slots so food is ready exactly when they arrive.",
    },
    {
      icon: icons.live,
      title: "Live Rush Indicator",
      desc: "Real-time visibility into outlet busyness so users can plan their visit smartly.",
    },
    {
      icon: icons.vendor,
      title: "Vendor Order Management",
      desc: "Vendors get a clean, organized dashboard to handle high-volume orders efficiently.",
    },
    {
      icon: icons.qr,
      title: "QR-Based UPI Payment",
      desc: "Seamless QR code payment support for quick, cashless transactions at any outlet.",
    },
    {
      icon: icons.realtime,
      title: "Real-Time Order Updates",
      desc: "Users receive live notifications on order progress, from placement to pickup.",
    },
    {
      icon: icons.campus,
      title: "Campus-Focused Experience",
      desc: "Purpose-built for closed-campus ecosystems — not generic food delivery platforms.",
    },
  ];

  return (
    <section
      id="features"
      className="section-pad relative overflow-hidden bg-gray-950 text-white"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-orange-600/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <div className="mb-4 inline-block rounded-full bg-orange-500/20 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-400">
            Key Features
          </div>

          <h2 className="mb-4 font-heading text-3xl font-bold text-white sm:text-4xl">
            Everything You Need for{" "}
            <span className="text-orange-400">Smart Dining</span>
          </h2>

          <p className="mx-auto max-w-xl text-gray-400">
            Powerful features built specifically for campus dining — not
            retrofitted from generic food apps.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 card-hover hover:border-orange-500/30 hover:bg-white/10"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/20">
                <Icon path={feature.icon} className="h-5 w-5 text-orange-400" />
              </div>

              <h3 className="mb-2 font-heading text-sm font-semibold text-white">
                {feature.title}
              </h3>

              <p className="text-xs leading-relaxed text-gray-400">
                {feature.desc}
              </p>
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
    {
      title: "Select Outlet & Item",
      desc: "User browses available campus outlets and selects their desired food items from the digital menu.",
      emoji: "🍽️",
    },
    {
      title: "Place Your Order",
      desc: "Confirm order details, select a pickup slot, and submit — all within the app in seconds.",
      emoji: "📱",
    },
    {
      title: "Pay via QR / UPI",
      desc: "Complete payment by scanning the vendor QR code or using the available payment option.",
      emoji: "💳",
    },
    {
      title: "Vendor Prepares Order",
      desc: "The vendor verifies payment and begins preparing the order at the right time for the pickup slot.",
      emoji: "👨‍🍳",
    },
    {
      title: "Pick Up with Token",
      desc: "User arrives, shows digital token, and picks up their food — no waiting, no confusion.",
      emoji: "✅",
    },
  ];

  return (
    <section id="how-it-works" className="section-pad bg-orange-50">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <div className="mb-4 inline-block rounded-full bg-orange-100 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-700">
            How It Works
          </div>

          <h2 className="mb-4 font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
            From Hunger to Pickup in 5 Steps
          </h2>

          <p className="mx-auto max-w-xl text-gray-500">
            Simple, fast, and stress-free — the way campus dining should be.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-12 z-0 mx-20 hidden h-0.5 bg-orange-200 lg:block" />

          <div className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-5 flex h-24 w-24 flex-col items-center justify-center rounded-full border-4 border-orange-200 bg-white shadow-lg">
                  <span className="text-2xl">{step.emoji}</span>

                  <div className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-orange-500">
                    <span className="text-xs font-bold text-white">
                      {index + 1}
                    </span>
                  </div>
                </div>

                <h3 className="mb-2 font-heading text-sm font-semibold text-gray-900">
                  {step.title}
                </h3>

                <p className="max-w-[160px] text-xs leading-relaxed text-gray-500">
                  {step.desc}
                </p>
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
    {
      emoji: "🎓",
      title: "Colleges & Universities",
      desc: "Student canteens, campus cafes, and food courts serving thousands daily.",
    },
    {
      emoji: "🏠",
      title: "Hostels",
      desc: "Mess management and quick snack ordering for residential students.",
    },
    {
      emoji: "🏢",
      title: "Corporate Campuses",
      desc: "Employee cafeterias managing high-volume lunch orders during office hours.",
    },
    {
      emoji: "🏥",
      title: "Hospitals",
      desc: "Staff and patient dining with scheduled pickup to reduce corridor crowding.",
    },
    {
      emoji: "🍴",
      title: "Institutional Cafeterias",
      desc: "Any large institutional dining facility needing organized order management.",
    },
    {
      emoji: "🏘️",
      title: "Society Campuses",
      desc: "Residential society canteens and food courts for gated communities.",
    },
  ];

  return (
    <section id="for-who" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <div className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700">
            Who It&apos;s For
          </div>

          <h2 className="mb-4 font-heading text-3xl font-bold text-gray-900 sm:text-4xl">
            Built for Every Closed Campus
          </h2>

          <p className="mx-auto max-w-xl text-gray-500">
            If people eat together inside a campus, CampusBite is built for
            them.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="group rounded-2xl border border-gray-100 bg-gray-50 p-7 card-hover hover:border-orange-200 hover:bg-orange-50/50"
            >
              <div className="mb-4 text-4xl transition-transform duration-300 group-hover:scale-110">
                {audience.emoji}
              </div>

              <h3 className="mb-2 font-heading font-bold text-gray-900">
                {audience.title}
              </h3>

              <p className="text-sm leading-relaxed text-gray-500">
                {audience.desc}
              </p>
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
    "Purpose-built for closed-campus dining ecosystems",
    "Not a generic food delivery clone",
    "Focused on internal food operations",
    "Queue intelligence that adapts to rush patterns",
    "Vendor coordination at its core",
    "Faster pickup, happier users",
  ];

  return (
    <section className="section-pad relative overflow-hidden bg-gradient-to-br from-orange-500 to-orange-600">
      <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-orange-400/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-orange-700/30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-5 inline-block rounded-full bg-white/20 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
              Why CampusBite?
            </div>

            <h2 className="mb-6 font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
              Not Just Another Food App
            </h2>

            <p className="text-lg leading-relaxed text-orange-100">
              CampusBite is purpose-built for closed-campus dining ecosystems.
              Unlike generic food delivery platforms, it focuses on internal
              food operations, queue intelligence, vendor coordination, and
              faster pickup experiences.
            </p>
          </div>

          <div className="space-y-4">
            {points.map((point) => (
              <div
                key={point}
                className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-sm"
              >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white">
                  <Icon
                    path={icons.check}
                    className="h-4 w-4 text-orange-500"
                  />
                </div>

                <span className="font-medium text-white">{point}</span>
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
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-5 inline-block rounded-full bg-orange-100 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-700">
          Partner With Us
        </div>

        <h2 className="mb-5 font-heading text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
          Grow Your Food Business with CampusBite
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-600">
          Food vendors, canteens, cafes, and institutional dining operators can
          use CampusBite to manage orders better, reduce rush-hour confusion,
          and serve users faster. Join the ecosystem that puts organization
          first.
        </p>

        <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              emoji: "📈",
              title: "More Sales",
              desc: "Digital ordering brings more orders per hour",
            },
            {
              emoji: "⚡",
              title: "Less Chaos",
              desc: "Organized queue and order flow at peak hours",
            },
            {
              emoji: "😊",
              title: "Happy Customers",
              desc: "Faster service means more returning users",
            },
          ].map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-orange-100 bg-orange-50 p-6"
            >
              <div className="mb-3 text-3xl">{benefit.emoji}</div>
              <h3 className="mb-1 font-heading font-bold text-gray-900">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-500">{benefit.desc}</p>
            </div>
          ))}
        </div>

        <Link
          href="/contact-us"
          className="inline-flex items-center gap-2 rounded-2xl bg-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-orange-200 transition-all hover:-translate-y-0.5 hover:bg-orange-600"
        >
          Contact Us to Partner
          <Icon path={icons.arrow} className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}

// ─── Page Export ──────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Problems />
      <Solutions />
      <Features />
      <HowItWorks />
      <ForWho />
      <WhyCampusBite />
      <Partner />
    </>
  );
}