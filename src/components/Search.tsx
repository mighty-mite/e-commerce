'use client';
import { TextField } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function Search() {
  const [value, setValue] = useState('');
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const params = new URLSearchParams(searchParams.toString());
    if (params.get('skip')) params.set('skip', '0'); // delete skip if skip is in URL when typing
    setValue(e.target.value);
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      if (params.has('category')) params.delete('category');
      params.set('search', value);
    } else {
      params.delete('search');
    }
    router.push(pathname + '?' + params.toString());
  }, [value, pathname, router, searchParams]);

  return (
    <div>
      <TextField
        value={value}
        onChange={handleChange}
        fullWidth={true}
        size="small"
        label="Search products"
        variant="outlined"
      />
    </div>
  );
}
