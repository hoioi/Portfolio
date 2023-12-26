import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../component/header/Header";
import Login from "../../component/Login";
import CartList from "../../component/CartList";

import Footer from "../../component/Footer";
import "./Promotion02.css";
import { Link } from "react-router-dom";

const Promotion02Wrap = styled.div`
  width: 1920px;
  @media screen and (max-width: 1280px) {
    width: 1280px;
  }
  @media screen and (max-width: 480px) {
    width: 480px;
  }
`;
const Promotion02Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Promotion02Banner = styled.div`
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

const Promotion02BannerWrap = styled.div`
  // background: url("/images/promotion_imgs/banner.jpg") no-repeat center center;
  // background-size: cover;
  width: 100%;
  height: 100%;
`;

const Promotion02BannerImg = styled.img`
  width: 100%;
  height: 100%;
  z-index: 2;
`;
const Promotion02BannerBlack = styled.div`
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
`;

const Promotion02BannerTextbox = styled.div`
  position: absolute;
  top: 5px;
  left: 15.63%;
  color: #fff;
  z-index: 10;
`;
const Promotion02BannerTitle = styled.h1`
  font-size: 5rem;
`;
const Promotion02BannerSubTextbox = styled.div`
  display: flex;
  gap: 30px;
`;
const Promotion02BannerSubText = styled.h2`
  font-size: 2rem;
`;

const Promotion02Section = styled.div`
  width: 1280px;
  position: relative;
  @media screen and (max-width: 1280px) {
    width: 600px;
  }

  @media screen and (max-width: 480px) {
    width: 300px;
  }
`;

const Promotion02SectionImg = styled.img`
  width: 100%;
  margin-top: 60px;
`;

const Promotion02SectionTopbox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  border-bottom: 3px solid#101010;
`;
const Promotion02SectionTopboxTitlename = styled.h1`
  font-size: 2rem;
`;

const Promotion02SectionTopboxNumber = styled.h1`
  font-size: 2rem;
  color: #707070;
`;

const Promotion02SectionBottomLine = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 2px solid#101010;
`;

const Promotion02SectionBottomBox = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Promotion02SectionBottomBoxMenuButton = styled.button`
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

const Promotion02 = () => {
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
    <Promotion02Wrap>
      <Promotion02Container>
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
        <Promotion02Banner>
          <Promotion02BannerWrap>
            <Promotion02BannerImg src="/images/promotion_imgs/banner.jpg" />
            <Promotion02BannerBlack />
            <Promotion02BannerTextbox>
              <Promotion02BannerTitle>맥도날드 프로모션</Promotion02BannerTitle>
              <Promotion02BannerSubTextbox>
                <Promotion02BannerSubText>Home</Promotion02BannerSubText>
                <Promotion02BannerSubText>
                  맥도날드 프로모션
                </Promotion02BannerSubText>
              </Promotion02BannerSubTextbox>
            </Promotion02BannerTextbox>
          </Promotion02BannerWrap>
        </Promotion02Banner>
        <Promotion02Section>
          <Promotion02SectionTopbox>
            <Promotion02SectionTopboxTitlename>
              미트칠리 버거와 연말을 더 특별하게
            </Promotion02SectionTopboxTitlename>
            <Promotion02SectionTopboxNumber>
              2023-11-30 | 483199
            </Promotion02SectionTopboxNumber>
          </Promotion02SectionTopbox>
          <Promotion02SectionImg src="/images/promotion_imgs/section02.jpg" />

          <Promotion02SectionBottomLine />
          <Promotion02SectionBottomBox>
            <Link to="/">
              <Promotion02SectionBottomBoxMenuButton>
                목록보기
              </Promotion02SectionBottomBoxMenuButton>
            </Link>
          </Promotion02SectionBottomBox>
        </Promotion02Section>
        <Footer />
      </Promotion02Container>
    </Promotion02Wrap>
  );
};

export default Promotion02;
