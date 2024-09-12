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
        "X-RapidAPI-Key": "fce0e15738msh6a87c0c9db9505cp14b74fjsn54bc768f3bc7",
      },
    }
  );

  const data = await response.json();
  console.log(data);
  return data.item.props.pageProps.initialData.searchResult.itemStacks[0].items.map(
    (item: any) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      inStock: !item.isOutOfStock,
    })
  );
};
