import { AddStyle } from "./style"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { Api } from "../../services/api";
import { toast } from "react-toastify";
import { useEffect } from "react";

function NewTechs({user, open, setOpen}){

    let schema = yup.object().shape({
        title: yup.string().required('Digite uma tecnologia válida para continuar'),
        status: yup.string().required('Digite um status válido para continuar'),
      });

    const {register, handleSubmit, formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });
    
    const registerTech = (infos) => {
        Api.post('/users/techs', infos,{
            headers: {
                'Content-Type': "application/json",
                'Authorization': `Bearer ${localStorage.getItem('token')}`
              }
        })
        .then((res) => {
            if(res.status === 201) {
                toast.success('Adicionada nova tecnologia')
            }
        })
        .catch((error) => {
            if(error.response.status) {
                toast.warn('Erro ao adicionar nova tecnologia')
            }
        })
    }
    

   if(open) {
    return (
        <AddStyle>
            <form onSubmit={handleSubmit(registerTech)}>
            <button onClick={() => setOpen(false)}>Fechar</button>
            <input {...register("title")}></input>
            <select defaultValue={"Iniciante"}{...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
            </select>
            <button type="submit">Adicionar tecnologia</button>
            </form>
          
        </AddStyle>
    )
   }

}
export default NewTechs