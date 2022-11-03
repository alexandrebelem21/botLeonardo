import React from "react";
import { RiShutDownLine } from "react-icons/ri";
import Exchange from "../img/exchange.png";

import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    const { lucro, saldo } = this.props;
    return (
      <div class="p-6 pb-2 mx-0 w-screen  md:w-[800px] md:flex md:justify-between items-center md:mx-auto rounded-lg font-helvetica bg-gradient-to-tl md:bg-gradient-to-l from-slate-800">
        <div class="flex gap-1 md:gap-3 md:w-[800px] justify-between  items-center">
          <div class="flex justify-between">
            <div>
              <p class=" text-xl md:text-xl ">Conta Virtual</p>
              <p class=" text-xs md:text-xs ">VRTC3291816 - USD</p>
            </div>
            <div class="w-16 h-16">
              <Link to="/account">
                <button class="ml-2 md:ml-8 my-2 transform hover:rotate-180 transition duration-500 ease-in-out text-white font-bold rounded-lg">
                  <img alt="logo" src={Exchange} />
                </button>
              </Link>
            </div>
          </div>
          <div class="flex justify-between mb-4">
            <Link to="/Enjoy">
              <button class="flex justify-between items-center py-2 px-6 ml-4 md:text-xs rounded-lg bg-red-500 hover:bg-red-400 transition-all">
                <RiShutDownLine class="mr-3 w-5 h-5 fill-white " />
                Deconectar
              </button>
            </Link>
          </div>
        </div>

        <div class="flex gap-10 p-6 pb-1 md:p-0 md:w-[800px] justify-between md:justify-end  items-center ">
          <div>
            <p class="text-base md:text-sm">Saldo</p>
            <p class="text-xl md:text-2xl">
              $ {!saldo ? 1000 : parseFloat(saldo.toFixed(2))}
            </p>
          </div>
          <div>
            <p class="text-base md:text-sm">Lucro/Prejuizo</p>
            {lucro ? (
              lucro >= 0 ? (
                <p class="text-xl md:text-2xl text-green-600">
                  $ {!lucro ? 0.0 : parseFloat(lucro.toFixed(3))}
                </p>
              ) : (
                <p></p>
              )
            ) : (
              <p class="text-xl md:text-2xl text-white">
                $ {!lucro ? 0.0 : lucro}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
