import React from "react";
import styled from "styled-components";
import "./InformationArchitecture.css";

const InforWrap = styled.div`
  width: 100vw;
  height: 100vh;
`;

const InforContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const InforTitle = styled.h1`
  font-size: 5rem;
  font-weight: 900;
  margin-top: 80px;
  @media screen and (max-width: 480px) {
    margin-top: 60px;
  }
`;

const InforSub = styled.h2`
  font-size: 1.8rem;
  font-weight: 400;
  margin-top: 50px;
  width: 500px;
  @media screen and (max-width: 1280px) {
    width: 350px;
  }
  @media screen and (max-width: 480px) {
    width: 200px;
    line-height: 15px;
  }
`;

const InforBold = styled.span`
  font-size: 1.8rem;
  font-weight: 700;
`;
const InforImg = styled.img`
  width: 800px;
  margin-top: 80px;
  @media screen and (max-width: 1280px) {
    width: 700px;
  }
  @media screen and (max-width: 480px) {
    width: 400px;
  }
`;
const InformationArchitecture = () => {
  return (
    <InforWrap>
      <InforContainer>
        <InforTitle>Information architecture</InforTitle>
        <InforSub>
          React의 핵심은 <InforBold>컴포넌트</InforBold>입니다. 각 필요한
          컴포넌트를 만들어 보다 쉽게 관리하고
          <InforBold>React Router</InforBold>를 사용하여 싱글 페이지
          어플리케이션에서 페이지 간의 라우팅을 쉽게 구현하였습니다.
        </InforSub>
        <InforImg src="./imgs/InformationArchitecture/img.png" />
      </InforContainer>
    </InforWrap>
  );
};

export default InformationArchitecture;
