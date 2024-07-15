import Card from "./Card/Card";
import categoriaStyles from "./Categorias.module.css";

const Categoria = (props) => {
  const { color, equipo } = props.datos;

  const colorbkg = { backgroundColor: color };

  const {datosVideo, eliminarVideo, editarVideo}=props;


  return datosVideo.length > 0 && (
    <section className={categoriaStyles.categorySection}>
      <figure className={categoriaStyles.tiltleCatg} style={colorbkg}>
        {equipo}
      </figure>
      <div className={categoriaStyles.cardsGroup}>
        {datosVideo.map((dtaVideo) => (
          <Card
            dataVideoCard={dtaVideo}
            key={dtaVideo.id}
            colorCat={color}
            eliminarVideo={eliminarVideo}
            editarVideo={editarVideo}
          />
        ))}
      </div>
    </section>
  );
};

export default Categoria;
