import react, { useState, useEffect } from 'react';
import Link from 'next/dist/client/link';
import { useRouter } from 'next/router';

export default function Movie() {
  const router = useRouter();
  const id = router.query.id;
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (id != null) {
      fetch(`https://www.omdbapi.com/?apikey=8da00471&s=${id}`)
        .then(x => x.json())
        .then(x => {
          setItem(x);
        });
    }
  }, [id]);

  return (
    <div>
      <Link href={'/'}>Voltar</Link>
      <div>ID: {id}</div>
      <div>name : {item?.Title}</div>
      <div>genre : {item?.Genre}</div>
    </div>
  );
}
