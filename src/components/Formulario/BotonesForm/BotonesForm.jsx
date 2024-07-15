import botonesFormStyles from "./BotonesForm.module.css"
import Botones from '../../Botones/Botones'

const BotonesForm = (props) => {

  const{btnFormModal}=props
  return (
    <div className={botonesFormStyles.botonesFormStyled} style={btnFormModal}>
        <Botones ContentText="Guardar" />
        <Botones ContentText="Limpiar"/>
    </div>
  )
}

export default BotonesForm