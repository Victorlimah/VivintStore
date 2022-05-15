import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/vivint-sem-fundo.png";

export default function Main() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Header>
        <S.Logo src={Logo} alt="Logo" />
      </S.Header>
      <S.InfosContainer>
        <S.Title>Bem-vindo ao novo conceito da tecnologia!</S.Title>
        <S.Subtitle>
          Faça seu login ou crie sua conta agora mesmo!
          <br />É de graça, e sempre será.
        </S.Subtitle>
        <S.ButtonContainer>
          <S.Login onClick={() => navigate("/login")}>LOGIN</S.Login>

          <S.Register className="register" onClick={() => navigate("/register")}>
            REGISTRE-SE
          </S.Register>
        </S.ButtonContainer>
      </S.InfosContainer>
    </S.Container>
  );
}
