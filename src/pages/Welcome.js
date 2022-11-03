import React from "react";
import { Link } from "react-router-dom";

class Welcome extends React.Component {
  render() {
    return (
      <div class="font-helvetica flex max-w-[480px] m-auto mt-20 w-auto md:mt-36 content-center overflow-auto">
        <div class="border p-4 md:p-12 text-center content-center items-center text-white rounded-bl rounded-tl-[60px] rounded-br-[60px] rounded-tr border-blue-500">
          <h2 class="mb-0 pt-4 text-2xl">
            Seja bem vindo ao Teste do PLAY DO FUTURO
          </h2>
          <div class="rounded mb-8 mt-3 h-1 max-w-2 opacity-30 text-white">
            ---------------------------------------
          </div>
          <div class="text-base">
            <p class="text-slate-400 mb-3">
              Essa é uma amostra grátis fictícia de 5 minutos para te mostrar de
              forma prática como nosso robô trabalharia se estivesse{" "}
              <b class="text-white"> ONLINE</b> no seu celular ou computador.{" "}
              Você verá a seguir como é
              <b class="text-white"> simples fazer a configuração</b> e iniciar
              com as operações no mercado.
            </p>
            <p class="text-slate-400 mb-3">
              Depois que você iniciar. O Play do Futuro trabalha de{" "}
              <b class="text-white"> forma 100% automática para você!</b>{" "}
              Lembre-se de deixar essa janela aberta para não finalizar o teste,
              e também para que você possa acompanhar como será o andamento
            </p>
          </div>
          <div
            class="outline-2 outline-green-600 text-green-600 flex items-center justify-center mt-6 mb-4 mx-4 rounded-full text-lg outline
          hover:bg-green-600 hover:text-white transition-all"
          >
            <Link to="/Loading">
              <button type="button">TESTAR PLAY DO FUTURO</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
