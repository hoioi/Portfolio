import React, { useState } from "react";
import "./RecommendMenu.css";
import styled from "styled-components";
import { products } from "../../Information";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Wrap = styled.div`
  width: 100%;
  height: 620px;
  background: var(--main-color);
  position: relative;
`;

const Menubox = styled.div`
  position: relative;
  margin-top: 80px;
`;

const Menuitem = styled.div`
  width: 1050px;
  position: absolute;
  top: 0;
  left: 35%;
  transform: translateX(-50%);
  z-index: ${(props) => props.index};
  &:nth-child(2) .Textbox {
    opacity: 1;
    pointer-events: auto;
    transition: opacity 0.5s;
  }
  &:nth-child(n + 6) {
    opacity: 0;
    pointer-events: none;
  }
  &:nth-child(2) {
    transform: var(--item2-transform);
    filter: var(--item2-filter);
    z-index: var(--item2-z-index);
    opacity: var(--item2-opacity);
  }
  &:nth-child(1) {
    transform: var(--item1-transform);
    filter: var(--item1-filter);
    z-index: var(--item1-z-index);
    opacity: var(--item1-opacity);
    pointer-events: none;
  }
  &:nth-child(3) {
    transform: var(--item3-transform);
    filter: var(--item3-filter);
    z-index: var(--item3-z-index);
    opacity: var(--item3-opacity);
  }
  &:nth-child(4) {
    transform: var(--item4-transform);
    filter: var(--item4-filter);
    z-index: var(--item4-z-index);
    opacity: var(--item4-opacity);
  }
  &:nth-child(5) {
    transform: var(--item5-transform);
    filter: var(--item5-filter);
    z-index: var(--item5-z-index);
    opacity: var(--item5-opacity);
    pointer-events: none;
  }
`;

const Titlename = styled.h1`
  margin: 80px 0 0 0;
  font-family: "Black Han Sans", sans-serif;
  font-weight: 400;
  font-size: 40px;
`;

const MenuImg = styled.img`
  width: 600px;
  position: absolute;
  right: 0;
  top: 50%;
`;

const EnName = styled.h2`
  margin: 20px 0 0 0;
  font-family: "Black Han Sans", sans-serif;
  font-weight: 400;
  font-size: 25px;
  color: var(--main_red-color);
`;

const ContentText = styled.p`
  margin: 40px 0 0 0;
  font-family: "Black Han Sans", sans-serif;
  font-weight: 400;
  font-size: 25px;
`;

const Textbox = styled.div`
  position: absolute;
  top: 50%;
  opacity: 0;
  pointer-events: none;
  left: 0px;
`;

const Arrows = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Prev = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid var(--main_red-color);
  background: #fff;
  cursor: pointer;
  margin-left: 20px;
  z-index: 20;
  &:hover .prev {
    color: var(--main-color);
  }
`;

const Next = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid var(--main_red-color);
  background: #fff;
  cursor: pointer;
  margin-right: 20px;
  z-index: 20;
  &:hover .next {
    color: var(--main-color);
  }
`;

const OrderButton = styled.button`
  margin-top: 100px;
  background: #fff;
  border: none;
  outline: none;
  width: 140px;
  height: 50px;
  font-size: 20px;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    color: var(--main-color);
  }
`;

const SubTextBox = styled.div`
  position: absolute;
  left: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  top: 150px;
`;

const SubText = styled.h1`
  font-family: "Black Han Sans", sans-serif;
  font-weight: 400;
  font-size: 80px;
  margin: 0;
`;

const BigSubText = styled.h2`
  font-family: "Black Han Sans", sans-serif;
  font-weight: 400;
  font-size: 120px;
  margin: 0;
`;

const RecommendMenu = ({ onProductClick }) => {
  const recommendedMenu = products.filter((product) =>
    product.data_type.includes("main")
  );

  const [sliderClass, setSliderClass] = useState("");

  const showSlider = (type) => {
    const menuItems = document.querySelector(".Menuitems");
    const firstItem = document.querySelector(".Menuitem:first-child");
    const lastItem = document.querySelector(".Menuitem:last-child");

    if (type === "next") {
      // 다음 슬라이드 표시
      setSliderClass("next");
      lastItem.after(firstItem.cloneNode(true));
      firstItem.remove();
      menuItems.classList.remove("next", "prev");
    } else if (type === "prev") {
      // 이전 슬라이드 표시
      setSliderClass("prev");
      firstItem.before(lastItem.cloneNode(true));
      lastItem.remove();
      menuItems.classList.remove("next", "prev");
    }

    setTimeout(() => {
      setSliderClass("");
    }, 2000);
  };

  const handleOrder = (product) => {
    onProductClick(product);
  };

  return (
    <Wrap className="Wrap">
      <SubTextBox>
        <SubText>오늘의</SubText>
        <BigSubText>추천메뉴</BigSubText>
        <SubText>버거</SubText>
      </SubTextBox>
      <Menubox className={`Menuitems ${sliderClass}`}>
        {recommendedMenu.map((main, index) => (
          <Menuitem key={main.id} className="Menuitem">
            <MenuImg src={`images/${main.M_img}`} alt={main.name} />
            <Textbox className="Textbox">
              <Titlename>{main.name}</Titlename>
              <EnName>{main.en_name}</EnName>
              <ContentText>
                {main.content_text.split("<br />").map((line, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && <br />} {line}
                  </React.Fragment>
                ))}
              </ContentText>
              <OrderButton onClick={() => handleOrder(main)}>
                주문하기
              </OrderButton>
            </Textbox>
          </Menuitem>
        ))}
      </Menubox>
      <Arrows>
        <Prev className="prevButton" onClick={() => showSlider("prev")}>
          <FontAwesomeIcon icon={faAngleLeft} className="prev" />
        </Prev>
        <Next className="nextButton" onClick={() => showSlider("next")}>
          <FontAwesomeIcon icon={faAngleRight} className="next" />
        </Next>
      </Arrows>
    </Wrap>
  );
};

export default RecommendMenu;
