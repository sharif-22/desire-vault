import React from "react";
import { useState } from "react";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { MdDeleteForever, MdEditDocument } from "react-icons/md";
import propTypes from "prop-types";

const VaultCard = ({
  product,
  desc,
  price,
  productURL,
  category,
  deleteData,
}) => {
  const productLink = new URL(productURL);
  const domain = productLink.hostname.split(".")[1];

  const [onHover, setOnHover] = useState(false);
  const showBtn = () => {
    setOnHover(true);
  };
  const hideBtn = () => {
    setOnHover(false);
  };

  return (
    <div
      onMouseOver={showBtn}
      onMouseOut={hideBtn}
      className="overflow-hidden h-fit lg:w-full p-2 rounded mx-auto bg-slate-200 dark:bg-slate-700 dark:text-white shadow-sm hover:bg-slate-100 hover:shadow-lg duration-500 relative"
    >
      <div className=" rounded flex flex-col lg:flex-row">
        <div className="lg:py-4 p-4 flex flex-col gap-3">
          <h2 className="text-2xl capitalize">{product}</h2>
          {/* <div>
            <span>category:</span>{" "}
            <small className="p-1 rounded bg-slate-300">{category}</small>
          </div> */}
          <p className="capitalize text-wrap">{desc}</p>
          <p className="flex items-center font-medium text-base">
            {"price : "}
            <LiaRupeeSignSolid size={16} /> {price}
          </p>
        </div>
      </div>
      <button className="text-white bg-blue-700 rounded-md hover:bg-blue-800  py-2 px-3 font-medium mt-2 w-full hover:shadow duration-500">
        <a href={productURL} target="_blank">
          Buy now in <span className="capitalize">{domain}</span>
        </a>
      </button>
      {onHover && (
        <div className="transition flex gap-4 duration-1000 ease-in absolute top-4 right-4">
          <MdDeleteForever
            size={32}
            className=" text-black dark:text-slate-200 dark:hover:text-red-500 hover:text-red-600 hover:scale-125 hover:drop-shadow-md duration-300 cursor-pointer"
            onClick={deleteData}
          />
        </div>
      )}
    </div>
  );
};

VaultCard.propTypes = {
  product: propTypes.string,
  desc: propTypes.string,
  price: propTypes.string,
  productURL: propTypes.string,
  deleteData: propTypes.func,
  category: propTypes.string,
};

export default VaultCard;
