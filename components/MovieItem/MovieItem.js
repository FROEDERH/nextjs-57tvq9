export default function MovieItem({item, ...props}){
  return(
    <div>
      <img src={item.Poster} />
      {item.Title}
      </div>
  );
}