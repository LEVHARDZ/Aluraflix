import botonesStyles from "./Botones.module.css";
import { Link } from "react-router-dom";

const Botones = (props) => {
  const { ContentText, pagina, estado } = props;

  return (
    <Link to={pagina}>
      <button
        className={estado ? botonesStyles.activeBtn : botonesStyles.noActiveBtn}
        disabled={estado}
      >
        {ContentText}
      </button>
    </Link>
  );
};

export default Botones;
