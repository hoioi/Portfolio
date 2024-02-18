import React from "react";
import styled from "styled-components";
import "./Home03.css";

const Home03Wrap = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Home03Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Home03BackgroundPatton = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 0;
  border-bottom: 200px solid var(--mac-color);
  border-top: 200px solid transparent;
  border-left: 200px solid var(--mac-color);
  border-right: 200px solid transparent;
  @media screen and (max-width: 1280px) {
    border-bottom: 150px solid var(--mac-color);
    border-top: 150px solid transparent;
    border-left: 150px solid var(--mac-color);
    border-right: 150px solid transparent;
  }
  @media screen and (max-width: 480px) {
    border-bottom: 80px solid var(--mac-color);
    border-top: 80px solid transparent;
    border-left: 80px solid var(--mac-color);
    border-right: 80px solid transparent;
  }
`;

const Home02BigText = styled.h1`
  font-size: 6rem;
  font-weight: 900;
  color: var(--mac-color);
  position: absolute;
  left: 5%;
`;

const Home03Img = styled.img`
  width: 1000px;
  position: absolute;
  bottom: 200px;
  left: 5%;
  border-radius: 20px;
  padding: 10px;
  background: #fff;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.4);
  @media screen and (max-width: 1280px) {
    width: 500px;
    bottom: 400px;
  }
  @media screen and (max-width: 480px) {
    width: 160px;
    padding: 5px;
    border-radius: 10px;
    top: 40%;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
  }
`;

const Home03ContentBox = styled.div`
  position: absolute;
  top: 120px;
  right: 10%;
  width: 460px;
  @media screen and (max-width: 480px) {
    top: 180px;
    width: 190px;
    right: 0%;
  }
`;

const Home03TitleText = styled.h1`
  font-size: 7rem;
  font-weight: 900;
  color: var(--mac-color);
`;

const Home03SubText = styled.h2`
  font-size: 4rem;
  font-weight: 400;
  margin-top: 40px;
  padding-bottom: 5px;
  @media screen and (max-width: 480px) {
    margin-top: 20px;
  }
`;

const Home03SubTextBold = styled.span`
  font-size: 4rem;
  font-weight: 900;
  border-bottom: 3px solid var(--mac-color);
`;

const Home03ContentText = styled.h4`
  font-size: 2rem;
  font-weight: 400;
  margin-top: 40px;
  color: #707070;
  line-height: 30px;
  @media screen and (max-width: 480px) {
    margin-top: 20px;
    line-height: 20px;
  }
`;

const Home03ContentTextBold = styled.span`
  font-size: 2rem;
  font-weight: 900;
  color: #000;
`;

const Home03 = () => {
  return (
    <Home03Wrap>
      <Home03Container>
        <Home03BackgroundPatton></Home03BackgroundPatton>
        <Home02BigText>03 Home</Home02BigText>
        <Home03Img src="./imgs/Home03img/Promotion.png" />
        <Home03ContentBox>
          <Home03TitleText>Promotion & scroll</Home03TitleText>
          <Home03SubText>
            <Home03SubTextBold>프로모션 정보</Home03SubTextBold>를 보여주다
          </Home03SubText>
          <Home03ContentText>
            사용자에게 필요한 정보를 제공함으로써 사용자가 웹을 사용하는 과정을
            이해하고 최적화하여
            <Home03ContentTextBold>
              {" "}
              사용자가 원하는 목적을 빠르게
            </Home03ContentTextBold>{" "}
            달성할 수 있도록 돕습니다.
          </Home03ContentText>
          <Home03SubText>
            <Home03SubTextBold>스크롤</Home03SubTextBold>을 바꾸다
          </Home03SubText>
          <Home03ContentText>
            스크롤을 메인 컬러로 바꿈으로써
            <Home03ContentTextBold> 브랜드 이미지</Home03ContentTextBold>를
            강화하였습니다.
          </Home03ContentText>
        </Home03ContentBox>
      </Home03Container>
    </Home03Wrap>
  );
};

export default Home03;
