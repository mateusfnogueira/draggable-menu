export interface item {
  id: string;
  name: string;
  price: string;
  description: string;
}

export interface IProductMenuCategory {
  category: {
    name: string;
    id: string;
    items: item[];
  };
  index: number;
}
