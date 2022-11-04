import React from "react";
class Contact extends React.Component {
  handleClick = () => {
    window.location.href = "https://bit.ly/atendimentoplaydofuturo";
  };

  render() {
    return (
      <div class="font-helvetica flex max-w-[480px] m-auto mt-20 w-auto md:mt-36 content-center overflow-auto">
        <div class="border p-4 md:p-12 text-center content-center items-center text-white rounded-bl rounded-tl-[60px] rounded-br-[60px] rounded-tr border-blue-500">
          <h2 class="mb-0 text-2xl">Fim do período de testes</h2>
          <div class="rounded mb-8 mt-3 h-1  opacity-30 text-white">
            ---------------------------------------
          </div>
          <div class="text-lg">
            <p class="text-slate-400 mb-3">O seu período de testes acabou</p>
            <p class="text-slate-400 mb-3 p-6 pb-0">
              <b class="text-white">Clique no botão abaixo </b>
              para falar comigo e entrar na lista de espera do{" "}
              <b class="text-white">Play do Futuro.</b>
            </p>
          </div>
          <div class="bg-green-800 text-xl md:text-2xl text-white mt-12 rounded-xl h-auto w-auto mb-12 mx-6 md:mx-auto hover:bg-green-600 hover:text-white transition-all inline-flex items-center px-4 py-1 gap-2">
            <button type="button" onClick={this.handleClick}>
              ADQUIRIR ACESSO AO PLAY DO FUTURO
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
