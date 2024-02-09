import {
  createContext,
  useContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  FC,
} from "react";

export interface FormDataProps {
  currency: "eur" | "usd";
  value: string;
  totalNet?: string;
}

interface DataContextProps {
  data: FormDataProps;
  setData: Dispatch<SetStateAction<FormDataProps>>;
}

interface DataProviderProps {
  children: ReactNode;
}

const DataContext = createContext<DataContextProps | undefined>(undefined);

export const DataProvider: FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState<FormDataProps>({
    currency: "usd",
    value: "",
  });

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }

  return context;
};
