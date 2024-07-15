import campoTextStyles from "./Campotext.module.css";

function Campotext(props) {

  const{tituloLabel, placeholderText, required, valor, inputFormModal}=props

  const manejarCambio = (e) => {
    props.setValor(e.target.value)
  }

  return (
    <div className={campoTextStyles.inputData}>
      <label>{tituloLabel}</label>
      <input
        type="text"
        placeholder={placeholderText}
        required={required}
        value={valor}
        onChange={manejarCambio}
        style={inputFormModal}
      />
    </div>
  );
}

export default Campotext;
