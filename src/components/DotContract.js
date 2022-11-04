import React from "react";
import "./DotContract.css";

class DotContract extends React.Component {
  render() {
    // const { time } = this.props;
    // console.log("const", time / 1000);
    // const root = document.documentElement;
    // root.style.setProperty("--tempo-animacao", time / 1000);
    // console.log("render", root);

    return (
      <div class="mx-auto md:mx-auto w-[360px] md:w-[800px] mt-10 mb-10">
        <div class="flex justify-between text-xs md:text-sm">
          <span class="">Analisando</span>
          <span class="translate-x-4">Contrato Aberto</span>
          <span class="">Contrato Fechado</span>
        </div>
        <div class="flex items-center mx-auto w-[320px] md:w-[800px] ">
          <span class="dota" />
          <div class=" tt1">
            <div class="line1" />
          </div>
          <span class="dotb"></span>
          <div class=" tt2">
            <div class="line2" />
          </div>
          <span class="dotc"></span>
        </div>
      </div>
    );
  }
}

export default DotContract;
