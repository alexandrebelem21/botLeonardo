import React from "react";
import "./BotSimulador.css";

class BotSimulador extends React.Component {
  render() {
    const { valor } = this.props;
    console.log("BOOOT");
    const date = new Date().toLocaleString();
    return (
      <div class="text-base md:text-lg text-green-600 mx-auto px-6 py-4 w-5/6 md:mx-auto md:w-1/2 grid grid-cols-10 gap-4 bg-slate-900">
        <p class="text-sm md:text-lg col-start-1 col-span-5 md:col-span-7 text-left">
          {date}
        </p>
        <p class="text-left col-start-6 col-span-2 md:col-span-2 md:gap-8">
          ${parseFloat(valor)}
        </p>
        <p class="text-left col-start-9 col-span-2 md:col-span-1 ">
          ${valor * 0.9}
        </p>
      </div>
    );
  }
}

export default BotSimulador;
