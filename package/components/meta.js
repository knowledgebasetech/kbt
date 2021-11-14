import Head from "next/head";

export default function Meta() {
  return (
    <Head>
      <meta name="description" content={`Knowledge Base Center.`} />
      <link rel="icon" href="/favicon.ico" />
      <title>Knowledgebase</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700;800&family=Roboto+Mono&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}
