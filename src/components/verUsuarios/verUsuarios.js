import React, { useEffect, useState } from "react";
import axios from "axios";
import "./verUsuarios.css";
import { Button } from "@material-ui/core";

function VerUsuarios(pro) {
  const [datos, setdatos] = useState(null);
  const [statusFlag, setStatusFlag] = useState(false);

  useEffect(() => {
    if (!statusFlag) {
      axios
        .get("http://localhost:8080/user")
        .then((response) => {
          setdatos(response);
          setStatusFlag(true);
        })
        .catch((error) => {});
    }
  });
  function onclick() {
    const { history, location } = pro;
    const { from } = location.state || {
      from: {
        pathname: "/",
      },
    };
    history.push(from);
  }

  return (
    <div className='body'>
      <h1 className='titulo'>Listado de Usuarios Registrados</h1>
      <br></br>
      <br></br>

      <table className='tabla'>
        <thead className='encabezados'>
          <tr>
            <th className='th'>ID</th>
            <th className='th'>Nombre</th>
            <th className='th'>Apellido</th>
            <th className='th'>Edad</th>
            <th className='th'>Correo</th>
          </tr>
        </thead>
        <tbody>
          {datos === null
            ? null
            : datos.data.map((val) => (
                <tr key={val.userid}>
                  <td className='td'>{val.userid}</td>
                  <td className='td'>{val.nombre}</td>
                  <td className='td'>{val.apellido}</td>
                  <td className='td'>{val.edad}</td>
                  <td className='td'>{val.correo}</td>
                </tr>
              ))}
        </tbody>
      </table>
      <br></br>
      <div>
        <form>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            className='boton'
            onClick={onclick}
          >
            Regresar
          </Button>
        </form>
      </div>
    </div>
  );
}

export default VerUsuarios;

//---------------------------------------------------------
