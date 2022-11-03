import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Bitcoin from "../img/bitcoin.png";

import Usa from "../img/usa.png";

class Account extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div class="mx-auto mt-20 w-full text-center font-helvetica">
          <p class="mx-auto mb-8 text-xl md:text-2xl">
            Selecione uma conta para operar
          </p>
          <div class="md:mx-auto w-screen  md:w-[800px] p-1 mr-2">
            <ul class="text-sm md:text-lg w-full text-left bg-black ">
              <div
                class="pl-3 md:pl-8 rounded-lg pb-4 pt-4 mb-1 grid grid-cols-10 bg-slate-800
              transition-all duration-800 bg-gradient-to-l from-slate-800 via-slate-800 to-red-800 bg-size-200 bg-pos-100 hover:bg-pos-0"
              >
                <div class=" col-start-1 col-span-8 md:col-span-9">
                  <li>
                    <p class="text-base">Conta real - CR3912841</p>
                    <p class="text-sm">$ 23.85 USD</p>
                  </li>
                </div>
                <div class="mx-auto">
                  <img class="w-6 h-6" alt="logo" src={Usa} />
                </div>
              </div>
              <div
                class="pl-3 md:pl-8 rounded-lg pb-4 pt-4 mb-1 grid grid-cols-10 bg-slate-800
              transition-all duration-800 bg-gradient-to-l from-slate-800 via-slate-800 to-red-800 bg-size-200 bg-pos-100 hover:bg-pos-0"
              >
                <div class=" col-start-1 col-span-8 md:col-span-9">
                  <li>
                    <p class="text-base">Conta virtual - CR3813169</p>
                    <p class="text-sm">BTC</p>
                  </li>
                </div>
                <div class="mx-auto">
                  <img class="w-6 h-6" alt="logo" src={Bitcoin} />
                </div>
              </div>
              <div
                class="pl-3 md:pl-8 rounded-lg pb-4 pt-4 mb-1 grid grid-cols-10 bg-slate-800
              transition-all duration-800 bg-gradient-to-l from-slate-800 via-slate-800 to-green-800 bg-size-200 bg-pos-100 hover:bg-pos-0"
              >
                <div class=" col-start-1 col-span-8 md:col-span-9">
                  <Link to="/Simulation">
                    <li>
                      <p class="text-base">Conta virtual - VRTC3291816</p>
                      <p class="text-sm">$ 1.000,00 USD</p>
                    </li>
                  </Link>
                </div>
                <div class="mx-auto">
                  <img class="w-6 h-6" alt="logo" src={Usa} />
                </div>
              </div>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Account;
