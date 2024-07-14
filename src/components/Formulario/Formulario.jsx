import { useState } from "react";
import formularioStyles from "./Formulario.module.css";
import Campotext from "./CampoText/Campotext";
import ListaDeOpc from "./ListaDeOpc/ListaDeOpc";
import BotonesForm from "./BotonesForm/BotonesForm";

const FormularioVideo = (props) => {
  const [titulo, setTitulo] = useState("");
  const [imagen, setImagen] = useState("");
  const [video, setVideo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");

  const manejarEnvio = (event) => {
    event.preventDefault();
    let datosEnviar = { titulo, imagen, video, descripcion, categoria };
    props.videoRegister(datosEnviar)
  };

  return (
    <section>
      <hr />
      <h2>Crear Tarjeta</h2>
      <hr />
      <form onSubmit={manejarEnvio}>
        <div className={formularioStyles.contentInputs}>
          <Campotext
            tituloLabel="Título"
            placeholderText="ingrese el título"
            required
            valor={titulo}
            setValor={setTitulo}
          />
          <ListaDeOpc
            tituloLabel="Categoría"
            required
            valor={categoria}
            setValor={setCategoria}
            equipoName={props.categ}
          />
          <Campotext
            tituloLabel="Imagen"
            placeholderText="el enlace es obligatorio"
            required
            valor={imagen}
            setValor={setImagen}
          />
          <Campotext
            tituloLabel="Video"
            placeholderText="ingrese el enlace del video"
            required
            valor={video}
            setValor={setVideo}
          />
          <Campotext
            tituloLabel="Descripción"
            placeholderText="¿De qué se trata este vídeo?"
            valor={descripcion}
            setValor={setDescripcion}
          />
        </div>
        <BotonesForm />
      </form>
    </section>
  );
};

export default FormularioVideo;
