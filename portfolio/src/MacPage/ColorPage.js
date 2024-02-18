import React from "react";
import styled from "styled-components";
import "./ColorPage.css";

const ColorPageWrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: #fff;
`;

const ColorPageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const ColorLeftBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ColorRightBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ColorLeftTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 900;
  margin-top: 100px;
`;

const ColorLeftColorBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  gap: 20px;
  @media screen and (max-width: 480px) {
    margin-top: 30px;
    gap: 10px;
  }
`;

const ColorBoxTitle = styled.h4`
  font-size: 2.5rem;
  font-weight: 900;
  margin-left: 20px;
`;

const ColorBoxs = styled.div`
  display: flex;
  gap: 30px;
  padding: 20px;
  @media screen and (max-width: 480px) {
    gap: 20px;
    padding: 10px;
  }
`;

const ColorBox = styled.div`
  width: 180px;
  height: 250px;
  border: 1px solid#000;
  box-shadow: 10px 10px 0 var(--mac-color);
  @media screen and (max-width: 1280px) {
    width: 170px;
    height: 240px;
  }
  @media screen and (max-width: 480px) {
    width: 80px;
    height: 120px;
  }
`;

const ColorBoxTop = styled.div`
  width: 100%;
  height: 70%;
  border-bottom: 1px solid#000;
  background: var(--mac-color);
`;

const ColorBoxBottom = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
`;

const ColorBoxBottomText = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  color: var(--mac-color);
  margin-left: 20px;
`;

const ColorRightContaier = styled.div`
  margin-top: 150px;
`;

const ColorTitle = styled.h1`
  font-size: 4rem;
  font-weight: 300;
  margin-top: 20px;
  padding-bottom: 10px;
  @media screen and (max-width: 480px) {
    font-size: 3.5rem;
  }
`;

const ColorTitleBold = styled.span`
  font-size: 4rem;
  font-weight: 900;
  border-bottom: 3px solid var(--mac-color);
  @media screen and (max-width: 480px) {
    font-size: 3.5rem;
  }
`;

const ColorTextbox = styled.div`
  width: 500px;
  margin-top: 40px;
  @media screen and (max-width: 480px) {
    width: 120px;
    margin-top: 20px;
  }
`;

const ColorTextContent = styled.h4`
  font-size: 1.5rem;
  font-weight: 500;
  color: #707070;
  line-height: 28px;
  @media screen and (max-width: 480px) {
    line-height: 10px;
  }
`;

const ColorTextBold = styled.span`
  font-size: 1.5rem;
  font-weight: 900;
  color: #000;
`;
const ColorPage = () => {
  return (
    <ColorPageWrap>
      <ColorPageContainer>
        <ColorLeftBox>
          <ColorLeftTitle>Color</ColorLeftTitle>
          <ColorLeftColorBox>
            <ColorBoxTitle>Signature</ColorBoxTitle>
            <ColorBoxs>
              <ColorBox>
                <ColorBoxTop></ColorBoxTop>
                <ColorBoxBottom>
                  <ColorBoxBottomText>#ffc423</ColorBoxBottomText>
                </ColorBoxBottom>
              </ColorBox>
              <ColorBox
                style={{ boxShadow: `10px 10px 0 var(--macRed-color)` }}
              >
                <ColorBoxTop
                  style={{ background: `var(--macRed-color)` }}
                ></ColorBoxTop>
                <ColorBoxBottom>
                  <ColorBoxBottomText style={{ color: `var(--macRed-color)` }}>
                    #ffc423
                  </ColorBoxBottomText>
                </ColorBoxBottom>
              </ColorBox>
            </ColorBoxs>
          </ColorLeftColorBox>
          <ColorLeftColorBox>
            <ColorBoxTitle>Background</ColorBoxTitle>
            <ColorBoxs>
              <ColorBox style={{ boxShadow: `10px 10px 0 rgba(0, 0, 0, 0.4)` }}>
                <ColorBoxTop style={{ background: `#fff` }}></ColorBoxTop>
                <ColorBoxBottom>
                  <ColorBoxBottomText style={{ color: `#000` }}>
                    #fff
                  </ColorBoxBottomText>
                </ColorBoxBottom>
              </ColorBox>
              <ColorBox style={{ boxShadow: `10px 10px 0 rgba(0, 0, 0, 0.4)` }}>
                <ColorBoxTop style={{ background: `#000` }}></ColorBoxTop>
                <ColorBoxBottom>
                  <ColorBoxBottomText style={{ color: `#000` }}>
                    #000
                  </ColorBoxBottomText>
                </ColorBoxBottom>
              </ColorBox>
            </ColorBoxs>
          </ColorLeftColorBox>
        </ColorLeftBox>
        <ColorRightBox>
          <ColorRightContaier>
            <ColorTitle>
              맥도날드 <ColorTitleBold>시그니처 컬러</ColorTitleBold>
            </ColorTitle>
            <ColorTextbox>
              <ColorTextContent>
                직관적인 UI를 위해 맥도날드를 대표하는
                <ColorTextBold>시그니처 컬러 2가지</ColorTextBold> 를 메인
                컬러로 정했습니다.
                <br />
                <ColorTextBold>옐로우 컬러</ColorTextBold>는 대표 컬러로 배경
                컬러로 사용함으로써 브랜드 이미지를 강화하였고
                <br />
                <ColorTextBold>레드 컬러</ColorTextBold>는 강조하고자 하는
                영역에 넣어 시각적 임팩트를 주었으며
                <br />
                <ColorTextBold>화이트컬러</ColorTextBold>는 모든 스크린의 배경이
                되게 하고,
                <br />
                <ColorTextBold>블랙 컬러</ColorTextBold>는 모든 타이틀 및 본문
                텍스트에 적용하여 텍스트와 배경 간의 충분한 대비를 제공하여
                뚜렷하게 읽히도록 고려했습니다.
              </ColorTextContent>
            </ColorTextbox>
            <ColorTitle>
              컬러를 결정했던 <ColorTitleBold>고려사항</ColorTitleBold>
            </ColorTitle>
            <ColorTextbox>
              <ColorTextContent>
                너무 많은 컬러를 사용하면 사용자의 주의 분산, 피로감을
                형성시키기 때문에
                <ColorTextBold> 컬러 테마 일관성</ColorTextBold> 를 고려하여
                메인컬러와 보충컬러 하나씩 기획하였습니다.
                <br />
                <ColorTextBold>충분한 대비</ColorTextBold>를 고려해 텍스트와
                배경 간에 밝은 배경은 검은 텍스트를, 어두운 배경에 하얀 텍스트를
                제공하여 텍스트가 뚜렷하게 읽히도록 고려했습니다.
                <br />
                <ColorTextBold>색맹 사용자</ColorTextBold>의 혼란을 대비해
                혼란을 일으키는 색대비는 피하고 그라데이션 또한 사용하지
                않았습니다.
              </ColorTextContent>
            </ColorTextbox>
          </ColorRightContaier>
        </ColorRightBox>
      </ColorPageContainer>
    </ColorPageWrap>
  );
};

export default ColorPage;
