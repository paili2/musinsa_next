import Info from "./subComponents/Info";
import LinkCollection from "./subComponents/LinkCollection";
import Services from "./subComponents/Services";

const Footer = () => {
  return (
    <div>
      <div className="w-full max-w-[1500px] mx-auto bg-[#f0f0f0] px-5 pb-16 text-[#666] font-bold">
        <LinkCollection></LinkCollection>
        <Services></Services>
        <Info></Info>
      </div>
    </div>
  );
};

export default Footer;
