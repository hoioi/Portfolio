import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../component/header/Header";
import Login from "../../component/Login";
import CartList from "../../component/CartList";
import { Link } from "react-router-dom";
import Footer from "../../component/Footer";
import "./Promotion01.css";

const Promotion01Wrap = styled.div`
  width: 1920px;
  @media screen and (max-width: 1280px) {
    width: 1280px;
  }
  @media screen and (max-width: 480px) {
    width: 480px;
  }
`;
const Promotion01Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Promotion01Banner = styled.div`
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

const Promotion01BannerWrap = styled.div`
  width: 100%;
  height: 100%;
`;

const Promotion01BannerImg = styled.img`
  width: 100%;
  height: 100%;
  z-index: 2;
`;
const Promotion01BannerBlack = styled.div`
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
`;

const Promotion01BannerTextbox = styled.div`
  position: absolute;
  top: 5px;
  left: 15.63%;
  color: #fff;
  z-index: 10;
`;
const Promotion01BannerTitle = styled.h1`
  font-size: 5rem;
`;
const Promotion01BannerSubTextbox = styled.div`
  display: flex;
  gap: 30px;
`;
const Promotion01BannerSubText = styled.h2`
  font-size: 2rem;
`;

const Promotion01Section = styled.div`
  width: 1280px;
  position: relative;
  @media screen and (max-width: 1280px) {
    width: 600px;
  }

  @media screen and (max-width: 480px) {
    width: 300px;
  }
`;

const Promotion01SectionImg = styled.img`
  width: 100%;
  margin-top: 60px;
`;

const Promotion01SectionOrder = styled.button`
  background: var(--main-color);
  color: var(--main_red-color);
  position: absolute;
  width: 740px;
  height: 140px;
  left: 21%;
  top: 39.8%;
  border-radius: 60px;
  font-size: 6rem;
  font-weight: 700;
  cursor: pointer;
  @media screen and (max-width: 1280px) {
    width: 345px;
    height: 75px;
    top: 40.5%;
  }
  @media screen and (max-width: 480px) {
    width: 175px;
    height: 43px;
    top: 42%;
    font-size: 5rem;
    font-weight: 900;
  }
`;

const Promotion01SectionTopbox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  border-bottom: 3px solid#101010;
`;
const Promotion01SectionTopboxTitlename = styled.h1`
  font-size: 2rem;
`;

const Promotion01SectionTopboxNumber = styled.h1`
  font-size: 2rem;
  color: #707070;
`;

const Promotion01SectionBottomLine = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 2px solid#101010;
`;

const Promotion01SectionBottomBox = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Promotion01SectionBottomBoxMenuButton = styled.button`
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

const Promotion01 = () => {
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
    <Promotion01Wrap>
      <Promotion01Container>
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
        <Promotion01Banner>
          <Promotion01BannerWrap>
            <Promotion01BannerImg src="/images/promotion_imgs/banner.jpg" />
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
          </Promotion01BannerWrap>
        </Promotion01Banner>
        <Promotion01Section>
          <Promotion01SectionTopbox>
            <Promotion01SectionTopboxTitlename>
              신선한 토마토와 매콤한 소스의 만남!
            </Promotion01SectionTopboxTitlename>
            <Promotion01SectionTopboxNumber>
              2023-11-30 | 10719
            </Promotion01SectionTopboxNumber>
          </Promotion01SectionTopbox>
          <Promotion01SectionImg src="/images/promotion_imgs/section01.jpg" />
          <Link to="/menu">
            <Promotion01SectionOrder>지금 주문하기</Promotion01SectionOrder>
          </Link>
          <Promotion01SectionBottomLine />
          <Promotion01SectionBottomBox>
            <Link to="/">
              <Promotion01SectionBottomBoxMenuButton>
                목록보기
              </Promotion01SectionBottomBoxMenuButton>
            </Link>
          </Promotion01SectionBottomBox>
        </Promotion01Section>
        <Footer />
      </Promotion01Container>
    </Promotion01Wrap>
  );
};

export default Promotion01;
