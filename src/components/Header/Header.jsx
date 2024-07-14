import headerStyles from "./Header.module.css"
import Botones from "../Botones/Botones";
import { useState } from "react";


const Header = () => {

  const [estadoBtn1, setEstadoBtn1] = useState(true);
  const [estadoBtn2, setEstadoBtn2] = useState(false);

  const handleBtn1Click = () => {
    setEstadoBtn1(true);
    setEstadoBtn2(false);
  };

  const handleBtn2Click = () => {
    setEstadoBtn1(false);
    setEstadoBtn2(true);
  };

  return (
      <header className={headerStyles.LogoHeader}>
        <img src="img\aluraflix-logo.svg" alt="aluraflix" />
        <div className={headerStyles.contentBtns}>
          <Botones ContentText="HOME" pagina="/" estado={estadoBtn1} onClick={handleBtn1Click} />
          <Botones ContentText="NUEVO VIDEO" pagina="/nuevo-video" estado={estadoBtn2} onClick={handleBtn2Click} />
        </div>
      </header>
  );
};

export default Header;
