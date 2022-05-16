import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  color: #fff;
  background-image: linear-gradient(45deg, #06113C, #FF8C32);
  background-size: 200% 200%;
  animation: colors 15s ease infinite;

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

export const Title = styled.h1`
  font-size: 1.8em;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 85%;
  height: auto;
  padding: 1.5rem 1rem;
  border-radius: 5px;
`;

export const FormTitle = styled.h2`
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 1rem;
  margin-top: 1rem;
  text-align: center;
`;

export const Input = styled.input`
  width: 85%;
  padding: 1rem;
  border: 1px solid #fff;
  border-radius: 15px;
  margin-bottom: 1rem;
  background-color: #FFFFFF;
  font-size: 18px;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  width: 85%;
  height: 65px;
  border: 1px solid #fff;
  border-radius: 15px;
  background-color: #000000;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
    &:hover {
      color: black !important;
      background-color: transparent;
      text-shadow: none;
      cursor: pointer;
    }
`;

export const Error = styled.div`
  display: flex;
  width: 80%;
  padding: 0.5rem;
`;

export const ErrorText = styled.p`
  color: #f00;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  margin: 0 auto;
`;

export const Login = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  margin-top: 2rem;
  cursor: pointer;
  color: #fff;
  text-decoration: underline;

  &:hover {
    color: #fff;
    text-decoration: none;
  }
`;

export const Logo = styled.img`
  width: 100%;
  height: auto;
  max-width: 300px;
  max-height: 300px;
  margin-bottom: 20px;
`;
