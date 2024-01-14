import { useState, useEffect } from "react";
import { executePeasArb } from "../utils/executePeasArb";

import { ethers } from "ethers"; // Import ethers.js library
import Link from "next/link";
import Metamask from "../component/metamask";
import { CONTRACT1_ABI, CONTRACT2_ABI, PAIR_ABI } from '../utils/abi'; // Replace with your contract ABIs
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';


const BigNumber = require('bignumber.js');

const PodMap = {
  option1: 'ppPP',
  // Add more options as needed
};

const Index = () => {
  const [showModal, setShowModal] = useState(true);

  const [haveMetamask, sethaveMetamask] = useState(true);
  const [contract1Data, setContract1Data] = useState("");
  const [contract2Data, setContract2Data] = useState("");

  const [peasPrice, setPeasPrice] = useState(0)
  const [ppPPPrice, setppPPPrice] = useState(0)
  const [arbProfit1, setArbProfit1] = useState(0)
  const [arbProfit2, setArbProfit2] = useState(0)

  const [buyAmount, setBuyAmount] = useState(0);
  const [pod, setPod] = useState(Object.keys(PodMap)[0]); // Set default value
  const [gwei, setGwei] = useState('currentGwei'); // Set default value

  const [client, setclient] = useState({
    isConnected: false,
  });


  const handleAmountChange = (e) => {
    console.log("New amount: ", e.target.value)
    setBuyAmount(e.target.value);
    fetchDataFromContracts()
  };

  const handlePodChange = (e) => {
    setPod(e.target.value);
    fetchDataFromContracts()
  };

  // Assuming you want to allow users to change the preset Gwei value
  const handleGweiChange = (e) => {
    setGwei(e.target.value);
    fetchDataFromContracts()
  };

  const checkConnection = async () => {
    const { ethereum } = window;
    if (ethereum) {
      sethaveMetamask(true);
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length > 0) {
        setclient({
          isConnected: true,
          address: accounts[0],
        });
      } else {
        setclient({
          isConnected: false,
        });
      }
    } else {
      sethaveMetamask(false);
    }
  };

  const connectWeb3 = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Metamask not detected");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setclient({
        isConnected: true,
        address: accounts[0],
      });
    } catch (error) {
      console.log("Error connecting to metamask", error);
    }
  };

  const fetchDataFromContracts = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      
      // Contract 1
      const contract1 = new ethers.Contract(
        "0xAe750560b09aD1F5246f3b279b3767AfD1D79160",
        CONTRACT1_ABI,
        provider
      );
      const contract1Result = await contract1.token0(); // Replace yourFunction with the actual function name
      setContract1Data(contract1Result);

      // Contract 2
      const contract2 = new ethers.Contract(
        "0x3bb1Be14b122EDec3F10356298E9B3276d93cAf6",
        PAIR_ABI,
        provider
      );
      const contract2Result = await contract2.getReserves(); // Replace yourFunction with the actual function name
      setContract2Data(contract2Result);
      let result = await contract1.slot0()
      let sqrtPrice = result[0]
      let value = sqrtPrice / 2**96
      let sqrdValue = value**2
      
      let reserves = await contract2.getReserves();
      let reserve0 = new BigNumber(reserves[0].toString());
      let reserve1 = new BigNumber(reserves[1].toString());
      let token0_address = await contract2.token0();
      let token1_address = await contract2.token1();
      let token0_contract = new ethers.Contract(token0_address, CONTRACT2_ABI, provider);
      let token1_contract = new ethers.Contract(token1_address, CONTRACT2_ABI, provider);
      let decimals0 = await token0_contract.decimals();
      let decimals1 = await token1_contract.decimals();
      let adjustedReserve0 = reserve0.dividedBy(new BigNumber(10).pow(decimals0));
      let adjustedReserve1 = reserve1.dividedBy(new BigNumber(10).pow(decimals1));
      let price1_in_terms_of_0;

      if (adjustedReserve0.isGreaterThan(0)) {
        price1_in_terms_of_0 = adjustedReserve1.dividedBy(adjustedReserve0);
      } else {
        price1_in_terms_of_0 = "Infinite or Undefined";
      }
      
      const price0 = sqrdValue
      const price1 = price1_in_terms_of_0

      
      setPeasPrice(price0.toPrecision(4))
      setppPPPrice(price1.toNumber().toPrecision(4))

      console.log("$PEAS is ", peasPrice)
      console.log("$ppPP is ", ppPPPrice)

      let fee_rate0 = 0.01  
      let fee_rate1 = 0.03  

      let cost0 = price0 * buyAmount
      let amount_after0 = buyAmount * (1-fee_rate0)
      let value0 = amount_after0 * price1
  
      let cost1 = price1 * buyAmount
      let amount_after1 = buyAmount * (1-fee_rate1)
      let value1 = amount_after1 * price0
  
      const profit0 = value0 - cost0
      const profit1 = value1 - cost1
      setArbProfit1(profit0.toPrecision(6))
      setArbProfit2(profit1.toPrecision(6))

    } catch (error) {
      console.error("Error fetching data from contracts", error);
    }
  };

  const getGas = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    let gasPrice = await provider.getGasPrice()
    const gasPriceInGwei = new BigNumber(gasPrice.toString()).div(1e9); // Assuming gasPrice is in Wei
    setGwei(gasPriceInGwei); // Convert to string to avoid precision issues
  }

  useEffect(() => {
    checkConnection();
    fetchDataFromContracts(); // Fetch data when the component mounts
    getGas()
  }, []);

  const router = useRouter();

  const redirectToTwitter = () => {
    // Replace 'twitter_username' with the actual Twitter username
    const twitterUrl = 'https://twitter.com/cyberetard';

    // Redirect to Twitter URL
    router.push(twitterUrl);
  };

  const redirectToUniswap = () => {
    // Replace 'twitter_username' with the actual Twitter username
    const uniswapUrl = 'https://app.uniswap.org/#/swap?exactField=input&exactAmount='+buyAmount+'&inputCurrency=0x6B175474E89094C44Da98b954EedeAC495271d0F&outputCurrency=0x515e7fd1C29263DFF8d987f15FA00c12cd10A49b';

    // Redirect to Twitter URL
    window.open(uniswapUrl, '_blank');
  };

  const redirectToPeapods = () => {
    // Replace 'twitter_username' with the actual Twitter username
    const twitterUrl = 'https://peapods.finance/app/unwrap';

    // Redirect to Twitter URL
    window.open(twitterUrl, "_blank");
  };



  return (
    <>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>This is a tool for manual arbitrage on Peapods Finance Pods.</h2>
            <br></br>
            <p>This tool is only valid for Peapods v1. Upon launch of v2, a new tool will be deployed to work across all pods</p>
            <p>Please use a wallet that simulates transaction output, like Rabby, to assure that the transaction is profitable</p>
            <p>The amount of $DAI entered into the tool is flashloaned, so you require no $DAI in your wallet to use this</p>
            <p>Even if the tool displays that an arb is profitable, you may get an error as Flashloan fee's cause it to no longer be profitable. The profit must be large enough to offset fee's.</p>
            <button className="close-btn" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
      {/* Navbar */}
      
      <nav className="fren-nav d-flex">
        <div>
          <h3>PeArb</h3>
        </div>
        <ToastContainer />
        <div className="d-flex" style={{ marginLeft: "auto" }}>
          <div>
            <button className="btn connect-btn" onClick={connectWeb3}>
              {client.isConnected ? (
                <>
                  {client.address.slice(0, 4)}...
                  {client.address.slice(38, 42)}
                </>
              ) : (
                <>Connect Wallet</>
              )}
            </button>
          </div>
        </div>
      </nav>
      {/* Navbar end */}

      <section className="container d-flex">
        <main>
          <h1 className="main-title">Peapod Arbitrage Tool</h1>
          <p className="main-desc">Manually arbitrage on Pods, fuel the flywheel.</p>
          
          {/* ---- */}
          <p>
            {!haveMetamask ? (
              <Metamask />
            ) : client.isConnected ? (
              <>
                <br />

                <div className="input-form">
                  <div className="input-group">
                    <label htmlFor="buyAmount" className="label">
                      Amount ($DAI)
                    </label>
                    <input
                      type="number"
                      id="amount"
                      value={buyAmount}
                      onChange={handleAmountChange}
                      className="input"
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="pod" className="label">
                      Pod
                    </label>
                    <select id="pod" value={pod} onChange={handlePodChange} className="input">
                      {Object.entries(PodMap).map(([key, value]) => (
                        <option key={key} value={key}>
                          {value}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="input-group">
                    <label htmlFor="gwei" className="label">
                      Gwei
                    </label>
                    <input
                      type="text"
                      id="gwei"
                      value={gwei}
                      onChange={handleGweiChange}
                      className="input"
                    />
                  </div>
                </div>

                <div className="grid-container">
                  <div className="grid-item bold-text">$PEAS</div>
                  <div className="grid-item bold-text">$ppPP</div>
                  <div className="grid-item green-text courier-font">${peasPrice}</div>
                  <div className="grid-item green-text courier-font">${ppPPPrice}</div>
                  
                  {/* <div className="grid-item bold-text">Profit buying {buyAmount} $ppPP, unwrapping, and selling</div>
                  <div className="grid-item green-text courier-font">${arbProfit2}</div> */}
                </div>
                
                <div className="profit-display">
                  <div className="grid-item bold-text">Total $PEAS from buying ${buyAmount} worth</div>
                  <div className="grid-item green-text courier-font">{(buyAmount / peasPrice).toPrecision(6)}</div>

                  <div className="grid-item bold-text">Total $PEAS from buying ${buyAmount} of $ppPP, and unwrapping to $PEAS after fee's</div>
                  <div className="grid-item green-text courier-font">{((buyAmount/ppPPPrice) * 0.97).toPrecision(6)}</div>
                </div>
                

                <button
                  onClick={redirectToUniswap}
                  className="btn sign-btn"
                >
                  Buy on Uniswap
                </button>

                <button
                  onClick={redirectToPeapods}                  
                  className="btn sign-btn"
                >
                  Unwrap to $PEAS
                </button>

                <div className="profit-display">
                  <div className="grid-item bold-text">Profit from flashloaing ${buyAmount} of $PEAS, wrapping, and selling</div>
                  <div className="grid-item green-text courier-font">${arbProfit1}</div>
                  <div className="grid-item bold-text">Profit from flashloaing ${buyAmount} of $ppPP, unwrapping, and selling</div>
                  <div className="grid-item green-text courier-font">${arbProfit2}</div>
                </div>

                <button
                  onClick={() => executePeasArb(buyAmount)}
                  className="btn sign-btn"
                >
                  Arbitrage
                </button>
              </>
            ) : (
              <>
                <br />
                <button className="btn connect-btn-btm" onClick={connectWeb3}>
                  Connect Wallet
                </button>
              </>
            )}
          <div className="dark-grey-text" onClick={redirectToTwitter}>Built by @cyberetard</div>
          </p>
          {/* ---- */}
        </main>
      </section>
    </>
  );
};

export default Index;
