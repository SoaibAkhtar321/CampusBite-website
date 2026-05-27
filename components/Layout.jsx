import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children, title, description }) {
  const defaultTitle = "CampusBite – Smart Dining & Queue Management Platform";

  const defaultDescription =
    "CampusBite helps campus users preorder meals, skip long queues, and experience faster food pickup through smart queue management and digital tokens.";

  const pageTitle = title || defaultTitle;
  const pageDescription = description || defaultDescription;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>

        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />

        <meta name="theme-color" content="#f97316" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white text-gray-950">
        <Navbar />

        <main>{children}</main>

        <Footer />
      </div>
    </>
  );
}