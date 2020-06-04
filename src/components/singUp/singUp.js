import "./singUp.css";
import React, { useState } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "10px",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
}));

function SingUp(props) {
  const [textName, setTextName] = useState("");
  const [textLastName, setTextLastName] = useState("");
  const [textEdad, setTextEdad] = useState("");
  const [textEmail, setTextEmail] = useState("");
  const [textPass, setTextPass] = useState("");
  const [textRepeatpass, setTextRepeatpass] = useState("");
  const clasess = useStyles();

  const onSubmit = async (event) => {
    event.preventDefault();

    if (textPass !== textRepeatpass) {
      window.alert("Los campos de contraseña no coinciden");
    }

    await axios.post("http://localhost:8080/user", {
      name: textName,
      lastName: textLastName,
      edad: textEdad,
      email: textEmail,
      pass: textPass,
      Repeatpass: textRepeatpass,
    });
    const { history, location } = props;
    const { from } = location.state || {
      from: {
        pathname: "/",
      },
    };
    history.push(from);
  };

  const onChangeName = (event) => {
    setTextName(event.target.value);
  };

  const onChangeLastName = (event) => {
    setTextLastName(event.target.value);
  };
  const onChangeEdad = (event) => {
    setTextEdad(event.target.value);
  };
  const onChangeEmail = (event) => {
    setTextEmail(event.target.value);
  };

  const onChangePass = (event) => {
    setTextPass(event.target.value);
  };
  const onChangeRepeatpass = (event) => {
    setTextRepeatpass(event.target.value);
  };

  return (
    <div className='mainDiv'>
      <h1 className='titulo'> Porfavor registre sus datos</h1>
      <form onSubmit={onSubmit} className='formulario'>
        <TextField
          type='text'
          className={clasess.root}
          id='Nombre'
          label='Nombre'
          variant='outlined'
          onChange={onChangeName}
          required='true'
        />
        <br />
        <TextField
          type='text'
          className={clasess.root}
          id='Apellido'
          label='Apellido'
          variant='outlined'
          onChange={onChangeLastName}
          required='true'
        />
        <br />
        <TextField
          type='number'
          className={clasess.root}
          id='edad'
          label='edad'
          variant='outlined'
          onChange={onChangeEdad}
          required='true'
        />
        <br />
        <TextField
          type='email'
          className={clasess.root}
          id='email'
          label='email'
          variant='outlined'
          onChange={onChangeEmail}
          required='true'
        />
        <br />
        <TextField
          type='password'
          className={clasess.root}
          id='pass'
          label='pass'
          variant='outlined'
          onChange={onChangePass}
          required='true'
          minlength='10'
          inputmode='number'
        />
        <br />
        <TextField
          type='password'
          className={clasess.root}
          id='Repeatpass'
          label='Repeatpass'
          variant='outlined'
          onChange={onChangeRepeatpass}
          required='true'
          minlength='10'
          inputmode='number'
        />
        <br />

        <Button type='submit' variant='contained' color='primary'>
          Enviar
        </Button>
      </form>
    </div>
  );
}

export default SingUp;
