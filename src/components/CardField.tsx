import Image from 'next/image';
import Link from 'next/link';
import { ICard } from '@/utils/types';
import { Button, Card, IconButton, Rating, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Pages from './Pages';
import { Suspense } from 'react';

interface IProps {
  searchParams: {
    skip?: string;
    category?: string;
    search?: string;
    sortBy?: string;
    order?: string;
  };
}

export default async function CardField({ searchParams }: IProps) {
  const urlBase = 'https://dummyjson.com/products';
  const skip = searchParams.skip || '0';
  const category = searchParams.category || '';
  const search = searchParams.search || '';
  const sort = searchParams.sortBy || 'price';
  const sortOrder = searchParams.order || '';

  let apiUrl = `${urlBase}?limit=10&skip=${skip}`;

  if (category)
    apiUrl = `${urlBase}/category/${category}?limit=10&skip=${skip}`;

  if (search) apiUrl = `${urlBase}/search?q=${search}&limit=10&skip=${skip}`;

  if (sort && sortOrder) {
    if (!search && !category) {
      apiUrl = `${urlBase}/?limit=10&skip=${skip}&sortBy=price&order=${sortOrder}`;
    } else if (search && !category) {
      apiUrl = `${urlBase}/search?q=${search}&limit=10&skip=${skip}&sortBy=price&order=${sortOrder}`;
    } else if (!search && category) {
      apiUrl = `${urlBase}/category/${category}/?limit=10&skip=${skip}&sortBy=price&order=${sortOrder}`;
    }
  }

  const response = await fetch(apiUrl);

  const cards = await response.json();

  return (
    <div className="flex flex-col flex-between">
      <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
        {cards.products.map((card: ICard) => {
          return (
            <li className="relative" key={card.id}>
              <IconButton
                className="absolute right-2"
                color="default"
                aria-label="add an alarm"
              >
                <FavoriteBorderIcon />
              </IconButton>
              <Card className="flex flex-col justify-between">
                <Link
                  href={`/product-page/${card.id}`}
                  className="flex flex-col justify-between gap-4 p-6 h-full"
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
