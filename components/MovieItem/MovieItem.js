import styles from './MovieItem.module.css';
export default function MovieItem({ item, ...props }) {
  return (
    <div>
      <img classname="img1" src={item.Poster} />
      {item.Title}
    </div>
  );
}
