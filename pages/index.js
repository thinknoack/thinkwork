import Head from "next/head";
// import Experience from "../components/Experience";
// import ClientsList from "../components/ClientsList";
import Image from 'next/image';
import dynamic from 'next/dynamic';

const ClientsList = dynamic(() => import('../components/ClientsList'), {
  ssr: false, // Disable server-side rendering if not needed
});
const Experience = dynamic(() => import('../components/Experience'), {
  ssr: false, // Disable server-side rendering if not needed
});

export default function About() {
  return (
    <div className="col-container">
      <Head>
      <link rel="preload" href="/gn.jpg" as="image" />
        <link
          rel="preload"
          href="https://p.typekit.net/p.css?s=1&k=dju5vil&ht=tk&f=1699.1703.48139.48140.48141.48142.55481&a=13721005&app=typekit&e=css"
          as="style"
        />
        <link
          rel="preload"
          href="https://use.typekit.net/af/954d59/000000000000000077584e63/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://use.typekit.net/af/d1fd39/000000000000000077584e69/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://use.typekit.net/af/3c43ea/00000000000000007735f02b/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://use.typekit.net/af/dc3a4b/00000000000000007753652d/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        <title>ThinkNoack | The portfolio of Gregory Noack</title>
        <meta
          name="description"
          content="The portfolio of Gregory Noack, a Software Developer specializing in User Experience Design based in Portland, Oregon."
        />
        <meta property="og:title" content="ThinkNoack Portfolio" />
        <meta property="og:description" content="Explore the work and experience of Gregory Noack." />
        <meta property="og:image" content="/gn.jpg" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Gregory Noack",
              "jobTitle": "Software Developer",
              "description": "Specializing in User Experience Design based in Portland, Oregon",
              "url": "https://thinknoack.com",
              "image": "https://thinknoack.com/gn.jpg"
            }),
          }}
        />
      </Head>
      <header className="column c1">
        <div className="box b1">
          <h1>
            <span className="think">Think</span>
            <span className="noack">Noack</span>
          </h1>
          <p>
            My name is Gregory Noack. I'm a Software Developer specializing in
            User Experience Design and based in Portland, Oregon.
          </p>
          <Image
            src="/gn.jpg"
            alt="graphic illustration style picture of Gregory Noack"
            width={300} // Specify dimensions to improve layout shift
            height={341}
            priority // Ensures it's loaded ASAP
          />
        </div>
      </header>
      <section className="column c2">
        <div className="box b1">
          <Experience />
        </div>
      </section>
      <section className="column c3">
        <div className="box b1">
          <ClientsList />
        </div>
      </section>
    </div>
  );
}
