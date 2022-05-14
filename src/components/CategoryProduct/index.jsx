import * as S from "./styles";
import { useNavigate } from "react-router-dom";


export default function CategoryProduct({ image, tittle, price, id }) {
    const navigate = useNavigate();

    return (
        <S.ProductContainer onClick={() => navigate(`/produto/?id=${id}`)}>
            <S.ProductImage src={image} />
            <S.ProductTitle>{tittle}</S.ProductTitle>
            <S.ProductPrice>{price}</S.ProductPrice>
        </S.ProductContainer>
    );
}