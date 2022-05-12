import styled from "styled-components";

export const Main = styled.main`
  padding-top: 10px;
`
export const NewProducts = styled.div`
    display: flex;
    align-items: center;
    height: 240px;
    gap: 20px;
    overflow: scroll;
    padding-left: 20px;
`
export const Categories = styled.div`
    display: flex;
    align-items: center;
    height: 370px;
    flex-direction: column;
    gap: 15px;
    padding-top: 10px;
`
export const Category = styled.div`
    display: flex;
    justify-content: space-between; 
    align-items: center;
    padding: 20px;
    height: 60px;
    width: 90%;
    background-color: #453D32;
    color: #FFFFFF;
    font-size: 30px;
    border-radius: 15px;
`
export const Options = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    margin-bottom: 20px;
    margin-top: 20px;
`