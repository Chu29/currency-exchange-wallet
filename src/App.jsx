import Header from "./components/Header/Header";
import WalletBalanceCard from "./components/WalletBallance/WalletBalanceCard";

import "./index.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <WalletBalanceCard />
    </div>
  );
}

export default App;
