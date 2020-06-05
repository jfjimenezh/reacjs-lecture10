import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: '300px',
    background: "linear-gradient(45deg, #FFFFFF 30%, #51d1f6 90%)",
  },
}));


function Home(props) {
  const clasess = useStyles();
  return (
    <div className='mainDiv' alignSelf='stretch'>
      <h1 className='titulo'>{"Bienvenido aquí podras registrarte, consultar la  información y modificarla"}</h1>
      <br />
      <table className={clasess.root}>
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
      <br /> 
    </div>
  );
}

export default Home;
