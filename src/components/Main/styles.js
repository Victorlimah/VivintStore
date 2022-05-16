import styled from "styled-components";

export const Container = styled.div`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(45deg, #06113C, #73777B);
  background-size: 200% 200%;
  animation: colors 5s ease infinite;

  @keyframes colors {
    0%{
      background-position: 0% 50%;
    }

    50%{
      background-position: 100% 50%  ;
    }

    100%{
      background-position: 0% 50% ;
    }
  }
`;


export const Header = styled.header`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

export const Logo = styled.img`
  width: 100%;
  height: auto;
  max-width: 300px;
  max-height: 300px;
  margin-bottom: 20px;
  margin-top: 100px;
`;

export const InfosContainer = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const ButtonAcess = styled.button`
  font-family: 'Inter', sans-serif;
  width: 50%;
  height: 70px;
  color: #73777B;
  font-size: 20px;
  background-color: #2F8F9D;
  border-color: #FFFFFF;
  border-radius: 30px;
  border: none;
	display: block;
	position: relative;
  background-color: #EFEFEF;
	transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
  margin-bottom: 20px;
    &:hover {
      color: black !important;
      background-color: transparent;
      text-shadow: none;
      cursor: pointer;
      border: 2px solid #FFFFFF;
    }
`;


