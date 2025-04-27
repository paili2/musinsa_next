import PageLink from "./PageLink";

const LinkCollection = () => {
  return (
    <div className="flex gap-2.5 py-7 border-b-[1px] border-b-[#8a8a8a1a]">
      <PageLink pageName={"MUSINSA"}></PageLink>
      <PageLink pageName={"BEAUTY"}></PageLink>
      <PageLink pageName={"PLAYER"}></PageLink>
      <PageLink pageName={"OUTLET"}></PageLink>
      <PageLink pageName={"SNEAKERS"}></PageLink>
      <PageLink pageName={"BOUTIQUE"}></PageLink>
      <PageLink pageName={"kids"}></PageLink>
    </div>
  );
};

export default LinkCollection;
