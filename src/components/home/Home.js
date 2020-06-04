import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <h1 className='titulo'>
        {
          "Bienvenido aquí podras registrarte, consultar la  información y modificarla"
        }
      </h1>
      <ol className='links'>
        <li>
          <Link to='/singIn'>{"Click para modificar algun usuario"}</Link>
        </li>
        <li>
          <Link to='/singUp'>{"Por favor registrese Aqui"}</Link>
        </li>
        <li>
          <Link to='/verUsuarios'>
            {"Click para ver los usuarios Registrados"}
          </Link>
        </li>
      </ol>
    </div>
  );
}

export default Home;
