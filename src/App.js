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
        <p>mi primera aplicacion en react {this.state.valor}</p>
        <input type='text' onChange={this.cambio} />
        <br />
        <button className='button-show' onClick={this.mostrar}>
          Mostrar
        </button>
      </div>
    );
  }
  cambio = (event) => {
    const newValue = event.target.value;
    this.setState({ valor: newValue });
    //console.log(this.state.valor); //captura el valor del cambio y lo muestra
  };
  mostrar = (event) => {
    console.log(this.state.valor);
  };
}

export default App;
