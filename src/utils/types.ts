export interface ICard {
  category: string;
  description: string;
  title: string;
  id: number;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
}
