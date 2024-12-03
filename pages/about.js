import Head from 'next/head';
import DefaultLayout from "../layouts/DefaultLayout";

export default function About() {
  return (
    <div className={styles.container}>
       <DefaultLayout>
        <Head>
          <title>About</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>About!</h1>
      </DefaultLayout>
    </div>
  );
}
