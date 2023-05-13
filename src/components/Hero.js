import React from "react";

import HeroImage from "../images/pngegg.png";

function Hero() {
  return (
    <section className="bg-purple-600 h-[1000px] mb-10 py-64 lg:px-0 px-6">
      <div className="container mx-auto h-full flex justify-around items-center">
        <div className="flex flex-col items-start gap-10">
          <h1 className="text-[72px] font-bold text-white">
            Crypto Is The <span className="text-red-500">Money</span> <br /> -
            Of The Future
          </h1>
          <p className="text-white text-lg">
            Just wait till you see what Crypto can do to your wallet.
            <br /> Integrate it now with <span>Crypto Wallet</span>.
          </p>
          <button className="uppercase border-2 rounded-full text-red-500 border-red-500 py-4 px-6 hover:bg-red-500 hover:text-white hover:border-white duration-500">
            Sign Up
          </button>
        </div>
        <div>
          <img className="lg:max-w-[600px] lg:animate-bounce lg:block hidden" src={HeroImage} alt="coin" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
