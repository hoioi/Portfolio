import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../component/header/Header";
import Login from "../../component/Login";
import CartList from "../../component/CartList";
import Footer from "../../component/Footer";
import "./Promotion05.css";
import { Link } from "react-router-dom";

const Promotion05Wrap = styled.div`
  width: 1920px;
  @media screen and (max-width: 1280px) {
    width: 1280px;
  }
  @media screen and (max-width: 480px) {
    width: 480px;
  }
`;
const Promotion05Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Promotion05Banner = styled.div`
  width: 100%;
  height: 220px;
  position: relative;
  margin-top: 80px;
  @media screen and (max-width: 1280px) {
    height: 180px;
  }
  @media screen and (max-width: 480px) {
    height: 140px;
  }
`;

const Promotion05BannerWrap = styled.div`
  width: 100%;
  height: 100%;
`;

const Promotion05BannerImg = styled.img`
  width: 100%;
  height: 100%;
  z-index: 2;
`;
const Promotion05BannerBlack = styled.div`
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
`;

const Promotion05BannerTextbox = styled.div`
  position: absolute;
  top: 5px;
  left: 15.63%;
  color: #fff;
  z-index: 10;
`;
const Promotion05BannerTitle = styled.h1`
  font-size: 5rem;
`;
const Promotion05BannerSubTextbox = styled.div`
  display: flex;
  gap: 30px;
`;
const Promotion05BannerSubText = styled.h2`
  font-size: 2rem;
`;

const Promotion05Section = styled.div`
  width: 1280px;
  position: relative;
  @media screen and (max-width: 1280px) {
    width: 600px;
  }

  @media screen and (max-width: 480px) {
    width: 300px;
  }
`;

const Promotion05SectionImg = styled.img`
  width: 100%;
  margin-top: 60px;
`;

const Promotion05SectionTopbox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  border-bottom: 3px solid#101010;
`;
const Promotion05SectionTopboxTitlename = styled.h1`
  font-size: 2rem;
`;

const Promotion05SectionTopboxNumber = styled.h1`
  font-size: 2rem;
  color: #707070;
`;

const Promotion05SectionBottomLine = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 2px solid#101010;
`;

const Promotion05SectionBottomBox = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Promotion05SectionBottomBoxMenuButton = styled.button`
  background: var(--main-color);
  width: 170px;
  height: 65px;
  border: none;
  outline: none;
  border-radius: 30px;
  font-size: 2rem;
  font-weight: 700;
  cursor: pointer;
  @media screen and (max-width: 1280px) {
    width: 130px;
    height: 50px;
  }
  @media screen and (max-width: 480px) {
    width: 100px;
    height: 40px;
    font-size: 2.5rem;
  }
`;

const Promotion05 = () => {
  const [isCartListActive, setIsCartListActive] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [ActiveLogin, setActiveLogin] = useState(false);
  const [cartItems, setCartItems] = useState([]);

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

  const handleRemoveFromCart = (itemId) => {
    setCartItemCount((prevCount) => prevCount - 1);
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== itemId)
    );
  };

  useEffect(() => {}, [cartItemCount]);

  return (
    <Promotion05Wrap>
      <Promotion05Container>
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
        <Promotion05Banner>
          <Promotion05BannerWrap>
            <Promotion05BannerImg src="/images/promotion_imgs/banner.jpg" />
            <Promotion05BannerBlack />
            <Promotion05BannerTextbox>
              <Promotion05BannerTitle>맥도날드 프로모션</Promotion05BannerTitle>
              <Promotion05BannerSubTextbox>
                <Promotion05BannerSubText>Home</Promotion05BannerSubText>
                <Promotion05BannerSubText>
                  맥도날드 프로모션
                </Promotion05BannerSubText>
              </Promotion05BannerSubTextbox>
            </Promotion05BannerTextbox>
          </Promotion05BannerWrap>
        </Promotion05Banner>
        <Promotion05Section>
          <Promotion05SectionTopbox>
            <Promotion05SectionTopboxTitlename>
              상콤달콤!
              <br /> NEW 자두 천도복숭아 칠러 출시!
            </Promotion05SectionTopboxTitlename>
            <Promotion05SectionTopboxNumber>
              2023-04-06 | 55911
            </Promotion05SectionTopboxNumber>
          </Promotion05SectionTopbox>
          <Promotion05SectionImg src="/images/promotion_imgs/section05.jpg" />
          <Promotion05SectionBottomLine />
          <Promotion05SectionBottomBox>
            <Link to="/">
              <Promotion05SectionBottomBoxMenuButton>
                목록보기
              </Promotion05SectionBottomBoxMenuButton>
            </Link>
          </Promotion05SectionBottomBox>
        </Promotion05Section>
        <Footer />
      </Promotion05Container>
    </Promotion05Wrap>
  );
};

export default Promotion05;
