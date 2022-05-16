import * as S from "./styles";
import Logo from "../../assets/vivint-sem-fundo.png";

export default function Bottom() {
  return (
    <>
      <S.Bottom>
        <S.Logo src={Logo} />
        <S.Description>
          VIVINT STORE® É UMA MARCA REGISTRADA DE VIVINT STORE LTDA | CNPJ: XX.XXX.XXX/XXXX-XX
        </S.Description>
      </S.Bottom>
    </>
  );
}
