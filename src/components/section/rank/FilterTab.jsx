import { MdKeyboardArrowDown } from "react-icons/md";

const FilterTab = (props) => {
  return (
    <div className="flex text-xs text-[#8a8a8a]">
      <span>{props.filterType}</span>
      <MdKeyboardArrowDown />
    </div>
  );
};

export default FilterTab;
