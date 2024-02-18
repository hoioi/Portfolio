import React, { useState, useEffect } from "react";
import "./Section01.css";
import styled from "styled-components";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Section01Wrap = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SectionContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: end;
  width: 100%;
  border: 1px solid#000;
`;

const Sectioin01Leftimg = styled.img`
  width: 700px;
  height: 700px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  left: 100px;
  position: absolute;
  transform: translate(0, -120%)
    translateY(${(props) => props.scrollPosition}px);
  @media screen and (max-width: 1280px) {
    width: 500px;
    height: 500px;
    left: 50px;
    transform: translate(0, -140%)
      translateY(${(props) => props.scrollPosition}px);
  }
  @media screen and (max-width: 480px) {
    width: 150px;
    height: 150px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
    left: 20px;
    transform: translate(0, -330%)
      translateY(${(props) => props.scrollPosition}px);
  }
`;

const SectionContent = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 100px;
  @media screen and (max-width: 1280px) {
    width: 500px;
    margin-right: 80px;
  }
  @media screen and (max-width: 480px) {
    width: 170px;
    margin-right: 20px;
  }
`;

const Section01Title = styled.h1`
  font-size: 5rem;
  font-family: "Rampart One", sans-serif;
  margin-top: 100px;
  text-align: center;
  @media screen and (max-width: 1280px) {
    margin-top: 80px;
  }
  @media screen and (max-width: 480px) {
    margin-top: 30px;
  }
`;

const Section01Introduce = styled.div`
  width: 80%;
  margin-top: 120px;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 40px;
  @media screen and (max-width: 1280px) {
    margin-top: 50px;
    line-height: 30px;
  }
  @media screen and (max-width: 480px) {
    margin-top: 30px;
    line-height: 20px;
  }
`;

const Section01EmphasisText = styled.span`
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--main-color);
  font-family: "Rampart One", sans-serif;
`;

const Section01TechnologyBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  @media screen and (max-width: 1280px) {
    margin-top: 80px;
  }
  @media screen and (max-width: 480px) {
    margin-top: 10px;
  }
`;
const Section01IconBox = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 100px;
  @media screen and (max-width: 1280px) {
    gap: 5px;
    margin-top: 80px;
  }
  @media screen and (max-width: 480px) {
    gap: 5px;
    margin-top: 30px;
  }
`;
const Section01Icon = styled.img`
  width: 150px;
  border-radius: 10px;
  @media screen and (max-width: 1280px) {
    width: 100px;
  }
  @media screen and (max-width: 480px) {
    width: 50px;
  }
`;

const Section01TitleName = styled.h1`
  font-size: 5rem;
  margin-top: 40px;
  font-family: "Playfair Display", serif;
  @media screen and (max-width: 1280px) {
    margin-top: 30px;
  }
  @media screen and (max-width: 480px) {
    margin-top: 20px;
  }
`;

const Section01TextBox = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  margin-top: 50px;
  line-height: 40px;
  @media screen and (max-width: 1280px) {
    margin-top: 30px;
    line-height: 30px;
  }
  @media screen and (max-width: 480px) {
    margin-top: 20px;
    line-height: 20px;
  }
`;

const SectionExample = styled.button`
  margin-top: 100px;
  background: var(--main-color);
  width: 150px;
  height: 70px;
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  @media screen and (max-width: 1280px) {
    margin-top: 50px;
    width: 120px;
    height: 50px;
  }
  @media screen and (max-width: 480px) {
    margin-top: 20px;
    width: 80px;
    height: 40px;
  }
