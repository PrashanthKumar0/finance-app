import React from "react";

function ProductCard() {
  return (
    <div>
      <div className="w-[300px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
        <a href="#">
          <img
            className="p-8 rounded-t-lg"
            src="/public\pngwing.com.png"
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
              Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
            </h5>
          </a>
          
          <div className="flex items-center justify-between mt-4">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              0.0097 BTC
            </span>
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
