import * as S from "./styles";
import { useNavigate } from "react-router-dom";

export default function NewProduct({ image, tittle, price, id }) {
  const navigate = useNavigate();
  const realPrice = price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <S.NewProductContainer onClick={() => navigate(`/produto/?id=${id}`)}>
      <S.NewProductImage src={image} />
      <S.NewProductTitle>{tittle}</S.NewProductTitle>
      <S.NewProductPrice>{realPrice}</S.NewProductPrice>
    </S.NewProductContainer>
  );
}
