import React from "react";
import "./Promotion.css";
import styled from "styled-components";
import { infor } from "../../PromotionInfor";
import { Link } from "react-router-dom";

const PromotionWrap = styled.div`
  width: 1280px;
  margin-top: 50px;
`;

const PromotionContainer = styled.div`
  width: 100%;
`;

const TitlePromotion = styled.h1`
  font-weight: 900;
  font-size: 60px;
  margin: 20px 0 0 0;
`;

const PromotionBoxs = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PromotionBox = styled.div`
  width: 366px;
  height: 438px;
  border-radius: 10px;
  box-shadow: 0 10px 5px rgba(0, 0, 0, 0.3);
`;

const PromotionImg = styled.img`
  width: 366px;
  height: 300px;
  border-radius: 10px;
`;

const PromotionName = styled.h1`
  font-size: 18px;
  margin: 0;
  line-height: 15px;
  text-decoration: none;
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
