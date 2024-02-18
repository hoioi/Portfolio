import React from "react";
import styled from "styled-components";
import MainPage from "./MacPage/MainPage";
import InformationArchitecture from "./MacPage/InformationArchitecture";
import FontPage from "./MacPage/FontPage";
import ColorPage from "./MacPage/ColorPage";
import StartPage from "./MacPage/StartPage";
import Home01 from "./MacPage/Home01";
import Home02 from "./MacPage/Home02";
import Home03 from "./MacPage/Home03";
import Menu01 from "./MacPage/Menu01";
import Menu02 from "./MacPage/Menu02";
import { useEffect } from "react";
import Menu03 from "./MacPage/Menu03";
import Menu04 from "./MacPage/Menu04";
import Menu05 from "./MacPage/Menu05";
import Menu06 from "./MacPage/Menu06";
import EndPage from "./MacPage/EndPage";

const MacWrap = styled.div``;
const Mac = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <MacWrap>
      <MainPage />
      <InformationArchitecture />
      <FontPage />
      <ColorPage />
      <StartPage />
      <Home01 />
      <Home02 />
      <Home03 />
      <Menu01 />
      <Menu02 />
      <Menu03 />
      <Menu04 />
      <Menu05 />
      <Menu06 />
      <EndPage />
    </MacWrap>
  );
};

export default Mac;
