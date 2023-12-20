import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CartList from "../CartList";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ onCartIconClick, cartItemCount, setCartItemCount }) => {
  const [scrolled, setScrolled] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    // 장바구니에 상품 추가 로직
    setCartItems((prevItems) => [...prevItems, product]);
    setCartItemCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [cartItemCount]);

  return (
    <div className={`header_wrap ${scrolled ? "scrolled" : ""}`}>
      <div className="loginbox">
        <Link to="/">
          <img
            src="images/logo_img/mac_logo.png"
            alt="img"
            className="logo_img"
          />
        </Link>
        <FontAwesomeIcon icon={faUser} className="user" />
        <span></span>
        <h4>로그인</h4>
        <span></span>
        <Link to="/Menu" style={{ textDecoration: "none", color: "#707070" }}>
          <h4 className="menuLink">메뉴</h4>
        </Link>
        <span></span>
        <h4>마이페이지</h4>
        <span></span>
        <h4>기타정보</h4>
      </div>
      <div className="shopping_cart" onClick={onCartIconClick}>
        <FontAwesomeIcon icon={faCartShopping} className="cart" />
        <span className="quantity">{cartItemCount}</span>
      </div>
      <CartList cartItems={cartItems} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default Header;
