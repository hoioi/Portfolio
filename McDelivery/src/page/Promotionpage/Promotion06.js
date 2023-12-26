import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../component/header/Header";
import Login from "../../component/Login";
import CartList from "../../component/CartList";
import Footer from "../../component/Footer";
import "./Promotion05.css";
import { Link } from "react-router-dom";

const Promotion06Wrap = styled.div`
  width: 1920px;
  @media screen and (max-width: 1280px) {
    width: 1280px;
  }
  @media screen and (max-width: 480px) {
    width: 480px;
  }
`;
const Promotion06Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Promotion06Banner = styled.div`
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

const Promotion06BannerWrap = styled.div`
  // background: url("/images/promotion_imgs/banner.jpg") no-repeat center center;
  // background-size: cover;
  width: 100%;
  height: 100%;
`;

const Promotion06BannerImg = styled.img`
  width: 100%;
  height: 100%;
  z-index: 2;
`;
const Promotion06BannerBlack = styled.div`
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
`;

const Promotion06BannerTextbox = styled.div`
  position: absolute;
  top: 5px;
  left: 15.63%;
  color: #fff;
  z-index: 10;
`;
const Promotion06BannerTitle = styled.h1`
  font-size: 5rem;
`;
const Promotion06BannerSubTextbox = styled.div`
  display: flex;
  gap: 30px;
`;
const Promotion06BannerSubText = styled.h2`
  font-size: 2rem;
`;

const Promotion06Section = styled.div`
  width: 1280px;
  position: relative;
  @media screen and (max-width: 1280px) {
    width: 600px;
  }

  @media screen and (max-width: 480px) {
    width: 300px;
  }
`;

const Promotion06SectionImg = styled.img`
  width: 100%;
  margin-top: 60px;
`;

const Promotion06SectionTopbox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  border-bottom: 3px solid#101010;
`;
const Promotion06SectionTopboxTitlename = styled.h1`
  font-size: 2rem;
`;

const Promotion06SectionTopboxNumber = styled.h1`
  font-size: 2rem;
  color: #707070;
`;

const Promotion06SectionBottomLine = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 2px solid#101010;
`;

const Promotion06SectionBottomBox = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Promotion06SectionBottomBoxMenuButton = styled.button`
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

const Promotion06 = () => {
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
    <Promotion06Wrap>
      <Promotion06Container>
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
        <Promotion06Banner>
          <Promotion06BannerWrap>
            <Promotion06BannerImg src="/images/promotion_imgs/banner.jpg" />
            <Promotion06BannerBlack />
            <Promotion06BannerTextbox>
              <Promotion06BannerTitle>맥도날드 프로모션</Promotion06BannerTitle>
              <Promotion06BannerSubTextbox>
                <Promotion06BannerSubText>Home</Promotion06BannerSubText>
                <Promotion06BannerSubText>
                  맥도날드 프로모션
                </Promotion06BannerSubText>
              </Promotion06BannerSubTextbox>
            </Promotion06BannerTextbox>
          </Promotion06BannerWrap>
        </Promotion06Banner>
        <Promotion06Section>
          <Promotion06SectionTopbox>
            <Promotion06SectionTopboxTitlename>
              상콤달콤!
              <br /> NEW 자두 천도복숭아 칠러 출시!
            </Promotion06SectionTopboxTitlename>
            <Promotion06SectionTopboxNumber>
              2023-04-06 | 55911
            </Promotion06SectionTopboxNumber>
          </Promotion06SectionTopbox>
          <Promotion06SectionImg src="/images/promotion_imgs/section06.jpg" />
          <Promotion06SectionBottomLine />
          <Promotion06SectionBottomBox>
            <Link to="/">
              <Promotion06SectionBottomBoxMenuButton>
                목록보기
              </Promotion06SectionBottomBoxMenuButton>
            </Link>
          </Promotion06SectionBottomBox>
        </Promotion06Section>
        <Footer />
      </Promotion06Container>
    </Promotion06Wrap>
  );
};

export default Promotion06;
