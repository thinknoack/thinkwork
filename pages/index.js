import Head from "next/head";
import styles from "../styles/Home.module.scss";
import ClientsList from "../components/ClientsList"
import Experience from "../components/Experience"
import ProjectList from "../components/ProjectList"

const Home = () => {

 

  return (
    <section>
      <div className={styles.homehead}>
        <h1>SLG</h1>
      </div> 
      <Head>
      <link
          rel="preload"
          href="https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu4mxP.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/roboto/v29/KFOkCnqEu92Fr1Mu51xIIzc.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <title>ThinkNoack | The portfolio of Gregory Noack</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>        
      <ProjectList />
      <Experience />
      <ClientsList/>
    </section>
  );
};

export default Home;