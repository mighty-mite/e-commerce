// export interface ICard {
//   category: string;
//   description: string;
//   title: string;
//   id: number;
//   image: string;
//   price: number;
//   rating: {
//     count: number;
//     rate: number;
//   };
// }

export interface ICard {
  id: number;
  title: string;
  description: string;
  category: string;
  price: 9.99;
  discountPercentage: 7.17;
  rating: 4.94;
  stock: 5;
  tags: string[];
  brand: string;
  sku: string;
  weight: 2;
  dimensions: {
    width: 23.17;
    height: 14.43;
    depth: 28.01;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: [
    {
      rating: 2;
      comment: string;
      date: string;
      reviewerName: string;
      reviewerEmail: string;
    },
    {
      rating: 2;
      comment: string;
      date: string;
      reviewerName: string;
      reviewerEmail: string;
    },
    {
      rating: 5;
      comment: string;
      date: string;
      reviewerName: string;
      reviewerEmail: string;
    }
  ];
  returnPolicy: string;
  minimumOrderQuantity: 24;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  thumbnail: string;
  images: string[];
}
