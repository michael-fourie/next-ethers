import { ethers } from "ethers";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BigNumber from "bignumber.js";

export const executePeasArb = async (daiAmount) => {
  const contractAddress = "0x8A581E373544047716bFC2aaa9c3Ad3df27E016b";
  const abi = [
    {
      inputs: [{ internalType: "uint256", name: "_amountDAI", type: "uint256" }],
      name: "arbAllThePeas",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];

  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    // Instantiate the contract
    const contract = new ethers.Contract(contractAddress, abi, signer);
    console.log("Input: ", daiAmount)
    const weiValue = ethers.utils.parseEther(daiAmount.toString());
    console.log(`Equivalent Wei value: ${weiValue.toString()}`);
    // Call the arbAllThePeas function with the specified daiAmount
    const transaction = await contract.arbAllThePeas(weiValue);

    // // Wait for the transaction to be mined
    await transaction.wait();

    console.log("arbAllThePeas transaction successful!");
} catch (error) {
    console.error("Error calling arbAllThePeas:", error);
  
    let errorMessage = "Error executing Peas Arb: " + error.message;
  
    if (error.message.includes("PAYBACK0")) {
      errorMessage = "Arbitrage not profitable after fees";
    } else if (error.message.includes("INSUFFICIENT_INPUT_AMOUNT")) {
      errorMessage = "Insufficient Input Amount";
    } else if (error.message.includes("INSUFFICIENT_OUTPUT_AMOUNT")) {
      errorMessage = "Insufficient Output Amount";
    }
  
    toast.error(errorMessage);
  }
};

// Example usage:
