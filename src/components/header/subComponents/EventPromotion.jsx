import CategoryTab from "./CategoryTab";
const EventPromotion = () => {
  return (
    <div>
      <div className="w-full max-w-[1500px] mx-auto flex gap-5">
        <CategoryTab categoryName={"추천"}></CategoryTab>
        <CategoryTab categoryName={"랭킹"}></CategoryTab>
        <CategoryTab categoryName={"세일"}></CategoryTab>
        <CategoryTab categoryName={"브랜드"}></CategoryTab>
        <CategoryTab categoryName={"신상"}></CategoryTab>
        <CategoryTab categoryName={"멤버스 데이"}></CategoryTab>
        <CategoryTab categoryName={"뷰티위크"}></CategoryTab>
      </div>
    </div>
  );
};

export default EventPromotion;
