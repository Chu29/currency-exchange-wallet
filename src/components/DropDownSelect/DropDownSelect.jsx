import "./DropDownSelect.css";

const DropDownSelect = ({ value, onChange }) => {
  const CURRENCIES = ["USD", "EUR", "XAF"];

  return (
    <select value={value} onChange={onChange} className="drop">
      {CURRENCIES.map((currency, index) => (
        <option key={index} value={CURRENCIES[index]}>
          {currency}
        </option>
      ))}
    </select>
  );
};

export default DropDownSelect;
