import { useContext } from "react";
import { WalletContext } from "../context/WalletContext";

export const useExchange = () => {
  const context = useContext(WalletContext);
  return context;
};
