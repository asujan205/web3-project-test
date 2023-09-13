// import { InjectedConnector } from "@web3-react/injected-connector";

// export const ChainId = {
//   ETHEREUM: 1,
//   BSC: 56,
//   BSC_TESTNET: 97,
// };

// const supportedChainIds = Object.values(ChainId);

// export const injected = new InjectedConnector({
//   supportedChainIds,
// });
declare global {
  interface Window {
    ethereum: any;
  }
}

export const connectWallet = async (): Promise<{
  address: string;
}> => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: "",
      };
    }
  } else {
    return {
      address: "",
    };
  }
};
