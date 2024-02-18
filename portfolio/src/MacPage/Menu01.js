import React from "react";
import styled from "styled-components";
import "./Menu01.css";

const Menu01Wrap = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Menu01Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Menu01CircleBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  @media screen and (max-width: 1280px) {
    gap: 30px;
  }
  @media screen and (max-width: 480px) {
    gap: 10px;
  }
`;

const Menu01Circle = styled.div`
  width: 400px;
  height: 400px;
  border: 5px solid var(--mac-color);
  border-radius: 50%;
  @media screen and (max-width: 1280px) {
    width: 300px;
    height: 300px;
  }
  @media screen and (max-width: 480px) {
    width: 100px;
    height: 100px;
    border: 2px solid var(--mac-color);
  }
`;

const Menu01Text = styled.h1`
  font-size: 5rem;
  font-weight: 400;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #f5f5f7;
  padding: 5px;
  @media screen and (max-width: 480px) {
    font-size: 3rem;
  }
`;

const Menu01TextBold = styled.span`
  font-size: 5rem;
  font-weight: 900;
  border-bottom: 3px solid var(--mac-color);
  @media screen and (max-width: 480px) {
    font-size: 3rem;
    border-bottom: 2px solid var(--mac-color);
  }
`;

const Menu01 = () => (
  <Menu01Wrap>
    <Menu01Container>
      <Menu01CircleBox>
        <Menu01Circle />
        <Menu01Circle />
        <Menu01Circle />
      </Menu01CircleBox>
      <Menu01Text>
        메뉴화면은 <Menu01TextBold>한 눈</Menu01TextBold>에 볼 수 있게{" "}
      </Menu01Text>
    </Menu01Container>
  </Menu01Wrap>
);

export default Menu01;
