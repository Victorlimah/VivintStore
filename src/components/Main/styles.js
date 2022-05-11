import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.header`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffcd94;
`;

export const Logo = styled.img`
  width: 100%;
  height: auto;
  max-width: 300px;
  max-height: 300px;
  margin-bottom: 20px;
`;

export const InfosContainer = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #41382f;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #fff;
  margin-top: 90px;
  margin-bottom: 16px;
  text-align: center;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: #fff;
  margin-bottom: 16px;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  flex-direction: column;
`;

export const Login = styled.button`
  width: 50%;
  padding: 16px;
  border: none;
  border-radius: 8px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
  color: #41382f;
  background-color: #cb9a62;
  font-size: 18px;
  cursor: pointer;
  transition: 0.2s;
  margin-bottom: 15px;

  &:hover {
    background-color: #b2aeab;
  }
`;

export const Register = styled.button`
  width: 50%;
  padding: 16px;
  border: none;
  border-radius: 8px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
  background-color: #41382f;
  color: #cb9a62;
  font-size: 18px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #b2aeab;
    color: #41382f;
  }
`;
