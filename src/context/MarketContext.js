import React, { createContext, useState, useEffect } from "react";

export const MarketContext = createContext();

function MarketProvider({ children }) {
  const [market, setMarket] = useState([]);
  const [error, setError] = useState("Something went wrong.. Uh Oh");

  useEffect(() => {
    const fetchMarket = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        );
        const data = await response.json();
        setMarket(data);
        console.log(data);
      } catch (err) {
        console.log(error);
      }
    };
    fetchMarket();
  }, []);

  return (
    <MarketContext.Provider value={{ market }}>
      {children}
    </MarketContext.Provider>
  );
}

export default MarketProvider;
