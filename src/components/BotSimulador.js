import React from "react";
import "./BotSimulador.css";

class BotSimulador extends React.Component {
  render() {
    const { valor } = this.props;
    console.log("BOOOT");
    const date = new Date().toLocaleString();
    return (
      <div class="text-lg text-green-600 mx-auto px-6 py-4 w-1/2 grid grid-cols-10 gap-4 bg-slate-900">
        <p class="col-start-1 col-span-8 text-left">{date}</p>
        <p class="text-left">${parseFloat(valor)}</p>
        <p class="text-left">${valor * 0.9}</p>
      </div>
    );
  }
}

export default BotSimulador;