import axios from "axios";
import * as S from "./styles";
import Loading from "./../Loading";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./../../provider/UserContext";
import Logo from "../../assets/vivint-sem-fundo.png";

export default function Login() {
  const navigate = useNavigate();
  const { API_URL } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(false);
  const [statusError, setStatusError] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("token")) navigate("/home");
  }, [navigate]);

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const regexEmail = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;

    try {
      setLoading(true);
      setErrors(false);
      if (!regexEmail.test(inputs.email)) {
        setLoading(false);
        setErrors(true);
        setStatusError("Use um email válido.");
        setInputs({
          ...inputs,
          password: "",
        });
        return;
      }
      const response = await axios.post(`${API_URL}/sign-in`, inputs);
      localStorage.setItem("token", response.data.token);
      setLoading(false);
      navigate("/home");
    } catch (err) {
      setLoading(false);
      setErrors(true);
      setInputs({
        ...inputs,
        password: "",
      });
      setStatusError(err.response.data.message);
    }
  };

  return (
    <>
      <S.Container>
        <S.Logo src={Logo} />
        <S.Title>Bem vindo(a) de volta!</S.Title>
        <S.Form onSubmit={handleSubmit}>
          <S.FormTitle>Insira seus dados para entrar</S.FormTitle>
          {errors && (
            <S.Error>
              <S.ErrorText>{statusError}</S.ErrorText>
            </S.Error>
          )}
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

          <S.Button type="submit">{loading ? <Loading /> : "Entrar"}</S.Button>
        </S.Form>

        <S.Register onClick={() => navigate("/register")}>
          Não tem uma conta? Cadastre-se
        </S.Register>
      </S.Container>
    </>
  );
}
