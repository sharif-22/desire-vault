import React from "react";
import { LiaRupeeSignSolid } from "react-icons/lia";

const VaultCard = ({ product, desc, price, url }) => {
  return (
    <div className="max-w-5xl mx-auto bg-white shadow-sm hover:bg-slate-50 hover:shadow-lg duration-500">
      <div className=" rounded flex flex-col lg:flex-row">
        <img
          className="lg:w-96 w-full h-full  mx-auto object-cover block"
          src={
            "https://blog.playstation.com/tachyon/2023/08/e5b292c72d1430da822adafb88fdfedead9e0931-scaled.jpg"
          }
          alt="playstation"
        />
        <div className="lg:py-4 p-4 flex flex-col gap-3">
          <h2 className="text-2xl capitalize">{product}</h2>
          <p className="capitalize">{desc}</p>
          <ol className="flex gap-2 flex-wrap text-xs"></ol>
          <p className="flex items-center font-medium text-base">
            {"price : "}
            <LiaRupeeSignSolid size={16} /> {price}
          </p>
        </div>
      </div>
      <button className="bg-yellow-300 py-2 px-3 font-medium rounded-b mt-2 w-full hover:shadow duration-500">
        <a href={url} target="_blank">
          Buynow
        </a>
      </button>
    </div>
  );
};

export default VaultCard;
