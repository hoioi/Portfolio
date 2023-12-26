import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CartList from "../CartList";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({
  onCartIconClick,
  cartItemCount,
  setCartItemCount,
  onLogin,
}) => {
  const [scrolled, setScrolled] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  const [Active, setActive] = useState(false);
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

  const handleToggleMenu = () => {
    setActive(!Active);
  };

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

        <h4 onClick={onLogin}>로그인</h4>

        <span></span>
        <Link to="/Menu" style={{ textDecoration: "none", color: "#707070" }}>
          <h4 className="menuLink">메뉴</h4>
        </Link>

        <span></span>
        <Link
          to="/Protection"
          style={{ textDecoration: "none", color: "#707070" }}
        >
          <h4>개인정보 처리방침</h4>
        </Link>
      </div>
      <div className="mobile_loginbox">
        <Link to="/">
          <img
            src="images/logo_img/mac_logo.png"
            alt="img"
            className="logo_img"
          />
        </Link>
        <div className="trigger_Wrap">
          <div
            className={`trigger ${Active ? "active" : ""}`}
            onClick={handleToggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={`dropMenu ${Active ? "active" : ""}`}>
          <div className="Mobile_loginbox">
            <h4 onClick={onLogin}>로그인</h4>
          </div>
          <div className="Mobile_menu">
            <Link
              to="/Menu"
              style={{ textDecoration: "none", color: "#707070" }}
            >
              <h4 className="menuLink">메뉴</h4>
            </Link>
          </div>
          <div className="Mobile_Protection">
            <Link
              to="/Protection"
              style={{ textDecoration: "none", color: "#707070" }}
            >
              <h4>개인정보 처리방침</h4>
            </Link>
          </div>
        </div>
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
