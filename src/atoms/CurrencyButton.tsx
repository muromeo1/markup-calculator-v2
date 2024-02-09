import { FC } from "react";
import cn from "classnames";

interface CurrencyButtonProps {
  currency: "euro" | "dollar";
  onClick: () => void;
  selected: boolean;
  className?: string;
}
const CurrencyButton: FC<CurrencyButtonProps> = ({
  currency,
  onClick,
  selected,
  className,
}) => {
  return (
    <button
      type="button"
      className={cn(
        "px-4 shadow-xl",
        className,
        `${selected ? "bg-cyan-400" : "bg-zinc-700"}`
      )}
      onClick={onClick}
    >
      {currency === "dollar" ? "$" : "€"}
    </button>
  );
};

export default CurrencyButton;
