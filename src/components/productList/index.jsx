import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/Post";
import { useState } from "react";

const ProductList = () => {
  const [isfetchproduct, setIsFetchProduct] = useState(false);
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    enabled: isfetchproduct,
    staleTime: 3600,
    // cacheTime: 120000,
  });

  console.log("isfetchproduct",isfetchproduct);
  

  return (
    <>
      <button onClick={() => setIsFetchProduct(true)}>
        Fetch Products
      </button>
      {data?.map((product) => (
        <li key={product?.id}>{product?.title}</li>
      ))}
    </>
 );
};

export default ProductList;
