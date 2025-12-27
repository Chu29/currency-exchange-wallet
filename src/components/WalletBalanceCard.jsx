import { FaChartLine } from "react-icons/fa";
import DropDownSelect from "./DropDownSelect";
import { useExchange } from "../hooks/useExchange";
import useLocalStorage from "../hooks/useLocalStorage";

const WalletBalanceCard = () => {
  const [defaultCurrency, setDefaultCurrency] = useLocalStorage(
    "defaultCurrency",
    "USD"
  );
  const { balance, convert } = useExchange();

  const totalBalance = Object.entries(balance).reduce(
    (acc, [currency, amt]) => {
      const convertedAmt = convert(currency, defaultCurrency, amt);
      return acc + convertedAmt;
    },
    0
  );

  const currencySymbols = {
    USD: "$",
    EUR: "€",
    XAF: "CFA ",
  };

  return (
    <div className="balance-ctn">
      <div>
        <h3>
          <span>
            {" "}
            <FaChartLine /> Total Wallet Balance
          </span>{" "}
          <span>Displayed in {defaultCurrency}</span>
        </h3>
        <span>
          {currencySymbols[defaultCurrency] || ""}
          {totalBalance.toLocaleString(undefined, {
            maximumFractionDigits: 2,
          })}
        </span>
      </div>
      <DropDownSelect
        value={defaultCurrency}
        onChange={(e) => setDefaultCurrency(e.target.value)}
      />
    </div>
  );
};

export default WalletBalanceCard;
