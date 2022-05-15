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
  console.log(authorization);

  useEffect(() => {
    async function loadProduct() {
      const response = await axios.get(`${API_URL}/products/${id}`);

      setProduct(response.data);
    }
    loadProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(product);
  const { price, image, title, description } = product;
  return (
    <S.Main>
      <S.Product>
        <S.ProductImage src={image} />
        <S.ProductInfo>
          <S.ProductTitle>{title}</S.ProductTitle>
          <S.ProductDescription>{description}</S.ProductDescription>
          <S.ProductPrice>
            <S.styledMoney />
            {price}
          </S.ProductPrice>
        </S.ProductInfo>
        <S.styledButton>
          <S.styledCart />
          <p onClick={() => addCart(id)} className="text">
            Adicionar ao carrinho
          </p>
        </S.styledButton>
      </S.Product>
    </S.Main>
  );

  async function addCart(id) {
    const obj = {
      productId: id,
      quantity: 1,
      price,
    };

    try {
      const response = await axios.post(`${API_URL}/cart`, obj, authorization);
      console.log(response.data);
      alert("Produto adicionado ao carrinho");
    } catch (e) {
      console.log(e);
    }
  }
}
