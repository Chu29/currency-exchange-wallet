import { FaChartLine } from "react-icons/fa";
import "./WalletBalanceCard.css";
import DropDownSelect from "../DropDownSelect/DropDownSelect";

const WalletBalanceCard = () => {
  return (
    <div className="balance-ctn">
      <div>
        <h3>
          <span>
            {" "}
            <FaChartLine /> Total Wallet Balance
          </span>{" "}
          <span>Displayed in USD</span>
        </h3>
        <span>$640.00</span>
      </div>
      <DropDownSelect />
    </div>
  );
};

export default WalletBalanceCard;
