import headerStyles from "./Header.module.css";
import Botones from "../Botones/Botones";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const paginaHome = "/";
  const paginaNuevoVideo = "/nuevo-video";
  let rutaActual = useLocation().pathname;

  const estadoHome = rutaActual == paginaHome ? true : false;
  const estadoNuevoVideo = rutaActual == paginaNuevoVideo ? true : false;

  return (
    <header className={headerStyles.LogoHeader}>
      <img src="img\aluraflix-logo.svg" alt="aluraflix" />
      <div className={headerStyles.contentBtns}>
        <Botones
          ContentText="HOME"
          pagina={paginaHome}
          estado={estadoHome}
        />
        <Botones
          ContentText="NUEVO VIDEO"
          pagina={paginaNuevoVideo}
          estado={estadoNuevoVideo}
        />
      </div>
    </header>
  );
};

export default Header;
