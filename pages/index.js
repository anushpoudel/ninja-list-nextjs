import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
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
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
