import styled from "styled-components";

export const ProductContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 360px;
    height: 200px;
    background-color: #8F8F8D;
    border-radius: 15px;
    padding : 10px 10px 0 10px;
`

export const ProductTitle = styled.p`
    margin-left: -60px;
    margin-top: 10px;
`

export const ProductPrice = styled.p`
    margin-left: -60px;
    margin-top: 10px;
`
export const ProductImage = styled.img`
    width: 280px;
    height: 120px;
    border-radius: 10px;
`
export const ProductDescription = styled.p`
    margin-top: 7px;
`
export const ProductButton = styled.button`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 150px ;
    border-radius: 10px 0 10px 0;
    border: none;
    color: #FFFFFF;
    background-color: #41382F;
`