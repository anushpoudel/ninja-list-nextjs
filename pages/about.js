import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const About = () => {
  return (
    <>
      <Head>
        <title>Ninja List | About</title>
      </Head>
      <div>
        <h1 className={styles.title}>About</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus in,
          laboriosam excepturi hic sequi doloremque nihil perferendis quo
          accusantium velit exercitationem dignissimos. Natus neque, cumque
          maiores cupiditate sed recusandae voluptatibus?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus in,
          laboriosam excepturi hic sequi doloremque nihil perferendis quo
          accusantium velit exercitationem dignissimos. Natus neque, cumque
          maiores cupiditate sed recusandae voluptatibus?
        </p>
      </div>
    </>
  );
};

export default About;
