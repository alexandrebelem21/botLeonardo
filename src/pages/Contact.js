import React from "react";
import { Link } from "react-router-dom";
class Contact extends React.Component {
  render() {
    return (
      <div class="font-helvetica flex mx-auto mt-8 md:mt-40 content-center overflow-auto">
        <div class="border mx-auto h-full  shadow-sm p-6 text-center w-100 d-flex flex-col content-center items-center text-white w-80 md:w-96 rounded-bl rounded-tl-3xl rounded-br-3xl rounded-tr border-blue-500">
          <h2 class="mb-0 text-2xl">Fim do período de testes</h2>
          <div class="rounded mb-8 mt-3 w-100 h-1 max-w-2 opacity-30 text-white">
            ---------------------------------------
          </div>
          <div class="text-lg">
            <p class="text-slate-400 mb-3">O seu período de testes acabou</p>
            <p class="text-slate-400 mb-3">
              <b class="text-white">Clique no botão abaixo </b>
              para falar comigo e entrar na lista de espera do{" "}
              <b class="text-white">Play do Futuro.</b>
            </p>
          </div>
          <div class="bg-green-800 text-xl md:text-2xl text-white ol-start-1 col-span-9 mt-12 rounded-xl h-16 w-42 hover:bg-green-600 hover:text-white transition-all inline-flex items-center px-4 py-2 gap-2">
            <Link to="/Enjoy">
              <button type="button">ADQUIRIR ACESSO AO PLAY DO FUTURO</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
