import StyleCategoryButton from "./StyleCategoryButton";

const StyleCategories = () => {
  return (
    <div className="flex gap-2 mt-3">
      <StyleCategoryButton categoryName={"NEW"}></StyleCategoryButton>
      <StyleCategoryButton categoryName={"전체"}></StyleCategoryButton>
      <StyleCategoryButton categoryName={"급상승"}></StyleCategoryButton>
      <StyleCategoryButton categoryName={"봄 코디"}></StyleCategoryButton>
      <StyleCategoryButton categoryName={"스프링 뷰티"}></StyleCategoryButton>
      <StyleCategoryButton categoryName={"스트릿"}></StyleCategoryButton>
      <StyleCategoryButton categoryName={"미니멀"}></StyleCategoryButton>
      <StyleCategoryButton categoryName={"프레피"}></StyleCategoryButton>
      <StyleCategoryButton categoryName={"로맨틱"}></StyleCategoryButton>
      <StyleCategoryButton categoryName={"걸코어"}></StyleCategoryButton>
      <StyleCategoryButton categoryName={"캐주얼"}></StyleCategoryButton>
      <StyleCategoryButton categoryName={"워크웨어"}></StyleCategoryButton>
      <StyleCategoryButton categoryName={"레트로"}></StyleCategoryButton>
      <StyleCategoryButton categoryName={"시크"}></StyleCategoryButton>
    </div>
  );
};

export default StyleCategories;
