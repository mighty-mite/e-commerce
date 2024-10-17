import { ICard } from '@/utils/types';
import Pages from './Pages';
import { Suspense } from 'react';
import CardElement from './CardElement';

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
          return <CardElement key={card.id} {...card} />;
        })}
      </ul>
      <Suspense fallback={<h3>loading</h3>}>
        <Pages count={Math.ceil(cards.total / 10)} />
      </Suspense>
    </div>
  );
}
