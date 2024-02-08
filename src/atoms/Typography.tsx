import cn from "classnames";

interface TypographyProps {
  text?: string;
  children?: React.ReactNode;
}

const Title = ({ text }: TypographyProps) => {
  return <h1 className={cn("text-4xl text-cyan-400 font-bold")}>{text}</h1>;
};

const Subtitle = ({ text }: TypographyProps) => {
  return <h2 className={cn("text-xl text-neutral-600")}>{text}</h2>;
};

const Typography = {
  Title,
  Subtitle,
};

export default Typography;
