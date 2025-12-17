import Header from "./components/Header/Header";
import WalletCard from "./components/Wallet/WalletCard";
import WalletBalanceCard from "./components/WalletBallance/WalletBalanceCard";

import "./index.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <WalletBalanceCard />
      <section className="wallets">
        <WalletCard currency="USD" amt="$100.00" />
        <WalletCard currency="EUR" amt="€500.00" />
        <WalletCard currency="XAF" amt="XAF 10000.00" />
      </section>
    </div>
  );
}

export default App;
