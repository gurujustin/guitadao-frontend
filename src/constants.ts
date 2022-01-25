export const THE_GRAPH_URL = "https://api.thegraph.com/subgraphs/name/wkich/guita-subgraph";
export const EPOCH_INTERVAL = 13091;

// NOTE could get this from an outside source since it changes slightly over time
export const BLOCK_RATE_SECONDS = 2.2;

export const TOKEN_DECIMALS = 9;

interface IAddresses {
  [key: number]: { [key: string]: string };
}

export const addresses: IAddresses = {
  137: {
    DAI_ADDRESS: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063", // duplicate
    USDC_ADDRESS: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
    GUITA_ADDRESS: "0x788dC7079971257d985dCce302CE061cd67291f8",
    STAKING_ADDRESS: "0xfc883960e7e7a576b251630705681c784357cc0d", // The new staking contract
    STAKING_HELPER_ADDRESS: "0xcb468206d6567296ECebe435054510A97E97ada6", // Helper contract used for Staking only
    SGUITA_ADDRESS: "0xD3A27C6b1791E6A02ef51372AbD8361710C42976",
    DISTRIBUTOR_ADDRESS: "0x41c7F2Dcc3d3DAAF2144398FCbEE4c3cBB5f2144",
    BONDINGCALC_ADDRESS: "0x0F85ef720A5061CC9298ED1E43Cd2b9115b5A54D",
    TREASURY_ADDRESS: "0x3063513db39C822aC61526Eb79879c8dE2c07C4f",
    REDEEM_HELPER_ADDRESS: "0xd2B9f28901c3026860B5233fF215A7b3069aFAb8",
  },
};
