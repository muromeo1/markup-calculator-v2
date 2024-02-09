import { useForm, SubmitHandler } from "react-hook-form";
import cn from "classnames";

import CurrencyButton from "../atoms/CurrencyButton";
import SubmitButton from "../atoms/SubmitButton";

interface Input {
  currency: "euro" | "dollar";
  value: string;
}

const Form = () => {
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
    if (Number.isNaN(data.value) || data.value === undefined) return;

    if (errors.currency || errors.value) {
      console.log(errors.root);
    } else {
      console.log(data);
    }
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const result = e.target.value.replace(/\D/g, "");

    setValue("value", result);
  };

  const currencyOnClick = (currency: Input["currency"]) => {
    setValue("currency", currency);
    onSubmit({ currency, value: watch("value") });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-row w-full">
        <CurrencyButton
          className="rounded-l-xl w-1/7"
          currency="dollar"
          onClick={() => {
            currencyOnClick("dollar");
          }}
          selected={watch("currency") === "dollar"}
        />

        <CurrencyButton
          className="rounded-r-xl w-1/7 mr-3"
          currency="euro"
          onClick={() => {
            currencyOnClick("euro");
          }}
          selected={watch("currency") === "euro"}
        />

        <input
          type="text"
          placeholder="1000"
          maxLength={5}
          className={cn(
            "bg-zinc-700 py-2 w-5/7 text-xl remove-arrow",
            "text-white outline-none text-center rounded-l-xl shadow-xl"
          )}
          {...register("value", {
            required: true,
            maxLength: 5,
            valueAsNumber: true,
          })}
          onChange={handleChange}
        />

        <SubmitButton onSubmit={onSubmit} />
      </div>
    </form>
  );
};

export default Form;
