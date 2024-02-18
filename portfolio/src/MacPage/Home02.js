import React, { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import "./Home02.css";

const Home02Wrap = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Home02Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Home02BigText = styled.h1`
  font-size: 6rem;
  font-weight: 900;
  color: var(--mac-color);
  position: absolute;
  left: 5%;
`;

const Home02Img = styled.img`
  width: 1000px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 5%;
  border-radius: 20px;
  padding: 10px;
  background: #fff;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.4);
  @media screen and (max-width: 1280px) {
    width: 500px;
  }
  @media screen and (max-width: 480px) {
    width: 160px;
    padding: 5px;
    border-radius: 10px;
    top: 40%;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
  }
`;

const Home02ContentBox = styled.div`
  position: absolute;
  top: 120px;
  right: 10%;
  width: 460px;
  @media screen and (max-width: 1280px) {
    right: 5%;
  }
  @media screen and (max-width: 480px) {
    top: 180px;
    width: 190px;
    right: 0%;
  }
`;

const Home02TitleText = styled.h1`
  font-size: 7rem;
  font-weight: 900;
  color: var(--mac-color);
`;

const Home02SubText = styled.h2`
  font-size: 4rem;
  font-weight: 400;
  margin-top: 40px;
  padding-bottom: 5px;
  @media screen and (max-width: 480px) {
    margin-top: 20px;
  }
`;

const Home02SubTextBold = styled.span`
  font-size: 4rem;
  font-weight: 900;
  border-bottom: 3px solid var(--mac-color);
`;

const HomeContentText = styled.h4`
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

const HomeContentTextBold = styled.span`
  font-size: 2rem;
  font-weight: 900;
  color: #000;
`;

const Home02ExampleImg = styled.img`
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
    width: 180px;
    padding: 5px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
    margin-top: 20px;
    border-radius: 10px;
  }
`;
const Home02 = () => {
  const [Home02modalOpen01, setHome02ModalOpen01] = useState(false);

  const openHome02Modal01 = () => {
    setHome02ModalOpen01(true);
  };

  const closeHome02Modal01 = () => {
    setHome02ModalOpen01(false);
  };

  return (
    <Home02Wrap>
      <Home02Container>
        <Home02BigText>02 Home</Home02BigText>
        <Home02Img src="./imgs/Home02img/IntroPage_Slide.png" />
        <Home02ContentBox>
          <Home02TitleText>Intropageslide</Home02TitleText>
          <Home02SubText>
            <Home02SubTextBold>추천메뉴</Home02SubTextBold>를 넣다
          </Home02SubText>
          <HomeContentText>
            사용자가 맥딜리버리에 들어온 목적이
            <br />
            <HomeContentTextBold>메뉴를 시키기 위함</HomeContentTextBold>을
            고려해 가장 첫 보이는 화면에 인기있는 추천메뉴를 넣었습니다.
          </HomeContentText>
          <Home02SubText>
            <Home02SubTextBold>기능예제</Home02SubTextBold>
          </Home02SubText>
          <Home02ExampleImg
            src="./imgs/Home02img/Slide.png"
            onClick={openHome02Modal01}
          />
          <Modal
            className="modal"
            isOpen={Home02modalOpen01}
            onRequestClose={closeHome02Modal01}
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
              src="https://intropageslide.web.app/"
              width="100%"
              height="100%"
            />
            <FontAwesomeIcon
              icon={faXmark}
              className="xmark"
              onClick={closeHome02Modal01}
            />
          </Modal>
        </Home02ContentBox>
      </Home02Container>
    </Home02Wrap>
  );
};

export default Home02;
