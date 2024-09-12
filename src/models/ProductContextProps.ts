import { Product } from "./Product";

export interface ProductContextProps {
  products: Product[];
  loading: boolean;
  hasMore: boolean;
  loadMore: () => void;
}
