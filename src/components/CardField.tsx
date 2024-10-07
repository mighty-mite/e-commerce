import Image from 'next/image';
import Link from 'next/link';
import { ICard } from '@/utils/types';
import { Button, Card, Rating, Typography } from '@mui/material';

export default async function CardField() {
  const response = await fetch('https://fakestoreapi.com/products');
  const cards = await response.json();

  return (
    <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {cards.map((card: ICard) => {
        return (
          <li key={card.id}>
            <Card className="flex flex-col justify-between p-6 gap-4">
              <Link
                href="/"
                className="flex flex-col justify-between gap-4 h-full"
              >
                <div className="relative w-full h-52 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full h-auto"
                  />
                </div>
                <Typography
                  className="p-0 whitespace-nowrap overflow-hidden text-ellipsis inline-block"
                  variant="h5"
                  component="h5"
                >
                  {card.title}
                </Typography>
                <Typography variant="h5" component="h5">
                  ${card.price}
                </Typography>
                <Rating value={card.rating.rate} readOnly />
              </Link>
              <Button variant="contained">Add to cart</Button>
            </Card>
          </li>
        );
      })}
    </ul>
  );
}
