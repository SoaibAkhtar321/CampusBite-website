
import Head from "next/head";

export default function LegalPage({
  title,
  description,
  badge,
  updatedAt,
  sections,
}) {
  return (
    <>
      <Head>
        <title>{title} | CampusBite</title>
        <meta name="description" content={description} />
      </Head>

      <section className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm sm:p-10 lg:p-12">
            <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
              {badge}
            </span>

            <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl lg:text-5xl">
              {title}
            </h1>

            <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
              {description}
            </p>

            <p className="mt-4 text-sm font-medium text-gray-500">
              Last updated: {updatedAt}
            </p>

            <div className="mt-10 space-y-8">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-xl font-bold text-gray-900">
                    {section.title}
                  </h2>

                  <div className="mt-3 space-y-3 text-sm leading-7 text-gray-600 sm:text-base">
                    {section.content.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}