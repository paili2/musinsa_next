import Link from "next/link";

const Category = (props) => {
  const link = {
    랭킹: "rank",
    추천: "recommend",
    브랜드: "brand",
    마이: "member/mypage",
    좋아요: "like",
    장바구니: "cart",
  };

  return (
    <span className="text-[#ffffffcc]">
      <Link href={`/${link[props.categoryName]}`}>{props.categoryName}</Link>
    </span>
  );
};

export default Category;
