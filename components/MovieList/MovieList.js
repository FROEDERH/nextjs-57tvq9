import MovieItem from "../MovieItem/MovieItem";
import styles from './MovieList,module.css';

export default function MovieList({list, ...props}){
  return (
   <div>
      {list?.map(item => {
         return <MovieItem item={item} />;
        })}
   </div>
  );
}