import Image from "next/image";

const ProductCard = ({
  brand,
  img,
  productName,
  option,
  originalPrice,
  salePrice,
  changeOptions,
}) => {
  return (
    <div className="flex flex-col gap-3 ">
      <div className="flex gap-3">
        <input type="checkBox" />
        <h3 className="text-lg font-medium">{brand}</h3>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-5 items-center">
          <div className="flex items-start gap-5">
            <input className="" type="checkBox" />

            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <div className="w-[72px] h-[86.4px] relative border-0 rounded-sm">
                  <Image
                    className="w-full h-full object-cover border-0 rounded-sm"
                    fill
                    quality={100}
                    src={img}
                    alt={""}
                  ></Image>
                </div>
                <div className="flex flex-col gap-0.5 text-sm">
                  <span>{productName}</span>
                  <span>{option}</span>
                  <span>{originalPrice}</span>
                  <span>{salePrice}</span>
                </div>
              </div>
              <button className="w-fit border-1 border-[#8a8a8a] rounded-sm px-30 py-2 text-sm">
                옵션 변경
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
