import React from "react";
import "./Protection.css";
import styled from "styled-components";

const Protection_Wrap = styled.div`
  width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f0f2f5;
`;
const Protection_Container = styled.div`
  width: 1220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 0 30px 0 30px;
`;
const Title = styled.h1`
  font-size: 3rem;
`;

const Box01 = styled.div``;
const BigText = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin: 10px 0 10px 0;
`;

const SectionText = styled.h4`
  font-size: 1.8rem;
  font-weight: 300;
  margin: 10px 0 10px 0;
`;
const Protection = () => {
  return (
    <Protection_Wrap>
      <Title>개인정보 처리방침</Title>
      <Protection_Container>
        <Box01>
          <BigText>01. 개인정보처리방침의 의의</BigText>
          <SectionText>
            한국맥도날드 유한회사 (이하 '회사')는 고객의 개인정보를 중요시하며,
            정보통신망 이용촉진 및 정보보호 등에 관한 법률 및 개인정보보호법 등
            고객의 개인정보 보호와 관련된 법령을 준수하고 있습니다. 회사는 본
            개인정보 처리방침(이하 ‘본 방침’)을 통하여 고객이 제공하는
            개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를
            위해 어떠한 조치가 취해지고 있는지 알려드립니다. 회사는 본 방침을
            개정하는 경우 웹사이트 및 모바일 어플리케이션 공지사항 또는
            개별공지를 통하여 변경내용과 그 이유를 지체 없이 공지할 것입니다.
          </SectionText>
        </Box01>
      </Protection_Container>
    </Protection_Wrap>
  );
};

export default Protection;
