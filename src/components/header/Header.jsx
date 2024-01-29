import React from "react";
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
