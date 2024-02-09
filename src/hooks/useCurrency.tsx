import { useState, useEffect } from "react";
import axios from "axios";

import { FormDataProps } from "../contexts/FormContext";

interface ExchangeRate {
  base: string;
  date: string;
  rate: number;
}

const useCurrency = (currency: FormDataProps["currency"]) => {
  const [exchangeRate, setExchangeRate] = useState<ExchangeRate | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://api.exchangerate-api.com/v4/latest/${currency}`
        );

        setExchangeRate({
          base: response.data.base,
          date: response.data.date,
          rate: response.data.rates.BRL,
        });
      } catch (error) {
        setError("Failed to fetch exchange rate. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchExchangeRate();
  }, [currency]);

  return { exchangeRate, loading, error };
};

export default useCurrency;
