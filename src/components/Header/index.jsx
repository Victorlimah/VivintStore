import { FaShoppingCart } from "react-icons/fa";
import * as S from "./styles";
import { useNavigate, useLocation } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { useEffect } from 'react';

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
            <IoIosArrowBack className='back-arrow' onClick={() => navigate(-1)} />
            <S.H1>VIVINT</S.H1>
            <FaShoppingCart onClick={() => navigate("/carrinho")} />
        </S.Header>
    );

}