import tituloStyles from "./Titulo.module.css";

const Titulo = (props) => {

  const { titulo, parrafo= "", colorLetra, marginTop } = props

  return (
    <>
      <h1 className={tituloStyles.tituloMain} style={{color:`${colorLetra}`, marginTop:`${marginTop}`}}>{titulo.toUpperCase()}</h1>
      <p className={tituloStyles.parrafoMain}>{parrafo.toUpperCase()}</p>
    </>
  );
};

export default Titulo;
