import react, { useState, useEffect } from 'react';
import Link from 'next/dist/client/link';
import { useRouter } from 'next/router';

export default function Movie() {
  const router = useRouter();
  const id = router.query.id;
  const [item, setItem] = useState(null);

  return (
    <div>
      <Link href={'/'}>Voltar</Link>
      <div>ID: {id}</div>
    </div>
  );
}
