import React from "react";
import BotSimulador from "../components/BotSimulador";
import Header from "../components/Header";
import Contact from "./Contact";
import { FiPlayCircle } from "react-icons/fi";
import BotOperator from "../components/BotOperator";
import { Link } from "react-router-dom";
import Progressbar from "../components/Progressbar";
import DotContract from "../components/DotContract";

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
      progress: false,
      time: 0,
    };
  }

  handleClick = async () => {
    let { i, valor, click, lucro, saldo, green, progress } = this.state;
    let time = Math.floor(Math.random() * (10 - 5 + 1)) + 4;
    time = time * 1000;
    this.setState({
      time,
    });
    if (i < 1) {
      green = true;
      valor = prompt("Entre com um valor acima de 0.35");
      this.setState({
        valor,
        green,
        i,
      });
    }
    saldo = 1000;
    if (i < 6) {
      i = i + 1;
      // const click = [];
      setTimeout(this.handleClick, time);
      click.push(<BotSimulador valor={valor} key={i} />);
      lucro = valor * 0.9 * i - valor * 0.9;
      saldo = saldo + lucro;
      progress = true;
      this.setState({
        click,
        i,
        lucro,
        saldo,
        progress,
      });
    } else {
      alert("Você chegou no STOP GAIN!");
      this.setState({
        contact: true,
      });
    }
  };

  render() {
    const { click, lucro, contact, saldo, green, i, time } = this.state;
    return (
      <>
        {contact ? (
          <Contact />
        ) : (
          <div>
            <Header lucro={lucro} saldo={saldo} green={green} />

            <div class="mx-auto mt-20 text-2xl w-full text-center font-helvetica">
              <div>
                <p>PLAY DO FUTURO (Free)</p>
                {/* <Progressbar progress={progress} time={time} /> */}
                {!green ? (
                  <div>
                    <p class="mt-12">Robô Parado</p>
                    <div class="flex justify-center gap-4">
                      <button
                        class="bg-green-800 text-2xl text-white my-14 rounded-xl h-16 w-42 hover:bg-green-600 hover:text-white transition-all inline-flex items-center px-4 py-2 gap-2"
                        type="button"
                        onClick={this.handleClick}
                      >
                        <FiPlayCircle class="h-6 w-6" />
                        Comecar
                      </button>
                      <Link to="/Enjoy">
                        <button
                          class=" text-base border-solid border-[1px] text-white my-14 rounded-xl h-16 w-42 hover:bg-green-600 hover:text-white transition-all inline-flex items-center px-4 py-2 gap-2"
                          type="button"
                          onClick={this.handleClick}
                        >
                          Selecionar Outro Robô
                        </button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <>
                    {i === 1 ? <DotContract time={time} /> : <p></p>}
                    {i === 2 ? <DotContract time={time} /> : <p></p>}
                    {i === 3 ? <DotContract time={time} /> : <p></p>}
                    {i === 4 ? <DotContract time={time} /> : <p></p>}
                    {i === 5 ? <DotContract time={time} /> : <p></p>}
                    {i === 6 ? <DotContract time={time} /> : <p></p>}
                    {/* <DotContract /> */}
                    <BotOperator />
                  </>
                )}
              </div>
              <div class="flex justify-between p-1 px-4  text-base md:text-lg w-screen md:w-[800px] md:mx-auto bg-slate-900">
                <div class="flex">
                  <p class="text-left">Hora</p>
                </div>
                <div class="flex justify-between gap-10">
                  <p class="text-left">Entrada</p>
                  <p class="text-left">Lucro/Perda</p>
                </div>
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
