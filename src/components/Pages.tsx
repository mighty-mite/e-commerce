import { Pagination } from '@mui/material';

interface IProps {
  count: number;
}

export default function Pages({ count }: IProps) {
  return (
    <Pagination
      size="large"
      count={count}
      color="primary"
      className="self-center"
    />
  );
}
