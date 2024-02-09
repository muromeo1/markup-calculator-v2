import { useForm, SubmitHandler } from "react-hook-form";
import cn from "classnames";

import CurrencyButton from "../atoms/CurrencyButton";
import SubmitButton from "../atoms/SubmitButton";

import { useData, FormDataProps } from "../contexts/FormContext";

const Form = () => {
  const { data, setData } = useData();

  const {
    watch,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    defaultValues: {
      currency: data.currency,
    },
  });

  const onSubmit: SubmitHandler<FormDataProps> = (data) => {
    if (Number.isNaN(data.value) || data.value === undefined) return;

    setData(data);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const result = e.target.value.replace(/\D/g, "");

    setValue("value", result);
  };

  const currencyOnClick = (currency: FormDataProps["currency"]) => {
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
            currencyOnClick("usd");
          }}
          selected={watch("currency") === "usd"}
        />

        <CurrencyButton
          className="rounded-r-xl w-1/7 mr-3"
          currency="euro"
          onClick={() => {
            currencyOnClick("eur");
          }}
          selected={watch("currency") === "eur"}
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
