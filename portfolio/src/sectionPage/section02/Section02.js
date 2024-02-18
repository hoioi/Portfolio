import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Section02.css";

const Section02Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #000;
`;

const Section02Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Section02LeftBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Section02RightBox = styled.div`
  width: 50%;
  height: 100%;
  background: var(--mac-color);
  position: relative;
`;
const Section02Pageimg = styled.img`
  width: 600px;
  height: 300px;
  border-radius: 20px;
  position: absolute;
  padding: 10px;
  background: #fff;
  box-shadow: -10px 10px 10px rgba(0, 0, 0, 0.4);
  top: 350px;
  left: 100px;
  &:nth-child(2) {
    top: 270px;
    left: 200px;
  }
  &:nth-child(3) {
    top: 220px;
    left: 300px;
  }
  @media screen and (max-width: 1280px) {
    width: 400px;
    height: 200px;
    top: 350px;
    left: 50px;
    &:nth-child(2) {
      top: 300px;
      left: 100px;
    }
    &:nth-child(3) {
      top: 220px;
      left: 160px;
    }
  }
  @media screen and (max-width: 480px) {
    width: 130px;
    height: 65px;
    padding: 5px;
    border-radius: 10px;
    top: 400px;
    left: 20px;
    &:nth-child(2) {
      top: 380px;
      left: 40px;
    }
    &:nth-child(3) {
      top: 360px;
      left: 60px;
    }
  }
`;

const Section02Title = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  margin-top: 100px;
  @media screen and (max-width: 1280px) {
  }
  @media screen and (max-width: 480px) {
    margin-top: 200px;
  }
`;

const Section02MacIcon = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 80px;
  @media screen and (max-width: 1280px) {
  }
  @media screen and (max-width: 480px) {
    width: 50px;
    height: 50px;
    margin-top: 40px;
  }
`;

const Section02Name = styled.h1`
  font-size: 6rem;
  font-weight: 900;
  color: var(--macRed-color);
  margin-top: 50px;
  @media screen and (max-width: 1280px) {
  }
  @media screen and (max-width: 480px) {
    margin-top: 40px;
  }
`;

const Section02Textbox = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin-top: 50px;
  width: 430px;
  line-height: 35px;
  text-align: center;
  @media screen and (max-width: 1280px) {
    width: 400px;
    margin-top: 40px;
    line-height: 30px;
  }
  @media screen and (max-width: 480px) {
    width: 150px;
    margin-top: 40px;
    line-height: 20px;
  }
`;

const Sectioin02Button = styled.button`
  width: 170px;
  height: 60px;
  font-size: 2rem;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background: var(--mac-color);

  &:hover {
    background: #fff;
    color: var(--mac-color);
  }
  @media screen and (max-width: 1280px) {
    width: 150px;
    height: 50px;
  }
  @media screen and (max-width: 480px) {
    width: 100px;
    height: 40px;
  }
`;
const Section02 = () => {
  return (
    <Section02Wrap>
      <Section02Container>
        <Section02LeftBox>
          <Section02Title>프로젝트를 소개합니다</Section02Title>
          <Section02MacIcon src="./imgs/section02img/mac_logo.png" />
          <Section02Name>Mcdelivery Web</Section02Name>
          <Section02Textbox>
            기존에 있던 페이지를 조금 더 사용자와 가까이에서 편리하게 사용하도록
            기획한 웹페이지 서비스입니다. 사용자의 편의성을 위해 검색 서비스와
            필터등 기존에 없었던 기능을 추가하여 제작하였습니다
          </Section02Textbox>
          <Link className="Sectioin02Button" to="/Mac">
            <Sectioin02Button>자세히 보기</Sectioin02Button>
          </Link>
        </Section02LeftBox>
        <Section02RightBox>
          <Section02Pageimg src="./imgs/section02img/orderpage.png" />
          <Section02Pageimg src="./imgs/section02img/menupage.png" />
          <Section02Pageimg src="./imgs/section02img/mainpage.png" />
        </Section02RightBox>
      </Section02Container>
    </Section02Wrap>
  );
};

export default Section02;
