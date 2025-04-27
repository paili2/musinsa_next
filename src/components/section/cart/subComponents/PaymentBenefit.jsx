import Image from "next/image";

const paymentBenefit = (props) => {
  return (
    <div className="flex gap-2 items-center text-xs">
      <div className="w-[15px] h-[15px] border-0 rounded-3xl relative">
        <Image
          src={props.logo}
          alt={""}
          fill
          className="w-full h-full border-0 rounded-3xl"
        ></Image>
      </div>
      <span>{props.payment}</span>
      <p>{props.min} 이상 결제 시 3천원 즉시 할인</p>
    </div>
  );
};

export default paymentBenefit;
