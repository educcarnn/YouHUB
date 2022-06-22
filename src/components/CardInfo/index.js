import { Api } from "../../services/api";
import { toast } from "react-toastify";
import { LiCard } from "./style";
import Delete from "../../imgs/Delete.svg"
export const ItemCart = (item) => {

    const handleRemove = () =>{ 
        Api.delete(`/users/techs/${item.id}`,{
            headers: {
                'Content-Type': "application/json",
                'Authorization': `Bearer ${localStorage.getItem('token')}`
              }
        })
        .then((res) =>{
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
      <LiCard key={item.id} className="Li-Name">
        <p className="titleText" >{item.title}</p>
        <span className="spanName">{item.status}</span>
        <button onClick={() => handleRemove(item.id)} className="buttonRemove">
          <img src={Delete} alt={Delete}></img>
        </button>
      </LiCard>
    );
  };
