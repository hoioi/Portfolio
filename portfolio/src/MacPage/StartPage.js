import React from "react";
import styled from "styled-components";
import "./StartPage.css";

const StartPageWrap = styled.div`
  width: 100vw;
  height: 100vh;
`;

const StartContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const StartBackgroundImg = styled.img`
  width: 700px;
  position: absolute;
  top: 200px;
  left: 40%;
  opacity: 0.2;
  @media screen and (max-width: 1280px) {
    width: 500px;
  }
  @media screen and (max-width: 480px) {
    width: 200px;
    top: 300px;
    left: 40%;
  }
`;

const StartText = styled.h1`
  font-size: 7rem;
  font-weight: 100;
  position: absolute;
  top: 250px;
  left: 20%;
  padding: 10px;
  @media screen and (max-width: 1280px) {
    top: 300px;
  }
  @media screen and (max-width: 480px) {
    font-size: 6rem;
    left: 10%;
  }
`;

const StartTextBold = styled.span`
  font-size: 7rem;
  font-weight: 900;
  border-bottom: 3px solid var(--mac-color);
  @media screen and (max-width: 480px) {
    font-size: 6rem;
  }
`;

const StartPage = () => {
  return (
    <StartPageWrap>
      <StartContainer>
        <StartBackgroundImg src="./imgs/Startimg/mac_logo.png" />
        <StartText>
          보다 <StartTextBold>직관적이게</StartTextBold>
          <br />
          보다 <StartTextBold>편리하게</StartTextBold>
          <br />
          사용자의 중심으로
          <br />
          웹을 <StartTextBold>기획하다</StartTextBold>
        </StartText>
      </StartContainer>
    </StartPageWrap>
  );
};

export default StartPage;
