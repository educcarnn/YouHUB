import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Redirect, useHistory, Link } from "react-router-dom";
import { FormRegister } from "./style";
import { Api } from "../../services/api";
import { toast } from "react-toastify";
import { useState } from "react";
import { Labels } from "../Login/style";
import Logo from "../../imgs/Logo.svg";
import { LabelInfo } from "./style";

function Register() {
  const [login, setLogin] = useState(false);

  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  let schema = yup.object().shape({
    name: yup.string().required("Digite um nome válido para continuar"),
    email: yup
      .string()
      .email("Digite e-mail válido para continuar")
      .required("Digite um e-mail válido para continuar"),
    password: yup
      .string()
      .required("Digite uma senha válida para continuar")
      .min(6, "Senha precisa ser de 6 dígitos"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas não coincidem"),
    bio: yup.string().required("Digite uma bio para continuar"),
    contact: yup.string().required("Digite seu contato para continuar"),
    course_module: yup.string().required("Escolha um módulo para continuar"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const sendates = (info) => {
    const dates = {
      email: info.email,
      password: info.password,
      name: info.name,
      bio: info.bio,
      contact: info.contact,
      course_module: info.course_module,
    };

    Api.post("/users", dates, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 201) {
          setLogin(true);
          toast.success("Sucesso no cadastro");
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          toast.error("Erro no cadastro");
        }
      });
  };

  if (login) {
    return <Redirect to="/" />;
  }

  if (localStorage.getItem("token") !== null) {
    return (
      <div>
        <div>
          Há uma conta identificada no sistema, não é preciso realizar novamente
        </div>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    );
  } else {
    return (
      <div>
        <FormRegister onSubmit={handleSubmit(sendates)}>
          <div className="header">
            <span>YouHUB</span>
            <button onClick={handleClick} className="return">
              Voltar
            </button>
          </div>
          <div>
            <h2 className="textFirst">Crie sua conta</h2>
            <p className="textSecond">Rapido e grátis, vamos nessa</p>
          </div>
          <Labels>
            <LabelInfo>
              <label className="labels">Nome</label>
              {errors.name && (
                <span role="alert" className="error">
                  {errors.name.message}
                </span>
              )}
            </LabelInfo>
            <div>
              <input
                placeholder="Digite aqui seu nome"
                {...register("name")}
                className="styleInputs"
              ></input>
            </div>
          </Labels>
          <Labels>
            <LabelInfo>
              <label className="labels">E-mail</label>
              {errors.email && (
                <span role="alert" className="error">
                  {errors.email.message}
                </span>
              )}
            </LabelInfo>
            <div>
              <input
                placeholder="Digite aqui seu e-mail"
                {...register("email")}
                className="styleInputs"
              ></input>
            </div>
          </Labels>
          <Labels>
            <LabelInfo>
              <label className="labels">Senha</label>
              {errors.password && (
                <span role="alert" className="error">
                  {errors.password.message}
                </span>
              )}
            </LabelInfo>
            <div>
              <input
                placeholder="Digite aqui sua senha"
                {...register("password")}
                type="password"
                className="styleInputs"
              ></input>
            </div>
          </Labels>
          <Labels>
            <LabelInfo>
              <label className="labels">Confirmar senha</label>
              {errors.confirmPassword && (
                <span role="alert" className="error">
                  {errors.confirmPassword.message}
                </span>
              )}
            </LabelInfo>
            <div>
              <input
                placeholder="Digite novamente sua senha"
                {...register("confirmPassword")}
                type="password"
                className="styleInputs"
              ></input>
            </div>
          </Labels>
          <Labels>
            <LabelInfo>
            <label className="labels">Bio</label>
            {errors.bio && (
              <span role="alert" className="error">
                {errors.bio.message}
              </span>
            )}
            </LabelInfo>
           <div>
           <input
              placeholder="Fale sobre você"
              {...register("bio")}
              className="styleInputs"
            ></input>
           </div>
          </Labels>
          <Labels>
            <LabelInfo>
            <label className="labels">Contato</label>
            {errors.contact && (
              <span role="alert" className="error">
                {errors.contact.message}
              </span>
            )}
            </LabelInfo>
            <input
              placeholder="Fale sobre você"
              {...register("contact")}
              className="styleInputs"
            ></input>  
          </Labels>
          <Labels>
            <label className="labelSelect">Selecionar módulo</label>
            <select
              defaultValue={"1 Módulo"}
              {...register("course_module")}
              className="styleInputsSelect"
            >
              <option value="1 Módulo">1 Módulo</option>
              <option value="2 Módulo">2 Módulo</option>
              <option value="3 Módulo">3 Módulo</option>
            </select>
            {errors.course_module && (
              <span role="alert" className="error">
                {errors.course_module.message}
              </span>
            )}
          </Labels>
          <button type="submit" className="buttonSubmitRegister">Cadastrar</button>
        </FormRegister>
      </div>
    );
  }
}
export default Register;
