import axios from "axios";
import { useEffect, useState, useContext } from "react";
import UserContext from "../../provider/UserContext";
import * as S from "./styles";

export default function Product() {
  const id = new URLSearchParams(window.location.search).get("id");
  const [product, setProduct] = useState({});
  const { API_URL } = useContext(UserContext);
  const { user } = useContext(UserContext);
  const authorization = {
    headers: { Authorization: `Bearer ${user.token}` },
  };
  useEffect(() => {
    async function loadProduct() {
      const response = await axios.get(`${API_URL}/products/${id}`);
      setProduct(response.data);
    }
    loadProduct();
  }, []);

  function transformBRL(value) {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  const { price, image, title, description } = product;
  return (
    <S.Main>
      <S.Product>
        <S.ProductImage src={image} />
        <S.Rigth>
          <S.ProductInfo>
            <S.ProductTitle>{title}</S.ProductTitle>
            <S.ProductDescription>{description}</S.ProductDescription>
            <S.Hr></S.Hr>
            <S.ProductPrice>
              <S.styledMoney />
              {price}
            </S.ProductPrice>
          </S.ProductInfo>
          <S.styledButton>
            <S.styledCart />
            <p onClick={() => addCart(title)} className="text">
              Adicionar ao carrinho
            </p>
          </S.styledButton>
        </S.Rigth>
      </S.Product>
    </S.Main>
  );

  async function addCart(title) {
    const obj = {
      name: title,
    };

    try {
      await axios.post(`${API_URL}/cart`, obj, authorization);
      alert("Produto adicionado ao carrinho");
    } catch (e) {
      console.log(e);
    }
  }
}
