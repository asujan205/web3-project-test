declare global {
  interface Window {
    ethereum: any;
  }
}

export const connectWallet = async (): Promise<{
  address: string;
  status: string;
}> => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: " Wallet is connected successfully.",
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: "",
        status: (err as Error).message,
      };
    }
  } else {
    return {
      address: "",
      status: "You must install Metamask,To yours Browser.",
    };
  }
};
