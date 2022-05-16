import * as S from "./styles";
import CategoryProduct from "../CategoryProduct";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import UserContext from "./../../provider/UserContext";

export default function Category() {
  const type = new URLSearchParams(window.location.search).get("type");
  const [products, setProducts] = useState([]);
  const { API_URL } = useContext(UserContext);

  useEffect(() => {
    async function loadProducts() {
      const response = await axios.get(`${API_URL}/category/${type}`);
      setProducts(response.data);
    }
    loadProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let tittle = "";

  if (type === "computer") tittle = "Computadores";
  else if (type === "notebook") tittle = "Notebooks";
  else if (type === "highlight") tittle = "Destaques";
  else if (type === "perifericos") tittle = "Perifericos";
  else if (type === "hardware") tittle = "Hardware";
  else if (type === "kits") tittle = "Kits de Upgrade";
  else tittle = type;

  return (
    <S.Main>
      <S.Tittle>{tittle}</S.Tittle>
      <S.Products>
        {products.map((product, index) => {
          return (
            <CategoryProduct
              key={index}
              tittle={product.title}
              price={product.price}
              image={product.image}
              id={product.id}
            ></CategoryProduct>
          );
        })}
      </S.Products>
    </S.Main>
  );
}
