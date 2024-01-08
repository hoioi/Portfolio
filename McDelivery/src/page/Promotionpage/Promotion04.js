import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../component/header/Header";
import Login from "../../component/Login";
import CartList from "../../component/CartList";
import Footer from "../../component/Footer";
import { Link } from "react-router-dom";
import "./Promotion04.css";

const Promotion04Wrap = styled.div`
  width: 1920px;
  @media screen and (max-width: 1280px) {
    width: 1280px;
  }
  @media screen and (max-width: 480px) {
    width: 480px;
  }
`;
const Promotion04Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Promotion04Banner = styled.div`
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

const Promotion04BannerWrap = styled.div`
  width: 100%;
  height: 100%;
`;

const Promotion04BannerImg = styled.img`
  width: 100%;
  height: 100%;
  z-index: 2;
`;
const Promotion04BannerBlack = styled.div`
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
`;

const Promotion04BannerTextbox = styled.div`
  position: absolute;
  top: 5px;
  left: 15.63%;
  color: #fff;
  z-index: 10;
`;
const Promotion04BannerTitle = styled.h1`
  font-size: 5rem;
`;
const Promotion04BannerSubTextbox = styled.div`
  display: flex;
  gap: 30px;
`;
const Promotion04BannerSubText = styled.h2`
  font-size: 2rem;
`;

const Promotion04Section = styled.div`
  width: 1280px;
  position: relative;
  @media screen and (max-width: 1280px) {
    width: 600px;
  }

  @media screen and (max-width: 480px) {
    width: 300px;
  }
`;

const Promotion04SectionImg = styled.img`
  width: 100%;
  margin-top: 60px;
`;

const Promotion04SectionImg02 = styled.img`
  width: 100%;
`;

const Promotion04SectionTopbox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  border-bottom: 3px solid#101010;
`;
const Promotion04SectionTopboxTitlename = styled.h1`
  font-size: 2rem;
`;

const Promotion04SectionTopboxNumber = styled.h1`
  font-size: 2rem;
  color: #707070;
`;

const Promotion04SectionBottomLine = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 2px solid#101010;
`;

const Promotion04SectionBottomBox = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Promotion04SectionBottomBoxMenuButton = styled.button`
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

const Promotion04 = () => {
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
    <Promotion04Wrap>
      <Promotion04Container>
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
        <Promotion04Banner>
          <Promotion04BannerWrap>
            <Promotion04BannerImg src="/images/promotion_imgs/banner.jpg" />
            <Promotion04BannerBlack />
            <Promotion04BannerTextbox>
              <Promotion04BannerTitle>맥도날드 프로모션</Promotion04BannerTitle>
              <Promotion04BannerSubTextbox>
                <Promotion04BannerSubText>Home</Promotion04BannerSubText>
                <Promotion04BannerSubText>
                  맥도날드 프로모션
                </Promotion04BannerSubText>
              </Promotion04BannerSubTextbox>
            </Promotion04BannerTextbox>
          </Promotion04BannerWrap>
        </Promotion04Banner>
        <Promotion04Section>
          <Promotion04SectionTopbox>
            <Promotion04SectionTopboxTitlename>
              맥도날드 M오더
            </Promotion04SectionTopboxTitlename>
            <Promotion04SectionTopboxNumber>
              2023-10-09 | 41314
            </Promotion04SectionTopboxNumber>
          </Promotion04SectionTopbox>
          <Promotion04SectionImg src="/images/promotion_imgs/section04.jpg" />
          <Promotion04SectionImg02 src="/images/promotion_imgs/section04_1.jpg" />
          <Promotion04SectionBottomLine />
          <Promotion04SectionBottomBox>
            <Link to="/">
              <Promotion04SectionBottomBoxMenuButton>
                목록보기
              </Promotion04SectionBottomBoxMenuButton>
            </Link>
          </Promotion04SectionBottomBox>
        </Promotion04Section>
        <Footer />
      </Promotion04Container>
    </Promotion04Wrap>
  );
};

export default Promotion04;
