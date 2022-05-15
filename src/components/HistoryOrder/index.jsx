import Header from "../Header";
import * as S from "./styles";
import { useState, useEffect, useContext } from "react";
import UserContext from "./../../provider/UserContext";
import axios from "axios";

export default function HistoryOrder() {
  const [orders, setOrders] = useState([]);
  const { user, API_URL } = useContext(UserContext);

  const authorization = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  useEffect(() => {
    getOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />

      {orders.length === 0 ? ordersEmpty() : renderOrders()}
    </>
  );

  function ordersEmpty() {
    return (
      <S.Container>
        <S.Title>Histórico de pedidos</S.Title>
        <S.Empty>Você ainda não fez nenhum pedido</S.Empty>
      </S.Container>
    );
  }

  function renderOrders() {
    return (
      <S.Container>
        <S.Title>Histórico de pedidos</S.Title>
        <S.Orders>
          {orders.map((order) => (
            <S.Order key={order.id}>
              <S.OrderTitle>Pedido #{order.id}</S.OrderTitle>
              <S.OrderProducts>
                {order.products.map((product) => (
                  <S.OrderProduct key={product.id}>
                    <S.OrderProductImage
                      src={product.image}
                      alt={product.title}
                    />
                    <S.OrderProductInfo>
                      {product.title} x {product.quantity}
                    </S.OrderProductInfo>
                  </S.OrderProduct>
                ))}
              </S.OrderProducts>
              <S.OrderTotal>
                <h3>Total: </h3>
                <p>{transformBRL(order.total)}</p>
              </S.OrderTotal>
            </S.Order>
          ))}
        </S.Orders>
      </S.Container>
    );
  }

  async function getOrders() {
    try {
      const response = await axios.get(`${API_URL}/order`, authorization);
      console.log(response.data);
      setOrders(response.data.ordersUser.reverse());
    } catch (err) {
      console.log(err);
    }
  }

  function transformBRL(value) {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
}
