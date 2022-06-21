import { Api } from "../../services/api";
import { toast } from "react-toastify";

export const itemCart = (item) => {
    const handleRemove = () =>{ 
        Api.delete(`/users/techs/${item.id}`,{
            headers: {
                'Content-Type': "application/json",
                'Authorization': `Bearer ${localStorage.getItem('token')}`
              }
        })
        .then((res) =>{
            console.log(res)
            if(res.status) {
                toast.success('Tecnologia removida com sucesso')
            }
        })
        .catch((error) =>{ 
            if(error.response.status === 404) {
                toast.error('Erro ao remover tecnologia')
            }
         })
    }

    return (
      <li key={item.id} className="Li-Name">
        <h3 className="h3-name">{item.title}</h3>
        <span className="span-name">{item.status}</span>
        <button onClick={() => handleRemove(item.id)}>
          Remover
        </button>
      </li>
    );
  };
