const Amount = (props) => {
  return (
    <div className="flex justify-between text-sm">
      <span>{props.title}</span>
      <div className="flex gap-1">
        <span className="text-red-600">{props.rate}</span>
        <span>{props.price}</span>
      </div>
    </div>
  );
};

export default Amount;
