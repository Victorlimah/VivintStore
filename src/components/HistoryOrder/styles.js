import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  background: #f5f5f5;

  .icon {
    font-size: 120px;
    color: green;
  }
`;

export const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  margin-top: 5rem;
`;

export const PageTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  width: 80%;
  text-align: center;
`;

export const SucessOrder = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

export const Button = styled.button`
  background: #000;
  border: none;
  border-radius: 15px;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 1.2rem 2rem;
  cursor: pointer;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
