import Link from "next/link";
import Layout from "../../inLayout/Layout";
import CheckCard from "./subComponents/CheckCard";

const Agree = () => {
  return (
    <Layout memberService={"회원가입"}>
      <div className="flex flex-col gap-50">
        <div className="flex flex-col gap-5">
          <div>
            환영합니다!
            <br />
            무신사에 가입하시려면 약관에 동의해 주세요
          </div>
          <form className="flex items-start" action="">
            <div className="flex gap-3">
              <div>
                <input type="checkBox" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col text-sm">
                  <span>약관 전체 동의하기(선택 동의 포함)</span>
                  <span>
                    선택 사항에 대한 동의를 거부하는 경우에도 서비스는 이용이
                    가능합니다.
                  </span>
                </div>
                <div className="flex flex-col gap-4 pb-3">
                  <CheckCard text={"만 14세 이상입니다. (필수)"}></CheckCard>
                  <CheckCard
                    text={"무신사, 무신사 스토어 이용 약관 (필수)"}
                  ></CheckCard>
                  <CheckCard
                    text={"마케팅 목적의 개인정보 수집 및 이용 동의 (선택)"}
                  ></CheckCard>
                  <CheckCard text={"광고성 정보 수신 동의 (선택)"}></CheckCard>
                </div>
              </div>
            </div>
          </form>
          <p className="border-t-1 border-[#8a8a8a] pt-7 text-sm">
            정보주체의 개인정보 및 권리 보호를 위해 「개인정보 보호법」 및 관계
            법령이 정한 바를 준수하여 안전하게 <br /> 관리하고 있습니다. <br />
            자세한 사항은 개인정보처리방침에서 확인할 수 있습니다.
          </p>
        </div>
        <button
          className="bg-black text-white px-50 py-3 border-0 rounded-sm text-sm"
          type="submit"
        >
          동의하고 본인인증하기
        </button>
      </div>
    </Layout>
  );
};

export default Agree;
