import React, { useState, useEffect } from "react";
import Header from "../../component/header/Header";
import List from "./List";
import CartList from "../../component/CartList";
import About from "../../component/About";
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

  const handleAddToCart = (item) => {
    if (selectedProduct) {
      setCartItemCount((prevCount) => prevCount + 1);
      setCartItems((prevCartItems) => [...prevCartItems, item]);
    }
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
          />
        )}
        {selectedProduct && (
          <About
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onAddToCart={handleAddToCart}
          />
        )}
      </div>
    </div>
  );
};

export default Menu;
