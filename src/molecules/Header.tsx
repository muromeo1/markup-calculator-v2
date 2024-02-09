import Typography from "../atoms/Typography";

const Header = () => (
  <div className="flex flex-col items-center pt-[100px] gap-3">
    <div className="w-full">
      <Typography.Title text="Markup calculator" />
    </div>

    <div className="w-3/4">
      <Typography.Subtitle text="A way to calculate how much you gonna receive working abroad Brazil" />
    </div>
  </div>
);

export default Header;
