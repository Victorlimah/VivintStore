import axios from "axios";
import * as S from "./styles";
import Loading from "./../Loading";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./../../provider/UserContext";
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
    const navigate = useNavigate();
    return (
        <S.Main>
            <S.Options>
                <p>Recem adcionados</p>
                <p onClick={() => navigate("/novos-produtos")}>Ver mais {'>'} </p>
            </S.Options>
            <S.NewProducts />
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
