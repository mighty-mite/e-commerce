'use client';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { useEffect, useState } from 'react';

export default function Sort() {
  const [sort, setSort] = useState('');
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value as string);
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (params.has('category')) params.delete('search');
    if (params.has('search')) params.delete('category');

    params.set('sortBy', 'price');
    params.set('order', sort);
    params.set('skip', '0');
    router.push(pathname + '?' + params);
  }, [pathname, router, sort]);

  useEffect(() => {
    const sort = searchParams.get('sortBy');
    if (!sort) setSort('');
  }, [searchParams]);

  return (
    <>
      <FormControl fullWidth size="small">
        <InputLabel id="select-label">Sort by price</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={sort}
          label="Sort"
          onChange={handleChange}
        >
          <MenuItem value="asc">ASC</MenuItem>
          <MenuItem value="desc">DESC</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
