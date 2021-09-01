import { useState, useEffect } from 'react';
import MovieList from '../components/MovieList/MovieList';
import useDebounce from '../hooks/useDebounce';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [search, setSearch] = useState('Star Wars');
  const [list, setList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const debouncedSearch = useDebounce(search, 500);

  function SearchInAPI() {
    setIsLoading(true);
    fetch(`https://www.omdbapi.com/?apikey=8da00471&s=${debouncedSearch}`)
      .then(x => x.json())
      .then(x => {
        setIsLoading(false);
        setList(x.Search);
      });
  }

  useEffect(() => {
    SearchInAPI();
  }, [debouncedSearch]);

  function handleSearchChanges(event) {
    const value = event.target.value;
    setSearch(value);
  }

  return (
    <div>
      <input onChange={handleSearchChanges} />
      <h1>Buscando por {search}</h1>
      <div>
        {isLoading && <span>Carregando...</span>}
        <MovieList list={list} />
      </div>
    </div>
  );
}
