import Filter from "./Filter";
import ProductCategories from "./ProductCategories";
import StyleCategories from "./StyleCategories";
import ProductCardCollection from "./product/ProductCardCollection";

const Rank = () => {
  return (
    <div>
      <div className="bg-[#ebebeb] w-full max-w-[1500px] mx-auto flex flex-col gap-4 px-3">
        <div className="flex flex-col justify-start gap-2">
          <StyleCategories></StyleCategories>
          <ProductCategories></ProductCategories>
        </div>
        <Filter></Filter>
      </div>
      <ProductCardCollection></ProductCardCollection>
    </div>
  );
};

export default Rank;
