import Typography from "../atoms/Typography";

const Header = () => (
  <div className="flex flex-col pt-[100px] gap-2">
    <Typography.Title text="Markup calculator" />
    <Typography.Subtitle text="Small description goes here" />
  </div>
);

export default Header;
