const StyleCategoryButton = (props) => {
  return (
    <button className="p-1.5 text-[#8a8a8a] border border-[#8a8a8a] rounded-sm font-bold text-xs">
      {props.categoryName}
    </button>
  );
};

export default StyleCategoryButton;
