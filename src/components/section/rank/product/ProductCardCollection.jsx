import { data } from "@/public/data/Data";
import ProductCard from "./ProductCard";

const ProductCardCollection = () => {
  const product = data;

  return (
    <div className="grid grid-cols-6 justify-items-center w-full max-w-[1500px] mx-auto bg-[#ebebeb]">
      {product.map((v, i) => (
        <ProductCard {...v} key={i} />
      ))}
    </div>
  );
};

export default ProductCardCollection;
