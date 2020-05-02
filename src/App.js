import "./App.css";

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suma: "",
      resta: "",
      multi: "",
      divi: "",
    };
    // this.cambio = this.cambio.bind(this); //de esta forma uno el this interno dela funcion con el this
  } //del constructor o documento

  render() {
    return (
      <div>
        <p>
          tu resultado es: {this.state.suma}
          {this.state.resta}
          {this.state.multi}
          {this.state.divi}
        </p>
        <input type='number' onChange={this.cambio} />
        <input type='number' onChange={this.cambioUno} />
        <br />
        <button className='button-show' onClick={this.suma}>
          Suma
        </button>
        <button className='button-show' onClick={this.resta}>
          resta
        </button>
        <button className='button-show' onClick={this.multi}>
          multi
        </button>
        <button className='button-show' onClick={this.divi}>
          divi
        </button>
      </div>
    );
  }
  cambio = (event) => {
    const firstDate = event.target.value;
    this.setState({ valor1: firstDate });
    //console.log(this.state.valor); //captura el valor del cambio y lo muestra
  };
  cambioUno = (event) => {
    const secondate = event.target.value;
    this.setState({ valor2: secondate });
  };

  suma = (event) => {
    let suma = parseFloat(this.state.valor1) + parseFloat(this.state.valor2);
    this.setState({ suma });
  };
  resta = (event) => {
    let resta = parseFloat(this.state.valor1) - parseFloat(this.state.valor2);
    this.setState({ resta });
  };
  multi = (event) => {
    let multi = parseFloat(this.state.valor1) * parseFloat(this.state.valor2);
    this.setState({ multi });
  };
  divi = (event) => {
    let divi = parseFloat(this.state.valor1) / parseFloat(this.state.valor2);
    this.setState({ divi });
  };
}

export default App;
