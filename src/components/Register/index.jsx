import axios from "axios";
import * as S from "./styles";
import Loading from "./../Loading";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./../../provider/UserContext";
import Logo from "../../assets/vivint-sem-fundo.png";

export default function Login() {
  const navigate = useNavigate();
  const { API_URL } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(false);
  const [statusError, setStatusError] = useState(null);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    confirmationPassword: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const regexEmail = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
    setLoading(true);
    setErrors(false);

    if (!regexEmail.test(inputs.email)) {
      setLoading(false);
      setErrors(true);
      setStatusError("Use um email válido.");
      setInputs({
        ...inputs,
        password: "",
        confirmationPassword: "",
      });
      return;
    }

    try {
      await axios.post(`${API_URL}/sign-up`, inputs);
      setLoading(false);
      navigate("/login");
    } catch (e) {
      setLoading(false);
      setErrors(true);
      setInputs({
        ...inputs,
        password: "",
        confirmationPassword: "",
      });
      setStatusError(e.response.data.message);
    }
  };

  return (
    <>
      <S.Container>
        <S.Logo src={Logo} />
        <S.Title>Bem vindo(a)! </S.Title>
        <S.Form onSubmit={handleSubmit}>
          <S.FormTitle>Insira seus dados para cadastrar</S.FormTitle>
          {errors && (
            <S.Error>
              <S.ErrorText>{statusError}</S.ErrorText>
            </S.Error>
          )}
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
            name="confirmationPassword"
            placeholder="Confirmar senha"
            onChange={handleInputChange}
            value={inputs.confirmationPassword}
            required
          />

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
