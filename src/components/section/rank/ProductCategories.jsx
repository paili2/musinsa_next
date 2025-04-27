import ProductCategoryTab from "./ProductCategoryTab";

const ProductCategories = () => {
  return (
    <div className="flex gap-5 pb-4 border border-b-[#8a8a8a1a]">
      <ProductCategoryTab productCategoryName={"전체"}></ProductCategoryTab>
      <ProductCategoryTab productCategoryName={"뷰티"}></ProductCategoryTab>
      <ProductCategoryTab productCategoryName={"신발"}></ProductCategoryTab>
      <ProductCategoryTab productCategoryName={"상의"}></ProductCategoryTab>
      <ProductCategoryTab productCategoryName={"아우터"}></ProductCategoryTab>
      <ProductCategoryTab productCategoryName={"바지"}></ProductCategoryTab>
      <ProductCategoryTab
        productCategoryName={"원피스/스커트"}
      ></ProductCategoryTab>
      <ProductCategoryTab productCategoryName={"가방"}></ProductCategoryTab>
      <ProductCategoryTab productCategoryName={"패션소품"}></ProductCategoryTab>
      <ProductCategoryTab
        productCategoryName={"속옷/홈웨어"}
      ></ProductCategoryTab>
      <ProductCategoryTab
        productCategoryName={"스포츠/레저"}
      ></ProductCategoryTab>
      <ProductCategoryTab
        productCategoryName={"디지털/라이프"}
      ></ProductCategoryTab>
      <ProductCategoryTab productCategoryName={"키즈"}></ProductCategoryTab>
    </div>
  );
};

export default ProductCategories;
