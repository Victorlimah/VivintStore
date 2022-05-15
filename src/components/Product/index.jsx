import axios from "axios";
import { useEffect, useState, useContext } from "react";
import UserContext from "../../provider/UserContext";
import * as S from "./styles";


export default function Product() {
    const id = new URLSearchParams(window.location.search).get("id");
    const [product, setProduct] = useState({});
    const { API_URL } = useContext(UserContext);
    const { user } = useContext(UserContext);
    const token = localStorage.getItem("token");

    useEffect(() => {
        async function loadProduct() {
            const response = await axios.get(`${API_URL}/products/${id}`);

            setProduct(response.data);
        }
        loadProduct();
    }, []);

    const { price } = product
    return (
        <S.Main>
            <S.Product>
                <S.ProductImage src={product.image} />
                <S.ProductInfo>
                    <S.ProductTitle>{product.title}</S.ProductTitle>
                    <S.ProductDescription>{product.description}</S.ProductDescription>
                    <S.ProductPrice>
                        <S.styledMoney />
                        {price}
                    </S.ProductPrice>
                </S.ProductInfo>
                <S.styledButton>
                    <S.styledCart />
                    <p className="text" >COMPRAR</p>
                </S.styledButton>
            </S.Product>
        </S.Main>
    );
}