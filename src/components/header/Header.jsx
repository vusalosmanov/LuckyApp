import React from "react";
import BottomNav from "./BottomNav";
import MiddleNav from "./MiddleNav";
import TopNav from "./TopNav";
import BottomResMenu from "./BottomResMenu";
const Header = () => {

  return (
    <>
      <header className="header">
        <TopNav />
        <MiddleNav />
        <BottomResMenu/>
        <BottomNav />
      </header>
    </>
  );
};

export default Header;
