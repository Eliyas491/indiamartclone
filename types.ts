export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  seller: {
    name: string;
    whatsapp: string;
    location: string;
  };
}

export interface User {
  id: string;
  name: string;
  email: string;
  isLoggedIn: boolean;
}