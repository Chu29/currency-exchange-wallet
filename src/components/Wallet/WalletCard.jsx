import React from "react";
import { FaWallet } from "react-icons/fa6";
import './WalletCard.css'

const WalletCard = ({ currency, amt }) => {
  return (
    <div className="wallet-ctn">
      <h3>
        <FaWallet />
        <span>{currency}</span>
      </h3>
      <span>{amt}</span>
    </div>
  );
};

export default WalletCard;
