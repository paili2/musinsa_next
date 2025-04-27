import Link from "next/link";
import { RiKakaoTalkFill } from "react-icons/ri";
import Layout from "./inLayout/Layout";

const Login = () => {
  return (
    <Layout memberService={"로그인/회원가입"}>
      <form className="flex flex-col gap-4" action="">
        <div className="w-full border-1 border-[#8a8a8a] p-2 rounded-sm">
          <input
            className="w-full appearance-none border-none outline-none"
            type="text"
            placeholder="아이디"
          />
        </div>
        <div className="w-full border-1 border-[#8a8a8a] p-2 rounded-sm">
          <input
            className="w-full appearance-none border-none outline-none"
            type="password"
            placeholder="비밀번호"
          />
        </div>
        <button
          className="bg-black text-white px-50 py-3 border-0 rounded-sm text-sm"
          type="submit"
        >
          로그인
        </button>
        <div className="flex justify-between text-sm">
          <label className="flex gap-1">
            <input type="checkBox" />
            자동 로그인
          </label>
          <div className="flex gap-3">
            <Link href="">아이디 찾기</Link>
            <Link href="">비밀번호 찾기</Link>
          </div>
        </div>
      </form>
      <button className="bg-[#fee502] w-full text-black px-50 py-3 border-0 rounded-sm flex justify-center items-center gap-2 text-sm">
        <RiKakaoTalkFill />
        <span>카카오 로그인</span>
      </button>
      <div className="flex justify-center">
        <Link
          href="/member/join/agree"
          className="border-1 border-[#8a8a8a] rounded-sm px-5 py-1 text-sm"
        >
          회원가입
        </Link>
      </div>
    </Layout>
  );
};

export default Login;
