import React from "react";

function Market({ coins }) {
  const {
    id,
    image,
    symbol,
    current_price,
    market_cap_change_percentage_24h,
    market_cap,
    total_volume,
  } = coins;
  return (
    <div className="lg:py-6 p-2 flex w-full h-full border-t gap-2">
      <div className="w-full h-full flex items-center gap-2">
        <img className="w-[30px]" src={image} alt="coin symbol" />
        <p className="capitalize font-semibold text-white tracking-wide">{id}</p>
        <p className="uppercase font-medium text-gray-400">{symbol}</p>
      </div>
      <div className="flex items-center gap-3 font-semibold text-white">
        <div>${current_price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
        <div>{market_cap_change_percentage_24h.toFixed(2)}%</div>
      </div>
      <div className="lg:flex items-center gap-3 font-semibold text-white hidden">
        <div>
          ${market_cap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </div>
        <div>
          ${total_volume.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </div>
      </div>
    </div>
  );
}

export default Market;
