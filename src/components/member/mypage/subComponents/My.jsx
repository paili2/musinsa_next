import Link from "next/link";
import { GoBell } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";

const My = () => {
  return (
    <div className="bg-[#f5f5f5] py-3.5 px-3 text-black">
      <div className="flex flex-col gap-10">
        <div className="flex justify-between text-lg">
          <span className="font-bold">마이</span>
          <div className="flex gap-2">
            <GoBell />
            <IoSettingsOutline />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs">
            무신사 회원은 최대 4% 적립, 전 상품 무료배송 혜택
          </p>
          <Link href="/member/login">로그인/회원가입하기</Link>
        </div>
        <div>
          <div className="grid grid-cols-3 bg-white p-2">
            <div className="flex flex-col">
              <span className="text-xs">적립금</span>
              <strong>0원</strong>
            </div>
            <div className="flex flex-col">
              <span className="text-xs">쿠폰</span>
              <strong>0장</strong>
            </div>
            <div className="flex flex-col">
              <span className="text-xs">후기 작성</span>
              <strong>0개</strong>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default My;
