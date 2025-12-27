import { useQuery } from "@tanstack/react-query";
import { getRates } from "../services/rates.service";
import { WalletContext } from "./WalletContext";
import useLocalStorage from "../hooks/useLocalStorage";

export const WalletContextProvider = ({ children }) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["rates"],
    queryFn: getRates,
  });

  // initial wallet balance state
  const [balance, setBalance] = useLocalStorage("wallet", {
    EUR: 500.0,
    USD: 100.0,
    XAF: 10000.0,
  });

  const convert = (from, to, amt) => {
    const rates = data?.rates;
    if (!rates || isPending) return 0;
    //convert from xaf or eur to usd
    const amtInUSD = from === "USD" ? amt : amt / rates[from];

    // convert from usd to another currency
    const result = to === "USD" ? amtInUSD : amtInUSD * rates[to];

    return result;
  };

  // make the state available to the entire app, by passing it down as props
  const value = {
    rates: data?.rates || {},
    isPending,
    isError,
    balance,
    setBalance,
    convert,
  };

  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  );
};
