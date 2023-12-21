import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../component/header/Header";
import CartList from "../../component/CartList";
import About from "../../component/About";
import RecommendMenu from "./RecommendMenu";
import Promotion from "./Promotion";
import Footer from "../../component/Footer";
import "./Home.css";

const Wrap = styled.div`
  width: 1920px;
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
    // 브라우저에서 Notification 지원 여부 확인
    if ("Notification" in window) {
      // 사용자에게 Notification 허용 여부 확인
      if (Notification.permission === "granted") {
        // Notification 생성
        new Notification(`${productName}이(가) 장바구니에 추가되었습니다.`);
      } else if (Notification.permission !== "denied") {
        // Notification 권한 요청
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
        <Header
          onCartIconClick={handleCartIconClick}
          isCartListActive={isCartListActive}
          cartItemCount={cartItemCount}
          setCartItemCount={setCartItemCount}
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
