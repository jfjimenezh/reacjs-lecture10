import "./singIn.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';




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
    <div className='mainDiv'>
      <h1 className='titulo'>{"Seleccione el usuario que desea modificar o eliminar"}</h1>
      <br />

      <table className='tabla'>
       
       
        <thead>
          <tr className='th'>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Correo</th>
            <th>Modificar</th>
            <th>Eliminar</th>
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
                  <td className='td'>{val.modificar}
                  <IconButton aria-label="modificar"><EditIcon /></IconButton></td>  
                  <td className='td'>{val.eliminar}
                  <IconButton aria-label="delete"><DeleteIcon /></IconButton></td>
                </tr>
              ))}
        </tbody>
      </table>
      <br/>
      <br/>
      <Button type='submit' variant='contained' onClick={onclick} 
      style={{backgroundColor:'#51d1f6'}}>
        Regresar
      </Button> 
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}


export default VerUsuarios;