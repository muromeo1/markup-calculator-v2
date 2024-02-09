import cn from "classnames";
import { Fragment, useEffect } from "react";

import { useData } from "../contexts/FormContext";
import useCurrency from "../hooks/useCurrency";
import Typography from "../atoms/Typography";

const Grid = () => {
  const {
    data: { currency, value },
  } = useData();

  const { exchangeRate } = useCurrency(currency);
  const rate = exchangeRate?.rate;

  if (!rate) return null;

  const brlExchange = parseFloat(value) * rate;

  if (isNaN(brlExchange)) return null;

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const EXPENSES = {
    Gross: brlExchange,
    Accountant: -300,
    Platform: -(brlExchange * 0.0198974).toFixed(2),
    DAS: -(brlExchange * 0.03).toFixed(2),
  };

  const net = formatter.format(
    Object.values(EXPENSES).reduce((acc, curr) => acc + curr, 0)
  );

  return (
    <>
      <div
        className={cn(
          "border border-zinc-700 rounded-2xl",
          "shadow-md 2xl:w-1/4 w-3/4 pb-5",
          "text-zinc-400 flex flex-col gap-3"
        )}
      >
        <div className="mt-5">
          <Typography.Subtitle text="Expenses" />
        </div>

        <div className="mb-5">
          <Typography.Label
            text={`1 BRL <-> ${exchangeRate?.rate} ${currency.toUpperCase()}`}
          />
        </div>

        <div className="grid grid-cols-2 flex flex-col gap-5 mb-4">
          {Object.entries(EXPENSES).map(([key, value]) => (
            <Fragment key={key}>
              <p>{key}:</p>
              <p className={value < 0 ? "text-red-300" : "text-neutral"}>
                {formatter.format(value)}
              </p>
            </Fragment>
          ))}
        </div>
      </div>

      <div>
        <Typography.Label text="Net:" />
        <Typography.Title2 text={`${net}`} />
      </div>
    </>
  );
};

export default Grid;
