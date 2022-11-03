import React from "react";
import { Link } from "react-router-dom";
import { CiPause1 } from "react-icons/ci";
import "./BotOperator.css";

class BotOperator extends React.Component {
  render() {
    return (
      <div>
        {/* <div class="font-helvetica mx-auto my-12 px-6 py-4 ">
          <p class="text-3xl"> Bot Operando </p>
          <div class="progress-group-groups">
            <div class="progress-group-bot">
              <div class="float-text-progress">Analisando</div>
              <div class="dot-progress-bot"></div>
            </div>
            <div class="progress-group-bot">
              <div class="float-text-progress">Contrato aberto</div>
              <div class="dot-progress-bot"></div>
            </div>
            <div class="progress-group-bot">
              <div class="float-text-progress">Contrato fechado</div>
              <div class="dot-progress-bot"></div>
            </div>
            <div class="line-progress-bot"></div>
            <div class="line-progress-bot line-progress-bot-indicator"></div>
          </div>
        </div> */}
        <div>
          <Link to="/Enjoy">
            <button
              class=" text-base border-red-500 border-solid border-[1px] text-red-600 my-14 rounded-xl h-16 w-42 hover:bg-red-600 hover:text-white transition-all inline-flex items-center px-4 py-2 gap-2"
              type="button"
            >
              <CiPause1 class="h-6 w-6" />
              Parar Robô
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default BotOperator;
