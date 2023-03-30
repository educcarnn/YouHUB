import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { Redirect, useHistory, Link } from "react-router-dom";
import { Api } from "../../services/api";
import { FormStyle, LabelLogin } from "./style";
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
  
  
  if (localStorage.getItem("token") !== null) {
    return (
    <div>
      <div>Há um login identificado no sistema, não é preciso realizar novamente</div>
      <Link to="/dashboard">Dashboard</Link>
    </div>
    )
  } else {
    return (
      <div>   
        <FormStyle onSubmit={handleSubmit(DatesApi)}>
        <span>YouHUB</span>
          <LabelLogin>
          <h2 className="text">Login</h2>
          <label className="styleLabels">E-mail</label>
          <input
            {...register("email")}
            placeholder="Digite aqui seu e-mail"
            className="styleInputs"
          ></input>
          </LabelLogin>
          <LabelLogin>
           <label className="styleLabels">Senha</label>
         
          <input
          type="password"
            {...register("password")}
            placeholder="Digite aqui sua senha"
            className="styleInputs"
          ></input>
          
          </LabelLogin>
          <button type="submit" className="buttonSubmit">Confirmar dados</button>
          <p className="msg">Ainda não possui uma conta?</p>
          <button onClick={handleClick} className="button">Cadastrar</button>
        </FormStyle>
      </div>
    );
  }

  
}
export default Login;
