import React, { useContext } from "react";

import { MarketContext } from "../context/MarketContext";
import Market from "../components/Market";
import Hero from "../components/Hero";

function Home() {
  const { market } = useContext(MarketContext);
  console.log(market);

  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="flex flex-col justify-center max-w-none mx-0 w-full">
            <h1 className="text-center text-4xl mb-6 font-bold text-white">Current <span className="text-red-500">Market</span></h1>
            <div className="flex font-semibold justify-between lg:px-2 p-2 text-white">
              <div>
                <p>Name</p>
              </div>
              <div className="flex gap-9">
                <p>Price</p>
                <p>24h%</p>
                <p className="hidden lg:block">Market Cap</p>
                <p className="hidden lg:block">Total Volume</p>
              </div>
            </div>
            {market.map((coins) => {
              return <Market coins={coins} key={coins.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
