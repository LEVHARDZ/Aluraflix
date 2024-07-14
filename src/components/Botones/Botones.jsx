import botonesStyles from "./Botones.module.css";
import { Link } from "react-router-dom";

const Botones = ({ ContentText, pagina, estado, onClick }) => {
  return (
    <Link to={pagina}>
      <button
        onClick={onClick}
        className={estado ? botonesStyles.activeBtn : botonesStyles.noActiveBtn}
      >
        {ContentText}
      </button>
    </Link>
  );
};

export default Botones;