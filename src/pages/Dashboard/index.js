import { Redirect, useHistory, useParams } from "react-router-dom";
import { itemCart } from "../../components/CardInfo";
import { useState } from "react";

function Dashboard({setAuthorization, authorization, user}){
    const [open, setOpen] = useState(false)

    let history = useHistory()

    const handleClick = () => {
        history.push('/')
        localStorage.removeItem('token')
        setAuthorization(false)  
    }
    const handleLogin = () => {
        history.push('/')
    }
    
    if(authorization) {
        return (
            <div>
                <button onClick={handleClick}>Voltar</button>
                <span>Olá, {user.name}</span>
                <span>{user.course_module}</span>
                <button onClick={() => setOpen(true)}>Adicionar</button>
                <ul>
                    {user.techs.map(itemCart)}
                </ul>
            </div>  
        )
    }else {
        return (
            <div>
                <span>Área restrita para pessoas logadas</span>
                <button onClick={handleLogin}>Ir para login</button>
            </div>
        )
    }

   
    
}

export default Dashboard