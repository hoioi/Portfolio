import React from "react";
import "./Login.css";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const LoginWrap = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 98;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginContainer = styled.div`
  width: 500px;
  height: 700px;
  border-radius: 10px;
  background: #f0f2f5;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginImg = styled.img`
  margin-top: 50px;
`;

const LoginTitle = styled.h1`
  margin: 20px 0 0 0;
  font-size: 30px;
  font-family: "Black Han Sans", sans-serif;
  font-weight: 400;
`;

const LoginInputBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const LoginText = styled.h1`
  font-size: 20px;
  &:nth-of-type(2) {
    margin-top: 30px;
  }
`;

const LoginInput = styled.input`
  width: 94%;
  height: 40px;
  border-radius: 10px;
  border: 2px solid var(--main-color);
  outline: none;
  font-size: 15px;
  padding-left: 20px;
`;

const LoginStart = styled.button`
  margin: 140px 0 0 0;
  width: 80%;
  height: 50px;
  font-size: 20px;
  font-family: "Black Han Sans", sans-serif;
  font-weight: 400;
  background: var(--main-color);
  cursor: pointer;
  border: none;
  border-radius: 20px;
`;
const Login = ({ offLogin }) => {
  return (
    <LoginWrap>
      <LoginContainer>
        <FontAwesomeIcon icon={faXmark} className="xmark" onClick={offLogin} />
        <LoginImg src="/images/logo_img/mac_logo.png" />
        <LoginTitle>Log in</LoginTitle>
        <LoginInputBox>
          <LoginText>E-mail</LoginText>
          <LoginInput placeholder="이메일을 입력해주세요" className="input" />
          <LoginText>Password</LoginText>
          <LoginInput
            placeholder="비밀번호를 입력해주세요"
            type="password"
            className="input"
          />
        </LoginInputBox>
        <LoginStart onClick={offLogin}>Let`s Start</LoginStart>
      </LoginContainer>
    </LoginWrap>
  );
};

export default Login;
