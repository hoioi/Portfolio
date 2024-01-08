import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../component/header/Header";
import CartList from "../../component/CartList";
import About from "../../component/About";
import RecommendMenu from "./RecommendMenu";
import Promotion from "./Promotion";
import Footer from "../../component/Footer";
import Login from "../../component/Login";
import "./Home.css";

const Wrap = styled.div`
  width: 100wv;
  @media screen and (max-width: 1280px) {
    width: 100wv;
  }
  @media screen and (max-width: 480px) {
    width: 100wv;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Home = () => {
  const [isCartListActive, setIsCartListActive] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [cartItemCount, setCartItemCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const [ActiveLogin, setActiveLogin] = useState(false);

  const handleCartIconClick = () => {
    setIsCartListActive(true);
  };

  const handleCloseCartList = () => {
    setIsCartListActive(false);
  };

  const onLogin = () => {
    setActiveLogin(true);
  };

  const offLogin = () => {
    setActiveLogin(false);
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
    <Wrap>
      <Container>
        {ActiveLogin && <Login offLogin={offLogin} />}

        <Header
          onCartIconClick={handleCartIconClick}
          isCartListActive={isCartListActive}
          cartItemCount={cartItemCount}
          setCartItemCount={setCartItemCount}
          onLogin={onLogin}
        />

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
        <RecommendMenu onProductClick={handleProductClick} />
        <Promotion />
        <Footer />
      </Container>
    </Wrap>
  );
};

export default Home;
