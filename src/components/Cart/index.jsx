import * as S from "./styles";
import axios from "axios";
import Header from "./../Header";
import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import UserContext from "./../../provider/UserContext";

export default function Cart() {
  const { API_URL, user } = useContext(UserContext);
  const navigate = useNavigate();

  const authorization = {
    headers: { Authorization: `Bearer ${user.token}` },
  };

  const [cart, setCart] = useState({
    products: [],
  });

  const [form, setForm] = useState({
    adress: "",
    zipCode: "",
  });

  const [adress, setAdress] = useState({
    exist: false,
    adress: "",
    localidade: "",
    cep: "",
    uf: "",
  });

  useEffect(() => {
    loadProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <S.PageTitle>Carrinho</S.PageTitle>

      {cart.products.length === 0 ? CartEmpty() : CartNotEmpty()}
    </>
  );

  function CartEmpty() {
    return (
      <S.EmptyCart>
        <S.EmptyCartText>
          Seu carrinho está vazio, volte para a página inicial para adicionar
          produtos.
        </S.EmptyCartText>
      </S.EmptyCart>
    );
  }

  function CartNotEmpty() {
    return (
      <>
        {CartContainer()}
        {adress.exist ? DeliveryInfo() : GetAdressInfo()}
        {Footer()}
      </>
    );
  }

  function CartContainer() {
    return (
      <S.CartContainer>
        <S.CartList>
          {cart.products.map(({ id, title, price, image, quantity }) => (
            <S.CartItem key={id}>
              <S.CartItemImg src={image} />
              <S.CartItemInfo>
                <S.HeaderProduct>
                  <S.CartItemTitle>{title}</S.CartItemTitle>
                  <S.DeleteItem onClick={() => deleteItem(id)}>X</S.DeleteItem>
                </S.HeaderProduct>
                <S.DivPrice>
                  <S.ProductInfo>
                    <S.AddRemoveButton onClick={() => putQuantity(id, "minus")}>
                      -
                    </S.AddRemoveButton>
                    <S.Quantity>{quantity}</S.Quantity>
                    <S.AddRemoveButton onClick={() => putQuantity(id, "more")}>
                      +
                    </S.AddRemoveButton>
                  </S.ProductInfo>

                  <S.CartItemPrice>{transformBRL(price)}</S.CartItemPrice>
                </S.DivPrice>
              </S.CartItemInfo>
            </S.CartItem>
          ))}
        </S.CartList>
      </S.CartContainer>
    );
  }

  function DeliveryInfo() {
    return (
      <S.DeliveryInfo>
        <S.InfoTitle>Informações de entrega</S.InfoTitle>

        <S.InfoAdress>
          <S.InfoAdressTitle>Endereço</S.InfoAdressTitle>
          <S.InfoAdressText>{adress.adress}</S.InfoAdressText>
          <S.InfoAdressText>
            {adress.localidade} - {adress.uf}
          </S.InfoAdressText>
          <S.InfoAdressText>{adress.cep}</S.InfoAdressText>
          <S.Edit onClick={() => editAdress()}>Editar</S.Edit>
        </S.InfoAdress>
      </S.DeliveryInfo>
    );
  }

  function GetAdressInfo() {
    return (
      <S.DeliveryInfo>
        <S.InfoTitle>Cadastre um endereço de entrega</S.InfoTitle>
        <S.Form onSubmit={searchCEP}>
          <S.Input
            name="adress"
            value={form.adress}
            className="adress"
            placeholder="Endereço"
            onChange={handleInputChange}
            required
          />
          <fieldset>
            <S.Input
              type="text"
              value={form.cep}
              name="zipCode"
              placeholder="CEP"
              onChange={handleInputChange}
              required
            />
            <S.Button type="submit">Buscar</S.Button>
          </fieldset>
        </S.Form>
      </S.DeliveryInfo>
    );
  }

  function Footer() {
    return (
      <S.Footer>
        <S.FooterContainer>
          <S.FooterText>Total</S.FooterText>

          <S.FooterText>{transformBRL(cart.total)}</S.FooterText>
        </S.FooterContainer>
        <S.FooterButton onClick={() => buyOrder()}>
          Finalizar Pedido
        </S.FooterButton>
      </S.Footer>
    );
  }

  async function searchCEP(event) {
    event.preventDefault();
    const { adress, zipCode } = event.target;

    try {
      const response = await axios.get(`${API_URL}/city/${zipCode.value}`);
      console.log(response.data);
      const { localidade, uf, cep } = response.data;
      setAdress({
        exist: true,
        adress: adress.value,
        localidade,
        uf,
        cep,
      });
    } catch (e) {
      console.log(e);
      alert("CEP não encontrado");
      setForm({ ...form, cep: "" });
    }
  }

  async function loadProducts() {
    const response = await axios.get(`${API_URL}/cart`, authorization);
    setCart(response.data);
  }

  async function deleteItem(id) {
    if (window.confirm("Deseja realmente excluir o item?")) {
      try {
        await axios.delete(`${API_URL}/cart/${id}`, authorization);
        loadProducts();
      } catch (e) {
        console.log(e);
      }
    }
  }

  async function putQuantity(id, type) {
    let newQuantity;
    let product = cart.products.find((product) => product.id === id);

    if (type === "more") newQuantity = product.quantity + 1;
    else newQuantity = product.quantity - 1;

    try {
      await axios.put(
        `${API_URL}/cart/${id}`,
        { quantity: newQuantity },
        authorization
      );
      loadProducts();
    } catch (e) {
      console.log(e);
    }
  }

  function transformBRL(value) {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  function editAdress() {
    setAdress({
      exist: false,
    });
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }

  async function buyOrder() {
    if (!adress.exist) {
      alert("Adicione um endereço de entrega");
      return;
    }

    if (window.confirm("Deseja realmente finalizar o pedido?")) {
      const order = {
        adress: adress.adress,
        zipCode: adress.cep,
        localidade: adress.localidade,
        uf: adress.uf,
        products: cart.products,
      };

      try {
        await axios.post(`${API_URL}/order`, order, authorization);
        alert("Pedido realizado com sucesso");
        navigate("/home");
      } catch (e) {
        console.log(e);
        alert("Erro ao realizar pedido");
      }
    }
  }
}
