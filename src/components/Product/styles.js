import styled from "styled-components";
import { FaMoneyBill } from "react-icons/fa";
import { BsFillCartPlusFill } from "react-icons/bs";

export const Main = styled.main`
    padding-top: 150px;
    background-color: #EFEFEF;
    width: 100%;
    height: 100vh;
    color: #000000;
    &.money{
        color: green;
    }
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`
export const ProductTitle = styled.h1`
    font-size: 25px;
    margin-bottom: 20px;
`
export const ProductPrice = styled.h1`
    display: flex;
    font-size: 30px;
    color: green;
    margin-top: 50px;
    margin-left: 20px;
    @media (max-width: 768px) {
        margin-top: 20px;
    }
`
export const ProductDescription = styled.h1`
    font-size: 30px;
    font-family: 'Koulen', cursive;
    @media (max-width: 768px) {
        font-size: 17px;
    }
   
`
export const ProductInfo = styled.div`
    margin-top: 30px;
    width: 600px;
    @media (max-width: 768px) {
       width: 90%;
       margin-left: 30px;
    }
`
export const Product = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
export const ProductImage = styled.img`
    width: 1000px;   
    height: 700px;
    @media (max-width: 768px) {
        width: 90%;
        height: auto;
    }
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
    width  : 400px;
    height : 60px;
    border-radius: 10px;
    border: none;
    color: #FFFFFF;
    font-size: 20px;
    gap: 15px;
    margin-top: 40px;
    margin-left: 30px;
    @media (max-width: 768px) {
        width: 370px;
        
    }
    &:hover{
        background-color: #5DA405;
        color: #FFFFFF;
        cursor: pointer;
    }
`
export const Rigth = styled.div`
    margin-left: 50px;
    @media (max-width: 768px) {
        margin-left: 0px;
    }
`
export const Hr = styled.div`
    width: 100%;
    height: 1px;
    background-color: #F66B0E;
    margin-top: 30px;
`