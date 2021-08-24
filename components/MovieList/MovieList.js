import MovieItem from "../MovieItem/MovieItem";

export default function MovieList({list, ...props}){
  return (
   <div>
      {list?.map(item => {
         return <MovieItem item={item} />;
        })}
   </div>
  );
}