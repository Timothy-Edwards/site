import Head from "next/head";
import styles from "./HeaderFooter.module.css";
import { useState } from "react";
export default function PageHeader({ children: children }) {
  let [emoji, setEmoji] = useState("🤠");

  const changeEmoji = () => {
    const newEmoji = emoji === "🤠" ? "👽" : "🤠";
    setEmoji(newEmoji);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title> Tim Edwards </title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <a href="/"> {emoji} </a>
        </h1>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
         Made by Tim
        </footer>
      </div>
      <style jsx global>{`
        ::-webkit-scrollbar {
          width: 0px; /* Remove scrollbar space */
          background: transparent; /* Optional: just make scrollbar invisible */
        }
        
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
