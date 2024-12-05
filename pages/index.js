import Head from "next/head";
import Experience from "../components/Experience"
import ClientsList from "../components/ClientsList"

export default function About() {
  return (
    <div className="col-container">
      <Head>
        <link
          rel="preload"
          href="https://use.typekit.net/af/637952/00000000000000007735f02a/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3"
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
        <title>ThinkNoack | The portfolio of Gregory Noack</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="column c1">
        <div className="box b1">
          <h1>
            <span className="think">Think</span>
            <span className="noack">Noack</span>
          </h1>
          <p>I am a Software Developer specializing in UX Design working at Stanford University from Portland, Oregon.</p>
          <img src="./gn.jpg" alt="graphic illustration style picture of Gregory Noack"/>
        </div>
      </div>
      <div className="column c2">
        <div className="box b1"><Experience /></div>
      </div>
      <div className="column c3">
       
        <div className="box b1"><ClientsList/></div>
      </div>
    </div>
  );
}