import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CartList from "../CartList";

const Header = () => {
  const [CartListActive, setCartListActive] = useState(false);
  const toggleCartList = () => {
    setCartListActive(!CartListActive);
  };

  const closeCartList = () => {
    setCartListActive(false);
  };

  return (
    <div className="header_wrap">
      <div className="loginbox">
        <FontAwesomeIcon icon={faUser} className="user" />
        <span></span>
        <h4>로그인</h4>
        <span></span>
        <h4>메뉴</h4>
        <span></span>
        <h4>마이페이지</h4>
        <span></span>
        <h4>기타정보</h4>
      </div>
      <div className="shopping_cart" onClick={toggleCartList}>
        <FontAwesomeIcon icon={faCartShopping} className="cart" />
        <span className="quantity">0</span>
      </div>
    </div>
  );
};

export default Header;
