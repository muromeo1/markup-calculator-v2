import cn from "classnames";

interface TypographyProps {
  text: string;
}

const Title = ({ text }: TypographyProps) => {
  return (
    <h1 className={cn("md:text-5xl text-4xl text-cyan-400 font-bold")}>
      {text}
    </h1>
  );
};

const Title2 = ({ text }: TypographyProps) => {
  return <h2 className={cn("text-2xl text-cyan-300")}>{text}</h2>;
};

const Subtitle = ({ text }: TypographyProps) => {
  return <h2 className={cn("text-xl text-neutral-500")}>{text}</h2>;
};

const Label = ({ text }: TypographyProps) => {
  return <label className={cn("text-sm text-neutral-700")}>{text}</label>;
};

const Typography = {
  Title,
  Title2,
  Subtitle,
  Label,
};

export default Typography;
