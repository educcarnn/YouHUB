import { AddStyle } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Api } from "../../services/api";
import { toast } from "react-toastify";
import { FormNew } from "./style";

function NewTechs({ open, setOpen, setCustomsElems }) {
  let schema = yup.object().shape({
    title: yup.string().required("Digite uma tecnologia válida para continuar"),
    status: yup.string().required("Digite um status válido para continuar"),
  });

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const registerTech = (infos) => {
    Api.post("/users/techs", infos, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        if (res.status === 201) {
          toast.success("Adicionada nova tecnologia");
          setCustomsElems([...infos]);
        }
      })
      .catch((error) => {
        if (error.response.status) {
          toast.warn("Erro ao adicionar nova tecnologia");
        }
      });
  };

  if (open) {
    return (
      <AddStyle>
          <div className="RegisterTech">
            <span>Cadastrar tecnologia</span>
            <button onClick={() => setOpen(false)} className="buttonClick">X</button>
          </div>
        <FormNew onSubmit={handleSubmit(registerTech)}>
          <div className="cardInfo">
            <label>Nome</label>
            <input {...register("title")}></input>
            <label>Selecionar Status</label>
            <select defaultValue={"Iniciante"} {...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
            </select>
            <button type="submit">Adicionar tecnologia</button>
          </div>
        </FormNew>
      </AddStyle>
    );
  }
}
export default NewTechs;
