import "./DropDownSelect.css";

const DropDownSelect = () => {
  const CURRENCIES = ["USD", "EUR", "XAF"];

  return (
    <select className="drop">
      {CURRENCIES.map((currency, index) => (
        <option key={index} value={CURRENCIES[index]}>
          {currency}
        </option>
      ))}
    </select>
  );
};

export default DropDownSelect;
