import axios from "axios";
import * as S from "./styles";
import Loading from "./../Loading";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./../../provider/UserContext";

export default function Home() {
    return (
        <S.Main>
            <S.Options>
                <p>Recem adcionados</p>
                <p>Ver mais ></p>
            </S.Options>
            <S.NewProducts />
            <S.Options>
                <p>Categorias</p>
                <p>Ver mais ></p>
            </S.Options>
            <S.Categories />
        </S.Main>
    );
}
