import React, { useEffect, useState } from "react";
import axios from "axios";

function VerUsuarios() {
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
  /*
  const printData = (params) => {
    return (
      <div>
        {datos.data.map((val) => (
          <p key={val.userid}>{JSON.stringify(val)}</p>
        ))}
      </div>
    );
  };
      
*/
  return (
    <div>
      <h1>Listado de Usuarios Registrados</h1>
      <table>
        <thead className='encabezados'>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Nombre</th>
            <th scope='col'>Apellido</th>
            <th scope='col'>Edad</th>
            <th scope='col'>Correo</th>
          </tr>
        </thead>
        <tbody>
          {datos === null
            ? null
            : datos.data.map((val) => (
                <tr key={val.userid}>
                  <td>{val.userid}</td>
                  <td>{val.nombre}</td>
                  <td>{val.apellido}</td>
                  <td>{val.edad}</td>
                  <td>{val.correo}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}

export default VerUsuarios;

//---------------------------------------------------------
