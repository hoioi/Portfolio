import React from "react";
import styled from "styled-components";
import "./Menu02.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Menu02Wrap = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Menu02Container = styled.div`
  width: 100%;
  height: 100%;
  background: var(--mac-color);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Menu02Title = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  border-radius: 40px;
  padding: 20px;
  background: #fff;
  color: var(--mac-color);
  margin-top: 100px;
  @media screen and (max-width: 480px) {
    padding: 15px;
    margin-top: 50px;
  }
`;

const Menu02SubTitle = styled.h2`
  font-size: 3rem;
  font-weight: 900;
  color: #fff;
  margin-top: 50px;
  @media screen and (max-width: 480px) {
    margin-top: 30px;
  }
`;

const Menu02ContentBox = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 50px;
  @media screen and (max-width: 480px) {
    margin-top: 30px;
    gap: 2px;
  }
`;

const Menu02Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 15px;
  @media screen and (max-width: 480px) {
    gap: 15px;
    padding: 5px;
  }
`;

const Menu02SmallBox = styled.div`
  width: 350px;
  height: 150px;
  border-radius: 10px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.4);
  background: #dff5ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1280px) {
    width: 250px;
    height: 120px;
  }
  @media screen and (max-width: 480px) {
    width: 80px;
    height: 100px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
  }
`;

const Menu02SmallNumber = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  padding: 5px 10px 5px 10px;
  border-radius: 50%;
  background: #23a9ec;
  color: #fff;
  margin-top: 10px;
`;

const Menu02SmallTitle = styled.h2`
  font-size: 2rem;
  font-weight: 900;
  color: #23a9ec;
  margin-top: 10px;
`;

const Menu02SmallContent = styled.h3`
  font-size: 2rem;
  font-weight: 900;
  color: #000;
  margin-top: 15px;
`;

const Menu02BigBox = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 10px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.4);
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 1280px) {
    width: 250px;
    height: 300px;
  }
  @media screen and (max-width: 480px) {
    width: 80px;
    height: 150px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
  }
`;

const Menu02BigTitle = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  color: var(--mac-color);
  margin-top: 40px;
  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
    margin-top: 20px;
  }
`;

const Menu02BigContent = styled.h4`
  font-size: 2rem;
  font-weight: 900;
  margin-top: 30px;
  text-align: center;
  line-height: 35px;
  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
    line-height: 10px;
    margin-top: 20px;
  }
`;
const Menu02 = () => {
  return (
    <Menu02Wrap>
      <Menu02Container>
        <Menu02Title>McDelivery-Menu</Menu02Title>
        <Menu02SubTitle>
          사용자가 불편함을 느끼는 문제점과 해결방법
        </Menu02SubTitle>
        <Menu02ContentBox>
          <Menu02Content>
            <Menu02SmallBox>
              <Menu02SmallNumber>1</Menu02SmallNumber>
              <Menu02SmallTitle>Painpoint</Menu02SmallTitle>
              <Menu02SmallContent>검색기능 부재</Menu02SmallContent>
            </Menu02SmallBox>
            <Menu02BigBox>
              <Menu02BigTitle>Solution</Menu02BigTitle>
              <FontAwesomeIcon icon={faMagnifyingGlass} className="galss" />
              <Menu02BigContent>
                원하는 메뉴를 사용자가
                <br />손 쉽게 찾게하여
                <br />
                편안함을 제공
              </Menu02BigContent>
            </Menu02BigBox>
          </Menu02Content>
          <Menu02Content>
            <Menu02SmallBox>
              <Menu02SmallNumber>2</Menu02SmallNumber>
              <Menu02SmallTitle>Painpoint</Menu02SmallTitle>
              <Menu02SmallContent>필터기능 추가</Menu02SmallContent>
            </Menu02SmallBox>
            <Menu02BigBox>
              <Menu02BigTitle>Solution</Menu02BigTitle>
              <FontAwesomeIcon icon={faList} className="list" />
              <Menu02BigContent>
                필터를 눌렀을 때 페이지가
                <br />
                바뀌지 않고 메뉴만
                <br />
                바뀌도록 설정
              </Menu02BigContent>
            </Menu02BigBox>
          </Menu02Content>
          <Menu02Content>
            <Menu02SmallBox>
              <Menu02SmallNumber>3</Menu02SmallNumber>
              <Menu02SmallTitle>Painpoint</Menu02SmallTitle>
              <Menu02SmallContent>불필요한 정보제공</Menu02SmallContent>
            </Menu02SmallBox>
            <Menu02BigBox>
              <Menu02BigTitle>Solution</Menu02BigTitle>
              <FontAwesomeIcon icon={faComment} className="Comment" />
              <Menu02BigContent>
                영양성분표,알레르기정보등
                <br />
                사용자가 원할 때
                <br />
                서비스 제공
              </Menu02BigContent>
            </Menu02BigBox>
          </Menu02Content>
          <Menu02Content>
            <Menu02SmallBox>
              <Menu02SmallNumber>4</Menu02SmallNumber>
              <Menu02SmallTitle>Painpoint</Menu02SmallTitle>
              <Menu02SmallContent>카트 리스트 변경</Menu02SmallContent>
            </Menu02SmallBox>
            <Menu02BigBox>
              <Menu02BigTitle>Solution</Menu02BigTitle>
              <FontAwesomeIcon icon={faCartShopping} className="shopping" />
              <Menu02BigContent>
                사용자가 어떤 메뉴를
                <br />
                주문 했는지 한 눈에
                <br />
                보이도록 구축
              </Menu02BigContent>
            </Menu02BigBox>
          </Menu02Content>
        </Menu02ContentBox>
      </Menu02Container>
    </Menu02Wrap>
  );
};

export default Menu02;
