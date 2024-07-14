import campoTextStyles from "./Campotext.module.css";

function Campotext(props) {

  const manejarCambio = (e) => {
    props.setValor(e.target.value)
  }

  return (
    <div className={campoTextStyles.inputData}>
      <label>{props.tituloLabel}</label>
      <input
        type="text"
        placeholder={props.placeholderText}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
      />
    </div>
  );
}

export default Campotext;
