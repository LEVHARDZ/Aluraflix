import page404Styles from "./Page404.module.css";

const Page404 = () => {
  return (
    <>
      <canvas id="canvas" hidden></canvas>
      <div className="center">
        <h1>404</h1>

        <p>PAGE NOT FOUND.</p>
      </div>
    </>
  );
};

export default Page404;
