import * as S from "./styles";
import { useNavigate, useLocation } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { useEffect } from 'react';
import Logo from "../../assets/vivint-sem-fundo.png";

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        location.pathname === '/home'
            ? document.querySelector('.back-arrow').style.display = 'none'
            : document.querySelector('.back-arrow').style.display = 'block';
    }, [location]);


    return (
        <S.Header>
            <S.Logo src={Logo} />
            <IoIosArrowBack className='back-arrow' onClick={() => navigate(-1)} />
            <S.H1>VIVINT</S.H1>
            <S.Cart onClick={() => navigate("/carrinho")} />
        </S.Header>
    );

}