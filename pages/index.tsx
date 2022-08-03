import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HomeFeature from "../src/feature/home/HomeFeature";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <HomeFeature />
    </div>
  );
};

export default Home;
