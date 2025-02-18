export interface NavLink {
  id: number;
  title: string;
  url: string;
}

export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
}

export interface Review {
  name: string;
  text: string;
  rating: number;
  image: string;
}
