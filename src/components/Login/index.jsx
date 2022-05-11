import axios from "axios";
import * as S from "./styles";
import Loading from "./../Loading";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./../../provider/UserContext";

export default function Login() {
  const navigate = useNavigate();
  const { setUser, API_URL } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setErrors(false);
    axios
      .post(`${API_URL}/login`, inputs)
      .then((response) => {
        setUser(response.data);
        setLoading(false);
        navigate("/home");
      })
      .catch((error) => {
        setLoading(false);
        setErrors(true);
      });
  };

  return (
    <>
      <S.Container>
        <S.Title>Bem vindo(a) de volta!</S.Title>
        <S.Form onSubmit={handleSubmit}>
          <S.Input
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={handleInputChange}
            value={inputs.email}
            required
          />

          <S.Input
            type="password"
            name="password"
            placeholder="Senha"
            onChange={handleInputChange}
            value={inputs.password}
            required
          />
          {errors && (
            <S.Error>
              <S.ErrorText>E-mail ou senha incorretos</S.ErrorText>
            </S.Error>
          )}

          <S.Button type="submit">{loading ? <Loading /> : "Entrar"}</S.Button>
        </S.Form>

        <S.Register> Não tem uma conta? Cadastre-se</S.Register>
      </S.Container>
    </>
  );
}
