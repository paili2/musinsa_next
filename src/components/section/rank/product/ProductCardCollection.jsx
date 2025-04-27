import ProductCard from "./ProductCard";

const ProductCardCollection = () => {
  const product = [
    {
      brand: "아디다스",
      productName: "와플 반팔 폴로 셔츠 - 원더화이트 / JV9265",
      discountRate: "30%",
      price: "59,000",
      src: "https://paili2.github.io/musinsa-clone/product/adidasT.webp",
    },
    {
      brand: "나이키",
      productName:
        "샥스 R4 M - 메탈릭 실버:블랙:피칸테 레드:메탈릭 실버 / HQ1988-002",
      discountRate: "30%",
      price: "179,000",
      src: "https://paili2.github.io/musinsa-clone/product/nikeShoes.webp",
    },
    {
      brand: "뉴발란스",
      productName: "NBPDFS408G / U740AR2 (BRIGHTON GRAY)",
      discountRate: "30%",
      price: "159,000",
      src: "https://paili2.github.io/musinsa-clone/product/newbalanceShoes1.webp",
    },
    {
      brand: "뉴발란스",
      productName: "NBPDFS130W / U740WM2 (WHITE SILVER METALLIC)",
      discountRate: "30%",
      price: "139,000",
      src: "https://paili2.github.io/musinsa-clone/product/newbalanceShoes2.webp",
    },
    {
      brand: "뉴발란스",
      productName: "NBPDEF706S / MR530LG (SILVER)",
      discountRate: "30%",
      price: "129,000",
      src: "https://paili2.github.io/musinsa-clone/product/newbalanceShoes3.webp",
    },
    {
      brand: "무신사 스탠다드 뷰티",
      productName: "[티벳동생 Pick] 무신사 스탠다드 스모크 오우드 EDP 50ml",
      discountRate: "33%",
      price: "33,400",
      src: "https://paili2.github.io/musinsa-clone/product/tibet.webp",
    },
    {
      brand: "푸마",
      productName: "팔레르모 프리미엄 - 블랙:화이트 / 401744-02",
      discountRate: "50%",
      price: "64,990",
      src: "https://paili2.github.io/musinsa-clone/product/pumaShoes.webp",
    },
    {
      brand: "가니",
      productName:
        "베이직 저지 체리 릴렉스핏 반소매 티셔츠 - 팬텀 / T42923575252",
      discountRate: "29%",
      price: "129,990",
      src: "https://paili2.github.io/musinsa-clone/product/ganiT.webp",
    },
    {
      brand: "뉴발란스",
      productName: "NBPDFS408T / U740PR2 (SEA SALT)",
      discountRate: "30%",
      price: "159,000",
      src: "https://paili2.github.io/musinsa-clone/product/newbalanceShoes4.webp",
    },
    {
      brand: "아디다스",
      productName: "토바코 - 핑크:민트 / JR2741",
      discountRate: "44%",
      price: "77,990",
      src: "https://paili2.github.io/musinsa-clone/product/adidasShoes.webp",
    },
    {
      brand: "뉴발란스",
      productName: "NBPDEF003X / U740BT2 (CASTLEROCK)",
      discountRate: "30%",
      price: "139,000",
      src: "https://paili2.github.io/musinsa-clone/product/newbalanceShoes5.webp",
    },
    {
      brand: "디앤에스알",
      productName: "라이크 린넨 벨티드 데님 팬츠 블루",
      discountRate: "20%",
      price: "119,200",
      src: "https://paili2.github.io/musinsa-clone/product/dnsPants.webp",
    },
  ];

  return (
    <div className="grid grid-cols-6 justify-items-center gap-y-5 w-full max-w-[1500px] mx-auto bg-[#ebebeb]">
      {product.map((v, i) => (
        <ProductCard {...v} key={i} />
      ))}
    </div>
  );
};

export default ProductCardCollection;
