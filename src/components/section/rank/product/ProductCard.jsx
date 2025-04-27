const ProductCard = (props) => {
  return (
    <div className="w-full overflow-hidden flex flex-col gap-3 bg-white pb-9 text-black">
      <div className="w-full h-[300px]">
        <img className="w-full h-full object-cover" src={props.src} alt="" />
      </div>
      <div className="flex flex-col px-3 gap-3">
        <span className="text-[11px] font-bold">{props.brand}</span>
        <span className="text-[13px] h-[25px]">{props.productName}</span>
        <strong className="flex gap-3 font-bold">
          <span className="text-red-700 text-[13px]">{props.discountRate}</span>

          <span className="text-[13px]">{props.price}원</span>
        </strong>
      </div>
    </div>
  );
};

export default ProductCard;
