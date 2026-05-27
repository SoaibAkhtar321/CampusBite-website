import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children, title, description }) {
  const defaultTitle = 'CampusBite – Smart Dining & Queue Management Platform';
  const defaultDesc = 'CampusBite helps campus users preorder meals, skip long queues, and experience faster food pickup through smart queue management and digital tokens.';

  return (
    <>
      <Head>
        <title>{title || defaultTitle}</title>
        <meta name="description" content={description || defaultDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title || defaultTitle} />
        <meta property="og:description" content={description || defaultDesc} />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#f97316" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
