import React from "react";
import styled from "styled-components";
import "./FontPage.css";

const FontPageWrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: #fff;
`;

const FontPageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const FontPageLeftBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FontPageRightBox = styled.div`
  width: 50%;
  height: 100%;
  background: var(--mac-color);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FontPageLeftContainer = styled.div`
  width: 550px;
  @media screen and (max-width: 1280px) {
  }
  @media screen and (max-width: 480px) {
    width: 160px;
  }
`;

const FontPageTitle = styled.h1`
  font-size: 8rem;
  font-weight: 900;
  margin-top: 100px;
  @media screen and (max-width: 1280px) {
    margin-top: 200px;
  }
  @media screen and (max-width: 480px) {
  }
`;

const FontPageBlackHanSans = styled.h1`
  font-size: 8rem;
  font-weight: 900;
`;

const FontPageContentTitle = styled.h2`
  font-size: 4rem;
  font-weight: 900;
  margin-top: 30px;
`;

const FontPageContent = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  margin-top: 30px;
  color: #707070;
  @media screen and (max-width: 480px) {
    line-height: 15px;
  }
`;

const FontPageBold = styled.span`
  font-size: 2rem;
  font-weight: 900;
  color: #000;
`;

const FontPage = () => {
  return (
    <FontPageWrap>
      <FontPageContainer>
        <FontPageLeftBox>
          <FontPageLeftContainer>
            <FontPageTitle>Font</FontPageTitle>
            <FontPageContentTitle>가독성 중심</FontPageContentTitle>
            <FontPageContent>
              모바일 기기 및 웹에 적합하고{" "}
              <FontPageBold>깔끔한 디자인</FontPageBold>으로 바탕체로{" "}
              <FontPageBold>“ROBOTO”</FontPageBold>
              서체를 사용했습니다.
              <br />
              <br />
              <FontPageBold>귀엽고 힙한 느낌</FontPageBold>을 내되 가독에 방해가
              되지 않도록 귀여운 무드인{" "}
              <FontPageBold>"Black Han Sans"</FontPageBold>을 사용하였습니다.
            </FontPageContent>
            <FontPageContentTitle>폰트 테마 일관성</FontPageContentTitle>
            <FontPageContent>
              웹 사이트나 앱 내에서 일관된 폰트 테마를 유지하여{" "}
              <FontPageBold>브랜드 식별성</FontPageBold>을 강화하고 사용자에게
              일관된 경험을 제공을 고려했습니다.
            </FontPageContent>
          </FontPageLeftContainer>
        </FontPageLeftBox>
        <FontPageRightBox>
          <FontPageTitle>Roboto</FontPageTitle>
          <FontPageContentTitle>ABCDEFGHIJK</FontPageContentTitle>
          <FontPageContentTitle>abcdefghijk</FontPageContentTitle>
          <FontPageContentTitle>로보토서체</FontPageContentTitle>
          <FontPageBlackHanSans
            className="blackHanSans"
            style={{ fontFamily: `'Black Han Sans', sans-serif` }}
          >
            Black Han Sans
          </FontPageBlackHanSans>
          <FontPageContentTitle>ABCDEFGHIJK</FontPageContentTitle>
          <FontPageContentTitle>abcdefghijk</FontPageContentTitle>
        </FontPageRightBox>
      </FontPageContainer>
    </FontPageWrap>
  );
};

export default FontPage;
