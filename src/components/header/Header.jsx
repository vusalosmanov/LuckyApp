import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo/logo-header.svg";
import BottomNav from "./BottomNav";
import MiddleNav from "./MiddleNav";
import TopNav from "./TopNav";
const Header = () => {

  return (
    <>
      <header className="header">
        <TopNav />
        <MiddleNav />
        <BottomNav />
      </header>
    </>
  );
};

export default Header;
