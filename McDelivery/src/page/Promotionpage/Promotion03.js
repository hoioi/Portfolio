import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../component/header/Header";
import Login from "../../component/Login";
import CartList from "../../component/CartList";
import Footer from "../../component/Footer";
import "./Promotion03.css";
import { Link } from "react-router-dom";

const Promotion03Wrap = styled.div`
  width: 1920px;
  @media screen and (max-width: 1280px) {
    width: 1280px;
  }
  @media screen and (max-width: 480px) {
    width: 480px;
  }
`;
const Promotion03Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Promotion03Banner = styled.div`
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

const Promotion03BannerWrap = styled.div`
  width: 100%;
  height: 100%;
`;

const Promotion03BannerImg = styled.img`
  width: 100%;
  height: 100%;
  z-index: 2;
`;
const Promotion03BannerBlack = styled.div`
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
`;

const Promotion03BannerTextbox = styled.div`
  position: absolute;
  top: 5px;
  left: 15.63%;
  color: #fff;
  z-index: 10;
`;
const Promotion03BannerTitle = styled.h1`
  font-size: 5rem;
`;
const Promotion03BannerSubTextbox = styled.div`
  display: flex;
  gap: 30px;
`;
const Promotion03BannerSubText = styled.h2`
  font-size: 2rem;
`;

const Promotion03Section = styled.div`
  width: 1280px;
  position: relative;
  @media screen and (max-width: 1280px) {
    width: 600px;
  }

  @media screen and (max-width: 480px) {
    width: 300px;
  }
`;

const Promotion03SectionImg = styled.img`
  width: 100%;
  margin-top: 60px;
`;

const Promotion03SectionTopbox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  border-bottom: 3px solid#101010;
`;
const Promotion03SectionTopboxTitlename = styled.h1`
  font-size: 2rem;
`;

const Promotion03SectionTopboxNumber = styled.h1`
  font-size: 2rem;
  color: #707070;
`;

const Promotion03SectionBottomLine = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 2px solid#101010;
`;

const Promotion03SectionBottomBox = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Promotion03SectionBottomBoxMenuButton = styled.button`
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

const Promotion03 = () => {
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
    <Promotion03Wrap>
      <Promotion03Container>
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
        <Promotion03Banner>
          <Promotion03BannerWrap>
            <Promotion03BannerImg src="/images/promotion_imgs/banner.jpg" />
            <Promotion03BannerBlack />
            <Promotion03BannerTextbox>
              <Promotion03BannerTitle>맥도날드 프로모션</Promotion03BannerTitle>
              <Promotion03BannerSubTextbox>
                <Promotion03BannerSubText>Home</Promotion03BannerSubText>
                <Promotion03BannerSubText>
                  맥도날드 프로모션
                </Promotion03BannerSubText>
              </Promotion03BannerSubTextbox>
            </Promotion03BannerTextbox>
          </Promotion03BannerWrap>
        </Promotion03Banner>
        <Promotion03Section>
          <Promotion03SectionTopbox>
            <Promotion03SectionTopboxTitlename>
              갓성비 간식 맛집, 맥도날드 해피 스낵!
            </Promotion03SectionTopboxTitlename>
            <Promotion03SectionTopboxNumber>
              2023-11-30 | 553357
            </Promotion03SectionTopboxNumber>
          </Promotion03SectionTopbox>
          <Promotion03SectionImg src="/images/promotion_imgs/section03.jpg" />
          <Promotion03SectionBottomLine />
          <Promotion03SectionBottomBox>
            <Link to="/">
              <Promotion03SectionBottomBoxMenuButton>
                목록보기
              </Promotion03SectionBottomBoxMenuButton>
            </Link>
          </Promotion03SectionBottomBox>
        </Promotion03Section>
        <Footer />
      </Promotion03Container>
    </Promotion03Wrap>
  );
};

export default Promotion03;
