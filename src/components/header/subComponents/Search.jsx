import { PiBellThin } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import Link from "next/link";
const Search = () => {
  return (
    <div>
      <div className="w-full max-w-[1500px] mx-auto flex flex-col gap-2.5">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link href="/">
            <div className="w-[100px] h-[30px]">
              <img
                className="w-full h-full object-contain"
                src="logo.png"
                alt=""
              />
            </div>
          </Link>
          <PiBellThin className="text-[30px] text-white" />
        </div>
        <div className="bg-white w-full p-[7px_5px] rounded-[5px] flex">
          <input
            className="w-full text-black border-none p-0 outline-none"
            type="text"
            placeholder="멤버스 데이 최대 30% 쿠폰"
          />
          <IoIosSearch className="text-[30px] text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default Search;
