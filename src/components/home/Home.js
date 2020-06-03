import React from "react";

import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <h1>{"Hola desde la página de inicio :)"}</h1>
      <ol>
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
