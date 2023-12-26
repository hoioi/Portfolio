import React from "react";
import "./Promotion.css";
import styled from "styled-components";
import { infor } from "../../PromotionInfor";
import { Link } from "react-router-dom";

const PromotionWrap = styled.div`
  width: 1280px;
  margin-top: 50px;
  @media screen and (max-width: 1280px) {
    width: 940px;
  }
  @media screen and (max-width: 480px) {
    width: 360px;
  }
`;

const PromotionContainer = styled.div`
  width: 100%;
`;

const TitlePromotion = styled.h1`
  font-weight: 900;
  font-size: 60px;
  margin: 20px 0 0 0;
  @media screen and (max-width: 480px) {
    font-size: 40px;
  }
`;

const PromotionBoxs = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 1280px) {
  }
  @media screen and (max-width: 480px) {
    justify-content: center;
    align-items: center;
  }
`;

const PromotionBox = styled.div`
  width: 366px;
  height: 438px;
  border-radius: 10px;
  box-shadow: 0 10px 5px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-20px);
  }
  @media screen and (max-width: 1280px) {
  }
  @media screen and (max-width: 480px) {
    width: 98%;
    height: 438px;
  }
`;

const PromotionImg = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 10px;
`;

const PromotionName = styled.h1`
  font-size: 18px;
  margin: 0;
  line-height: 15px;
  text-decoration: none;
  @media screen and (max-width: 480px) {
    line-height: 30px;
  }
`;

const PromotionNameBox = styled.div`
  margin: 30px 30px;
`;

const Promotion = () => {
  return (
    <PromotionWrap>
      <PromotionContainer>
        <TitlePromotion>McDonald's Promotion</TitlePromotion>
        <PromotionBoxs>
          {infor.map((info) => (
            <Link
              to={`${info.link}`}
              style={{ textDecoration: "none", color: "#000" }}
              className="Link"
            >
              <PromotionBox key={info.id}>
                <PromotionImg src={`images/${info.img}`} alt={info.name} />
                <PromotionNameBox>
                  {info.name.split("<br />").map((line, index) => (
                    <PromotionName key={index}>
                      {index > 0 && <br />} {line}
                    </PromotionName>
                  ))}
                </PromotionNameBox>
              </PromotionBox>
            </Link>
          ))}
        </PromotionBoxs>
      </PromotionContainer>
    </PromotionWrap>
  );
};

export default Promotion;
