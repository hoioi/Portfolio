import React, { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import "./Menu04.css";

const Menu04Wrap = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Menu04Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Menu04LeftBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Menu04LeftImg = styled.img`
  width: 800px;
  border-radius: 20px;
  padding: 10px;
  background: #fff;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.4);
  @media screen and (max-width: 1280px) {
    width: 500px;
  }
  @media screen and (max-width: 480px) {
    width: 180px;
    padding: 5px;
    border-radius: 10px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
  }
`;

const Menu04RightBox = styled.div`
  width: 50%;
  height: 100%;
  background: var(--mac-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Menu04RightContainer = styled.div`
  width: 460px;
  @media screen and (max-width: 480px) {
    width: 160px;
  }
`;

const Menu04TitleText = styled.h1`
  font-size: 7rem;
  font-weight: 900;
  color: var(--white-color);
`;

const Menu04SubText = styled.h2`
  font-size: 4rem;
  font-weight: 400;
  margin-top: 40px;
  padding-bottom: 5px;
  @media screen and (max-width: 480px) {
    margin-top: 20px;
  }
`;

const Menu04SubTextBold = styled.span`
  font-size: 4rem;
  font-weight: 900;
  border-bottom: 3px solid var(--white-color);
`;

const Menu04ContentText = styled.h4`
  font-size: 2rem;
  font-weight: 400;
  margin-top: 40px;
  color: #707070;
  line-height: 30px;
  @media screen and (max-width: 480px) {
    margin-top: 20px;
    line-height: 20px;
  }
`;

const Menu04ContentTextBold = styled.span`
  font-size: 2rem;
  font-weight: 900;
  color: #000;
`;

const Menu04ExampleImg = styled.img`
  width: 400px;
  border-radius: 20px;
  padding: 10px;
  background: #fff;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.4);
  margin-top: 40px;
  margin-bottom: 15px;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: translateY(-20px);
  }
  @media screen and (max-width: 480px) {
    width: 150px;
    padding: 5px;
    border-radius: 10px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
    margin-top: 20px;
  }
`;

const Menu04 = () => {
  const [Menu04modalOpen01, setMenu04ModalOpen01] = useState(false);

  const openMenu04Modal01 = () => {
    setMenu04ModalOpen01(true);
  };

  const closeMenu04Modal01 = () => {
    setMenu04ModalOpen01(false);
  };

  return (
    <Menu04Wrap>
      <Menu04Container>
        <Menu04LeftBox>
          <Menu04LeftImg src="./imgs/Menu04img/menuPage_Filter.png" />
        </Menu04LeftBox>
        <Menu04RightBox>
          <Menu04RightContainer>
            <Menu04TitleText>Filter</Menu04TitleText>
            <Menu04SubText>
              <Menu04SubTextBold>필터기능</Menu04SubTextBold>을 추가하다
            </Menu04SubText>
            <Menu04ContentText>
              사용자가 카테고리를 선택해{" "}
              <Menu04ContentTextBold>메뉴를 한 눈에</Menu04ContentTextBold> 볼
              수 있도록 도와줍니다
            </Menu04ContentText>
            <Menu04SubText>
              <Menu04SubTextBold>기능예제</Menu04SubTextBold>
            </Menu04SubText>
            <Menu04ExampleImg
              src="./imgs/Menu04img/Menu04Example.png"
              onClick={openMenu04Modal01}
            />
            <Modal
              className="modal"
              isOpen={Menu04modalOpen01}
              onRequestClose={closeMenu04Modal01}
              contentLabel="External Page Modal"
              style={{
                overlay: {
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                },
                content: {
                  width: "95vw",
                  height: "95vh",
                  overflow: "hidden",
                },
              }}
            >
              <iframe
                title="External Page"
                src="https://filter-2c06f.firebaseapp.com/"
                width="100%"
                height="100%"
              />
              <FontAwesomeIcon
                icon={faXmark}
                className="xmark"
                onClick={closeMenu04Modal01}
              />
            </Modal>
          </Menu04RightContainer>
        </Menu04RightBox>
      </Menu04Container>
    </Menu04Wrap>
  );
};

export default Menu04;
