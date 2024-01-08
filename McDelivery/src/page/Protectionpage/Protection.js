import React from "react";
import "./Protection.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ProtectionWrap = styled.div`
  width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f0f2f5;
  @media screen and (max-width: 1280px) {
    width: 1280px;
  }
  @media screen and (max-width: 480px) {
    width: 480px;
  }
`;
const ProtectionContainer = styled.div`
  width: 1220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 0 60px;
  margin-bottom: 100px;
  @media screen and (max-width: 1280px) {
    width: 900px;
  }
  @media screen and (max-width: 480px) {
    width: 300px;
  }
`;
const Title = styled.h1`
  font-size: 3rem;
`;

const Box01 = styled.div`
  width: 100%;
`;
const Box02 = styled.div`
  width: 100%;
`;
const Box03 = styled.div`
  width: 100%;
`;
const Box04 = styled.div`
  width: 100%;
`;
const Box05 = styled.div`
  width: 100%;
`;
const Box06 = styled.div`
  width: 100%;
`;
const Box07 = styled.div`
  width: 100%;
`;
const Box08 = styled.div`
  width: 100%;
`;
const Box09 = styled.div`
  width: 100%;
`;
const Box10 = styled.div`
  width: 100%;
`;
const Box11 = styled.div`
  width: 100%;
`;

const BigText = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin: 20px 0;
`;

const QuestionText = styled.h4`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 20px 0;
`;

const UnderlineText = styled.h4`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 20px 0;
  text-decoration: underline;
`;

const GridBoldText = styled.h4`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0;
`;

const GridSectionText = styled.h4`
  font-size: 1.7rem;
  font-weight: 500;
  margin: 0;
`;

const SectionText = styled.h4`
  font-size: 1.6rem;
  font-weight: 500;
  margin: 20px 0;
`;

const Box02GridBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(30px, auto);
`;
const Box02Grid = styled.div`
  border: 1px solid var(--main-color);
  padding: 10px 15px;
  display: grid;
  align-items: center;
  &:nth-child(1) {
    background: #ccc;
    justify-content: center;
  }
  &:nth-child(2) {
    background: #ccc;
    justify-content: center;
  }
  &:nth-child(3) {
    background: #ccc;

    justify-content: center;
  }
`;

const Box04GridBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-auto-rows: minmax(30px, auto);
`;

const Box04Grid = styled.div`
  border: 1px solid var(--main-color);
  padding: 10px 15px;
  display: grid;
  align-items: center;
  &:nth-child(1) {
    background: #ccc;
    justify-content: center;
  }
  &:nth-child(2) {
    background: #ccc;
    justify-content: center;
  }
  &:nth-child(10) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 5;
    grid-row-end: 8;
  }
  &:nth-child(16) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 9;
    grid-row-end: 12;
  }
  &:nth-child(20) {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 12;
    grid-row-end: 14;
  }
`;

const Box04GridBox02 = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  grid-auto-rows: minmax(30px, auto);
`;

const Box04Grid02 = styled.div`
  border: 1px solid var(--main-color);
  padding: 10px 15px;
  display: grid;
  align-items: center;
  &:nth-child(1) {
    background: #ccc;
    justify-content: center;
  }
  &:nth-child(2) {
    background: #ccc;
    justify-content: center;
    grid-column-start: 2;
    grid-column-end: 4;
  }
  &:nth-child(3) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 8;
  }
  &:nth-child(4) {
    justify-content: center;
    background: #eceaea;
  }
  &:nth-child(6) {
    justify-content: center;
    background: #eceaea;
  }
  &:nth-child(8) {
    justify-content: center;
    background: #eceaea;
  }
  &:nth-child(10) {
    justify-content: center;
    background: #eceaea;
  }
  &:nth-child(12) {
    justify-content: center;
    background: #eceaea;
  }
  &:nth-child(14) {
    justify-content: center;
    background: #eceaea;
  }
  &:nth-child(16) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 8;
    grid-row-end: 14;
  }
  &:nth-child(17) {
    justify-content: center;
    background: #eceaea;
  }
  &:nth-child(19) {
    justify-content: center;
    background: #eceaea;
  }
  &:nth-child(21) {
    justify-content: center;
    background: #eceaea;
  }
  &:nth-child(23) {
    justify-content: center;
    background: #eceaea;
  }
  &:nth-child(25) {
    justify-content: center;
    background: #eceaea;
  }
  &:nth-child(27) {
    justify-content: center;
    background: #eceaea;
  }
  &:nth-child(29) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 14;
    grid-row-end: 19;
  }
  &:nth-child(30) {
    justify-content: center;
    background: #eceaea;
  }
  &:nth-child(32) {
    justify-content: center;
    background: #eceaea;
  }
  &:nth-child(34) {
    justify-content: center;
    background: #eceaea;
  }
  &:nth-child(36) {
    justify-content: center;
    background: #eceaea;
  }
  &:nth-child(38) {
    justify-content: center;
    background: #eceaea;
  }
  &:nth-child(41) {
    justify-content: center;
    background: #eceaea;
  }
