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
    setValue(e.target.value);
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    const currentSearch = params.get('search');

    if (value && value !== currentSearch) {
      if (params.has('category')) params.delete('category');
      params.set('search', value);
      params.set('skip', '0');
    } else if (!value) {
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
