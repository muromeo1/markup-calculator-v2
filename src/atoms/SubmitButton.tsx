import { FC } from "react";
import cn from "classnames";
import { IoIosSend } from "react-icons/io";

interface SubmitButtonProps {
  onSubmit: (data: any) => void;
}

const SubmitButton: FC<SubmitButtonProps> = ({ onSubmit }) => {
  return (
    <button
      type="submit"
      className={cn(
        "px-2 outline-none rounded-r-xl shadow-xl",
        "bg-cyan-400 hover:bg-cyan-500 active:bg-cyan-600"
      )}
      onClick={onSubmit}
    >
      <IoIosSend size={25} color="#3f3f46" />
    </button>
  );
};

export default SubmitButton;
