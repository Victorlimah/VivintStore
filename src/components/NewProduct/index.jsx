import * as S from "./styles";


export default function NewProduct({ image, tittle, price, description }) {
    return (
        <S.NewProductContainer >
            <S.NewProductImage src={image} />
            <S.NewProductTitle>{tittle}</S.NewProductTitle>
            <S.NewProductPrice>{price}</S.NewProductPrice>
            <S.NewProductDescription>{description}</S.NewProductDescription>
            <S.NewProductButton>Adicionar ao Carrinho</S.NewProductButton>
        </S.NewProductContainer>
    );
}