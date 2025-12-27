import { useQuery } from "@tanstack/react-query";
import { getRates } from "../services/rates.service";
import { WalletContext } from "./WalletContext";
import { useState } from "react";

export const WalletContextProvider = ({ children }) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["rates"],
    queryFn: getRates,
  });

  // initial wallet balance state
  const [balance, setBalance] = useState({
    eur: 500.0,
    usd: 100.0,
    xaf: 10000.0,
  });

  // make the state available to the entire app, by passing it down as props
  const value = {
    rates: data?.rates || {},
    isPending,
    isError,
    balance,
    setBalance,
  };

  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  );
};
