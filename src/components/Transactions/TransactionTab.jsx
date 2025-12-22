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

const TransactionTab = () => {
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
          <Form>
            <h3 className="exchange-form-title">
              Exchange Currency <span>Convert between your currencies</span>{" "}
            </h3>
            <div className="main-ctn">
              <div className="ctn">
                From
                <div className="input-ctn">
                  <DropDownSelect />
                  <Input
                    className="input"
                    defaultValue="0.00"
                    type="number"
                    min={0}
                  />
                </div>
              </div>
              <div className="swap-ico">
                <FaExchangeAlt />
              </div>
              <div className="ctn">
                To
                <div className="input-ctn">
                  <DropDownSelect />
                  <Input
                    className="input"
                    defaultValue="0.00"
                    type="number"
                    min={0}
                  />
                </div>
              </div>
            </div>
            <button>Exchange</button>
          </Form>
        </TabPanel>
        <TabPanel id="deposit">
          <Form>
            <h3 className="exchange-form-title">
              Deposit Funds <span>Add money to your wallet</span>{" "}
            </h3>
            <div className="dept">
              <label htmlFor="currency">Currency</label>
              <select className="drop" name="currency" id="currency">
                <option value="USD">USD-US Dollar</option>
                <option value="EUR">EUR-Euro</option>
                <option value="XAF">XAF-Central African CFA Franc</option>
              </select>
            </div>
            <div className="dept">
              <label htmlFor="_deposit">Amount</label>
              <Input
                className="input"
                name="deposit"
                id="_deposit"
                defaultValue="0.00"
              />
            </div>
            <button>Deposit</button>
          </Form>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TransactionTab;
