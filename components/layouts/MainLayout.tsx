import styles from './MainLayout.module.css';
import Head from 'next/head';
import { NavBar } from '../NavBar/NavBar';
import Description from '../Description';
import { FC } from 'react';

export type ReactProps = {
  children?: React.ReactNode;
};

export const MainLayout: FC<ReactProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar></NavBar>
      <main className={styles.main}>
        {children}
        <Description></Description>
      </main>
    </div>
  );
};
