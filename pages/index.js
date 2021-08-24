import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [search, setSearch] = useState('Star Wars');
  const [list, setList] = useState(null);
  const [isLoading, setLoading] = useState(true);

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
