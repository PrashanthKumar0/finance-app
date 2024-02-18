import { Button, Divider, ScrollShadow } from "@nextui-org/react";
import React, { useRef, useState } from "react";
import CoinCard from "../components/CoinCard";
import { useEthereum } from "../contexts/MetamaskProvider";
import { useSnackbar } from "notistack";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import ReachUs from "../components/ReachUs";
import "../cursor"
import ParticlesBg from "../components/ParticlesBg";
import ScrollIndecator from "../components/ScrollIndecator";


function HomePage() {
  const { eth } = useEthereum();
  const [balance, setBalance] = useState(null);
  const { enqueueSnackbar } = useSnackbar();

  const connectWallet = async () => {
    if (!eth) {
      enqueueSnackbar("Install A wallet.", { variant: "error" });
      return;
    }

    try {
      enqueueSnackbar("requesting wallet.");
      const accounts = await eth.request({ method: "eth_requestAccounts" });
      if (accounts.length == 0) {
        enqueueSnackbar("no accounts selected.", { variant: "warning" });
        return;
      }

      enqueueSnackbar(`will use ${accounts[0]}`, { variant: "success" });
      const wei_hex = await eth.request({
        method: "eth_getBalance",
        params: [accounts[0], "latest"],
      });
      const eth_bal = (parseInt(wei_hex, 16) / 10 ** 18).toFixed(4);

      setBalance(eth_bal + " ETH");
    } catch (err) {
      enqueueSnackbar(`wallet denied`, { variant: "error" });
    }
  };

  return (
    <>
      <ScrollIndecator />
      <div className="relative blur-bg bg-black/30 ">

        <div className="relative min-h-[100vh] -mt-[36px] md:-mt-[72px] text-white z-[8] flex flex-col md:flex-row flex-wrap justify-around items-center">
          <ParticlesBg className="bg-black/80 absolute top-0 left-0 z-1 pointer-events-none" />
          <div className="z-[4] flex flex-col gap-4">
            <div className="font-bold text-5xl ">CryptoMart</div>
            <div className="mx-2">
              <p>Discover A New World of Shopping</p>
            </div>
            <div className="flex flex-row items-center justify-center mt-10">
              <Button
                as="a"
                href="/Products"
                variant="solid"
                color="primary"
                className="inline-block m-auto mr-8 flex items-center justify-center hover:text-white"
              >
                {" "}
                Shop Now
              </Button>

              {!balance && eth && (
                <Button
                  variant="solid"
                  color="primary"
                  className="inline-block m-auto"
                  onClick={connectWallet}
                >
                  {" "}
                  Connect Your Wallet
                </Button>
              )}
              {balance && (
                <div className="m-auto ml-10 flex gap-4">
                  <img src="/ethereum-svgrepo-com.svg" className="w-[25px]" />
                  <p>{balance}</p>
                </div>
              )}
            </div>
          </div>
          <div className="z-[4] flex flex-col gap-4">
            <img
              className="max-w-[300px]  md:max-w-[550px] max-w-[400px] mx-auto"
              src="/undraw_shopping_app_flsj (1).svg"
            />
          </div>
          <div
            onClick={() => {
              window.scrollBy({ top: innerHeight - 72, behavior: 'smooth' });
            }}
            className="z-[4] cursor-pointer scroll-down-anim rounded-full absolute bottom-10 left-[50%]"
          >
            <div className="grow-animation"></div>
            <img className="h-[50px]" src="/down-arrow.png" />
          </div>
        </div>

        {/* FAQs */}
        <div className="text-white w-full flex flex-col">
          <div className="mx-auto md:w-[900px] w-full px-8 mb-9">
            <div className="text-center text-3xl my-5 py-auto">
              Frequently Asked Questions
            </div>
            <FAQ></FAQ>
          </div>
        </div>

        <Divider />
        {/* companies-trust */}

        <div>
          <div className="flex flex-col">
            <div className="text-3xl text-white text-center mt-20">
              <h1>
                The BEST site I can shop anonymously .
              </h1>
            </div>
            <div className="mt-10 mx-auto">
              <img
                className="rounded-full mx-auto w-[125px]"
                src="https://avatars.githubusercontent.com/u/31966594?v=4"
              />
              <p className="text-white mt-4">Prashanth Kumar</p>
              <p className="text-xs text-white text-center mb-10">
                Loop Sr. Executive
              </p>
            </div>
          </div>
        </div>
        <Divider />
        {/* Reach Us */}
        <ReachUs />
        {/* Footer */}
      </div>
    </>
  );
}

export default HomePage;
