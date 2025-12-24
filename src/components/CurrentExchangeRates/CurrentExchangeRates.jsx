import "./CurrentExchangeRates.css";
import { useExchange } from "../../hooks/useExchange";

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
          <p>1 USD = {usdToEUR.toFixed(2)} EUR</p>{" "}
          <p>1 EUR = {eurToXAF.toFixed(2)} XAF</p>
        </div>
        <div className="rates">
          <p>1 USD = {usdToXAF.toFixed(2)} XAF</p>{" "}
          <p>1 XAF = {xafToUSD.toFixed(4)} USD</p>
        </div>
        <div className="rates">
          <p>1 EUR = {eurToUSD.toFixed(2)} USD</p>{" "}
          <p>1 XAF = {xafToEUR.toFixed(4)} EUR</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentExchangeRates;
