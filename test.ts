import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider(
  "https://eth-mainnet.g.alchemy.com/v2/fTxkuelVKsi8eUlvM7KH9iYqt11NLBXVz"
);

const getAddress = async (address: string) => {
  const balance = await provider.getBalance(address);
  console.log(ethers.formatEther(balance));
};

const getAccount = async (address: string) => {
  const type = await provider.getCode(address);

  
  if (type === "0x") {
    console.log("EOA Account");
  } else {
    console.log("Contract Account");
  }
};

getAddress("0xf4bfaf916a68b0fC859D63a319034C0f72A88a5C");
getAccount("0xf4bfaf916a68b0fC859D63a319034C0f72A88a5C");
