import React from "react";

function CoinCard({ src, coinName, rate }) {
  return (
    <div className="flex gap-4 w-full items-center py-2 px-3">
      <img
        className="w-[40px] rounded-full"
        src={src}
      />
      <div className="[font-family:'sans sheriff';] text-white ">{coinName}</div>
      <div className="[font-family:'sans sheriff';] text-white/50 text-sm ml-auto">
        {rate}
      </div>
    </div>
  );
}

export default CoinCard;
