import CurrentExchangeRates from "./components/CurrentExchangeRates";
import Header from "./components/Header";
import TransactionTab from "./components/TransactionTab";
import WalletCard from "./components/WalletCard";
import WalletBalanceCard from "./components/WalletBalanceCard";

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
        <WalletCard currency="USD" amt={"$ " + USD.toLocaleString()} />
        <WalletCard currency="EUR" amt={"€ " + EUR.toLocaleString()} />
        <WalletCard currency="XAF" amt={"XAF " + XAF.toLocaleString()} />
      </section>
      <TransactionTab />
      <CurrentExchangeRates />
    </div>
  );
}

export default App;
