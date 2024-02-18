import React, { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import "./Menu03.css";

const Menu03Wrap = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Menu03Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Menu03LeftBox = styled.div`
  width: 50%;
  height: 100%;
  background: var(--mac-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Menu03LeftImg = styled.img`
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

const Menu03RightBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Menu03RightContainer = styled.div`
  width: 460px;
  @media screen and (max-width: 480px) {
    width: 160px;
  }
`;

const Menu03TitleText = styled.h1`
  font-size: 7rem;
  font-weight: 900;
  color: var(--mac-color);
`;

const Menu03SubText = styled.h2`
  font-size: 4rem;
  font-weight: 400;
  margin-top: 40px;
  padding-bottom: 5px;
  @media screen and (max-width: 480px) {
    margin-top: 20px;
  }
`;

const Menu03SubTextBold = styled.span`
  font-size: 4rem;
  font-weight: 900;
  border-bottom: 3px solid var(--mac-color);
`;

const Menu03ContentText = styled.h4`
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

const Menu03ContentTextBold = styled.span`
  font-size: 2rem;
  font-weight: 900;
  color: #000;
`;

const Menu03ExampleImg = styled.img`
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

const Menu03 = () => {
  const [Menu03modalOpen01, setMenu03ModalOpen01] = useState(false);

  const openMenu03Modal01 = () => {
    setMenu03ModalOpen01(true);
  };

  const closeMenu03Modal01 = () => {
    setMenu03ModalOpen01(false);
  };

  return (
    <Menu03Wrap>
      <Menu03Container>
        <Menu03LeftBox>
          <Menu03LeftImg src="./imgs/Menu03img/menuPage.png" />
        </Menu03LeftBox>
        <Menu03RightBox>
          <Menu03RightContainer>
            <Menu03TitleText>Search</Menu03TitleText>
            <Menu03SubText>
              <Menu03SubTextBold>검색기능</Menu03SubTextBold>을 추가하다
            </Menu03SubText>
            <Menu03ContentText>
              사용자가{" "}
              <Menu03ContentTextBold>원하는 메뉴</Menu03ContentTextBold>를 쉽고,
              빠르게 찾을 수 있도록 도와줍니다.
            </Menu03ContentText>
            <Menu03SubText>
              <Menu03SubTextBold>기능예제</Menu03SubTextBold>
            </Menu03SubText>
            <Menu03ExampleImg
              src="./imgs/Menu03img/Menu03Example.png"
              onClick={openMenu03Modal01}
            />
            <Modal
              className="modal"
              isOpen={Menu03modalOpen01}
              onRequestClose={closeMenu03Modal01}
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
                src="https://search-5ec2f.firebaseapp.com/"
                width="100%"
                height="100%"
              />
              <FontAwesomeIcon
                icon={faXmark}
                className="xmark"
                onClick={closeMenu03Modal01}
              />
            </Modal>
          </Menu03RightContainer>
        </Menu03RightBox>
      </Menu03Container>
    </Menu03Wrap>
  );
};

export default Menu03;
