import "./NuevoVideo.module.css";
import FormularioVideo from "../../components/Formulario/Formulario";
import Titulo from "../../components/Titulo/Titulo"

function NuevoVideo(props) {
  return (
    <>
      <Titulo titulo="Nuevo Video" parrafo="Complete el formulario para crear una nueva tarjeta de video" />
      <FormularioVideo categ={props.dataCateg} videoRegister={props.videoRegister} />
    </>
  );
}

export default NuevoVideo