import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { FaRobot } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
class Enjoy extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div class="mx-auto mt-20 w-full text-center font-helvetica">
          <p class="mx-auto mb-8 text-2xl">Selecione um robô para operar</p>
          <div class="mx-auto w-1/2">
            <ul class="text-lg w-full text-left bg-black ">
              <div
                class="pl-8 rounded-lg pb-4 pt-4 mb-1 grid grid-cols-10 bg-slate-800
                transition-all duration-800 bg-gradient-to-l from-slate-800 via-slate-800 to-green-800 bg-size-200 bg-pos-100 hover:bg-pos-0"
              >
                <div class="col-start-1 col-span-9">
                  <Link to="/Simulation">
                    <li>PLAY DO FUTURO (Conservador)</li>
                  </Link>
                </div>
                <div class="mx-auto">
                  <FaRobot class="w-6 h-6 fill-slate-500 " />
                </div>
              </div>
              <div class="pl-8 rounded-lg pb-4 pt-4 mb-1 grid grid-cols-10 bg-slate-800">
                <li class="blur-sm col-start-1 col-span-9">
                  Indisponivel no teste
                </li>
                <IoIosLock class="mx-auto w-6 h-6 fill-slate-500 " />
              </div>
              <div class="pl-8 rounded-lg pb-4 pt-4 mb-1 grid grid-cols-10 bg-slate-800">
                <li class="blur-sm col-start-1 col-span-9">
                  Indisponivel no teste
                </li>
                <IoIosLock class="mx-auto w-6 h-6 fill-slate-500 " />
              </div>
              <div class="pl-8 rounded-lg pb-4 pt-4 mb-1 grid grid-cols-10 bg-slate-800">
                <li class="blur-sm col-start-1 col-span-9">
                  Indisponivel no teste
                </li>
                <IoIosLock class="mx-auto w-6 h-6 fill-slate-500 " />
              </div>
              <div class="pl-8 rounded-lg pb-4 pt-4 mb-1 grid grid-cols-10 bg-slate-800">
                <li class="blur-sm col-start-1 col-span-9">
                  Indisponivel no teste
                </li>
                <IoIosLock class="mx-auto w-6 h-6 fill-slate-500 " />
              </div>
              <div class="pl-8 rounded-lg pb-4 pt-4 mb-1 grid grid-cols-10 bg-slate-800">
                <li class="blur-sm col-start-1 col-span-9">
                  Indisponivel no teste
                </li>
                <IoIosLock class="mx-auto w-6 h-6 fill-slate-500 " />
              </div>
              <div class="pl-8 rounded-lg pb-4 pt-4 mb-1 grid grid-cols-10 bg-slate-800">
                <li class="blur-sm col-start-1 col-span-9">
                  Indisponivel no teste
                </li>
                <IoIosLock class="mx-auto w-6 h-6 fill-slate-500 " />
              </div>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Enjoy;
