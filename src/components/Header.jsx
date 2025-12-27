import "../index.css";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <h1 className="title">
        Xchange <span>Manage and exchange your multi-currency portfolio</span>
      </h1>
      <div className="profile">
        <FaUserCircle className="profile-icon" />
        <span className="user-name">username</span>
      </div>
    </div>
  );
};

export default Header;
