import React, { useState, useEffect } from "react";
import Header from "../../component/header/Header";
import List from "./List";
import CartList from "../../component/CartList";
import About from "../../component/About";
import Footer from "../../component/Footer";
import "./Menu.css";

const Menu = () => {
  const [isCartListActive, setIsCartListActive] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [cartItemCount, setCartItemCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const handleCartIconClick = () => {
    setIsCartListActive(true);
  };

  const handleCloseCartList = () => {
    setIsCartListActive(false);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const showNotification = (productName) => {
    if ("Notification" in window) {
      if (Notification.permission === "granted") {
        new Notification(`${productName}이(가) 장바구니에 추가되었습니다.`);
      } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            new Notification(`${productName}이(가) 장바구니에 추가되었습니다.`);
          }
        });
      }
    }
  };

  const handleAddToCart = (item) => {
    if (selectedProduct) {
      setCartItemCount((prevCount) => prevCount + 1);
      setCartItems((prevCartItems) => [...prevCartItems, item]);

      showNotification(item.name);
    }
  };

  const handleRemoveFromCart = (itemId) => {
    setCartItemCount((prevCount) => prevCount - 1);
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== itemId)
    );
  };

  useEffect(() => {}, [cartItemCount]);

  return (
    <div className="menu_wrap">
      <div className="menu_container">
        <div className="circle"></div>
        <Header
          onCartIconClick={handleCartIconClick}
          isCartListActive={isCartListActive}
          cartItemCount={cartItemCount}
          setCartItemCount={setCartItemCount}
        />
        <List onProductClick={handleProductClick} />
        {isCartListActive && (
          <CartList
            onClose={handleCloseCartList}
            isCartListActive={isCartListActive}
            cartItems={cartItems}
            onRemoveFromCart={handleRemoveFromCart}
          />
        )}
        {selectedProduct && (
          <About
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onAddToCart={handleAddToCart}
          />
        )}
        <Footer />
      </div>
    </div>
  );
};

export default Menu;
