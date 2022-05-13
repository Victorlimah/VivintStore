import styled from "styled-components";

export const NewProductContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 200px;
    background-color: #8F8F8D;
    border-radius: 15px;
    padding : 10px 10px 0 10px;
`

export const NewProductTitle = styled.p`
    margin-left: -60px;
    margin-top: 10px;
`

export const NewProductPrice = styled.p`
    margin-left: -60px;
    margin-top: 10px;
`
export const NewProductImage = styled.img`
    width: 150px;
    height: 80px;
    border-radius: 10px;
`
export const NewProductDescription = styled.p`
    margin-top: 7px;
`
export const NewProductButton = styled.button`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100px ;
    border-radius: 10px 0 10px 0;
    border: none;
    color: #FFFFFF;
    background-color: #41382F;
`