import "./CurrentExchangeRates.css";
import { useExchange } from "../../hooks/useExchange";
import { TfiExchangeVertical } from "react-icons/tfi";
import { TbExchange } from "react-icons/tb";

const CurrentExchangeRates = () => {
  const { rates, isPending, isError } = useExchange();

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>An Error Occurred while loading rates...</div>;

  // Here, I destructure the data object and retrieve just the currencies needed.
  const { XAF, EUR } = rates;

  // Perform necessary conversion calculations here
  const usdToEUR = Number(EUR);
  const usdToXAF = Number(XAF);
  const eurToXAF = usdToXAF / usdToEUR;
  const xafToUSD = 1 / usdToXAF;
  const eurToUSD = 1 / usdToEUR;
  const xafToEUR = usdToEUR / usdToXAF;

  return (
    <div className="current-exchange-rate">
      <h3>Current Exchange Rates</h3>
      <div className="container">
        <div className="rates">
          <p>
            <strong>1</strong> USD = <strong>{usdToEUR.toFixed(2)}</strong> EUR
          </p>{" "}
          <TbExchange />
          <p>
            <strong>1</strong> EUR = <strong>{eurToXAF.toFixed(2)}</strong> XAF
          </p>
        </div>
        <div className="rates">
          <p>
            <strong>1</strong> USD = <strong>{usdToXAF.toFixed(2)}</strong> XAF
          </p>{" "}
          <TbExchange />
          <p>
            <strong>1</strong> XAF = <strong>{xafToUSD.toFixed(4)}</strong> USD
          </p>
        </div>
        <div className="rates">
          <p>
            <strong>1</strong> EUR = <strong>{eurToUSD.toFixed(2)}</strong> USD
          </p>{" "}
          <TbExchange />
          <p>
            <strong>1</strong> XAF = <strong>{xafToEUR.toFixed(4)}</strong> EUR
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrentExchangeRates;
