import styled from "styled-components";

export const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 130px;
    padding: 20px;
    background-color: #F66B0E;
`

export const Logo = styled.img`
  width: 90px;
  height: auto;
  margin-top: 10px;
  @media (max-width: 768px) {
    width: 70px;
  }
`;

export const Description = styled.p`
    color: #FFFFFF;
    font-size: 20px;
    font-family: "Roboto", "sans-serif";
    text-align: center;
    margin-bottom: 10px;
    @media (max-width: 768px) {
        font-size: 15px;
    }
`