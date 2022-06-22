import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { Redirect, useHistory } from "react-router-dom";
import { Api } from "../../services/api";
import { FormStyle } from "./style";
import { useState} from "react";

function Login() {
  const [redirect, setRedirect] = useState(false);
  let history = useHistory();

  function handleClick() {
    history.push("/register");
  }

  let schema = yup.object().shape({
    email: yup.string().required("Digite um e-mail válido para continuar"),
    password: yup
      .string()
      .required("Digite uma senha senha válida para continuar"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const DatesApi = (base) => {
    Api.post("/sessions", base, {
      headers: {
        'Content-Type': "application/json",
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
})
      .then((res) => {
        if (res.status === 200) {
          toast.success("Sucesso no login");
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("acess", true);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          setRedirect(true);
        }
      })
      .catch((error) => {
        if (error.response.status) {
          toast.error("Erro no login, revise seus dados");
        }
      });
  };

  if (redirect) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <h2>Login</h2>
      <FormStyle onSubmit={handleSubmit(DatesApi)}>
        <input
          {...register("email")}
          placeholder="Digite aqui seu e-mail"
        ></input>
         {errors.email && <span role="alert">{errors.email.message}</span>}
        <input
          {...register("password")}
          placeholder="Digite aqui sua senha"
        ></input>
        {errors.password && <span role="alert">{errors.password.message}</span>}
        <button type="submit">Confirmar dados</button>
        <p>Sem cadastro?</p>
        <button onClick={handleClick}>Cadastrar</button>
      </FormStyle>
    </div>
  );
}
export default Login;
