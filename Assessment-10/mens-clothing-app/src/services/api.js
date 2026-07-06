const API_URLS = [
  "https://dummyjson.com/products/category/mens-shirts",
  "https://dummyjson.com/products/category/mens-shoes",
  "https://dummyjson.com/products/category/mens-watches",
];

export const fetchProducts = async () => {
  const responses = await Promise.all(
    API_URLS.map((url) => fetch(url))
  );

  const data = await Promise.all(
    responses.map((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      return response.json();
    })
  );

  return data.flatMap((item) => item.products);
};