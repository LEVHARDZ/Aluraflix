import listDeOpcStyles from "./ListaDeOpc.module.css";

function ListaDeOpc(props) {
  
  const manejarCambios = (e)=>props.setValor(e.target.value)

  return (
    <div className={listDeOpcStyles.inputData}>
      <label>{props.tituloLabel}</label>
      <select style={props.inputFormModal} value={props.valor} onChange={manejarCambios} >
        <option value="" disabled defaultValue="" hidden >Seleccione una categoría</option>
        {props.equipoName.map((categoria, index) => (
          <option style={props.selectFormModal} key={index}>{categoria}</option>
        ))}
      </select>
    </div>
  );
}

export default ListaDeOpc;
