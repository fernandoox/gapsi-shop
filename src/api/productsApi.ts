import { ApiProduct } from "../models/ApiResponse";
import { Product } from "../models/Product";

export const fetchProducts = async (
  keyword: string,
  page: number
): Promise<Product[]> => {
  const response = await fetch(
    `https://axesso-walmart-data-service.p.rapidapi.com/wlm/walmart-search-by-keyword?keyword=${keyword}&page=${page}&sortBy=best_match`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "axesso-walmart-data-service.p.rapidapi.com",
        "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
      },
    }
  );

  const data = await response.json();

  const seenIds = new Set<string>();

  const uniqueProducts =
    data.item.props.pageProps.initialData.searchResult.itemStacks[0].items
      .filter((item: ApiProduct) => item.image && item.name)
      .filter((item: ApiProduct) => {
        if (seenIds.has(item.id)) {
          return false; // Excluir el producto si el ID ya ha sido visto
        }
        seenIds.add(item.id);
        return true; // Incluir el producto si es único
      })
      .map((item: ApiProduct) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        inStock: !item.isOutOfStock,
      }));

  return uniqueProducts;
};
