import * as S from "./styles";

const products = [{
    name: "Computer", price: "R$ 1.000,00", image: "https://img.olhardigital.com.br/wp-content/uploads/2021/03/computador-pc-gamer-1000x450.jpeg"
}];

export default function NewProduct() {
    return (
        <S.NewProductContainer >
            <S.NewProductImage src={products[0].image} />
            <S.NewProductTitle>{products[0].name}</S.NewProductTitle>
            <S.NewProductPrice>{products[0].price}</S.NewProductPrice>
            <S.NewProductButton>Adicionar ao Carrinho</S.NewProductButton>
        </S.NewProductContainer>
    );
}