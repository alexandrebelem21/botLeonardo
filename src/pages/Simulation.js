import React from "react";
import BotSimulador from "../components/BotSimulador";
import Header from "../components/Header";
import Contact from "./Contact";
import { FiPlayCircle } from "react-icons/fi";
import BotOperator from "../components/BotOperator";

class Simulation extends React.Component {
  constructor() {
    super();
    this.state = {
      click: [],
      lucro: 0.0,
      saldo: 1000,
      i: 0,
      valor: 0,
      contact: false,
      green: false,
    };
  }

  handleClick = async () => {
    let { i, valor, click, lucro, saldo, green } = this.state;
    let time = Math.floor(Math.random() * (8 - 4 + 1)) + 4;
    time = time * 1000;
    console.log(time);
    if (i < 1) {
      green = true;
      valor = prompt("Entre com um valor acima de 0.35");
      this.setState({
        valor,
        green,
      });
    }
    saldo = 1000;
    if (i < 6) {
      i = i + 1;
      // const click = [];
      setTimeout(this.handleClick, time);
      click.push(<BotSimulador valor={valor} key={i} />);
      console.log(click);
      lucro = valor * 0.9 * i - valor * 0.9;
      saldo = saldo + lucro;
      this.setState({
        click,
        i,
        lucro,
        saldo,
      });
    } else {
      this.setState({
        contact: true,
      });
    }
  };

  render() {
    let { click, lucro, contact, saldo, green } = this.state;

    return (
      <>
        {contact ? (
          <Contact />
        ) : (
          <div>
            <Header lucro={lucro} saldo={saldo} green={green} />

            <div class="mx-auto mt-20 text-2xl w-full text-center font-helvetica">
              <div>
                <p>
                  ---------------------------------------------- PLAY DO FUTURO
                  (Free) ----------------------------------------------
                </p>
                {!green ? (
                  <button
                    class="bg-green-800 text-2xl text-white ol-start-1 col-span-9 my-14 rounded-xl h-16 w-42 hover:bg-green-600 hover:text-white transition-all inline-flex items-center px-4 py-2 gap-2"
                    type="button"
                    onClick={this.handleClick}
                  >
                    <FiPlayCircle class="h-6 w-6" />
                    Comecar
                  </button>
                ) : (
                  <BotOperator />
                )}
              </div>
              <div class="text-lg mx-auto px-6 py-2 w-1/2 grid grid-cols-10 gap-4 bg-slate-900">
                <p class="col-start-1 col-span-8 text-left">Hora</p>
                <p class="text-left">Entrada</p>
                <p class="text-left">Lucro/Perda</p>
              </div>
            </div>
            {click[1]}
            {click[2]}
            {click[3]}
            {click[4]}
            {click[5]}
          </div>
        )}
      </>
    );
  }
}

export default Simulation;
