import Link from "next/link";

const Category = ({ categoryName, textColor = "#ffffffcc" }) => {
  const link = {
    랭킹: "rank",
    추천: "recommend",
    브랜드: "brand",
    마이: "member/mypage",
    좋아요: "like",
    장바구니: "cart",
    MUSINSA: "/",
  };

  return (
    <span style={{ color: textColor }} className="cursor-pointer">
      <Link href={`/${link[categoryName]}`}>{categoryName}</Link>
    </span>
  );
};

export default Category;
