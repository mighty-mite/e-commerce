import { Button, Card, IconButton, Rating, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Link from 'next/link';
import Image from 'next/image';

interface IProps {
  id: number;
  thumbnail: string;
  title: string;
  price: number;
  rating: number;
}

export default function CardElement({
  id,
  thumbnail,
  title,
  price,
  rating,
}: IProps) {
  return (
    <li className="relative">
      <IconButton
        className="absolute right-2"
        color="default"
        aria-label="add an alarm"
      >
        <FavoriteBorderIcon />
      </IconButton>
      <Card className="flex flex-col justify-between">
        <Link
          href={`/product-page/${id}`}
          className="flex flex-col justify-between gap-4 p-6 h-full"
        >
          <div className="relative w-full h-52 overflow-hidden">
            <Image
              alt={title}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
              src={thumbnail}
            />
          </div>
          <Typography
            className="p-0 whitespace-nowrap overflow-hidden text-ellipsis inline-block"
            variant="h5"
            component="h5"
          >
            {title}
          </Typography>
          <Typography variant="h5" component="h5">
            ${price}
          </Typography>
          <Rating value={rating} readOnly />
        </Link>
        <Button variant="contained">Add to cart</Button>
      </Card>
    </li>
  );
}
