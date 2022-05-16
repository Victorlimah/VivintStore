import styled from "styled-components";

export const NewProductContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 500px;
    width: 362px;
    background-color: #FFFFFF;
    border-radius: 15px;
    padding : 10px 10px 0 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding-top: 50px;
    cursor: pointer;
    &:hover {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    }
`

export const NewProductTitle = styled.p`
    font-size: 30px;
    text-align: center;
    margin-top: 40px;
`

export const NewProductPrice = styled.p`
    color: green;
    position: absolute;
    bottom: 40px;
    font-size: 25px;
`
export const NewProductImage = styled.img`
    width: 300px;
    height: 200px;
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