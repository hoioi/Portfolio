import React from "react";
import styled from "styled-components";

const FooterWrap = styled.div`
  width: 100%;
  height: 125px;
  background: #000;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const FooterTitle = styled.h1`
  font-size: 15px;
  color: #ccc;
  margin: 0;
`;

const FooterSubBox = styled.div``;
const FooterSub01 = styled.p`
  font-size: 15px;
  color: #ccc;
  margin: 0;
`;
const FooterSub02 = styled.p`
  font-size: 15px;
  color: #ccc;
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterWrap>
      <FooterContainer>
        <FooterTitle>
          한국맥도날드(유) | 대표자: 앤토니 마티네즈 | 서울특별시 종로구 종로 51
          종로타워 14층 | 전화번호: 1600-5252 | 사업자등록번호: 101-81-26409 |
          호스팅서비스 제공자: 아마존 웹 서비스
        </FooterTitle>
        <FooterSubBox>
          <FooterSub01>
            COPYRIGHT © 2014 ALL RIGHTS RESERVED BY MCDONALD'S™
          </FooterSub01>
          <FooterSub02>
            골든 아치 로고와 "I'M LOVIN' IT"은 맥도날드 고유의 상표입니다.
          </FooterSub02>
        </FooterSubBox>
      </FooterContainer>
    </FooterWrap>
  );
};

export default Footer;
