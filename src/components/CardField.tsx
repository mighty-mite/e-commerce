import Image from 'next/image';
import Link from 'next/link';
import { ICard } from '@/utils/types';
import { Button, Card, CardHeader, Rating, Typography } from '@mui/material';

export default async function CardField() {
  const response = await fetch('https://fakestoreapi.com/products');
  const cards = await response.json();
  return (
    <ul className="grid grid-cols-3 gap-6 p-6">
      {cards.map((card: ICard) => {
        return (
          <li key={card.id}>
            <Link href="/">
              <Card className="flex flex-col justify-between h-full p-6">
                <Image
                  width={100}
                  height={100}
                  src={card.image}
                  alt={card.title}
                />
                <CardHeader title={card.title} className="p-0" />
                <Typography variant="h4" component="p">
                  ${card.price}
                </Typography>
                <Rating value={card.rating.rate} readOnly />
                <Button variant="contained">Add to cart</Button>
              </Card>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
