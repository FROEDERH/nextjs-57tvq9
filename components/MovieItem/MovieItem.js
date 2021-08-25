import styles from './MovieItem.module.css';
export default function MovieItem({item, ...props}){
  
  return(
    <div>
      <img src={item.Poster} />
      {item.Title}
      </div>
  );
}