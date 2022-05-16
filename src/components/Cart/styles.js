import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const HeaderTitle = styled.h1`
  font-size: 35px;
  color: #000;
  text-align: center;
  width: 100%;
`;

export const PageTitle = styled.h1`
  font-size: 35px;
  color: #000;
  text-align: center;
  width: 100%;
  margin: 15px 0;
`;

export const EmptyCart = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f5f5f5;
  padding: 20px;
  margin-top: 80px;
`;

export const EmptyCartText = styled.p`
  font-size: 20px;
  color: #000;
  text-align: center;
  width: 100%;
`;

export const CartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  margin-top: 40px;
`;

export const CartList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  padding: 15px;
`;

export const CartItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-top: 15px;
  background-color: #e5e5e5;
`;

export const CartItemImg = styled.img`
  width: 110px;
  height: 115px;
  margin-right: 10px;
`;

export const CartItemInfo = styled.div`
  width: 100%;
  height: 115px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #e5e5e5;
`;

export const HeaderProduct = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 30px;
`;

export const CartItemTitle = styled.h1`
  font-size: 24px;
  color: #000;
  width: 100%;
`;

export const CartItemPrice = styled.h1`
  font-size: 22px;
  color: #000;
  text-align: center;
  width: 100%;
  margin-top: 15px;
`;

export const DivPrice = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-left: 100px;
`;

export const ProductInfo = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 200px;
`;

export const AddRemoveButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  background-color: #112b3c;
  color: #cb9a62;
  font-size: 18px;
  font-weight: bold;
  margin-right: 7px;
`;

export const Quantity = styled.h1`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: none;
  background-color: #cb9a62;
  color: #112b3c;
  font-size: 20px;
  font-weight: bold;
  margin-right: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DeliveryInfo = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.5);
  padding: 10px;
`;

export const InfoTitle = styled.h1`
  font-size: 24px;
  color: #000;
  width: 100%;
  text-align: center;
  margin-top: 10px;
`;

export const Edit = styled.span`
  width: 100%;
  display: flex;
  justify-content: right;
  font-size: 18px;
  color: #000;
  margin-right: 15px;
  cursor: pointer;
  text-decoration: underline;
`;

export const InfoAdress = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  margin-top: 10px;
  padding: 10px;
`;

export const InfoAdressTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  width: 100%;
  margin-top: 10px;
`;

export const InfoAdressText = styled.h1`
  font-size: 18px;
  color: #000;
  width: 100%;
  margin-top: 10px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;

  .adress {
    width: 75%;
  }

  fieldset {
    width: 75%;
    display: flex;
    justify-content: space-between;
  }
`;

export const Input = styled.input`
  width: 60%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #000;
  margin: 10px 0 7px;
  font-size: 18px;
  color: #000;
`;

export const Button = styled.button`
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: #000;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  cursor: pointer;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  background-color: #fff;
  padding: 10px 0;
  border-radius: 35px 35px 0 0;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.8);
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  background-color: #fff;

  border-radius: 10px;
`;

export const FooterText = styled.h1`
  font-size: 24px;
  color: #000;
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
`;

export const FooterButton = styled.button`
  width: 60%;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: #000;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;

  cursor: pointer;
`;

export const ContainerSucess = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  background: #f5f5f5;
  margin-top: 60px;

  .icon {
    font-size: 120px;
    color: green;
  }
`;

export const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  margin-top: 5rem;
`;

export const PageSucessTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  width: 80%;
  text-align: center;
`;

export const SucessOrder = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;
