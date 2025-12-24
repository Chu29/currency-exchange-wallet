/**
 * We are going to make our state available globally using the built in useContext hook + reactQuery
 */

import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { getRates } from "../services/rates.service";

// Create the context object
export const WalletContext = useContext();

export const WalletProvider = ({ children }) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["rates"],
    queryFn: getRates,
  });

  // make the state available to the entire app, by passing it down

  const value = {
    rates: data?.rates || {},
    isPending,
    isError,
  };

  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  );
};
