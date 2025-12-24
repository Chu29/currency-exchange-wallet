import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CurrentExchangeRates from "./components/CurrentExchangeRates/CurrentExchangeRates";
import Header from "./components/Header/Header";
import TransactionTab from "./components/Transactions/TransactionTab";
import WalletCard from "./components/Wallet/WalletCard";
import WalletBalanceCard from "./components/WalletBallance/WalletBalanceCard";

import "./index.css";
import { WalletProvider } from "./context/WalletContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WalletProvider>
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
      </WalletProvider>
    </QueryClientProvider>
  );
}

export default App;
