import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div className='mainDiv'>
      <h1 className='titulo'>{"Bienvenido aquí podras registrarte, consultar la  información y modificarla"}</h1>
      <br />
      <table className='links'>
        <li className='letra'>
          <Link to='/singIn'>{"Click para modificar algun usuario"}</Link>
        </li>
        <br />
        <li className='letra'>
          <Link to='/singUp'>{"Por favor registrese Aquí"}</Link>
        </li>
        <br />
        <li className='letra'>
          <Link to='/verUsuarios'>
            {"Click para ver los usuarios Registrados"}
          </Link>
        </li>
        <br />
      </table>
      <br />    
      <p className='p'>
        {
          "ELABORADO POR:"
        }
      </p>
      <p className='pa'>
        {
          "Andrea Ariza asarizaa@libertadores.edu.co"
        }
      </p>
      <p className='pa'>
        {
          "David Mena demenag@libertadores.edu.co"
        }
      </p>
      <p className='pa'>
        {
          "Jason Jimenez jfjimenezh@libertadores.edu.co"
        }
      </p>
      <p className='p'>
        {
          "REPOSITORIOS:"
        }
      </p>
      <p className='pa'>
        {
          "FRONT: https://github.com/jfjimenezh/reacjs-lecture10"
        }
      </p>
      <p className='pa'>
        {
          "BACK: https://github.com/jfjimenezh/backend"
        }
      </p>
    </div>
  );
}

export default Home;
