import React from "react";
import { Link } from "react-router-dom";
import { CiPause1 } from "react-icons/ci";
import "./BotOperator.css";

class BotOperator extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/Enjoy">
            <button
              class=" text-base border-red-500 border-solid border-[1px] text-red-600 mt-1 mb-12 rounded-xl h-16 w-42 hover:bg-red-600 hover:text-white transition-all inline-flex items-center px-4 py-2 gap-2"
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
