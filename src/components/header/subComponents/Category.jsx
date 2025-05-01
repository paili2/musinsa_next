import CategoryTab from "./CategoryTab";
import { RxHamburgerMenu } from "react-icons/rx";

const Category = () => {
  return (
    <div className="w-full py-5">
      <div className="w-full max-w-[1500px] mx-auto flex justify-between">
        <div className="flex gap-5 items-center">
          <RxHamburgerMenu className="text-xl text-[yellow]" />
          <CategoryTab
            textColor="yellow"
            categoryName={"MUSINSA"}
          ></CategoryTab>
          <CategoryTab categoryName={"BEAUTY"}></CategoryTab>
          <CategoryTab categoryName={"PLAYER"}></CategoryTab>
          <CategoryTab categoryName={"OUTLET"}></CategoryTab>
          <CategoryTab categoryName={"BOUTIQUE"}></CategoryTab>
          <CategoryTab categoryName={"SNEAKERS"}></CategoryTab>
          <CategoryTab categoryName={"KIDS"}></CategoryTab>
          <CategoryTab categoryName={"(S)SNAP"}></CategoryTab>
        </div>
        <div className="flex gap-5">
          <CategoryTab categoryName={"오프라인 스토어"}></CategoryTab>
          <CategoryTab textColor="yellow" categoryName={"검색"}></CategoryTab>
          <CategoryTab categoryName={"좋아요"}></CategoryTab>
          <CategoryTab textColor="yellow" categoryName={"마이"}></CategoryTab>
          <CategoryTab
            textColor="yellow"
            categoryName={"장바구니"}
          ></CategoryTab>
        </div>
      </div>
    </div>
  );
};

export default Category;
