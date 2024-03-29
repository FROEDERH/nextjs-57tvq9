import react, { useState, useEffect } from 'react';
import Link from 'next/dist/client/link';
import { useRouter } from 'next/router';
import styles from './styles.module.css';

export default function Movie() {
  const router = useRouter();
  const id = router.query.id;
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (id != null) {
      fetch(`https://www.omdbapi.com/?apikey=8da00471&i=${id}`)
        .then(x => x.json())
        .then(x => {
          setItem(x);
        });
    }
  }, [id]);

  return (
    <div>
      <Link href={'/'}>
        <a className={styles.voltar}>Voltar</a>
      </Link>
      <img className={styles.img} src={item?.Poster} />
      <div className={styles.div1}>
        <div className={styles.id}>ID: {id}</div>
        <div className={styles.name}>Name : {item?.Title}</div>
        <div className={styles.genre}>Genre : {item?.Genre}</div>
      </div>
    </div>
  );
}
