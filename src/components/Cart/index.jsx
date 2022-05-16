import * as S from "./styles";
import axios from "axios";
import Header from "./../Header";
import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import UserContext from "./../../provider/UserContext";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";
import Loading from "./../Loading";

export default function Cart() {
  const { API_URL } = useContext(UserContext);
  const [sucess, setSucess] = useState(false);
  const [orderID, setOrderID] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);

  const authorization = {
    headers: { Authorization: `Bearer ${token}` },
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

      {sucess
        ? Sucess()
        : cart.products.length === 0
        ? CartEmpty()
        : CartNotEmpty()}
    </>
  );

  function CartEmpty() {
    return (
      <>
        <S.PageTitle>Carrinho</S.PageTitle>
        <S.EmptyCart>
          <S.EmptyCartText>
            Seu carrinho está vazio, volte para a página inicial para adicionar
            produtos.
          </S.EmptyCartText>
        </S.EmptyCart>
      </>
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
      <>
        <S.PageTitle>Carrinho</S.PageTitle>
        <S.CartContainer>
          <S.CartList>
            {cart.products.map(({ id, title, price, image, quantity }) => (
              <S.CartItem key={id}>
                <S.CartItemImg src={image} />
                <S.CartItemInfo>
                  <S.HeaderProduct>
                    <S.CartItemTitle>{title}</S.CartItemTitle>
                    <BsTrashFill onClick={() => deleteItem(id)} />
                  </S.HeaderProduct>
                  <S.DivPrice>
                    <S.ProductInfo>
                      <S.AddRemoveButton
                        onClick={() => putQuantity(id, "minus")}
                      >
                        -
                      </S.AddRemoveButton>
                      <S.Quantity>{quantity}</S.Quantity>
                      <S.AddRemoveButton
                        onClick={() => putQuantity(id, "more")}
                      >
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
      </>
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
            <S.Button type="submit">
              {loading ? <Loading /> : "Buscar"}
            </S.Button>
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
          {loading ? <Loading /> : "Finalizar Pedido"}
        </S.FooterButton>
      </S.Footer>
    );
  }

  function Sucess() {
    return (
      <S.ContainerSucess>
        <S.Heading>Woo Hoo!</S.Heading>
        <S.PageSucessTitle>Pedido realizado com sucesso!</S.PageSucessTitle>

        <AiFillCheckCircle className="icon" />

        <S.SucessOrder>Pedido #{orderID}</S.SucessOrder>
        <S.Paragraph>
          Obrigado por comprar conosco! Seu pedido já está sendo preparado pela
          equipe Vivint Store e em breve será entregue automágicamente!
        </S.Paragraph>

        <S.Button onClick={() => navigate("/home")}>Voltar para home</S.Button>
      </S.ContainerSucess>
    );
  }

  async function searchCEP(event) {
    event.preventDefault();
    setLoading(true);
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
    } finally {
      setLoading(false);
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
      setLoading(true);
      const order = {
        adress: adress.adress,
        zipCode: adress.cep,
        localidade: adress.localidade,
        uf: adress.uf,
        products: cart.products,
      };

      try {
        const response = await axios.post(
          `${API_URL}/order`,
          order,
          authorization
        );
        alert("Pedido realizado com sucesso");
        setOrderID(response.data.orderID);

        setSucess(true);
      } catch (e) {
        console.log(e);
        alert("Erro ao realizar pedido");
      } finally {
        setLoading(false);
      }
    }
  }
}
