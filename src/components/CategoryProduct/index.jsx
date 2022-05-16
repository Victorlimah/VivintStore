import * as S from "./styles";
import { useNavigate } from "react-router-dom";


export default function CategoryProduct({ image, tittle, price, id }) {
    const navigate = useNavigate();
    const realPrice = price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
    return (
        <S.ProductContainer onClick={() => navigate(`/produto/?id=${id}`)}>
            <S.ProductImage src={image} />
            <S.ProductTitle>{tittle}</S.ProductTitle>
            <S.ProductPrice>{realPrice}</S.ProductPrice>
        </S.ProductContainer>
    );
}