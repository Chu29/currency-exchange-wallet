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
  const { xaf, usd, eur } = balance;
  console.log(xaf);
  return (
    <div className="app-container">
      <Header />
      <WalletBalanceCard />
      <section className="wallets">
        <WalletCard currency="USD" amt={"$ " + usd.toFixed(2)} />
        <WalletCard currency="EUR" amt={"€ " + eur.toFixed(2)} />
        <WalletCard currency="XAF" amt={"XAF " + xaf.toFixed(2)} />
      </section>
      <TransactionTab />
      <CurrentExchangeRates />
    </div>
  );
}

export default App;
