import styled from "styled-components";
import Loading from "../Loading";

export const Main = styled.main`
  display: flex;
  width: 100vw;
  height: 100%;
  padding-top: 110px;
  padding-bottom: 60px;
  background-color: #efefef;
`;

export const Rigth = styled.div``;

export const NewProducts = styled.div`
  display: grid;
  width: 70vw;
  grid-template-columns: repeat(auto-fill, 360px);
  gap: 20px;
  margin-left: 450px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    margin-left: 22px;
    margin-top: 30px;
  }
`;
export const Categories = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  width: 350px;
  height: 370px;
  flex-direction: column;
  gap: 15px;
  padding-top: 20px;

  @media (max-width: 768px) {
    position: absolute;
    width: 100%;
  }
`;
export const Category = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 60px;
  width: 90%;
  background-color: #112b3c;
  color: #ffffff;
  font-size: 30px;
  border-radius: 15px;
  font-family: "Koulen", cursive;
  &:hover {
    background-color: #f66b0e;
    cursor: pointer;
  }
`;
export const Options = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  padding: 0 20px;
  margin-bottom: 20px;
  margin-top: 20px;
  font-family: "Koulen", cursive;
  font-size: 40px;
  margin-left: 450px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 95vw;
    margin-left: 10px;
    margin-top: 420px;
    font-size: 30px;
  }
`;

export const styledLoading = styled(Loading)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
