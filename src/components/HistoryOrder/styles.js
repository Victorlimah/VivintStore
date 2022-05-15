import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 0 auto;
  width: 100vw;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #000;
  text-align: center;
  margin: 3rem 0;
`;

export const Empty = styled.p`
  font-size: 1.5rem;
  color: #000;
  text-align: center;
  margin-bottom: 1rem;
`;

export const Orders = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 90%;
  height: 100%;
`;

export const Order = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px 0;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 25px;
`;

export const OrderTitle = styled.h2`
  font-size: 1.7rem;
  font-weight: bold;
  color: #000;
  text-align: center;
  margin-bottom: 1rem;
`;

export const OrderProducts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0 auto;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  text-align: center;
`;

export const OrderProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0 auto;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
`;

export const OrderProductImage = styled.img`
  width: 110px;
  height: auto;
  margin-bottom: 1rem;
`;

export const OrderProductInfo = styled.h3`
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 0 auto;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  font-size: 1.5rem;
  color: #000;
  text-align: center;
  margin-bottom: 1rem;
`;

export const OrderTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0 auto;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #000;
    text-align: center;
    margin-bottom: 1rem;
    margin-right: 10px;
  }

  p {
    font-size: 1.5rem;
    color: #000;
    text-align: center;
    margin-bottom: 1rem;
  }
`;
