const ProductCard = ({ image, brand, alt, discountRate, price }) => {
  return (
    <div className="w-full overflow-hidden flex flex-col gap-3 bg-white pb-9 text-black">
      <div className="w-full h-[300px]">
        <img className="w-full h-full object-contain" src={image} alt="" />
      </div>
      <div className="flex flex-col px-3 gap-3">
        <span className="text-[11px] font-bold">{brand}</span>
        <span className="text-[13px] h-[25px]">{alt}</span>
        <strong className="flex gap-3 font-bold">
          <span className="text-red-700 text-[13px]">{discountRate}</span>
          <span className="text-[13px]">{price}원</span>
        </strong>
      </div>
    </div>
  );
};

export default ProductCard;
