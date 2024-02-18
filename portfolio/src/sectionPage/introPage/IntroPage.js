import React from "react";
import styled from "styled-components";
import "./IntroPage.css";

const IntroPageWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IntroContainer = styled.div`
  width: 1280px;
  height: 700px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  @media screen and (max-width: 1280px) {
    width: 960px;
    height: 500px;
  }
  @media screen and (max-width: 480px) {
    width: 360px;
    height: 200px;
  }
`;

const IntroIconBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  position: absolute;
  top: 40px;
  left: 60px;
  @media screen and (max-width: 1280px) {
    gap: 20px;
  }
  @media screen and (max-width: 480px) {
    top: 10px;
    left: 20px;
    gap: 5px;
  }
`;

const IntroIcon = styled.img`
  width: 60px;
  @media screen and (max-width: 1280px) {
    width: 40px;
  }
  @media screen and (max-width: 480px) {
    width: 15px;
  }
`;

const IntroTitle = styled.h1`
  font-size: 15rem;
  font-family: "Rampart One", sans-serif;
  font-weight: 400;
  position: absolute;
  top: 140px;
  left: 280px;

  @media screen and (max-width: 480px) {
    font-size: 10rem;
    top: 50px;
    left: 21.88%;
  }
`;

const IntroSubText = styled.h2`
  font-size: 4rem;
  font-weight: bold;
  position: absolute;
  right: 50px;
  bottom: 190px;
  @media screen and (max-width: 1280px) {
    right: 40px;
    bottom: 130px;
  }
  @media screen and (max-width: 480px) {
    font-size: 3rem;
    right: 20px;
    bottom: 50px;
  }
`;

const IntroName = styled.h3`
  font-size: 4rem;
  font-weight: bold;
  position: absolute;
  right: 50px;
  bottom: 90px;
  @media screen and (max-width: 1280px) {
    right: 40px;
    bottom: 80px;
  }
  @media screen and (max-width: 480px) {
    font-size: 3rem;
    right: 20px;
    bottom: 25px;
  }
`;
const IntroPage = () => {
  return (
    <IntroPageWrap>
      <IntroContainer>
        <IntroIconBox>
          <IntroIcon src="./imgs/iconimg/Html.png" />
          <IntroIcon src="./imgs/iconimg/Css.png" />
          <IntroIcon src="./imgs/iconimg/Scss.png" />
          <IntroIcon src="./imgs/iconimg/Js.jpg" />
          <IntroIcon src="./imgs/iconimg/jQuery.png" />
          <IntroIcon src="./imgs/iconimg/React.png" />
        </IntroIconBox>
        <IntroTitle>Portfoilo</IntroTitle>
        <IntroSubText>변화하고 발전하다</IntroSubText>
        <IntroName>최진석</IntroName>
      </IntroContainer>
    </IntroPageWrap>
  );
};

export default IntroPage;
