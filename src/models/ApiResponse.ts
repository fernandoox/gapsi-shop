export interface ApiProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  isOutOfStock: boolean;
}

export interface ApiResponse {
  item: {
    props: {
      pageProps: {
        initialData: {
          searchResult: {
            itemStacks: [
              {
                items: ApiProduct[];
              }
            ];
          };
        };
      };
    };
  };
}
