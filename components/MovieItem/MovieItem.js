import Link from 'next/dist/client/link';
import { Span } from 'next/dist/telemetry/trace';
import link from 'next/link';
import styles from './MovieItem.module.css';

export default function MovieItem({ item, ...props }) {
  return (
    <Link href={`movie/${item.imdbID}`}>
      <a className={styles.item}>
        <img className={styles.itemimg} src={item.Poster} />

        <span className={styles.Year} src={item.Year}>
          {' '}
        </span>

        <span className={styles.Title} src={item.Title}>
          {' '}
          {item.Title}{' '}
        </span>
      </a>
    </Link>
  );
}
