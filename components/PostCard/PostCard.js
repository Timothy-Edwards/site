import styles from './PostCard.module.css';
export default function PostCard ({header: header, tagline: tagline}) {
    return(
        <a href="/posts/first-post" className={styles.card}>
            <h3>{header} &rarr;</h3>
            <p>{tagline}</p>
        </a>
    );
};