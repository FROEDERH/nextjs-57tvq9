import styles from './MovieItem.module.css';

export default function MovieItem({ item, ...props }) {
  return (
    <div className={styles.item}>
      <img className={styles.itemimg} src={item.Poster} />
      {item.Title}
    </div>
  );
}
