import React, { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import "./Menu05.css";

const Menu05Wrap = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Menu05Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Menu05LeftBox = styled.div`
  width: 50%;
  height: 100%;
  background: var(--mac-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Menu05LeftImg = styled.img`
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

const Menu05RightBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Menu05RightContainer = styled.div`
  width: 460px;
  @media screen and (max-width: 480px) {
    width: 160px;
  }
`;

const Menu05TitleText = styled.h1`
  font-size: 7rem;
  font-weight: 900;
  color: var(--mac-color);
`;

const Menu05SubText = styled.h2`
  font-size: 4rem;
  font-weight: 400;
  margin-top: 40px;
  padding-bottom: 5px;
  @media screen and (max-width: 480px) {
    margin-top: 20px;
  }
`;

const Menu05SubTextBold = styled.span`
  font-size: 4rem;
  font-weight: 900;
  border-bottom: 3px solid var(--mac-color);
`;

const Menu05ContentText = styled.h4`
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

const Menu05ContentTextBold = styled.span`
  font-size: 2rem;
  font-weight: 900;
  color: #000;
`;

const Menu05ExampleImg = styled.img`
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

const Menu05 = () => {
  const [Menu05modalOpen01, setMenu05ModalOpen01] = useState(false);

  const openMenu05Modal01 = () => {
    setMenu05ModalOpen01(true);
  };

  const closeMenu05Modal01 = () => {
    setMenu05ModalOpen01(false);
  };

  return (
    <Menu05Wrap>
      <Menu05Container>
        <Menu05LeftBox>
          <Menu05LeftImg src="./imgs/Menu05img/Menu05_Example.png" />
        </Menu05LeftBox>
        <Menu05RightBox>
          <Menu05RightContainer>
            <Menu05TitleText>Read More</Menu05TitleText>
            <Menu05SubText>
              <Menu05SubTextBold>필요한 정보만</Menu05SubTextBold> 제공하다
            </Menu05SubText>
            <Menu05ContentText>
              사용자가{" "}
              <Menu05ContentTextBold>원하는 정보만을</Menu05ContentTextBold>{" "}
              제공함으로써 사용자의 주의력을 분산시키지 않도록 도와줍니다
            </Menu05ContentText>
            <Menu05SubText>
              <Menu05SubTextBold>기능예제</Menu05SubTextBold>
            </Menu05SubText>
            <Menu05ExampleImg
              src="./imgs/Menu05img/ReadMore_Example.png"
              onClick={openMenu05Modal01}
            />
            <Modal
              className="modal"
              isOpen={Menu05modalOpen01}
              onRequestClose={closeMenu05Modal01}
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
                src="https://readmore-41818.firebaseapp.com/"
                width="100%"
                height="100%"
              />
              <FontAwesomeIcon
                icon={faXmark}
                className="xmark"
                onClick={closeMenu05Modal01}
              />
            </Modal>
          </Menu05RightContainer>
        </Menu05RightBox>
      </Menu05Container>
    </Menu05Wrap>
  );
};

export default Menu05;
