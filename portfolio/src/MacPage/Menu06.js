import React, { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import "./Menu06.css";

const Menu06Wrap = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Menu06Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Menu06LeftBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Menu06LeftImg = styled.img`
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

const Menu06RightBox = styled.div`
  width: 50%;
  height: 100%;
  background: var(--mac-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Menu06RightContainer = styled.div`
  width: 460px;
  @media screen and (max-width: 480px) {
    width: 160px;
  }
`;

const Menu06TitleText = styled.h1`
  font-size: 7rem;
  font-weight: 900;
  color: var(--white-color);
`;

const Menu06SubText = styled.h2`
  font-size: 4rem;
  font-weight: 400;
  margin-top: 40px;
  padding-bottom: 5px;
  @media screen and (max-width: 480px) {
    margin-top: 20px;
  }
`;

const Menu06SubTextBold = styled.span`
  font-size: 4rem;
  font-weight: 900;
  border-bottom: 3px solid var(--white-color);
`;

const Menu06ContentText = styled.h4`
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

const Menu06ContentTextBold = styled.span`
  font-size: 2rem;
  font-weight: 900;
  color: #000;
`;

const Menu06ExampleImg = styled.img`
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
const Menu06 = () => {
  const [Menu06modalOpen01, setMenu06ModalOpen01] = useState(false);

  const openMenu06Modal01 = () => {
    setMenu06ModalOpen01(true);
  };

  const closeMenu06Modal01 = () => {
    setMenu06ModalOpen01(false);
  };

  return (
    <Menu06Wrap>
      <Menu06Container>
        <Menu06LeftBox>
          <Menu06LeftImg src="./imgs/Menu06img/Menu06_Example.png" />
        </Menu06LeftBox>
        <Menu06RightBox>
          <Menu06RightContainer>
            <Menu06TitleText>Shopping Cart</Menu06TitleText>
            <Menu06SubText>
              <Menu06SubTextBold>카트리스트</Menu06SubTextBold>를 변경하다
            </Menu06SubText>
            <Menu06ContentText>
              사용자가 선택한 메뉴를{" "}
              <Menu06ContentTextBold>손쉽게 확인</Menu06ContentTextBold> 할 수
              있도록 도와줍니다
            </Menu06ContentText>
            <Menu06SubText>
              <Menu06SubTextBold>기능예제</Menu06SubTextBold>
            </Menu06SubText>
            <Menu06ExampleImg
              src="./imgs/Menu06img/ShoppingCart_Example.png"
              onClick={openMenu06Modal01}
            />
            <Modal
              className="modal"
              isOpen={Menu06modalOpen01}
              onRequestClose={closeMenu06Modal01}
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
                src="https://shoppingcart-c13c3.web.app/"
                width="100%"
                height="100%"
              />
              <FontAwesomeIcon
                icon={faXmark}
                className="xmark"
                onClick={closeMenu06Modal01}
              />
            </Modal>
          </Menu06RightContainer>
        </Menu06RightBox>
      </Menu06Container>
    </Menu06Wrap>
  );
};

export default Menu06;
