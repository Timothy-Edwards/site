import styles from "./PostCard.module.css";
export default function PostCard({ header: header, tagline: tagline }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <a href="/posts/first-post">
          <h3>{header} &rarr;</h3>
        </a>
        <p>{tagline}</p>
      </div>
    </div>
  );
}
