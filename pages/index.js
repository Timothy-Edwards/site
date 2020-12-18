import Head from 'next/head';
import React, { useState } from 'react';

export default function Home() {
  let [emoji, setEmoji] = useState('🤠');

  const changeEmojii = () => {
    const newEmoji = emoji === '🤠' ? '👽' : '🤠';
    setEmoji(newEmoji);
  }

  return (
    <div className="container">
      <Head>
        <title>Tim Edwards</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <h1 className="title">
        Tim Edwards <span>{emoji}</span>
       </h1>
      <main>

        <div className="grid">
          <a href="/posts/first-post" className="card">
            <h3>Hi &rarr;</h3>
            <p>Hello :)</p>
          </a>
        </div>
      </main>
      <footer onClick={changeEmojii}>
        {emoji}
      </footer>

      <style jsx>{`
        ::-webkit-scrollbar {
          width: 0px;  /* Remove scrollbar space */
          background: transparent;  /* Optional: just make scrollbar invisible */
        }

        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #70a86a;
        }

        main {
          width: 100%;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: white;
          overflow-y: scroll;
        }

        footer {
          width: 100%;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: sticky;
          bottom: 0px;
          background-color: #70a86a;
          cursor: pointer;

          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          height: 100px;
          line-height: 1.15;
          font-size: 4rem;
          background-color: #70a86a;;
          width: 100%;
          top: 0px;
          position: sticky;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: consolas;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease, background-color 0.15s ease;
          min-width: 300px;
        }

        .card:hover,
        .card:focus,
        .card:active {
          background-color: lightblue;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
          font-family: consolas;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
          max-height: 4rem;
          text-overflow: elipsis;
          overflow-y: hidden;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
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
  )
}
