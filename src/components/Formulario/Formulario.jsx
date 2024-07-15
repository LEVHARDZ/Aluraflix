import { useState } from "react";
import formularioStyles from "./Formulario.module.css";
import Campotext from "./CampoText/Campotext";
import ListaDeOpc from "./ListaDeOpc/ListaDeOpc";
import BotonesForm from "./BotonesForm/BotonesForm";

const FormularioVideo = (props) => {

  const{estilosForm, estilosContForm, inputFormModal, categ, videoRegister, selectFormModal, btnFormModal}=props

  const [titulo, setTitulo] = useState("");
  const [imagen, setImagen] = useState("");
  const [video, setVideo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");

  const manejarEnvio = (event) => {
    event.preventDefault();
    let datosEnviar = { titulo, imagen, video, descripcion, categoria };
    videoRegister(datosEnviar)
  };

  return (
      <form onSubmit={manejarEnvio} style={estilosForm}>
        <div className={formularioStyles.contentInputs} style={estilosContForm}>
          <Campotext
            tituloLabel="Título"
            placeholderText="ingrese el título"
            required
            valor={titulo}
            setValor={setTitulo}
            inputFormModal={inputFormModal}
          />
          <ListaDeOpc
            tituloLabel="Categoría"
            required
            valor={categoria}
            setValor={setCategoria}
            equipoName={categ}
            inputFormModal={inputFormModal}
            selectFormModal={selectFormModal}
          />
          <Campotext
            tituloLabel="Imagen"
            placeholderText="el enlace es obligatorio"
            required
            valor={imagen}
            setValor={setImagen}
            inputFormModal={inputFormModal}
          />
          <Campotext
            tituloLabel="Video"
            placeholderText="ingrese el enlace del video"
            required
            valor={video}
            setValor={setVideo}
            inputFormModal={inputFormModal}
          />
          <Campotext
            tituloLabel="Descripción"
            placeholderText="¿De qué se trata este vídeo?"
            valor={descripcion}
            setValor={setDescripcion}
            inputFormModal={inputFormModal}
          />
        </div>
        <BotonesForm btnFormModal={btnFormModal} />
      </form>
  );
};

export default FormularioVideo;
