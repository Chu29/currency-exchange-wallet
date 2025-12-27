import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CurrentExchangeRates from "./components/CurrentExchangeRates/CurrentExchangeRates";
import Header from "./components/Header/Header";
import TransactionTab from "./components/Transactions/TransactionTab";
import WalletCard from "./components/Wallet/WalletCard";
import WalletBalanceCard from "./components/WalletBallance/WalletBalanceCard";

import "./index.css";
import { useExchange } from "./hooks/useExchange";

function App() {
  const { balance } = useExchange();
  const { XAF, USD, EUR } = balance;
  return (
    <div className="app-container">
      <Header />
      <WalletBalanceCard />
      <section className="wallets">
        <WalletCard currency="USD" amt={"$ " + USD.toFixed(2)} />
        <WalletCard currency="EUR" amt={"€ " + EUR.toFixed(2)} />
        <WalletCard currency="XAF" amt={"XAF " + XAF.toFixed(2)} />
      </section>
      <TransactionTab />
      <CurrentExchangeRates />
    </div>
  );
}

export default App;
