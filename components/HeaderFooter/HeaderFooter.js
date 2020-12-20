import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import Head from "next/head";
import styles from "./HeaderFooter.module.css";
export default function PageHeader({
  emoji: emoji,
  changeEmoji: changeEmoji,
  children: children,
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title> Tim Edwards </title>
        <link rel='icon' href='/favicon.png'/>
      </Head>
      <h1 className={styles.title}>
        Tim Edwards <span> {emoji} </span>
      </h1>
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
        🖱️&rarr;
        <span className={styles.cursor} onClick={changeEmoji}>
          {emoji}
        </span>
      </footer>
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
