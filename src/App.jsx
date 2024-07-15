import "./App.css";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import NuevoVideo from "./pages/NuevoVideo/NuevoVideo";
import Pie from "./components/Footer/Footer";
import Page404 from "./components/Page404/Page404";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ModalForm from "./components/ModalForm/ModalForm";

function App() {
  const [videoRegister, setVideoRegister] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [clic, setClic]=useState(false)

  useEffect(() => {
    fetch("http://localhost:3000/videos")
      .then((response) => response.json())
      .then((data) => {
        setVideoRegister(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/categorias")
      .then((response) => response.json())
      .then((data) => {
        setCategorias(data);
      });
  }, []);

  const registrarVideo = (video) => {
    console.log(video);
    setVideoRegister([...videoRegister, video]);
  };

  const eliminarVideo = (id) => {
    const videosActuales = videoRegister.filter((video) => video.id != id);
    setVideoRegister(videosActuales);
  };

  const editarVideo = (senal)=> {
    setClic(senal) 
  }

  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                dataCateg={categorias}
                dataVideo={videoRegister}
                eliminarVideo={eliminarVideo}
                editarVideo={editarVideo}
              />
            }
          />
          <Route
            path="/nuevo-video"
            element={
              <NuevoVideo
                dataCateg={categorias.map((categoria) => categoria.equipo)}
                videoRegister={registrarVideo}
              />
            }
          ></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Routes>
        <Pie />
        <ModalForm
          dataCateg={categorias.map((categoria) => categoria.equipo)}
          videoRegister={registrarVideo}
          controlClic ={clic}
          editarVideo={editarVideo}
        />
      </Router>
    </>
  );
}

export default App;
