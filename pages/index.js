import Head from 'next/head';
import Image from 'next/image';
import { Featured } from '../components/Featured';
import { Pizzalist } from '../components/Pizzalist';
import styles from '../styles/Home.module.css';

export default function Home() {
   return (
      <div className={styles.container}>
         <Head>
            <title>Pizza Next App</title>
            <meta name="description" content="Pizza next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Featured />
         <Pizzalist />
      </div>
   );
}
