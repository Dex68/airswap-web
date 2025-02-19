import { TokenInfo } from "@uniswap/token-lists";

import { BalancesState } from "../../features/balances/balancesSlice";
import { sortTokensBySymbol, sortTokensBySymbolAndBalance } from "./sort";

describe("Sort Tokens", () => {
  let activeTokens: TokenInfo[];
  let balances: BalancesState;

  beforeEach(() => {
    activeTokens = [
      {
        chainId: 1,
        address: "0xe41d2489571d322189246dafa5ebde1f4699f498",
        name: "0x Protocol Token",
        symbol: "ZRX",
        decimals: 18,
      },
      {
        chainId: 1,
        address: "0x39aa39c021dfbae8fac545936693ac917d5e7563",
        name: "Compound USD Coin",
        symbol: "cUSDC",
        decimals: 8,
      },
      {
        chainId: 1,
        address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
        name: "Wrapped BTC",
        symbol: "WBTC",
        decimals: 8,
      },
      {
        chainId: 1,
        address: "0xface851a4921ce59e912d19329929ce6da6eb0c7",
        name: "Compound ChainLink",
        symbol: "cLINK",
        decimals: 8,
      },
    ];

    balances = {
      inFlightFetchTokens: null,
      lastFetch: 1628797910640,
      status: "idle",
      values: {
        [activeTokens[0].address]: "0",
        [activeTokens[1].address]: "0",
        [activeTokens[2].address]: "0",
        [activeTokens[3].address]: "0",
      },
    };
  });

  describe("sortTokensBySymbol", () => {
    it("should sort tokens by symbol", () => {
      const sortedTokens = sortTokensBySymbol(activeTokens);
      expect(sortedTokens[0].symbol).toBe("cLINK");
      expect(sortedTokens[1].symbol).toBe("cUSDC");
      expect(sortedTokens[2].symbol).toBe("WBTC");
      expect(sortedTokens[3].symbol).toBe("ZRX");
    });
  });

  describe("sortTokensBySymbolAndBalance", () => {
    it("should sort WBTC on top when the rest has no balance", () => {
      balances.values[activeTokens[2].address] = "240000000000000000";

      const sortedTokens = sortTokensBySymbolAndBalance(activeTokens, balances);
      expect(sortedTokens[0].symbol).toBe("WBTC");
      expect(sortedTokens[1].symbol).toBe("cLINK");
      expect(sortedTokens[2].symbol).toBe("cUSDC");
      expect(sortedTokens[3].symbol).toBe("ZRX");
    });

    it("should sort ZRX and WBTC on top when the rest has no balance", () => {
      balances.values[activeTokens[0].address] = "300000000000000000";
      balances.values[activeTokens[2].address] = "240000000000000000";

      const sortedTokens = sortTokensBySymbolAndBalance(activeTokens, balances);
      expect(sortedTokens[0].symbol).toBe("WBTC");
      expect(sortedTokens[1].symbol).toBe("ZRX");
      expect(sortedTokens[2].symbol).toBe("cLINK");
      expect(sortedTokens[3].symbol).toBe("cUSDC");
    });
  });
});
