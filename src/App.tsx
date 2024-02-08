import cn from "classnames";
import { useForm, SubmitHandler } from "react-hook-form";

import Typography from "./atoms/Typography";

interface Input {
  currency: "euro" | "dollar";
  value: number;
}

const App = () => {
  const {
    watch,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({
    defaultValues: {
      currency: "dollar",
    },
  });

  const onSubmit: SubmitHandler<Input> = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-zinc-900 h-screen flex flex-col text-center items-center gap-10 ">
      <div className="flex flex-col pt-[100px] gap-2">
        <Typography.Title text="Markup calculator" />
        <Typography.Subtitle text="Small description goes here" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-row">
          <button
            className={cn(
              "shadow-xl rounded-l-xl px-4",
              `${watch("currency") === "dollar" ? "bg-cyan-400" : "bg-zinc-700"}`
            )}
            onClick={() => {
              setValue("currency", "dollar");
            }}
          >
            $
          </button>

          <button
            className={cn(
              "px-4 shadow-xl mr-3 rounded-r-xl",
              `${watch("currency") === "euro" ? "bg-cyan-400" : "bg-zinc-700"}`
            )}
            onClick={() => {
              setValue("currency", "euro");
            }}
          >
            €
          </button>

          <input
            placeholder="2000"
            className="bg-zinc-700 pl-6 py-2 text-xl text-white outline-none rounded-xl shadow-xl"
            {...register("value")}
          />
        </div>
      </form>
    </div>
  );
};

export default App;
