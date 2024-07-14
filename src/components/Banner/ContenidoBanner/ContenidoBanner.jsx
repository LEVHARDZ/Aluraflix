import contenidoBannerStyles from "./ContenidoBanner.module.css"
const ContenidoInBanner = ({categoriaName,titulo,texto})=>{
    return(
        <div className={contenidoBannerStyles.contentAll}>
        <div className={contenidoBannerStyles.contentText}>
          <figure className={contenidoBannerStyles.titleCategoria}>{categoriaName}</figure>
          <h1 className={contenidoBannerStyles.tituloEstilizado}>{titulo}</h1>
          <p className={contenidoBannerStyles.parrafoEstilizado}>{texto}</p>
        </div>
        <figure className={contenidoBannerStyles.thumbnail}></figure>
      </div>
    )
}

export default ContenidoInBanner