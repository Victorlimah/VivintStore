import * as S from "./styles";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import NewProduct from "../NewProduct";
import axios from "axios";
import UserContext from "./../../provider/UserContext";

export default function Home() {
  const { API_URL } = useContext(UserContext);
  const navigate = useNavigate();
  const [highlights, setHighlights] = useState([]);

  useEffect(() => {
    async function loadHighlights() {
      try {
        const response = await axios.get(`${API_URL}/category/highlight`);
        setHighlights(response.data);
      } catch {
        alert("Erro ao carregar os produtos em destaque");
      }
    }
    loadHighlights();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Main>
      <S.Categories>
        <S.Category onClick={() => navigate(`/categoria?type=computer`)}>
          <p>Computadores</p> <IoIosArrowForward />
        </S.Category>
        <S.Category onClick={() => navigate(`/categoria?type=notebook`)}>
          <p>Notebooks</p> <IoIosArrowForward />
        </S.Category>
        <S.Category onClick={() => navigate(`/categoria?type=perifericos`)}>
          <p>Perifericos</p> <IoIosArrowForward />
        </S.Category>
        <S.Category onClick={() => navigate(`/categoria?type=hardware`)}>
          <p>Hardware</p> <IoIosArrowForward />
        </S.Category>
        <S.Category onClick={() => navigate(`/categoria?type=kits`)}>
          <p>Kits de Upgrade</p> <IoIosArrowForward />
        </S.Category>
      </S.Categories>
      <S.Rigth>
        <S.Options>
          <p>Destaques</p>
          <p
            className="click"
            onClick={() => navigate("/categoria/?type=highlight")}
          >
            Ver mais {">"}{" "}
          </p>
        </S.Options>
        <S.NewProducts>
          {highlights.map((product, index) => {
            return (
              <NewProduct
                key={index}
                tittle={product.title}
                price={product.price}
                image={product.image}
                id={product.id}
              ></NewProduct>
            );
          })}
        </S.NewProducts>
      </S.Rigth>
    </S.Main>
  );
}
