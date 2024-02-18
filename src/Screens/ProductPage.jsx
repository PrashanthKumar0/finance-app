import React from "react";
import ProductCard from "../components/ProductCard";
import { ScrollShadow } from "@nextui-org/scroll-shadow";

function ProductPage() {
  return (
    <ScrollShadow className="h-[100vh] flex blur-bg px-4 md:px-6 lg:px-8">
      <div className="pt-[100px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 mx-auto">
        <ProductCard img="/pngwing.com.png" text="Apple Watch" price="0.0097 BTC" />
        {/* <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard /> */}
      </div>
    </ScrollShadow>
  );
}

export default ProductPage;
