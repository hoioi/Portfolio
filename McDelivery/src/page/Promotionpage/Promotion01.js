import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../component/header/Header";
import CartList from "../../component/CartList";

const Promotion01Wrap = styled.div`
  width: 1920px;
`;
const Promotion01Container = styled.div``;

const Promotion01Banner = styled.div`
  width: 100%;
  height: 220px;
  position: relative;
  margin-top: 80px;
`;

const Promotion01BannerImg = styled.div`
  background: url("/images/promotion_imgs/banner.jpg") no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 100%;
  z-index: 2;
`;
const Promotion01BannerBlack = styled.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
`;

const Promotion01BannerTextbox = styled.div`
  color: #fff;
  z-index: 10;
`;
const Promotion01BannerTitle = styled.h1``;
const Promotion01BannerSubTextbox = styled.div``;
const Promotion01BannerSubText = styled.h2``;

const Promotion01 = () => {
  const [isCartListActive, setIsCartListActive] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

  const [cartItems, setCartItems] = useState([]);

  const handleCartIconClick = () => {
    setIsCartListActive(true);
  };

  const handleCloseCartList = () => {
    setIsCartListActive(false);
  };

  const handleRemoveFromCart = (itemId) => {
    setCartItemCount((prevCount) => prevCount - 1);
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== itemId)
    );
  };

  useEffect(() => {}, [cartItemCount]);

  return (
    <Promotion01Wrap>
      <Promotion01Container>
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
        <Promotion01Banner>
          <Promotion01BannerImg>
            <Promotion01BannerBlack />
            <Promotion01BannerTextbox>
              <Promotion01BannerTitle>맥도날드 프로모션</Promotion01BannerTitle>
              <Promotion01BannerSubTextbox>
                <Promotion01BannerSubText>Home</Promotion01BannerSubText>
                <Promotion01BannerSubText>
                  맥도날드 프로모션
                </Promotion01BannerSubText>
              </Promotion01BannerSubTextbox>
            </Promotion01BannerTextbox>
          </Promotion01BannerImg>
        </Promotion01Banner>
      </Promotion01Container>
    </Promotion01Wrap>
  );
};

export default Promotion01;
