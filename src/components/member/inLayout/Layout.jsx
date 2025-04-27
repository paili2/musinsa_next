const { Children } = require("react");

const Layout = ({ children, memberService }) => {
  return (
    <div className="bg-[#ebebeb] text-black">
      <div className="w-1/2 max-w-[1500px] mx-auto px-5">
        <h1 className="bg-[#ebebeb] px-5 py-4 font-medium">{memberService}</h1>
        <div className="w-full max-w-[1500px] mx-auto p-5 bg-white flex flex-col gap-3">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
