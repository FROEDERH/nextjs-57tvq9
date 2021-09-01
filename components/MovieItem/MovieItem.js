import Link from 'next/dist/client/link';
import { Span } from 'next/dist/telemetry/trace';
import link from 'next/link';
import styles from './MovieItem.module.css';

export default function MovieItem({ item, ...props }) {
  return (
    <Link href={`movie/${item.imdbID}`}>
      <a className={styles.item}>
        <img src={item.Poster} />

        <span className={styles.year}> {item.Year} </span>

        <span className={styles.title}> {item.Title} </span>
      </a>
    </Link>
  );
}
