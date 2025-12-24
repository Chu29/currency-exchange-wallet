import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CurrentExchangeRates from "./components/CurrentExchangeRates/CurrentExchangeRates";
import Header from "./components/Header/Header";
import TransactionTab from "./components/Transactions/TransactionTab";
import WalletCard from "./components/Wallet/WalletCard";
import WalletBalanceCard from "./components/WalletBallance/WalletBalanceCard";

import "./index.css";
import { WalletContextProvider } from "./context/WalletContextProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WalletContextProvider>
        <div className="app-container">
          <Header />
          <WalletBalanceCard />
          <section className="wallets">
            <WalletCard currency="USD" amt="$100.00" />
            <WalletCard currency="EUR" amt="€500.00" />
            <WalletCard currency="XAF" amt="XAF 10000.00" />
          </section>
          <TransactionTab />
          <CurrentExchangeRates />
        </div>
      </WalletContextProvider>
    </QueryClientProvider>
  );
}

export default App;