`;

const Box05GridBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 3fr 3fr;
  grid-auto-rows: minmax(30px, auto);
`;

const Box05Grid = styled.div`
  border: 1px solid var(--main-color);
  padding: 10px 15px;
  display: grid;
  align-items: center;
  &:nth-child(1) {
    background: #eceaea;
    justify-content: center;
  }
  &:nth-child(2) {
    background: #eceaea;
    justify-content: center;
  }
  &:nth-child(3) {
    background: #eceaea;
    justify-content: center;
  }
  &:nth-child(4) {
    background: #eceaea;
    justify-content: center;
  }
`;

const UlTag = styled.ul`
  width: 100%;
  margin: 20px 0;
`;
const LiTag = styled.li``;

const LinkText = styled.div`
  display: flex;
  gap: 5px;
`;
const LinkSectionText = styled.h4`
  font-size: 1.6rem;
  font-weight: 500;
  margin: 20px 0;
  color: #35b6f9;
`;

const Box011GridBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-auto-rows: minmax(30px, auto);
  margin-bottom: 50px;
`;

const Box11Grid = styled.div`
  border: 1px solid var(--main-color);
  padding: 10px 15px;
  display: grid;
  align-items: center;
  &:nth-child(1) {
    background: #ccc;
    justify-content: center;
  }
  &:nth-child(2) {
    background: #ccc;
    justify-content: center;
  }
