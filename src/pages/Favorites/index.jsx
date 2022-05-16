import Header from "../../components/Header";
import * as S from "./styles";

export default function Favorites() {
  return (
    <>
      <Header />
      <Favorite />
    </>
  );

  function Favorite() {
    return (
      <>
        <S.Container>
          <S.Header>
            <S.Title>Favoritos</S.Title>
            <S.Subtitle>
              Em breve você poderá adicionar itens aos seus favoritos
            </S.Subtitle>
          </S.Header>
        </S.Container>
      </>
    );
  }
}
