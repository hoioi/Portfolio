import React from "react";
import styled from "styled-components";
import "./FinalPage.css";

const FinalWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FinalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FinalTitle = styled.h1`
  font-size: 12rem;
  font-family: "Rampart One", sans-serif;
  font-weight: 400;
`;

const FinalImg = styled.img`
  width: 400px;
  margin-top: 20px;
  @media screen and (max-width: 1280px) {
    width: 300px;
  }
  @media screen and (max-width: 480px) {
    width: 250px;
  }
`;

const FinalText = styled.h1`
  font-size: 1.8rem;
  margin-top: 20px;
  text-align: center;
  line-height: 35px;
  @media screen and (max-width: 480px) {
    margin-top: 20px;
    line-height: 20px;
  }
`;

const FianlEmphasisText = styled.span`
  color: var(--main-color);
  font-size: 1.8rem;
`;
const FinalPage = () => {
  return (
    <FinalWrap>
      <FinalContainer>
        <FinalTitle>Thank You</FinalTitle>
        <FinalImg src="./imgs/FinalPageimg/me.png" />
        <FinalText>
          저는 사용자 중심의 디자인과 사용자 경험에 깊은 관심을 가지고 있습니다.
          <br />
          사용자들이 웹 애플리케이션을 사용하는 과정에서의{" "}
          <FianlEmphasisText>
            어려움을 최소화하고,
            <br />
            직관적이고 효율적인 인터페이스를 제공하여
          </FianlEmphasisText>{" "}
          그들의 삶을 더 나아지게 하는 것이 제가 추구하는 바입니다.
          <br />
          귀사와 고객에게 더 나은 방향으로 이끄는데 도움이 되는{" "}
          <FianlEmphasisText>프론트엔드 개발자</FianlEmphasisText>가 되겠습니다
        </FinalText>
      </FinalContainer>
    </FinalWrap>
  );
};

export default FinalPage;
