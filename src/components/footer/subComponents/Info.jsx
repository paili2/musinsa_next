const Info = () => {
  return (
    <div className="flex flex-col gap-5 text-[13px]">
      <div>© MUSINSA ALL RIGHTS RESERVED</div>
      <div className="flex gap-5">
        <a href="https://www.musinsa.com/member/join/agreement/privacy-policy">
          개인정보처리방침
        </a>
        <a href="https://www.musinsa.com/member/join/agreement/service">
          이용약관
        </a>
        <a href="https://www.musinsa.com/order/information/payment-agency">
          결제대행 위탁사
        </a>
      </div>
      <div className="font-light">
        일부 상품의 경우 주식회사 무신사는 통신판매의 당사자가 아닌
        통신판매중개자로서 상품, 상품정보, 거래에 대한 책임이 제한될 수
        있으므로, 각 상품 페이지에서 구체적인 내용을 확인하시기 바랍니다.
      </div>
    </div>
  );
};

export default Info;
