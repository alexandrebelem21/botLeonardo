import React from "react";

class Header extends React.Component {
  render() {
    const { lucro, saldo } = this.props;
    return (
      <div class="pb-4 pt-4 rounded-lg mx-auto mt-12 mr-12 md:mx-auto md:w-1/2 font-helvetica bg-gradient-to-l from-slate-800">
        <div class="grid grid-cols-10 md:gap-10">
          <div class="ml-12  col-start-1 col-span-5">
            <p class=" text-2xl md:text-3xl ">Conta Virtual</p>
            <p class=" text-base ">VRTC3291816 - USD</p>
          </div>
          <div class="grid col-start-6 col-span-4">
            <div class="grid grid-cols-2">
              <div>
                <p class="text-lg md:text-xl">Saldo</p>
                <p class="text-2xl md:text-3xl">
                  $ {!saldo ? 1000 : parseFloat(saldo.toFixed(2))}
                </p>
              </div>
              <div>
                <p class="text-lg md:text-xl">Lucro/Prejuizo</p>
                {lucro <= 0 ? (
                  <p class="text-2xl md:text-3xl">$ {!lucro ? 0.0 : lucro}</p>
                ) : (
                  <p class="text-2xl md:text-3xl text-green-600">
                    $ {!lucro ? 0.0 : parseFloat(lucro.toFixed(3))}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
