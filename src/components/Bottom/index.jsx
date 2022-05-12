import * as S from "./styles";
import { AiOutlineHome } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';


export default function Bottom() {
    return (
        <>
            <S.Bottom>
                <BsPerson />
                <AiOutlineHome />
                <AiOutlineHeart />
            </S.Bottom>
        </>
    );
}