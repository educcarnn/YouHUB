import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Redirect, useHistory } from "react-router-dom";
import { FormRegister } from "./style";
import { Api } from "../../services/api";
import { toast } from "react-toastify";
import { useState } from "react";
import { Labels } from "../Login/style";

function Register() {
    const [login, setLogin] = useState(false)

    let history = useHistory();

    function handleClick() {
        history.push("/");
    }

  let schema = yup.object().shape({
    name: yup.string().required('Digite um nome válido para continuar'),
    email: yup.string().email('Digite e-mail válido para continuar').required('Digite um e-mail válido para continuar'),
    password: yup.string().required('Digite uma senha válida para continuar').min(6, 'Senha precisa ser de 6 dígitos'),
    confirmPassword: yup
     .string()
    .oneOf([yup.ref("password")], "Senhas não coincidem"),
    bio: yup.string().required('Digite uma bio para continuar'),
    contact: yup.string().required('Digite seu contato para continuar'),
    course_module: yup.string().required('Escolha um módulo para continuar'),
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
    }

    Api.post('/users', dates, {
        headers: {
          'Content-Type': "application/json"
        }
    })
    .then((res) => {
        if(res.status === 201) {
            setLogin(true)
            toast.success('Sucesso no cadastro')
        }
      })
    .catch((error) => {
        if(error.response.status === 401) {
            toast.error('Erro no cadastro')
        }
    })
  }
  
  if(login) {
    return <Redirect to="/" /> 
  }

  return (
    <div>
      <FormRegister onSubmit={handleSubmit(sendates)}>
       
          <div>
            <span>Kenzie Hub</span>
            <button onClick={handleClick}>Voltar</button>
          </div>
    <div>
        <h2>Crie sua conta</h2>
              <p>Rapido e grátis, vamos nessa</p>
    </div>
        <Labels>
        <label>Nome</label>
        <input placeholder="Digite aqui seu nome" {...register("name")}></input>
        {errors.name && <span role="alert" className="error">{errors.name.message}</span>}
        </Labels>
        <Labels>
        <label>E-mail</label>
        <input
          placeholder="Digite aqui seu e-mail"
          {...register("email")}
        ></input>
          {errors.email && <span role="alert" className="error">{errors.email.message}</span>}
        </Labels>
        <Labels>
        <label>Senha</label>
        <input
          placeholder="Digite aqui sua senha"
          {...register("password")}
          type="password"
        ></input>
        {errors.password && <span role="alert" className="error">{errors.password.message}</span>}
        </Labels>
        <Labels>
        <label>Confirmar senha</label>
        <input
          placeholder="Digite novamente sua senha"
          {...register("confirmPassword")}
          type="password"
        ></input>
        {errors.confirmPassword && <span role="alert" className="error">{errors.confirmPassword.message}</span>}
        </Labels>
        <Labels>
        <label>Bio</label>
        <input placeholder="Fale sobre você" {...register('bio')}></input>
        {errors.bio && <span role="alert" className="error">{errors.bio.message}</span>}
        </Labels>
        <Labels>
        <label>Contato</label>
        <input placeholder="Fale sobre você" {...register('contact')}></input>
        {errors.contact && <span role="alert" className="error">{errors.contact.message}</span>}
        </Labels>
        <Labels>
        <label>Selecionar módulo</label>
        <select defaultValue={"1 Módulo"}{...register("course_module")}>
          <option value="1 Módulo">1 Módulo</option>
          <option value="2 Módulo">2 Módulo</option>
          <option value="3 Módulo">3 Módulo</option>
        </select>
        {errors.course_module && <span role="alert" className="error">{errors.course_module.message}</span>}
        </Labels>
        <button type="submit">Enviar cadastro</button>
        
      </FormRegister>
    </div>
  );
}
export default Register;
