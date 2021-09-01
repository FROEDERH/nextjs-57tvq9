import styles from './MovieItem.module.css';

export default function MovieItem({ item, ...props }) {
  return (
    <div className={styles.item}>
      <img className={styles.item img} src={item.Poster} />
      {item.Title}
    </div>
  );
}
