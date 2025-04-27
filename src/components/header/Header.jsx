import Category from "./subComponents/Category";
import EventPromotion from "./subComponents/EventPromotion";
import Search from "./subComponents/Search";

const Header = () => {
  return (
    <div className=" bg-black px-5 pb-5 flex flex-col gap-5 text-[15px] text-[#ffffffcc]">
      <Category></Category>
      <Search></Search>
      <EventPromotion></EventPromotion>
    </div>
  );
};

export default Header;
