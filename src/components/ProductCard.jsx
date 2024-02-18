import React from "react";
import { useSnackbar } from "notistack";
import { useEthereum } from "../contexts/MetamaskProvider";

function ProductCard({ id, url, name, price, }) {

  const { eth } = useEthereum();
  const snackbar = useSnackbar();

  const buyProduct = () => {
    if (!eth) {
      snackbar.enqueueSnackbar("Install A wallet.", { variant: "error" });
      return;
    }
    
    snackbar.enqueueSnackbar('buying');
  }

  return (
    <div>
      <div className="w-[300px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
        <a href="#">
          <img
            className="p-8 rounded-t-lg"
            src={url}
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </a>

          <div className="flex items-center justify-between mt-4">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              {price} ETH
            </span>
            <button onClick={buyProduct} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
