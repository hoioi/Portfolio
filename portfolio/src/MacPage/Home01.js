import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Home01.css";

const Home01Wrap = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Home01Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Home01BackgroundPatton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-bottom: 200px solid transparent;
  border-top: 200px solid var(--mac-color);
  border-left: 200px solid transparent;
  border-right: 200px solid var(--mac-color);
  @media screen and (max-width: 1280px) {
    border-bottom: 150px solid transparent;
    border-top: 150px solid var(--mac-color);
    border-left: 150px solid transparent;
    border-right: 150px solid var(--mac-color);
  }
  @media screen and (max-width: 480px) {
    border-bottom: 80px solid transparent;
    border-top: 80px solid var(--mac-color);
    border-left: 80px solid transparent;
    border-right: 80px solid var(--mac-color);
  }
`;

const Home01BigText = styled.h1`
  font-size: 6rem;
  font-weight: 900;
  color: var(--mac-color);
  position: absolute;
  left: 5%;
`;

const Home01Img = styled.img`
  width: 650px;
  border-radius: 20px;
  position: absolute;
  top: 120px;
  padding: 10px;
  background: #fff;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.4);
  @media screen and (max-width: 1280px) {
    width: 500px;
  }
  @media screen and (max-width: 480px) {
    width: 150px;
    padding: 5px;
    border-radius: 10px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
  }
`;

const Home01Text = styled.div`
  width: 580px;
  height: 350px;
  position: absolute;
  top: 140px;
  @media screen and (max-width: 1280px) {
    width: 500px;
  }
  @media screen and (max-width: 480px) {
    width: 175px;
  }
`;

const Home01Title = styled.h1`
  font-size: 4rem;
  font-weight: 400;
`;

const Home01TitleBold = styled.span`
  font-size: 4rem;
  font-weight: 900;
  border-bottom: 3px solid var(--mac-color);
`;

const Home01Content = styled.h4`
  font-size: 2rem;
  font-weight: 400;
  margin-top: 30px;
  line-height: 40px;
  @media screen and (max-width: 1280px) {
    line-height: 30px;
  }
  @media screen and (max-width: 480px) {
    line-height: 20px;
  }
`;

const Home01ContentBold = styled.span`
  font-size: 2rem;
  font-weight: 900;
`;

const Home01ContentDot = styled.span`
  font-size: 3rem;
  font-weight: 900;
`;

const Home01LinkText = styled.h1`
  font-size: 2rem;
  margin-top: 10px;
  color: var(--macRed-color);
`;
const Home01 = () => {
  return (
    <Home01Wrap>
      <Home01Container>
        <Home01BackgroundPatton></Home01BackgroundPatton>
        <Home01BigText>01 HOME</Home01BigText>

        <Home01Img
          className="Home01Img01"
          src="./imgs/Home01img/mainpageOriginal.png"
        />
        <Home01Img
          className="Home01Img02"
          src="./imgs/Home01img/mainpage.png"
        />
        <Home01Text className="Home01Text01">
          <Home01Title>
            문제점을 <Home01TitleBold>발견하다</Home01TitleBold>
            <Link
              to="https://www.mcdelivery.co.kr/kr/"
              style={{ textDecoration: `none` }}
            >
              <Home01LinkText>
                (기존: https://www.mcdelivery.co.kr/kr/)
              </Home01LinkText>
            </Link>
            <Home01Content>
              <Home01ContentDot>·</Home01ContentDot> 보이는 화면에 배너, 로그인,
              헤더 3가지 컨텐츠가 한곳에 집중돼{" "}
              <Home01ContentBold>사용자의 분산</Home01ContentBold>을 일으킨다.
              <br />
              <Home01ContentDot>·</Home01ContentDot> 폰트가 너무 딱딱하여
              <Home01ContentBold> 차별성</Home01ContentBold>
              이 떨어진다.
              <br />
              <Home01ContentDot>·</Home01ContentDot>
              <Home01ContentBold>고정형 페이지</Home01ContentBold>로
              화면사이즈에 따른 잘림현상이 일어난다.
              <br />
              <Home01ContentDot>·</Home01ContentDot> 사용자가
              <Home01ContentBold> 원하는 정보전달</Home01ContentBold>이
              미흡하다.
            </Home01Content>
          </Home01Title>
        </Home01Text>
        <Home01Text className="Home01Text02">
          <Home01Title>
            문제점을 <Home01TitleBold>보완하다</Home01TitleBold>
            <Home01Content>
              <Home01ContentDot>·</Home01ContentDot>
              <Home01ContentBold>한번에 하나의 컨텐츠</Home01ContentBold>를
              사용해 정보를 확실히 제공한다.
              <br />
              <Home01ContentDot>·</Home01ContentDot> 폰트를 기본폰트가 아닌
              외부폰트를 사용하여
              <Home01ContentBold> 차별성</Home01ContentBold>
              을 높인다.
              <br />
              <Home01ContentDot>·</Home01ContentDot>
              <Home01ContentBold>반응형 페이지</Home01ContentBold>로 보다
              동적이게 기획한다.
              <br />
              <Home01ContentDot>·</Home01ContentDot> 사용자가
              <Home01ContentBold> 원하는 정보전달</Home01ContentBold>을
              제공한다.
            </Home01Content>
          </Home01Title>
        </Home01Text>
      </Home01Container>
    </Home01Wrap>
  );
};

export default Home01;
