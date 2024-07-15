import FormularioVideo from "../Formulario/Formulario";
import modalStyles from "./ModalForm.module.css";
import Titulo from "../Titulo/Titulo";

function ModalForm(props) {
  const { dataCateg, videoRegister, controlClic, editarVideo } = props;

  const estilosContForm = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 0 30px 0",
    rowGap: "30px",
  };

  const estilosForm = {
    width: "90%",
  };

  const inputFormModal = {
    borderColor: "#6BD1FF",
  };

  const selectFormModal = {
    backgroundColor: "#03122F",
  };

  const btnFormModal = {
    justifyContent: "center",
  };

  return (
    <>
      {controlClic == true && (
        <>
          <div className={modalStyles.overlay}>
            <dialog open={controlClic} className={modalStyles.dialogo}>
              <img
                src="./src/assets/xcancel.png"
                alt=""
                className={modalStyles.exit}
                onClick={() => editarVideo(false)}
              />
              <Titulo
                titulo="Editar Video"
                colorLetra="#2271D1"
                marginTop="40px"
              />
              <FormularioVideo
                categ={dataCateg}
                videoRegister={videoRegister}
                estilosForm={estilosForm}
                estilosContForm={estilosContForm}
                inputFormModal={inputFormModal}
                selectFormModal={selectFormModal}
                btnFormModal={btnFormModal}
              />
            </dialog>
          </div>
        </>
      )}
    </>
  );
}

export default ModalForm;
