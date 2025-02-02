import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen relative">
      <Link
        to="/"
        className="absolute right-2 top-2 h-10 w-10 rounded-full flex items-center justify-center bg-white"
      >
        <i className="text-lg font-semibold ri-home-5-line"></i>
      </Link>
      <div className="h-1/2">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="uber map"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="px-4">
        <div className="w-full flex items-center justify-between mt-4">
          <img
            className="w-16"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png"
            alt=""
          />
          <div className="text-right">
            <h2 className="text-lg font-semibold">Ashish Pal</h2>
            <h4 className="text-xl font-bold">UP14 AB 2026</h4>
            <p className="text-sm text-gray-600">Swift Dzire</p>
          </div>
        </div>
        <div className="w-full border-t border-gray-300 mb-4">
          <div className="flex gap-4 items-center mt-2">
            <i className="text-xl font-medium ri-map-pin-fill"></i>
            <div className="border-b border-gray-300 w-full pb-2">
              <h3 className="text-xl font-semibold">562/11-A</h3>
              <p className="text-gray-600 text-base ">Rajnagar, Ghaziabad</p>
            </div>
          </div>
          <div className="flex gap-4 items-center mt-2">
            <i className="text-xl font-medium ri-bank-card-line"></i>
            <div>
              <h3 className="text-xl font-semibold">₹193.20</h3>
              <p className="text-gray-600 text-base ">Cash</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 w-[90%]">
          <button className="bg-green-600 py-2 rounded-xl text-xl font-semibold text-white w-full">
            Make payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Riding;
