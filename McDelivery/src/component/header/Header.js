import React, { useState, useEffect } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CartList from "../CartList";

const Header = ({
  onCartIconClick,
  isCartListActive,
  cartItemCount,
  setCartItemCount,
}) => {
  const [scrolled, setScrolled] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    // 장바구니에 상품 추가 로직

    setCartItems((prevItems) => {
      const updatedItems = [...prevItems, product];

      return updatedItems;
    });
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
      <div className="shopping_cart" onClick={onCartIconClick}>
        <FontAwesomeIcon icon={faCartShopping} className="cart" />
        <span className="quantity">{cartItemCount}</span>
      </div>
      {isCartListActive && (
        <CartList cartItems={cartItems} onAddToCart={handleAddToCart} />
      )}
    </div>
  );
};

export default Header;
