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
          <S.ButtonAcess onClick={() => navigate("/login")}>LOGIN</S.ButtonAcess>

          <S.ButtonAcess className="register" onClick={() => navigate("/register")}>
            REGISTRE-SE
          </S.ButtonAcess>
        </S.ButtonContainer>
      </S.InfosContainer>
    </S.Container>
  );
}
