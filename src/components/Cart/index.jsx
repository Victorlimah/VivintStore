import * as S from "./styles";
import axios from "axios";
import Header from "./../Header";
//import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import UserContext from "./../../provider/UserContext";

export default function Cart() {
  const { API_URL } = useContext(UserContext);
  //const navigate = useNavigate();

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

  console.log(adress);

  return (
    <>
      <Header />
      <S.PageTitle>CART</S.PageTitle>

      {CartContainer()}
      {adress.exist ? DeliveryInfo() : GetAdressInfo()}

      {Footer()}
    </>
  );

  function CartContainer() {
    return (
      <S.CartContainer>
        <S.CartList>
          <S.CartItem>
            <S.CartItemImg src="https://images.kabum.com.br/produtos/fotos/267057/pc-gamer-skill-amd-athlon-3000g-rgb-8gb-ddr4-ssd-240gb-hd-1tb-linux-preto-48994_1637610817_original.jpg" />
            <S.CartItemInfo>
              <S.HeaderProduct>
                <S.CartItemTitle>Pc Gamer</S.CartItemTitle>
                <S.DeleteItem>X</S.DeleteItem>
              </S.HeaderProduct>
              <S.DivPrice>
                <S.ProductInfo>
                  <S.AddRemoveButton>-</S.AddRemoveButton>
                  <S.Quantity>1</S.Quantity>
                  <S.AddRemoveButton>+</S.AddRemoveButton>
                </S.ProductInfo>
                <S.CartItemPrice>R$ 1.000,00</S.CartItemPrice>
              </S.DivPrice>
            </S.CartItemInfo>
          </S.CartItem>
          <S.CartItem>
            <S.CartItemImg src="https://images.kabum.com.br/produtos/fotos/267057/pc-gamer-skill-amd-athlon-3000g-rgb-8gb-ddr4-ssd-240gb-hd-1tb-linux-preto-48994_1637610817_original.jpg" />
            <S.CartItemInfo>
              <S.HeaderProduct>
                <S.CartItemTitle>Pc Gamer</S.CartItemTitle>
                <S.DeleteItem>X</S.DeleteItem>
              </S.HeaderProduct>
              <S.DivPrice>
                <S.ProductInfo>
                  <S.AddRemoveButton>-</S.AddRemoveButton>
                  <S.Quantity>1</S.Quantity>
                  <S.AddRemoveButton>+</S.AddRemoveButton>
                </S.ProductInfo>
                <S.CartItemPrice>R$ 1.000,00</S.CartItemPrice>
              </S.DivPrice>
            </S.CartItemInfo>
          </S.CartItem>
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
          <S.FooterText>R$ 0,00</S.FooterText>
        </S.FooterContainer>
        <S.FooterButton>Finalizar Pedido</S.FooterButton>
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

  function editAdress() {
    setAdress({
      exist: false,
    });
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }
}
