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
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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
      .post(`${API_URL}/register`, inputs)
      .then((response) => {
        setLoading(false);
        setUser(response.data);
        navigate("/home");
      })
      .catch((err) => {
        setLoading(false);
        setErrors(true);
        if (err.response.data.errors) setErrors(err.response.data.errors);
      });
  };

  return (
    <>
      <S.Container>
        <S.Title>Bem vindo(a)! </S.Title>
        <S.Form onSubmit={handleSubmit}>
          <S.FormTitle>Insira seus dados para cadastrar</S.FormTitle>
          <S.Input
            type="text"
            name="name"
            placeholder="Nome"
            onChange={handleInputChange}
            value={inputs.name}
            required
          />

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

          <S.Input
            type="password"
            name="confirmPassword"
            placeholder="Confirmar senha"
            onChange={handleInputChange}
            value={inputs.confirmPassword}
            required
          />

          {errors && (
            <S.Error>
              {/* aqui da pra pegar a mensagem de erro do back */}
              <S.ErrorText>Erro ao realizar o cadastro</S.ErrorText>
            </S.Error>
          )}

          <S.Button type="submit">
            {loading ? <Loading /> : "Cadastrar"}
          </S.Button>
        </S.Form>

        <S.Login onClick={() => navigate("/login")}>
          Já tem uma conta? Entre agora
        </S.Login>
      </S.Container>
    </>
  );
}
