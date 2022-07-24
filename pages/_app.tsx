import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.scss';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Infive</title>
        <meta name="description" content="Short, free coding tutorials for everyone. Learn it in five." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
