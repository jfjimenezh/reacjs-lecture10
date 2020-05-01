import "./App.css";

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: "valor inicial",
    };
    // this.cambio = this.cambio.bind(this); //de esta forma uno el this interno dela funcion con el this
  } //del constructor o documento

  render() {
    return (
      <div>
        <p>mi primera aplicacion en react{console.log("hola")}</p>
        <input type='text' onChange={this.cambio} />
        <br />
        <button onClick={this.mostrar}>Mostrar</button>
      </div>
    );
  }
  cambio = (event) => {
    console.log(this.state.valor); //captura el valor del cambio y lo muestra
  };
  mostrar = (event) => {};
}

export default App;
