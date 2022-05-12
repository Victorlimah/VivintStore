import * as S from "./styles";
import { AiOutlineHome } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";


export default function Bottom() {
    const navigate = useNavigate();
    return (
        <>
            <S.Bottom>
                <BsPerson onClick={() => navigate("/perfil")} />
                <AiOutlineHome onClick={() => navigate("/home")} />
                <AiOutlineHeart onClick={() => navigate("/favoritos")} />
            </S.Bottom>
        </>
    );
}