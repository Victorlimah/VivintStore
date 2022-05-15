import styled from "styled-components";

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  padding-top: 10px;
  padding-bottom: 60px;
`
export const NewProducts = styled.div`
    display: flex;
    align-items: center;
    height: 400px;
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
    background-color: #112B3C;
    color: #FFFFFF;
    font-size: 30px;
    border-radius: 15px;
    font-family: 'Koulen', cursive;
`
export const Options = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    margin-bottom: 20px;
    margin-top: 20px;
    font-family: 'Koulen', cursive;
`