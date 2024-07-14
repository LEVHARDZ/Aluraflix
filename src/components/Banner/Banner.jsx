import bannerStyles from "./Banner.module.css";
import ContenidoBanner from "./ContenidoBanner/ContenidoBanner";

const Banner = () => {
  return (
    <figure className= {bannerStyles.figureEstilizada}>
      <ContenidoBanner
        categoriaName="FRONT END"
        titulo="Challenge React"
        texto="Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React."
      />
    </figure>
  );
};

export default Banner;
