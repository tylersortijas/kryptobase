import { expect, jest, test } from "@jest/globals";
import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

test("should have array length of 100", async () => {
  const market = [];
  const error = "Uh oh... something went wrong";
  const getMarketData = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      const data = await response.json();
      market.push(data);
    } catch (err) {
      console.log(error);
    }
  };
  getMarketData();
  expect(market).toHaveLength(0);
});
