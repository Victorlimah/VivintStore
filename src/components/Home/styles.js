import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    width: 100vw;
    height: 100%;
    padding-top: 110px;
    padding-bottom: 60px;
    background-color: #EFEFEF;
`

export const Rigth = styled.div`

`
export const NewProducts = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-left: 550px;
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        margin-left: 27px;
        margin-top: 300px;
    }
`
export const Categories = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    width: 500px;
    height: 370px;
    flex-direction: column;
    gap: 15px;
    padding-top: 20px;
    @media (max-width: 768px) {
        position: absolute;
        width: 100%;
    }
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
    &:hover {
        background-color: #F66B0E;
        cursor: pointer;
    }
`
export const Options = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    margin-bottom: 20px;
    margin-top: 20px;
    font-family: 'Koulen', cursive;
    font-size: 40px;
    padding-left: 550px;
    &:hover {
        cursor: pointer;
    }
`