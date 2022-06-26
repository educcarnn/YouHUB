import { useHistory } from "react-router-dom";
import { ItemCart } from "../../components/CardInfo";
import { useState } from "react";
import Logo from "../../imgs/Logo.svg"
import NewTechs from "../../components/NewTechs";
import { Api } from "../../services/api";
import Add from "../../imgs/Add.svg"
import { InLine } from "./style";
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
            <img src={Logo} alt={Logo}></img>
            <button onClick={handleClick} className='buttonReturn'>Sair</button>
            <InLine></InLine>
          </Header>
          <Message>
            <span className="firstText">Olá, {datesDash.name}</span>
            <span className="secondText">{datesDash.course_module}</span>
            <InLine></InLine>
          </Message>
          <AddTech>
            <span className="techs">Tecnologias</span>
            <button onClick={() => setOpen(true)} className="buttonClick">
              <img src={Add} alt={Add}></img>
            </button>
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
