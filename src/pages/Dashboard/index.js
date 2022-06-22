import { useHistory } from "react-router-dom";
import { ItemCart } from "../../components/CardInfo";
import { useState } from "react";

import NewTechs from "../../components/NewTechs";
import { Api } from "../../services/api";

import { Header, Message, AddTech, DivFather } from "./style";

function Dashboard(user) {
  const [open, setOpen] = useState(false);
  const [customsElems, setCustomsElems] = useState();
  const [datesDash, setDatesDash] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  let history = useHistory();

  const handleClick = () => {
    history.push("/");
    localStorage.removeItem("token");
    localStorage.removeItem("acess");
    localStorage.removeItem("user");
    setDatesDash([]);
  };
  const handleLogin = () => {
    history.push("/");
  };

  if (localStorage.getItem("acess") !== null) {
    Api.get(`/users/${datesDash.id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setCustomsElems(res);
    });

    return (
      <DivFather>
        <div>
          <Header>
            <span>Kenzie HUB</span>
            <button onClick={handleClick}>Voltar</button>
          
          </Header>
          <Message>
            <span>Olá, {datesDash.name}</span>
            <span>{datesDash.course_module}</span>
          </Message>
          <AddTech>
            <span>Tecnologias</span>
            <button onClick={() => setOpen(true)}>Adicionar</button>
          </AddTech>
        </div>

        <div>
          <NewTechs open={open} user={user} setOpen={setOpen} />
        </div>
        {customsElems?.data?.techs?.length > 0 ? (
          <ul className="ulStyle">
            {customsElems?.data?.techs?.map(ItemCart)}
          </ul>
        ) : (
          <div className="msg">Adicione novas Tecnologias</div>
        )}
      </DivFather>
    );
  } else {
    return (
      <>
        <div>Somente pessoas com login podem acessar a página</div>
        <button onClick={handleLogin}>Ir para login</button>
      </>
    );
  }
}

export default Dashboard;
