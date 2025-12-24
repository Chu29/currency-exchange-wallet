import { useQuery } from "@tanstack/react-query";
import { getRates } from "../services/rates.service";
import { WalletContext } from "./WalletContext";

export const WalletContextProvider = ({ children }) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["rates"],
    queryFn: getRates,
  });

  // make the state available to the entire app, by passing it down as props
  const value = {
    rates: data?.rates || {},
    isPending,
    isError,
  };

  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  );
};
