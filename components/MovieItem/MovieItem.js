import styles from './MovieItem.module.css';

export default function MovieItem({ item, ...props }) {
  return (
    <div className={styles.h1}>
      <img className={styles.img1} src={item.Poster} />
      {item.Title}
    </div>
  );
}
