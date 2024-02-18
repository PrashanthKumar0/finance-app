import { createContext, useContext, useState } from "react";

const MetamaskContext = createContext();

export const useEthereum = () => useContext(MetamaskContext);

export const requestWalletConnection = async () => {
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
}

export const MetamaskProvider = ({ children }) => {

    const [eth, setEth] = useState(null);

    addEventListener('load', () => {
        if ('ethereum' in window) {
            setEth(ethereum);
        }
    })

    return (
        <MetamaskContext.Provider value={{ eth }}>
            {children}
        </MetamaskContext.Provider>
    )
}