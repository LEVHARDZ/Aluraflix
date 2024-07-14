import botonesFormStyles from "./BotonesForm.module.css"
import Botones from '../../Botones/Botones'

const BotonesForm = () => {
  return (
    <div className={botonesFormStyles.botonesFormStyled}>
        <Botones ContentText="Guardar" />
        <Botones ContentText="Limpiar" />
    </div>
  )
}

export default BotonesForm