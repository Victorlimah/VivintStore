import styled from "styled-components";
import { FaMoneyBill } from "react-icons/fa";
import { BsFillCartPlusFill } from "react-icons/bs";

export const Main = styled.main`
    padding-top: 30px;
    width: 100vw;
    height: 100vh;
    background-color: #303030;
    color: #FFFFFF;
    &.money{
        color: green;
    }
`
export const ProductTitle = styled.h1`
`
export const ProductPrice = styled.h1`
    display: flex;
    font-size: 30px;
    color: green;
    margin-top: 30px;
`
export const ProductDescription = styled.h1`
    font-size: 20px;
    font-family: 'Koulen', cursive;
`
export const ProductInfo = styled.div`
    margin-top: 30px;
`
export const Product = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const ProductImage = styled.img`
    width: 400px;   
    height: 300px;
`
export const styledMoney = styled(FaMoneyBill)`
    color : green;
    margin-right: 20px;
`
export const styledCart = styled(BsFillCartPlusFill)`
    color: #FFFFFF;
    font-size: 30px;
`
export const styledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #5DA405;
    width  : 200px;
    height : 60px;
    border-radius: 10px;
    border: none;
    color: #FFFFFF;
    font-size: 20px;
    gap: 15px;
`