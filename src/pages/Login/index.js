import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { Redirect, useHistory } from "react-router-dom";
import { Api } from "../../services/api";
import { FormStyle, Labels } from "./style";
import { useState} from "react";
import Logo from "../../imgs/Logo.svg"

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
     
      <FormStyle onSubmit={handleSubmit(DatesApi)}>
      <img src={Logo} Alt={Logo} className="img"></img>
        <Labels>
        <h2 className="text">Login</h2>
        <label className="styleLabels">E-mail</label>
        <input
          {...register("email")}
          placeholder="Digite aqui seu e-mail"
          className="styleInputs"
        ></input>
         {/* {errors.email && <span role="alert" className="error">{errors.email.message}</span>} */}
        </Labels>
        <Labels>
         <label className="styleLabels">Senha</label>
        <input
          {...register("password")}
          placeholder="Digite aqui sua senha"
          className="styleInputs"
        ></input>
        {/* {errors.password && <span role="alert" className="error">{errors.password.message}</span>} */}
        </Labels>
        <button type="submit" className="buttonSubmit">Confirmar dados</button>
        <p className="msg">Ainda não possui uma conta?</p>
        <button onClick={handleClick} className="button">Cadastrar</button>
      </FormStyle>
    </div>
  );
}
export default Login;
