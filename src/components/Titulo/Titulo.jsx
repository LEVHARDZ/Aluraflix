import tituloStyles from "./Titulo.module.css";

const Titulo = ({ titulo, parrafo }) => {
  return (
    <>
      <h1 className={tituloStyles.tituloMain}>{titulo.toUpperCase()}</h1>
      <p className={tituloStyles.parrafoMain}>{parrafo.toUpperCase()}</p>
    </>
  );
};

export default Titulo;
