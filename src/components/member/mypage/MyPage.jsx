import Link from "next/link";
import My from "./subComponents/My";

const MyPage = () => {
  return (
    <div>
      <My></My>
      <div>
        <div className="bg-white text-black py-3.5 px-3">
          <ul className="py-3.5 border-b-[#f5f5f5] flex flex-col gap-3">
            <li>
              <Link href="">주문 내역</Link>
            </li>
            <li>
              <Link href="">취소/반품/교환 내역</Link>
            </li>
            <li>
              <Link href="">최근 본 상품</Link>
            </li>
          </ul>
          <ul className="py-3.5 border-b-[#f5f5f5] flex flex-col gap-3">
            <li>
              <Link href="">1:1문의 내역</Link>
            </li>
            <li>
              <Link href="">공지사항</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
