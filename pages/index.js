import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [search, setSearch] = useState('Star Wars');
  const [list, setList] = useState(null);
  const [isLoading, setLoading] = useState(true);

  function SearchInAPI(){
    setIsLoading(true);
    fetch(`https://www.omdbapi.com/?apikey=8da00471&s=`)
    .then(x => x.json())
    .then(x => {
      setIsLoading(false);
      setList(x);
    });
  }

  return (
    <div>
      <h1>Buscando por {search}</h1>
      <div>
        {isLoading && <span>Carregando...</span>}
        {list?.map(item => {
          <div>{item.name}</div>;
        })}
      </div>
    </div>
  );
}
