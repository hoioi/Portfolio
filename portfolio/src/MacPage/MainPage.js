import React from "react";
import styled from "styled-components";
import "./MainPage.css";

const MainWrap = styled.div`
  width: 100vw;
  height: 100vh;
`;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  background: var(--mac-color);
  position: relative;
`;

const MainTextBox = styled.div`
  position: absolute;
  top: 200px;
  left: 15.63%;
  width: 420px;
  @media screen and (max-width: 1280px) {
    width: 300px;
  }
  @media screen and (max-width: 480px) {
    left: 10%;
    width: 170px;
  }
`;

const MainSubTitle = styled.h2`
  font-size: 3rem;
  font-weight: 500;
  color: #505050;
`;

const MainTitle = styled.h1`
  font-size: 8rem;
  font-weight: 900;
  margin-top: 20px;

  @media screen and (max-width: 480px) {
    margin-top: 15px;
  }
`;

const MainContent = styled.h4`
  font-size: 2rem;
  font-weight: 500;
  margin-top: 20px;

  @media screen and (max-width: 480px) {
    margin-top: 15px;
  }
`;

const MainBoldText = styled.span`
  font-size: 2rem;
  font-weight: 900;
`;

const MainBackImg = styled.img`
  width: 700px;
  height: 700px;
  opacity: 0.2;
  position: absolute;
  top: 50px;
  left: 26.04%;
  @media screen and (max-width: 1280px) {
    width: 600px;
    height: 600px;
  }
  @media screen and (max-width: 480px) {
    width: 250px;
    height: 250px;
    top: 180px;
    left: 20%;
  }
`;

const MainImg = styled.img`
  width: 800px;
  position: absolute;
  top: 200px;
  right: 10%;
  padding: 10px;
  background: #fff;
  @media screen and (max-width: 1280px) {
    width: 600px;
  }
  @media screen and (max-width: 480px) {
    top: 250px;
    width: 150px;
    padding: 5px;
    right: 5%;
  }
`;

const MainBackPattern = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 90%;
  height: 12%;
  background: #f5f5f7;
`;

const MainSubText = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MainSubBox = styled.div`
  display: flex;
  gap: 50px;
`;
const MainSubBig = styled.h4`
  font-size: 2rem;
  font-weight: 900;
  width: 45px;
`;

const MainSubSmall = styled.h4`
  font-size: 2rem;
  font-weight: 400;
`;
const MainPage = () => {
  return (
    <MainWrap>
      <MainContainer>
        <MainBackPattern />
        <MainBackImg src="./imgs/mainimg/mac_img.png" />
        <MainImg src="./imgs/section02img/mainpage.png" />
        <MainTextBox>
          <MainSubTitle>Web Page</MainSubTitle>
          <MainTitle>McDelivery</MainTitle>
          <MainContent>
            사용자의 입장으로 하여금 메인페이지에 추천메뉴를 한눈에 보이도록
            하였고 메뉴 페이지에서 해당 제품의 성분표를 필요에 의할 때만 볼 수
            있도록 <MainBoldText>직접 기획한</MainBoldText> 페이지입니다.
          </MainContent>
          <MainSubText>
            <MainSubBox>
              <MainSubBig>Skill</MainSubBig>
              <MainSubSmall>React</MainSubSmall>
            </MainSubBox>
            <MainSubBox>
              <MainSubBig>Size</MainSubBig>
              <MainSubSmall>
                (1920 x 1080), (1280 x 1080),
                <br />
                (480 x 640)
              </MainSubSmall>
            </MainSubBox>
          </MainSubText>
        </MainTextBox>
      </MainContainer>
    </MainWrap>
  );
};

export default MainPage;
