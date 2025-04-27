import Amount from "./subComponents/Amount";
import ProductCard from "./subComponents/ProductCard";
import PaymentBenefit from "./subComponents/PaymentBenefit";

const Cart = () => {
  const cartIn = [
    {
      brand: "프렌치 시크",
      img: "/product/frenchchic.jpg",
      productName: "더베이직 프렌치 로고 후드 티셔츠",
      option: "네이비 · FREE(55~66) / 1개",
      originalPrice: "45,000원",
      salePrice: "41,850원",
    },
  ];

  return (
    <div className="w-full max-w-[1000px] mx-auto flex flex-col gap-5 bg-[#f5f5f5] py-2.5">
      <div>
        <h1 className="px-5 text-xl">장바구니</h1>

        <div className="grid grid-cols-[4fr_1rem_3fr] bg-white">
          <div className=" px-5 py-3 flex flex-col gap-10">
            <div className="flex items-center justify-between">
              <div className="flex gap-1 ">
                <input type="checkBox" />
                <span>전체 선택</span>
              </div>
              <button className="border border-[#8a8a8a] rounded-sm px-1 py-0.5 text-xs">
                선택 삭제
              </button>
            </div>
            <div>
              {cartIn.map((v, i) => (
                <ProductCard {...v} key={i} />
              ))}
            </div>
          </div>
          <div className="bg-[#f5f5f5]"></div>
          <div className="px-5 py-3">
            <div className="py-3 text-lg border-b-1 border-[#8a8a1a]">
              <h2 className="font-medium py-5">구매금액</h2>
              <div className="flex flex-col gap-1">
                <Amount title={"상품 금액"} price={"144,600원"}></Amount>
                <Amount title={"할인 금액"} price={"-23,560원"}></Amount>
                <Amount title={"배송비"} price={"무료배송"}></Amount>
              </div>
              <div className="flex justify-between text-sm pt-5 pb-2">
                <strong>총 구매 금액</strong>
                <div className="flex gap-1">
                  <strong className="text-red-600">16%</strong>
                  <strong>121,040원</strong>
                </div>
              </div>
              <Amount title={"적립혜택 예상"} price={"최대 8,300원"}></Amount>
            </div>

            <div className="flex flex-col pb-3">
              <h2 className="font-medium py-5">결제 혜택</h2>
              <h3 className="text-sm font-medium pb-2">즉시 할인</h3>
              <div className="flex flex-col gap-2">
                <PaymentBenefit
                  logo={"/kbank.png"}
                  payment={"케이뱅크 x 삼성카드"}
                  min={"6만원"}
                ></PaymentBenefit>
                <PaymentBenefit
                  logo={"/toss.png"}
                  payment={"토스페이 x 삼성카드"}
                  min={"8만원"}
                ></PaymentBenefit>
                <PaymentBenefit
                  logo={"/toss.png"}
                  payment={"토스페이 x 계좌"}
                  min={"7만원"}
                ></PaymentBenefit>
              </div>
            </div>
            <div className="flex justify-center bg-black text-white py-3 px-5 border-0 rounded-sm">
              <button>121,040원 구매하기 (2개)</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
