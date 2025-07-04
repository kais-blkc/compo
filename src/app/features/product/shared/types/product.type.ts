export interface IProduct {
  img: string[];
  logo: string;
  name: string;
  brand: string;
  article: string;
  supplier_code: string;
  price: number;
  currency: string;
  points: number;

  availability: {
    city: string;
    quantity: number;
    delivery_date: string;
  }[];

  description: {
    key: string;
    value: string;
  }[];
}