`;

const Section01 = () => {
  const [modalOpen01, setModalOpen01] = useState(false);
  const [modalOpen02, setModalOpen02] = useState(false);
  const [modalOpen03, setModalOpen03] = useState(false);
  const [modalOpen04, setModalOpen04] = useState(false);
  const [modalOpen05, setModalOpen05] = useState(false);

  const [scrollposition, setScrollposition] = useState(0);

  const openModal01 = () => {
    setModalOpen01(true);
  };

  const closeModal01 = () => {
    setModalOpen01(false);
  };

  const openModal02 = () => {
    setModalOpen02(true);
  };

  const closeModal02 = () => {
    setModalOpen02(false);
  };

  const openModal03 = () => {
    setModalOpen03(true);
  };

  const closeModal03 = () => {
    setModalOpen03(false);
  };

  const openModal04 = () => {
    setModalOpen04(true);
  };

  const closeModal04 = () => {
    setModalOpen04(false);
  };

  const openModal05 = () => {
    setModalOpen05(true);
  };

  const closeModal05 = () => {
    setModalOpen05(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollposition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Section01Wrap>
      <SectionContainer>
        <Sectioin01Leftimg
          src="./imgs/section01img/summer_1.jpg"
          scrollPosition={scrollposition}
        />
        <SectionContent>
          <Section01Title>About Me</Section01Title>
          <Section01Introduce>
            안녕하세요. 저는 웹 기술의 끊임없는 발전에 흥미를 느끼는{" "}
            <Section01EmphasisText>
              프론트엔드 개발자 최진석
            </Section01EmphasisText>
            입니다.
            <br />
            <br />
            저의 목표는 사용자들에게{" "}
            <Section01EmphasisText>혁신적</Section01EmphasisText>이고{" "}
            <Section01EmphasisText>쾌적한</Section01EmphasisText> 웹 경험을
            제공하는 것입니다. 지속적인 학습과 열린 마음을 가지고, 끊임없이
            발전하는 프론트엔드 개발자로서 고객과 사용자들에게 가치를 전달하는데
            기여하고 싶습니다.
            <br />
            <br />
          </Section01Introduce>
          <Section01Title>Technology Stack</Section01Title>
          <Section01TechnologyBox>
            <Section01IconBox>
              <Section01Icon src="./imgs/iconimg/Html.png" />
              <Section01Icon src="./imgs/iconimg/Css.png" />
            </Section01IconBox>
            <Section01TitleName>HTML/CSS</Section01TitleName>
            <Section01TextBox>
              웹의 기본을 이루는 HTML과 CSS를 꾸준히 연습하고 있습니다.
              <br />
              HTML을 사용하여 웹 페이지의 구조를 정의하고,
              <br /> CSS를 활용하여 각 요소를 스타일링하고 레이아웃을 조정하여
              <br />
              사용자가 직관적으로 정보를 이해할 수 있는 환경을 조성하고
              있습니다.
            </Section01TextBox>
            <SectionExample onClick={openModal01}>Example view</SectionExample>
            <Modal
              isOpen={modalOpen01}
              onRequestClose={closeModal01}
              contentLabel="External Page Modal"
              className="modal"
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
                src="https://hoverexample-99a96.firebaseapp.com/"
                width="100%"
                height="100%"
              />
              <FontAwesomeIcon
                icon={faXmark}
                className="xmark"
                onClick={closeModal01}
              />
            </Modal>
          </Section01TechnologyBox>
          <Section01TechnologyBox>
            <Section01IconBox>
              <Section01Icon src="./imgs/iconimg/Scss.png" />
            </Section01IconBox>
            <Section01TitleName>Scss</Section01TitleName>
            <Section01TextBox>
              SCSS는 CSS를 보다 효율적으로 작성할 수 있게 도와주는 전처리기로,
              <br />
              스타일의 복잡성과 유지보수성을 해결하기 위해 적극적으로 도입하고
              있습니다.
              <br /> 재사용 가능한 코드 블록을 믹스인으로 정의하여
              <br />
              스타일을 중복 작성하지 않고 효율적으로 관리합니다.
            </Section01TextBox>
            <SectionExample onClick={openModal02}>Example view</SectionExample>
            <Modal
              isOpen={modalOpen02}
              onRequestClose={closeModal02}
              contentLabel="External Page Modal"
              className="modal"
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
                src="https://scssexample.web.app/"
                width="100%"
                height="100%"
              />
              <FontAwesomeIcon
                icon={faXmark}
                className="xmark"
                onClick={closeModal02}
              />
            </Modal>
          </Section01TechnologyBox>
          <Section01TechnologyBox>
            <Section01IconBox>
              <Section01Icon src="./imgs/iconimg/jQuery.png" />
            </Section01IconBox>
            <Section01TitleName>jQuery</Section01TitleName>
            <Section01TextBox>
              jQuery는 웹 개발에서 클라이언트 측 스크립팅을 간소화하고
              <br />
              브라우저 간의 호환성 문제를 해결하는 데 주로 사용되는 자바스크립트
              라이브러리입니다.
              <br />
              저는 다양한 프로젝트에서 jQuery를 활용하여
              <br />
              DOM 조작, 이벤트 처리, 애니메이션 효과 등을 구현하는 경험이
              있습니다.
            </Section01TextBox>
            <SectionExample onClick={openModal03}>Example view</SectionExample>
            <Modal
              isOpen={modalOpen03}
              onRequestClose={closeModal03}
              contentLabel="External Page Modal"
              className="modal"
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
                src="https://jqueryexample-95af7.web.app/"
                width="100%"
                height="100%"
              />
              <FontAwesomeIcon
                icon={faXmark}
                className="xmark"
                onClick={closeModal03}
              />
            </Modal>
          </Section01TechnologyBox>
          <Section01TechnologyBox>
            <Section01IconBox>
              <Section01Icon src="./imgs/iconimg/Js.jpg" />
            </Section01IconBox>
            <Section01TitleName>Javascript</Section01TitleName>
            <Section01TextBox>
              JavaScript는 빠르게 발전하고 있는 언어로
              <br />
              계속해서 최신 트렌드를 따라가며 웹 개발에 활용할 수 있는 다양한
              도구와
              <br />
              기술을 습득하도록 계속해서 공부하겠습니다
              <br />
              팀원들과 협업하며 팀 프로젝트 경험이 있습니다
              <br />
              <Link className="linkText" to="https://twosomemain.web.app/">
                (https://twosomemain.web.app/)
              </Link>
            </Section01TextBox>
            <SectionExample onClick={openModal04}>Example view</SectionExample>
            <Modal
              isOpen={modalOpen04}
              onRequestClose={closeModal04}
              contentLabel="External Page Modal"
              className="modal"
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
                src="https://twosomemain.web.app/"
                width="100%"
                height="100%"
              />
              <FontAwesomeIcon
                icon={faXmark}
                className="xmark"
                onClick={closeModal04}
              />
            </Modal>
          </Section01TechnologyBox>
          <Section01TechnologyBox>
            <Section01IconBox>
              <Section01Icon src="./imgs/iconimg/React.png" />
            </Section01IconBox>
            <Section01TitleName>React</Section01TitleName>
            <Section01TextBox>
              React의 핵심은 컴포넌트라 생각합니다.
              <br />
              컴포넌트는 재사용 가능하고 독립적인 모듈로, UI를 구성하는 데
              사용됩니다
              <br />
              상태(state)를 사용하여 컴포넌트의 동적인 데이터를 관리하고
              <br />
              React Router를 사용하면 싱글 페이지 어플리케이션에서
              <br />
              페이지 간의 라우팅을 쉽게 구현할 수 있습니다.
              <br />
              <Link
                className="linkText"
                to="https://mcdelivery-clone.firebaseapp.com/"
              >
                (https://mcdelivery-clone.firebaseapp.com/)
              </Link>
            </Section01TextBox>
            <SectionExample onClick={openModal05}>Example view</SectionExample>
            <Modal
              isOpen={modalOpen05}
              onRequestClose={closeModal05}
              contentLabel="External Page Modal"
              className="modal"
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
                src="https://mcdelivery-clone.firebaseapp.com/"
                width="100%"
                height="100%"
              />
              <FontAwesomeIcon
                icon={faXmark}
                className="xmark"
                onClick={closeModal05}
              />
            </Modal>
          </Section01TechnologyBox>
        </SectionContent>
      </SectionContainer>
    </Section01Wrap>
  );
};

export default Section01;
