import FilterTab from "./FilterTab";

const Filter = () => {
  return (
    <div className="flex gap-3 justify-end pb-3">
      <FilterTab filterType={"성별"}></FilterTab>
      <FilterTab filterType={"전체 연령"}></FilterTab>
      <FilterTab filterType={"전체 가격"}></FilterTab>
      <FilterTab filterType={"실시간"}></FilterTab>
    </div>
  );
};

export default Filter;
