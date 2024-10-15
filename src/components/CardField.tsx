import Image from 'next/image';
import Link from 'next/link';
import { ICard } from '@/utils/types';
import { Button, Card, Rating, Typography } from '@mui/material';
import Pages from './Pages';
import { Suspense } from 'react';

interface IProps {
  searchParams: {
    skip?: string;
    category?: string;
    search?: string;
  };
}

export default async function CardField({ searchParams }: IProps) {
  const urlBase = 'https://dummyjson.com/products';
  const skip = searchParams.skip || '0';
  const category = searchParams.category || '';
  const search = searchParams.search || '';

  let apiUrl = `${urlBase}?limit=10&skip=${skip}`;

  if (category)
    apiUrl = `${urlBase}/category/${category}?limit=10&skip=${skip}`;

  if (search) {
    apiUrl = `${urlBase}/search?q=${search}&limit=10&skip=${skip}`;
  }

  const response = await fetch(apiUrl);

  const cards = await response.json();

  return (
    <div className="flex flex-col flex-between">
      <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
        {cards.products.map((card: ICard) => {
          return (
            <li key={card.id}>
              <Card className="flex flex-col justify-between p-6 gap-4">
                <Link
                  href={`/${card.id}`}
                  className="flex flex-col justify-between gap-4 h-full"
                >
                  <div className="relative w-full h-52 overflow-hidden">
                    <Image
                      src={card.thumbnail}
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
                  <Rating value={card.rating} readOnly />
                </Link>
                <Button variant="contained">Add to cart</Button>
              </Card>
            </li>
          );
        })}
      </ul>
      <Suspense fallback={<h3>loading</h3>}>
        <Pages count={Math.ceil(cards.total / 10)} />
      </Suspense>
    </div>
  );
}
