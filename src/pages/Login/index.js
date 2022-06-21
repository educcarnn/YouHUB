import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from 'react-toastify';
import { Redirect, useHistory} from 'react-router-dom';
import { Api } from '../../services/api';
import { FormStyle } from './style';
import { useState, useEffect } from 'react';

function Login({setAuthorization, setUser, user}){
    const [redirect, setRedirect] = useState(false)
    let history = useHistory()
    if(setAuthorization === true) {
      localStorage.setItem(user)
    }


    function handleClick() {
        history.push("/register");
    }

    let schema = yup.object().shape({
        email: yup.string().required('Digite um e-mail válido para continuar'),
        password: yup.string().required('Digite uma senha senha válida para continuar'),
      });

    const {register, handleSubmit, formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const DatesApi = (base) =>{
        Api.post('/sessions', base, {
            headers: {
              'Content-Type': "application/json"
            }
          })
          .then((res) => {
            if(res.status === 200) {
                    toast.success('Sucesso no login')
                    localStorage.setItem('token', res.data.token)
                    localStorage.setItem('acess', true)
                    setRedirect(true)
                    
                    localStorage.setItem('user', JSON.stringify(res.data.user))
            }
          })
          .catch((error) => {
                if(error.response.status) {
                    toast.error('Erro no login, revise seus dados')
                }
          }) 
    }



    if(redirect) {
            return <Redirect to="/dashboard" /> 
    }
   

    return (
        <>
           <h2>Login</h2>
            <FormStyle onSubmit={handleSubmit(DatesApi)}>
                <input {...register("email")} placeholder="Digite aqui seu e-mail"></input>
                <input {...register("password")} placeholder="Digite aqui sua senha"></input>
                {errors.email && <span role="alert">{errors.email.message}</span>}
                {errors.password && <span role="alert">{errors.password.message}</span>}
                <button type="submit">Confirmar dados</button>
                <p>Sem cadastro?</p>
                <button onClick={handleClick}>Cadastrar</button>
             </FormStyle>
    
        </>
     
        
    )
}
export default Login