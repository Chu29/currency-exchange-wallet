import {
  Form,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "react-aria-components";
import "./TransactionTab.css";
import DropDownSelect from "../DropDownSelect/DropDownSelect";
import { FaExchangeAlt } from "react-icons/fa";
import { useExchange } from "../../hooks/useExchange";
import { useState } from "react";

const TransactionTab = () => {
  const { balance, setBalance, convert } = useExchange();

  // Exchange form state
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("XAF");
  const [baseAmt, setBaseAmt] = useState("");

  // Deposit form state
  const [depositCurrency, setDepositCurrency] = useState("USD");
  const [depositAmt, setDepositAmt] = useState("");

  // Calculate converted amount
  const targetAmt = convert(baseCurrency, targetCurrency, Number(baseAmt) || 0);

  const handleExchange = (e) => {
    e.preventDefault();

    const amount = Number(baseAmt); // convert the value received from input field to a number
    if (!amount || amount <= 0) return;
    if (balance[baseCurrency] < amount) {
      alert("Insufficient balance!");
      return;
    }

    setBalance((prev) => ({
      ...prev,
      [baseCurrency]: prev[baseCurrency] - amount,
      [targetCurrency]: prev[targetCurrency] + targetAmt,
    }));

    setBaseAmt("");
  };

  const handleDeposit = (e) => {
    e.preventDefault();

    const amount = Number(depositAmt);
    if (!amount || amount <= 0) return;

    setBalance((prev) => ({
      ...prev,
      [depositCurrency]: prev[depositCurrency] + amount,
    }));

    setDepositAmt("");
  };

  return (
    <Tabs className="transaction-section">
      <TabList className="select-transaction">
        <Tab id="exchange" className="transaction-title">
          Exchange
        </Tab>
        <Tab id="deposit" className="transaction-title">
          Deposit
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel id="exchange">
          <Form onSubmit={handleExchange}>
            <h3 className="exchange-form-title">
              Exchange Currency <span>Convert between your currencies</span>
            </h3>

            <div className="main-ctn">
              <div className="ctn">
                <label>From</label>
                <div className="input-ctn">
                  <DropDownSelect
                    value={baseCurrency}
                    onChange={(e) => setBaseCurrency(e.target.value)}
                  />
                  <Input
                    type="number"
                    min="0"
                    step="0.01"
                    value={baseAmt}
                    onChange={(e) => setBaseAmt(e.target.value)}
                    className="input"
                    placeholder="0.00"
                  />
                </div>
              </div>

              <div className="swap-ico">
                <FaExchangeAlt />
              </div>

              <div className="ctn">
                <label>To</label>
                <div className="input-ctn">
                  <DropDownSelect
                    value={targetCurrency}
                    onChange={(e) => setTargetCurrency(e.target.value)}
                  />
                  <Input
                    type="number"
                    value={targetAmt.toFixed(2)}
                    readOnly
                    className="input"
                    placeholder="0.00"
                  />
                </div>
              </div>
            </div>

            <button type="submit">Exchange</button>
          </Form>
        </TabPanel>

        <TabPanel id="deposit">
          <Form onSubmit={handleDeposit}>
            <h3 className="exchange-form-title">
              Deposit Funds <span>Add money to your wallet</span>
            </h3>

            <div className="dept">
              <label htmlFor="currency">Currency</label>
              <select
                id="currency"
                value={depositCurrency}
                onChange={(e) => setDepositCurrency(e.target.value)}
                className="drop"
              >
                <option value="USD">USD - US Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="XAF">XAF - Central African CFA Franc</option>
              </select>
            </div>

            <div className="dept">
              <label htmlFor="_deposit">Amount</label>
              <Input
                type="number"
                step="0.01"
                min="0"
                id="_deposit"
                className="input"
                value={depositAmt}
                onChange={(e) => setDepositAmt(e.target.value)}
                placeholder="0.00"
              />
            </div>

            <button type="submit">Deposit</button>
          </Form>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TransactionTab;
