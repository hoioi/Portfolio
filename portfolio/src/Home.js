import React from "react";
import "./Home.css";
import styled from "styled-components";
import IntroPage from "./sectionPage/introPage/IntroPage";
import Section01 from "./sectionPage/section01/Section01";
import Section02 from "./sectionPage/section02/Section02";
import FinalPage from "./sectionPage/finalPage/FinalPage";

const HomeWrap = styled.div``;
const HomeContainer = styled.div``;
const Home = () => {
  return (
    <HomeWrap>
      <HomeContainer>
        <IntroPage />
        <Section01 />
        <Section02 />
        <FinalPage />
      </HomeContainer>
    </HomeWrap>
  );
};

export default Home;
