import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    width: 100vw;    
    background-color: #112B3C;
    color: #fff;
    z-index: 1;
    position: relative;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    font-weight: bold;
    
`
export const H1 = styled.h1`
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    font-size: 1.8em;
    color: #CB9A62;
`

export const Logo = styled.image`
    width: 10px;
    height: 10px;
`

export const Cart = styled(FaShoppingCart)`
    position: absolute;
    right: 40px;
    font-size: 25px;
`