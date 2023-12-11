import React from "react";
import Header from "../../component/header/Header";
import List from "./List";
import CartList from "../../component/CartList";

const Menu = () => {
  return (
    <div className="menu_wrap">
      <div className="menu_container">
        <Header />
        <List />
        <CartList />
      </div>
    </div>
  );
};

export default Menu;
