import styled from "styled-components";

export const Main = styled.main`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background-color: #EFEFEF;
`

export const Tittle = styled.h1`
    font-family: 'Koulen', cursive;
    font-size: 30px;
    margin-bottom: 30px;
`

export const Products = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`