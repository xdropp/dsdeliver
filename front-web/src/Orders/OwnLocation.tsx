
// ESTOU DESENVOLVENDO ESTE ARQUIVO PARA TRABALHAR COM A LOCALIZAÇÃO DO USUÁRIO, ENVIADA PELO PRÓPRIO NAVEGADOR

import React, { Component } from "react";
import { render } from "react-dom";

function Locat(){
class App extends Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
      });
    }
  }

  render() {
    return (
      <div>
        <h4>Using geolocation JavaScript API in React</h4>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
}

export default Locat;