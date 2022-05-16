import * as S from "./styles";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Logo from "../../assets/vivint-sem-fundo.png";

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        location.pathname === "/home"
            ? (document.querySelector(".back-arrow").style.display = "none")
            : (document.querySelector(".back-arrow").style.display = "block");
    }, [location]);

    return (
        <S.Header>
            <S.Person onClick={() => navigate("/perfil")} />
            <S.Heart onClick={() => navigate("/favoritos")} />
            <S.Historic onClick={() => navigate("/historico")} />
            <S.Logo src={Logo} onClick={() => navigate("/home")} />
            <S.BackArrow className="back-arrow" onClick={() => navigate(-1)} />
            <S.Cart onClick={() => navigate("/carrinho")} />
        </S.Header>
    );
}
