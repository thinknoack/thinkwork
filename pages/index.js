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