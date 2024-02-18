import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./EndPage.css";

const EndPageWrap = styled.div`
  width: 100vw;
  height: 100vh;
`;

const EndContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EndBackgroundImg = styled.img`
  width: 700px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.2;
  @media screen and (max-width: 480px) {
    width: 300px;
  }
`;

const EndText = styled.h1`
  font-size: 6rem;
  font-weight: 100;
  padding: 10px;
  margin-top: 10px;
`;

const EndTextBold = styled.span`
  font-size: 6rem;
  font-weight: 900;
  border-bottom: 3px solid var(--mac-color);
`;

const SubEndText = styled.h2`
  font-size: 4rem;
  font-weight: 700;
`;

const EndHomeButton = styled.button`
  width: 170px;
  height: 60px;
  font-size: 2rem;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  background: var(--mac-color);
  cursor: pointer;
  &:hover {
    background: #fff;
    color: var(--mac-color);
  }
  @media screen and (max-width: 1280px) {
    width: 150px;
    height: 50px;
  }
  @media screen and (max-width: 480px) {
    width: 90px;
    height: 40px;
  }
`;

const EndPage = () => {
  return (
    <EndPageWrap>
      <EndContainer>
        <EndBackgroundImg src="./imgs/Startimg/mac_logo.png" />
        <SubEndText>패스트푸드 넘버 원, 맥도날드</SubEndText>
        <EndText>
          <EndTextBold>THANK YOU FOR WATCHING!</EndTextBold>
        </EndText>
        <Link className="EndHomeButton" to="/">
          <EndHomeButton>홈으로</EndHomeButton>
        </Link>
      </EndContainer>
    </EndPageWrap>
  );
};

export default EndPage;
