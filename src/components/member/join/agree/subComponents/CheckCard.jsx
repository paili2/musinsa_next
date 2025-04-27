const CheckCard = (props) => {
  return (
    <div className="flex items-center gap-2 text-sm">
      <label>
        <input type="checkBox" />
      </label>
      <span>{props.text}</span>
    </div>
  );
};

export default CheckCard;
