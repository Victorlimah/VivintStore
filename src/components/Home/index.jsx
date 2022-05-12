
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import NewProduct from "../NewProduct";

export default function Home() {
    const navigate = useNavigate();
    return (
        <S.Main>
            <S.Options>
                <p>Recem adcionados</p>
                <p onClick={() => navigate("/novos-produtos")}>Ver mais {'>'} </p>
            </S.Options>
            <S.NewProducts>
                <NewProduct />
                <NewProduct />
                <NewProduct />
                <NewProduct />
                <NewProduct />
            </S.NewProducts>
            <S.Options>
                <p>Categorias</p>
                <p onClick={() => navigate("/categorias")}>Ver todas {'>'} </p>
            </S.Options>
            <S.Categories>
                <S.Category><p>Computadores</p> <IoIosArrowForward /></S.Category>
                <S.Category><p>Computadores</p> <IoIosArrowForward /></S.Category>
                <S.Category><p>Computadores</p> <IoIosArrowForward /></S.Category>
                <S.Category><p>Computadores</p> <IoIosArrowForward /></S.Category>
                <S.Category><p>Computadores</p> <IoIosArrowForward /></S.Category>
            </S.Categories>
        </S.Main>
    );
}
