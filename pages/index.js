import { useState, useEffect } from "react";
import { signMessage } from "../utils/sign";
import { ethers } from "ethers"; // Import ethers.js library
import Link from "next/link";
import Metamask from "../component/metamask";
import { CONTRACT1_ABI, CONTRACT2_ABI, PAIR_ABI } from '../utils/abi'; // Replace with your contract ABIs
const BigNumber = require('bignumber.js');

const Index = () => {
  const [haveMetamask, sethaveMetamask] = useState(true);
  const [contract1Data, setContract1Data] = useState("");
  const [contract2Data, setContract2Data] = useState("");

  const [peasPrice, setPeasPrice] = useState(0)
  const [ppPPPrice, setppPPPrice] = useState(0)
  const [arbProfit1, setArbProfit1] = useState(0)
  const [arbProfit2, setArbProfit2] = useState(0)

  const [client, setclient] = useState({
    isConnected: false,
  });

  useEffect(() => {
    // Set up an interval to call the function every second
    const intervalId = setInterval(() => {
      fetchDataFromContracts();
    }, 1000); // 1000 milliseconds = 1 second

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount


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
      console.log(contract1Result)
      console.log(contract2Result)
      let peas_address = await contract1.token0()
      let peas_contract = new ethers.Contract(peas_address, CONTRACT2_ABI, provider)
      let symbol = await peas_contract.symbol()
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
      let symbol0 = await token0_contract.symbol();
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

      let fee_rate0 = 0.01  
      let fee_rate1 = 0.03  

      let buy_amount = 1000
      let cost0 = price0 * buy_amount
      let amount_after0 = buy_amount * (1-fee_rate0)
      let value0 = amount_after0 * price1
  
      let cost1 = price1 * buy_amount
      let amount_after1 = buy_amount * (1-fee_rate1)
      let value1 = amount_after1 * price0
  
      const profit0 = value0 - cost0
      const profit1 = value1 - cost1
      setArbProfit1(profit0.toPrecision(6))
      setArbProfit2(profit1.toPrecision(6))

    } catch (error) {
      console.error("Error fetching data from contracts", error);
    }
  };

  useEffect(() => {
    checkConnection();
    fetchDataFromContracts(); // Fetch data when the component mounts
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="fren-nav d-flex">
        <div>
          <h3>Peapod Arbitrage Dashboard</h3>
        </div>
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
          <h1 className="main-title">Peapod Finance Arbitrage Dashboard</h1>

          {/* ---- */}
          <p>
            {!haveMetamask ? (
              <Metamask />
            ) : client.isConnected ? (
              <>
                <br />
                
                <div className="grid-container">
                  <div className="grid-item bold-text">$PEAS</div>
                  <div className="grid-item bold-text">$ppPP</div>
                  <div className="grid-item green-text courier-font">${peasPrice}</div>
                  <div className="grid-item green-text courier-font">${ppPPPrice}</div>
                  <div className="grid-item bold-text">Profit buying 1000 $PEAS, wrapping, and selling</div>
                  <div className="grid-item bold-text">Profit buying 1000 $ppPP, unwrapping, and selling</div>
                  <div className="grid-item green-text courier-font">${arbProfit1}</div>
                  <div className="grid-item green-text courier-font">${arbProfit2}</div>

                  <button
                  onClick={signMessage}
                  type="button"
                  className="btn sign-btn"
                >
                  Arbitrage $PEAS to $ppPP
                </button>

                <button
                  onClick={signMessage}
                  type="button"
                  className="btn sign-btn"
                >
                  Arbitrage $ppPP to $PEAS
                </button>
                </div>
              </>
            ) : (
              <>
                <br />
                <button className="btn connect-btn" onClick={connectWeb3}>
                  Connect Wallet
                </button>
              </>
            )}
          </p>
          {/* ---- */}
        <div className="dark-grey-text">Built by @cyberetard</div>
        </main>
      </section>
    </>
  );
};

export default Index;
