export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
}

export interface ProductsState {
  items: Product[];
  loading: boolean;
  error: string | null;
}

export interface DropdownProps{
    selectedCategory: string, 
    data: string[], 
    changeCategory: (value: string) => void
}
