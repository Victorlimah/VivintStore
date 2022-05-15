import Header from "../Header";
import * as S from "./styles";
import { AiFillCheckCircle } from "react-icons/ai";

export default function HistoryOrder() {
  const order = { id: 15555 };

  return (
    <>
      <Header />
      <S.Container>
        <S.Heading>Woo Hoo!</S.Heading>
        <S.PageTitle>Pedido realizado com sucesso!</S.PageTitle>

        <AiFillCheckCircle className="icon" />

        <S.SucessOrder>Pedido #{order.id}</S.SucessOrder>
        <S.Paragraph>
          Obrigado por comprar conosco! Seu pedido já está sendo preparado pela
          equipe Vivint Store e em breve será entregue automágicamente!
        </S.Paragraph>

        <S.Button>Voltar para home</S.Button>
      </S.Container>
    </>
  );
}
