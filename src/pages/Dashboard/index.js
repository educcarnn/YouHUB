import { Redirect, useHistory, useParams } from "react-router-dom";
import { itemCart } from "../../components/CardInfo";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import NewTechs from "../../components/NewTechs";

function Dashboard({setAuthorization, authorization, user}){
    const [open, setOpen] = useState(false)
    const [datesDash, setDatesDash] = useState(JSON.parse(localStorage.getItem('user')))
    let history = useHistory()

    const handleClick = () => {
        history.push('/')
        localStorage.removeItem('token')
        localStorage.removeItem('acess')
        localStorage.removeItem('user')
    }
    const handleLogin = () => {
        history.push('/')
    }

        return (
            <div>
                <button onClick={handleClick}>Voltar</button>
                <span>Olá, {datesDash.name}</span>
                <span>{datesDash.course_module}</span>
                <button onClick={() => setOpen(true)}>Adicionar</button>
                <NewTechs open={open} user={user} setOpen={setOpen}/> 
                <ul>
                    {datesDash?.techs?.map(itemCart)}
                </ul>
            </div>  
        )
    
   
    
}

export default Dashboard