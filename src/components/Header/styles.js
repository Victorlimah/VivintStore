import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHistory } from "react-icons/ai";

export const Header = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  height: 100px;
  width: 100vw;
  background-color: #112b3c;
  color: #fff;
  z-index: 1;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  font-weight: bold;
`;
export const H1 = styled.h1`
  font-size: 1.8em;
  color: #cb9a62;
`;
export const Cart = styled(FaShoppingCart)`
  position: absolute;
  right: 40px;
  font-size: 25px;
  cursor: pointer;
  @media (max-width: 600px) {
    right: 60px;
    font-size: 20px;
  }
`;

export const Logo = styled.img`
  width: 120px;
  height: auto;
  position: absolute;
  left: 50%;
  top: 0px;
  transform: translate(-50%);
  cursor: pointer;
`;

export const BackArrow = styled(IoIosArrowBack)`
  position: absolute;
  left: 10px;
  font-size: 30px;
  cursor: pointer;
`;
export const Person = styled(RiLogoutBoxRFill)`
  position: absolute;
  right: 100px;
  font-size: 30px;
  cursor: pointer;
  @media (max-width: 600px) {
    right: 110px;
    font-size: 25px;
  }
`;
export const Heart = styled(AiFillHeart)`
  position: absolute;
  right: 165px;
  font-size: 30px;
  cursor: pointer;
  @media (max-width: 600px) {
    right: 280px;
    font-size: 25px;
  }
`;
export const Historic = styled(AiOutlineHistory)`
  position: absolute;
  right: 230px;
  font-size: 30px;
  cursor: pointer;
  @media (max-width: 600px) {
    right: 330px;
    font-size: 25px;
  }
`;
