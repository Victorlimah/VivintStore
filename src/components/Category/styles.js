import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    background-color: #EFEFEF;
    padding-top: 160px;
    
`

export const Tittle = styled.h1`
    font-family: 'Koulen', cursive;
    font-size: 50px;
    margin-bottom: 30px;
    text-align: center;
`

export const Products = styled.div`
    width: 100%;
    display: grid;
    place-content: center;
    grid-template-columns: repeat(auto-fill, 360px);
    gap: 20px;
    margin-bottom: 50px;
`