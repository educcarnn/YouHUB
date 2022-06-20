import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Redirect, useHistory } from "react-router-dom";
import { FormRegister } from "./style";

function Register() {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }
  let schema = yup.object().shape({
    name: yup.string().required(),
     email: yup.string().email().required(),
    password: yup.string().required(),
    confirmPassword: yup
     .string()
    .oneOf([yup.ref("password")], "Senhas não coincidem"),
    bio: yup.string().required(),
    contact: yup.string().required(),
    course_module: yup.string().required(),
  });

 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const sendates = (info) => {
    console.log(info);
  };

  return (
    <div>
      <h2>Crie sua conta</h2>
      <p>Rapido e grátis, vamos nessa</p>
      <FormRegister onSubmit={handleSubmit(sendates)}>
        <label>Nome</label>
        <input placeholder="Digite aqui seu nome" {...register("name")}></input>
        <label>E-mail</label>
        <input
          placeholder="Digite aqui seu e-mail"
          {...register("email")}
        ></input>
        <label>Senha</label>
        <input
          placeholder="Digite aqui sua senha"
          {...register("password")}
        ></input>
        <label>Confirmar senha</label>
        <input
          placeholder="Digite novamente sua senha"
          {...register("confirmPassword")}
        ></input>
        <label>Bio</label>
        <input placeholder="Fale sobre você" {...register('bio')}></input>
        <label>Contato</label>
        <input placeholder="Fale sobre você" {...register('contact')}></input>
        <label>Selecionar módulo</label>
        <select {...register("course_module")}>
          <option value="1 Módulo">1 Módulo</option>
          <option value="2 Módulo">2 Módulo</option>
          <option value="3 Módulo">3 Módulo</option>
        </select>
        <button type="submit">Enviar cadastro</button>
      </FormRegister>
    </div>
  );
}
export default Register;
