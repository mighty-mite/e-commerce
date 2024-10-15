import { ICard } from '@/utils/types';
import { Button, Rating } from '@mui/material';
import Image from 'next/image';

export default async function CardPage({ params }: { params: { id: string } }) {
  const response = await fetch(`https://dummyjson.com/products/${params.id}`);
  const card: ICard = await response.json();

  return (
    <main className="container mx-auto mb-auto">
      <div className="top flex">
        <div>
          <Image
            src={card.thumbnail}
            alt={card.title}
            width={500}
            height={700}
          />
        </div>
        <div>
          <h1>{card.title}</h1>
          <p>{card.price}</p>
          <Rating value={card.rating} readOnly />
          <Button>Buy</Button>
          <Button>Like</Button>
        </div>
        <div>
          <h3>Dimensions:</h3>
          <p>Width * Height * Depth</p>
          <p>
            {card.dimensions.width} * {card.dimensions.height} *
            {card.dimensions.depth}
          </p>
        </div>
      </div>
      <div className="bottom">
        <p>{card.description}</p>
        <ul className="flex">
          {card.reviews.map((item, i) => {
            return (
              <li key={i}>
                <div>{item.reviewerName}</div>
                <div>{item.date}</div>
                <Rating value={item.rating} readOnly />
                <div>{item.comment}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
