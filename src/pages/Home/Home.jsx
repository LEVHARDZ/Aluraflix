import "./Home.module.css";
import Banner from "../../components/Banner/Banner";
import Categoria from "../../components/Categorias/Categorias";

function Home(props) {
  const { dataVideo, eliminarVideo, editarVideo } = props;

  return (
    <>
      <Banner />
      {props.dataCateg.map((categoria) => (
        <Categoria
          datos={categoria}
          key={categoria.equipo}
          datosVideo={dataVideo.filter(
            (video) => video.categoria === categoria.equipo
          )}
          eliminarVideo={eliminarVideo}
          editarVideo={editarVideo}
        />
      ))}
    </>
  );
}

export default Home;