`;
const Protection = () => {
  return (
    <ProtectionWrap>
      <Title>개인정보 처리방침</Title>
      <ProtectionContainer>
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
        <Box02>
          <BigText>02. 수집하는 개인정보</BigText>
          <QuestionText>
            Q) 회사가 수집하는 개인정보 항목과 수집∙이용 목적, 수집방법은
            무엇인가요?
          </QuestionText>
          <SectionText>
            회사에서는 고객 여러분에게 맥딜리버리 서비스(이하 “MDS”)를 제공하기
            위하여 아래와 같이 개인정보를 수집∙이용하고 있습니다.
          </SectionText>
          <UnderlineText>[회원]</UnderlineText>
          <Box02GridBox>
            <Box02Grid>
              <GridBoldText>수집항목</GridBoldText>
            </Box02Grid>
            <Box02Grid>
              <GridBoldText>수집 및 이용목적</GridBoldText>
            </Box02Grid>
            <Box02Grid>
              <GridBoldText>수집방법</GridBoldText>
            </Box02Grid>
            <Box02Grid>
              <GridSectionText>
                (필수)
                <br />
                이름, 휴대전화 번호, 이메일,
                <br />
                비밀번호, 배달지 주소
              </GridSectionText>
            </Box02Grid>
            <Box02Grid>
              <GridSectionText>
                - MDS 서비스 제공
                <br />- MDS 및 맥도날드 관련 정보와 프로모션에 대한 SNS 메시지,
                문자 등을 발송(광고성 정보 수신 동의시)
              </GridSectionText>
            </Box02Grid>
            <Box02Grid>
              <GridSectionText>회원가입 시 수집</GridSectionText>
            </Box02Grid>
            <Box02Grid>
              <GridSectionText>
                (선택)
                <br />
                성별
              </GridSectionText>
            </Box02Grid>
            <Box02Grid>
              <GridSectionText>- 통계자료로 활용</GridSectionText>
            </Box02Grid>
            <Box02Grid>
              <GridSectionText>회원가입 시 수집</GridSectionText>
            </Box02Grid>
          </Box02GridBox>
          <UnderlineText>[비회원]</UnderlineText>
          <Box02GridBox>
            <Box02Grid>
              <GridBoldText>수집항목</GridBoldText>
            </Box02Grid>
            <Box02Grid>
              <GridBoldText>수집 및 이용목적</GridBoldText>
            </Box02Grid>
            <Box02Grid>
              <GridBoldText>수집방법</GridBoldText>
            </Box02Grid>
            <Box02Grid>
              <GridSectionText>
                (필수)
                <br />
                휴대전화 번호, 배달지 주소
              </GridSectionText>
            </Box02Grid>
            <Box02Grid>
              <GridSectionText>- MDS 서비스 제공</GridSectionText>
            </Box02Grid>
            <Box02Grid>
              <GridSectionText>주문 시 수집</GridSectionText>
            </Box02Grid>
            <Box02Grid>
              <GridSectionText>
                (선택)
                <br />
                이메일
              </GridSectionText>
            </Box02Grid>
            <Box02Grid>
              <GridSectionText>- 주문결과 전달</GridSectionText>
            </Box02Grid>
            <Box02Grid>
              <GridSectionText>주문 시 수집</GridSectionText>
            </Box02Grid>
          </Box02GridBox>
        </Box02>
        <Box03>
          <BigText>03. 수집한 개인정보의 보유 및 이용기간</BigText>
          <QuestionText>
            Q) 회사는 수집한 개인정보를 언제까지 보관하나요?
          </QuestionText>
          <UnderlineText>[회원]</UnderlineText>
          <SectionText>
            1.회사는 고객의 개인정보처리 동의일로부터 탈퇴확정시까지(선택적
            개인정보의 경우에는 처리 동의 철회시 또는 탈퇴확정시까지) 개인정보를
            보유∙이용할 수 있습니다.
            <br />
            <br />
            2.제1항에도 불구하고 다음과 같이 전자상거래 등에서의 소비자보호에
            관한 법률 등 다른 법률에 따라 개인정보를 보존하여야 하는 경우에는
            그러한 법률에서 정한 기간 동안 개인정보를 보관합니다.
            <br />
            -전자상거래 등에서 소비자 보호에 관한 법률
            <br />
            계약 또는 청약철회 등에 관한 기록: 5년 보관
            <br />
            대금결제 및 재화 등의 공급에 관한 기록: 5년 보관
            <br />
            소비자의 불만 또는 분쟁처리에 관한 기록: 3년 보관
            <br />
            -통신비밀보호법
            <br />
            로그인 기록: 3개월
            <br />
            <br />
            3.제1항에도 불구하고 1년 이상 MDS를 이용하지 않는 고객의 개인정보는
            파기합니다. 다만 다른 법령에 특별한 규정이 있는 경우 그에 따릅니다.
          </SectionText>
          <UnderlineText>[비회원]</UnderlineText>
          <SectionText>
            1.수집 후 1년간 보관됩니다.
            <br />
            <br />
            2.제1항에도 불구하고 다음과 같이 전자상거래 등에서의 소비자보호에
            관한 법률 등 다른 법률에 따라 개인정보를 보존하여야 하는 경우에는
            그러한 법률에서 정한 기간 동안 개인정보를 보관합니다.
            <br />
            -전자상거래 등에서의 소비자 보호에 관한 법률
            <br />
            계약 또는 청약철회 등에 관한 기록: 5년 보관
            <br />
            대금결제 및 재화 등의 공급에 관한 기록: 5년 보관
            <br />
            소비자의 불만 또는 분쟁처리에 관한 기록: 3년 보관
            <br />
            -통신비밀보호법
            <br />
            로그인 기록: 3개월
          </SectionText>
        </Box03>
        <Box04>
          <BigText>04. 개인정보처리의 위탁에 관한 사항</BigText>
          <QuestionText>Q) 회사는 개인정보의 처리를 위탁하나요?</QuestionText>
          <SectionText>
            회사는 MDS 제공, 고객정보의 원활한 처리와 안전한 보관, 각종 프로모션
            및 다양한 혜택을 제공하기 위하여 다음과 같이 고객정보를 위탁하여
            처리하고 있습니다.
          </SectionText>
          <Box04GridBox>
            <Box04Grid>
              <GridBoldText>수탁자</GridBoldText>
            </Box04Grid>
            <Box04Grid>
              <GridBoldText>취급위탁 업무</GridBoldText>
            </Box04Grid>
            <Box04Grid>
              <GridSectionText>씨앤티테크㈜</GridSectionText>
            </Box04Grid>
            <Box04Grid>
              <GridSectionText>콜센터 운영, 민원처리</GridSectionText>
            </Box04Grid>
            <Box04Grid>
              <GridSectionText>㈜푸드테크</GridSectionText>
            </Box04Grid>
            <Box04Grid>
              <GridSectionText> 주문 중개, 시스템 유지 및 보수</GridSectionText>
            </Box04Grid>
            <Box04Grid>
              <GridSectionText>Capgemini</GridSectionText>
            </Box04Grid>
            <Box04Grid>
              <GridSectionText>
                웹사이트 및 관련 시스템 개발, 유지 및 보수
              </GridSectionText>
            </Box04Grid>
            <Box04Grid>
              <GridSectionText>㈜ 메쉬코리아</GridSectionText>
            </Box04Grid>
            <Box04Grid>
              <GridSectionText>제품 배달업무</GridSectionText>
            </Box04Grid>
            <Box04Grid>
              <GridSectionText>㈜ 로지올</GridSectionText>
            </Box04Grid>
            <Box04Grid>
              <GridSectionText>㈜ 바로고</GridSectionText>
            </Box04Grid>
            <Box04Grid>
              <GridSectionText>주식회사 브라이트벨</GridSectionText>
            </Box04Grid>
            <Box04Grid>
              <GridSectionText>
                웹사이트 및 관련시스템 개발 유지 및 보수, 각종 프로모션의
                전반적인 운영
              </GridSectionText>
            </Box04Grid>
            <Box04Grid>
              <GridSectionText>㈜처음소프트</GridSectionText>
            </Box04Grid>
            <Box04Grid>
              <GridSectionText>
                프로모션, 혜택 등 광고성 정보 전송 업무
              </GridSectionText>
            </Box04Grid>
            <Box04Grid>
              <GridSectionText>다우기술</GridSectionText>
            </Box04Grid>
            <Box04Grid>
              <GridSectionText>메일링크</GridSectionText>
            </Box04Grid>
            <Box04Grid>
              <GridSectionText>㈜레볼루션 커뮤니케이션즈</GridSectionText>
            </Box04Grid>
            <Box04Grid>
              <GridSectionText>
                프로모션, 혜택 등 광고성 정보 전송 및 각종 프로모션의 전반적인
                운영. 맥딜리버리 회원가입 및 주문 시 고객이 제공하는 개인정보를
                활용한 고객 분석 및 결과 보고
              </GridSectionText>
            </Box04Grid>
            <Box04Grid>
              <GridSectionText>MILVUS</GridSectionText>
            </Box04Grid>
            <Box04Grid>
              <GridSectionText>㈜다음카카오</GridSectionText>
            </Box04Grid>
            <Box04Grid>
              <GridSectionText>
                ㈜다음카카오 상품/서비스를 통한 고객 맞춤형 마케팅 정보 발송
              </GridSectionText>
            </Box04Grid>
            <Box04Grid>
              <GridSectionText>McDonald's Corp</GridSectionText>
            </Box04Grid>
            <Box04Grid>
              <GridSectionText>시스템 유지 보수 등 운영</GridSectionText>
            </Box04Grid>
            <Box04Grid>
              <GridSectionText>AWS</GridSectionText>
            </Box04Grid>
            <Box04Grid>
              <GridSectionText>맥딜리버리 서버 호스팅</GridSectionText>
            </Box04Grid>
          </Box04GridBox>
          <QuestionText>
            Q) 회사는 국외에서 개인정보의 처리위탁을 하는가요?
          </QuestionText>
          <SectionText>
            회사는 개인정보 처리를 위탁 중 국외법인에서 처리하는 경우가 있으며,
            해당 위탁업무는 다음과 같습니다.
          </SectionText>
          <Box04GridBox02>
            <Box04Grid02>
              <GridBoldText>수탁자</GridBoldText>
            </Box04Grid02>
            <Box04Grid02>
              <GridBoldText>위탁 사항</GridBoldText>
            </Box04Grid02>
            <Box04Grid02>
              <GridBoldText>McDonald’s Global Markets LLC</GridBoldText>
            </Box04Grid02>
            <Box04Grid02>
              <GridBoldText>개인정보 항목</GridBoldText>
            </Box04Grid02>
            <Box04Grid02>
              <GridSectionText>
                이름, 휴대 전화번호, 이메일, 비밀번호, 배송지 주소
              </GridSectionText>
            </Box04Grid02>
            <Box04Grid02>
              <GridBoldText>국가</GridBoldText>
            </Box04Grid02>
            <Box04Grid02>
              <GridSectionText>
                미국
                <br />
                1035 W Randolph St, Chicago, IL, 60607
              </GridSectionText>
            </Box04Grid02>
            <Box04Grid02>
              <GridBoldText>위탁 일시 및 방법</GridBoldText>
            </Box04Grid02>
            <Box04Grid02>
              <GridSectionText>
                회원가입 및 사용시
                <br />
                암호화된 데이터 전송
              </GridSectionText>
            </Box04Grid02>
            <Box04Grid02>
              <GridBoldText>
                위탁받는 자<br />
                (정보관리책임자
                <br />
                연락처)
              </GridBoldText>
            </Box04Grid02>
            <Box04Grid02>
              <GridSectionText>
                McDonald’s Corporation
                <br />
                (contact.privacy@us.mcd.com)
              </GridSectionText>
            </Box04Grid02>
            <Box04Grid02>
              <GridBoldText>위탁 업무</GridBoldText>
            </Box04Grid02>
            <Box04Grid02>
              <GridSectionText>시스템 유지 보수 등 운영</GridSectionText>
            </Box04Grid02>
            <Box04Grid02>
              <GridBoldText>
                개인정보의 보유
                <br />및 이용 기간
              </GridBoldText>
            </Box04Grid02>
            <Box04Grid02>
              <GridSectionText>
                회원 탈퇴 시 혹은 위탁 계약 종료시까지
              </GridSectionText>
            </Box04Grid02>
            <Box04Grid02>
              <GridBoldText>AWS</GridBoldText>
            </Box04Grid02>
            <Box04Grid02>
              <GridBoldText>개인정보 항목</GridBoldText>
            </Box04Grid02>
            <Box04Grid02>
              <GridSectionText>
                이름, 휴대 전화번호, 이메일, 비밀번호, 배송지 주소
              </GridSectionText>
            </Box04Grid02>
            <Box04Grid02>
              <GridBoldText>국가</GridBoldText>
            </Box04Grid02>
            <Box04Grid02>
              <GridSectionText>
                싱가폴
                <br />
                27 Tampines Street 92, Singapore 528878
              </GridSectionText>
            </Box04Grid02>
            <Box04Grid02>
              <GridBoldText>위탁 일시 및 방법</GridBoldText>
            </Box04Grid02>
            <Box04Grid02>
              <GridSectionText>
                회원가입 및 사용시
                <br />
                암호화된 데이터 전송
              </GridSectionText>
            </Box04Grid02>
            <Box04Grid02>
              <GridBoldText>
                위탁받는 자<br />
                (정보관리책임자
                <br />
                연락처)
              </GridBoldText>
            </Box04Grid02>
            <Box04Grid02>
              <GridSectionText>
                Amazon Web Service Inc.
                <br />
                (aws-korea-privacy@amazon.com)
              </GridSectionText>
            </Box04Grid02>
            <Box04Grid02>
              <GridBoldText>위탁 업무</GridBoldText>
            </Box04Grid02>
            <Box04Grid02>
              <GridSectionText>맥딜리버리 서버 호스팅</GridSectionText>
            </Box04Grid02>
            <Box04Grid02>
              <GridBoldText>
                개인정보의 보유
                <br />및 이용기간
              </GridBoldText>
            </Box04Grid02>
            <Box04Grid02>
              <GridSectionText>
                회원 탈퇴 시 혹은 위탁 계약 종료시까지
              </GridSectionText>
            </Box04Grid02>
            <Box04Grid02>
              <GridBoldText>Capgemini</GridBoldText>
            </Box04Grid02>
            <Box04Grid02>
              <GridBoldText>개인정보 항목</GridBoldText>
            </Box04Grid02>
            <Box04Grid02>
              <GridSectionText>
                이름, 휴대 전화번호, 이메일, 비밀번호, 배송지 주소
              </GridSectionText>
            </Box04Grid02>
            <Box04Grid02>
              <GridBoldText>국가</GridBoldText>
            </Box04Grid02>
            <Box04Grid02>
              <GridSectionText>
                미국
                <br />
                79 Fifth Avenue, 3rd Floor, New York, New York
                <br />
                10003
              </GridSectionText>
            </Box04Grid02>
            <Box04Grid02>
              <GridBoldText>위탁 일시 및 방법</GridBoldText>
            </Box04Grid02>
            <Box04Grid02>
              <GridSectionText>
                회원가입 및 사용시
                <br />
                암호화된 데이터 전송
              </GridSectionText>
            </Box04Grid02>
            <Box04Grid02>
              <GridBoldText>
                위탁받는 자<br />
                (정보관리책임자
                <br />
                연락처)
              </GridBoldText>
            </Box04Grid02>
            <Box04Grid02>
              <GridSectionText>
                Capgemini America, Inc.
                <br />
                (dataprivacyoffice.nar@capgemini.com)
              </GridSectionText>
            </Box04Grid02>
            <Box04Grid02>
              <GridBoldText>위탁 업무</GridBoldText>
            </Box04Grid02>
            <Box04Grid02>
              <GridSectionText>
                웹사이트 및 관련 시스템 개발, 유지 및 보수
              </GridSectionText>
            </Box04Grid02>
            <Box04Grid02></Box04Grid02>
            <Box04Grid02>
              <GridBoldText>
                개인정보의 보유
                <br />및 이용 기간
              </GridBoldText>
            </Box04Grid02>
            <Box04Grid02>
              <GridSectionText>
                회원 탈퇴 시 혹은 위탁 계약 종료시까지
              </GridSectionText>
            </Box04Grid02>
          </Box04GridBox02>
        </Box04>
        <Box05>
          <BigText>05. 개인정보의 제3자 제공에 관한 사항</BigText>
          <QuestionText>
            Q) 회사는 어떤 제3자에게 개인정보를 제공하나요?
          </QuestionText>
          <Box05GridBox>
            <Box05Grid>
              <GridBoldText>제공받는 자</GridBoldText>
            </Box05Grid>
            <Box05Grid>
              <GridBoldText>제공받는 자의 이용목적</GridBoldText>
            </Box05Grid>
            <Box05Grid>
              <GridBoldText>제공하는 개인정보의 항목</GridBoldText>
            </Box05Grid>
            <Box05Grid>
              <GridBoldText>제공받는 자의 보유 및 이용기간</GridBoldText>
            </Box05Grid>
            <Box05Grid>
              <GridSectionText>*맥도날드 가맹점</GridSectionText>
            </Box05Grid>
            <Box05Grid>
              <GridSectionText>
                주문배달 처리 및 고객 불만사항 해결
              </GridSectionText>
            </Box05Grid>
            <Box05Grid>
              <GridSectionText>
                *주문배달 관련 개인 정보 : 고객이 제공하는 고객의 이름, 휴대전화
                번호, 이메일, 배달지 주소
                <br />
                <br /> *고객 불만사항 관련 개인 정보 : 고객의 이름, 연락처,
                이용매장명, 이메일 주소, 문의 또는 민원 사항(고객이 첨부해
                주시는 파일 포함)
              </GridSectionText>
            </Box05Grid>
            <Box05Grid>
              <GridSectionText>
                회원 탈퇴시 및 1년간 MDS 서비스 미이용시 지체없이 파기(단, 관계
                법령에 따라 탈퇴 후에도 개인정보를 보관해야 하는 경우 해당
                기간의 만료시까지)
              </GridSectionText>
            </Box05Grid>
          </Box05GridBox>
        </Box05>
        <Box06>
          <BigText>06. 개인정보의 파기절차 및 파기방법에 관한 사항</BigText>
          <QuestionText>Q) 회사는 어떻게 개인정보를 파기하나요?</QuestionText>
          <SectionText>
            회사는 파기해야 하는 개인정보를 확인하면, 전자적 파일 형태로
            보관되고 있는 개인정보는 복원이 불가능한 방법으로 영구 삭제하며, 그
            외의 기록물, 인쇄물, 서면, 그 밖의 기록매체인 경우에는 파쇄합니다.
            다만 다른 법률에 따라 개인정보를 보존하여야 하는 경우에는 제3조
            제2항에 기재된 법률에서 정한 기간 동안 개인정보를 보관합니다.
          </SectionText>
        </Box06>
        <Box07>
          <BigText>07. 개인정보의 안정성 확보조치에 관한 사항</BigText>
          <QuestionText>
            Q) 회사는 개인정보의 안전성 확보를 위해 어떠한 조치를 취하고 있나요?
          </QuestionText>
          <SectionText>
            회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고
            있습니다.
            <br />
            <br />
            1.관리적 조치: 내부관리계획의 수립 및 시행, 구성원에 대한 정기적인
            개인정보 보호교육 등<br />
            2.기술적 조치: 개인정보처리시스템 등의 접근권한 관리, 접근통제시스템
            설치, 고유식별정보 등의 암호화, 보안프로그램의 설치 등<br />
            3.물리적 조치: 전산실, 자료보관실 등 개인정보 보관장소에 대한
            접근통제 등
          </SectionText>
        </Box07>
        <Box08>
          <BigText>
            08. 정보주체의 권리와 의무 및 그 행사방법에 관한 사항
          </BigText>
          <QuestionText>
            Q) 고객과 법정대리인은 어떠한 권리가 있으며, 권리행사는 어떻게 해야
            하나요?
          </QuestionText>
          <SectionText>
            고객은 언제든지 자신의 개인정보를 열람하거나 정정할 수 있으며,
            개인정보의 삭제 또는 개인정보 제공에 관한 동의철회를 요청할 수
            있습니다.
            <br />
            <br />
            만14세 미만 아동의 개인정보는 수집하지 않습니다. 다만, 법정대리인의
            요구가 있는 경우 법령상의 권리를 보장합니다(아동의 개인정보에 대한
            열람∙정정∙삭제, 개인정보처리정지요구권 등).
            <br />
            <br />
            이러한 열람, 정정, 삭제를 원하는 경우 홈페이지 내 1:1고객센터를
            이용하시거나, 아래 고객센터 또는 개인정보관리책임자에게 연락하시면
            지체 없이 조치하겠습니다.
            <br />
            <br />
            또한 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기
            전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된
            개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게
            지체 없이 통지하여 정정이 이루어지도록 하겠습니다.
          </SectionText>
        </Box08>
        <Box09>
          <BigText>09. 쿠키의 운영</BigText>
          <QuestionText>
            Q) 인터넷 접속정보파일 등 개인정보를 자동으로 수집하는 장치를
            운영하나요?
          </QuestionText>
          <SectionText>
            웹사이트 접속 빈도나 방문 시간 등을 분석, 이용자의 취향과 관심분야를
            파악하여 웹사이트 서비스를 개선하고자 쿠키(Cookie)를 운영합니다.
            쿠키란 회사 웹사이트를 운영하는데 이용되는 서버가 귀하의 브라우저에
            보내는 아주 작은 텍스트 파일로서 귀하의 컴퓨터 하드디스크에
            저장됩니다.
            <br />
            <br />
            귀하는 쿠키 설치에 대한 선택권을 가지고 있으며, 귀하의
            웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가
            저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도
            있습니다.
          </SectionText>
        </Box09>
        <Box10>
          <BigText>10. 개인정보의 보호책임자에 관한 사항</BigText>
          <QuestionText>
            Q) 개인정보 처리에 관한 문의사항이 있는 경우에는 어떻게 해야 하나요?
          </QuestionText>
          <SectionText>
            회사는 고객의 개인정보를 보호하고 개인정보와 관련한 민원을 처리하기
            위하여 아래와 같이 고객센터를 운영하고 있으며, 개인정보관리책임자를
            지정하고 있습니다. 귀하께서는 회사의 서비스를 이용하시며 발생하는
            모든 개인정보보호 관련 민원은 고객센터를 통해 문의하여 주시기
            바랍니다.
          </SectionText>
          <UlTag>
            <LiTag>
              <SectionText>고객센터: 080-208-1588</SectionText>
            </LiTag>
            <LiTag>
              <SectionText>개인정보보호책임자: 김철홍</SectionText>
            </LiTag>
            <LiTag>
              <SectionText>이메일:DataPrivacy@kr.mcd.com</SectionText>
            </LiTag>
          </UlTag>
          <SectionText>
            기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에
            문의하시기 바랍니다.
          </SectionText>
          <UlTag>
            <LiTag>
              <LinkText>
                <SectionText>개인정보 침해신고센터 : (국번없이)118</SectionText>
                <Link to="https://privacy.kisa.or.kr/main.do">
                  <LinkSectionText>(privacy.kisa.or.kr)</LinkSectionText>
                </Link>
              </LinkText>
            </LiTag>
            <LiTag>
              <LinkText>
                <SectionText>개인정보 분쟁조정위원회 :1833-6972</SectionText>
                <Link to="https://www.kopico.go.kr/main/main.do">
                  <LinkSectionText>(www.kopico.go.kr)</LinkSectionText>
                </Link>
              </LinkText>
            </LiTag>
            <LiTag>
              <LinkText>
                <SectionText>
                  대검찰청 사이버수사과 : (국번없이)1301,
                </SectionText>
                <Link to="https://www.spo.go.kr/site/spo/main.do">
                  <LinkSectionText>(spo.go.kr)</LinkSectionText>
                </Link>
              </LinkText>
            </LiTag>
            <LiTag>
              <LinkText>
                <SectionText>경찰청 사이버안전국 : (국번없이)182</SectionText>
                <Link to="https://cyberbureau.police.go.kr/prevention/sub4_4.jsp?mid=020505">
                  <LinkSectionText>(cyberbureau.police.go.kr)</LinkSectionText>
                </Link>
              </LinkText>
            </LiTag>
          </UlTag>
        </Box10>
        <Box11>
          <BigText>11. 개인정보 처리방침 변경에 관한 사항</BigText>
          <SectionText>
            이 개인정보 처리방침은 2022. 10. 27.부터 적용되며, 직전 버전 대비
            변경된 내용은 아래와 같습니다.
          </SectionText>
          <Box011GridBox>
            <Box11Grid>
              <GridBoldText>변경 내용</GridBoldText>
            </Box11Grid>
            <Box11Grid>
              <GridBoldText>변경사유</GridBoldText>
            </Box11Grid>
            <Box11Grid>
              <GridSectionText>
                “㈜코마스인터렉티브”에서 “㈜레볼루션 커뮤니케이션즈”로 수탁자
                변경
                <br />
                “McDonald’s Corporation”에서 “McDonald’s Global Markets LLC”로
                수탁자 변경
              </GridSectionText>
            </Box11Grid>
            <Box11Grid>
              <GridSectionText> 수탁자 변경</GridSectionText>
            </Box11Grid>
            <Box11Grid>
              <GridSectionText>
                제품 배달업무 수탁자인 “㈜로지올” 추가
              </GridSectionText>
            </Box11Grid>
            <Box11Grid>
              <GridSectionText>신규 수탁자</GridSectionText>
            </Box11Grid>
          </Box011GridBox>
        </Box11>
      </ProtectionContainer>
    </ProtectionWrap>
  );
};

export default Protection;
