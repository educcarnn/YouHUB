import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from 'react-toastify';

import { Api } from '../../services/api';
import { FormStyle } from './style';
function Login(){
    let schema = yup.object().shape({
        email: yup.string().required(),
        password: yup.string().required(),
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
            console.log(res)
            console.log(res.data.token)
            if(res.status === 200) {
                toast.success('Sucesso no login')
                localStorage.setItem('token', res.data.token)
            }
          })
          .catch((error) => {
            console.log(error)
          }) 
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
             </FormStyle>
        </>
     
        
    )
}
export default Login