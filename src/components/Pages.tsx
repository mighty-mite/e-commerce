'use client';
import { Pagination } from '@mui/material';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface IProps {
  count: number;
}

export default function Pages({ count }: IProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    const params = new URLSearchParams(searchParams.toString());
    const skip = String(value * 10 - 10);
    params.set('skip', skip);

    router.push(pathname + '?' + params);
  };

  return (
    <Pagination
      size="large"
      count={count}
      color="primary"
      onChange={handleChange}
    />
  );
}
