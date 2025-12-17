import "./DropDownSelect.css";

const DropDownSelect = () => {
  const CURRENCIES = ["USD", "EUR", "XAF"];

  return (
    <div className="drop">
      {CURRENCIES.map((currency, index) => (
        <option key={index}>{currency}</option>
      ))}
    </div>
  );
};

export default DropDownSelect;
