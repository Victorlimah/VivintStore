
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
    const products = [{
        name: "Computer", price: "R$ 1.000,00", image: "https://img.olhardigital.com.br/wp-content/uploads/2021/03/computador-pc-gamer-1000x450.jpeg", description: "pczinho bom dms"
    }];


    useEffect(() => {
        async function loadHighlights() {
            const response = await axios.get(`${API_URL}/category/:highlight`);
            console.log(response.data);
            setHighlights(response.data);
        }
        loadHighlights();
    })

    return (
        <S.Main>
            <S.Options>
                <p>Recem adicionados</p>
                <p onClick={() => navigate("/novos-produtos")}>Ver mais {'>'} </p>
            </S.Options>
            <S.NewProducts>
                <NewProduct tittle={products[0].name} image={products[0].image} price={products[0].price} description={products[0].description} />
                <NewProduct tittle={products[0].name} image={products[0].image} price={products[0].price} description={products[0].description} />
                <NewProduct tittle={products[0].name} image={products[0].image} price={products[0].price} description={products[0].description} />
                <NewProduct tittle={products[0].name} image={products[0].image} price={products[0].price} description={products[0].description} />
                <NewProduct tittle={products[0].name} image={products[0].image} price={products[0].price} description={products[0].description} />
            </S.NewProducts>
            <S.Options>
                <p>Categorias</p>
            </S.Options>
            <S.Categories>
                <S.Category onClick={() => navigate("/computadores")}><p>Computadores</p> <IoIosArrowForward /></S.Category>
                <S.Category onClick={() => navigate("/notebooks")}><p>Notebooks</p> <IoIosArrowForward /></S.Category>
                <S.Category onClick={() => navigate("/perifericos")}><p>Perifericos</p> <IoIosArrowForward /></S.Category>
                <S.Category onClick={() => navigate("/hardware")}><p>Hardware</p> <IoIosArrowForward /></S.Category>
                <S.Category onClick={() => navigate("/kits")}><p>Kits de Upgrade</p> <IoIosArrowForward /></S.Category>
            </S.Categories>
        </S.Main>
    );
}
