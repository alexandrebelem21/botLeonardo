import React from "react";
import "./BotSimulador.css";

class BotSimulador extends React.Component {
  render() {
    const { valor } = this.props;
    console.log("BOOOT");
    const date = new Date().toLocaleString();
    return (
      <div class="flex justify-between p-1 px-4 w-screen md:w-[800px] md:mx-auto text-base md:text-lg text-green-600 bg-slate-900">
        <div class="flex">
          <p class="text-sm md:text-lg">{date}</p>
        </div>
        <div class="flex justify-between gap-x-28">
          <p class="text-left ">${parseFloat(valor)}</p>
          <p class="text-left ">${valor * 0.9}</p>
        </div>
      </div>
    );
  }
}

export default BotSimulador;
