import { useState } from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopup = ({ setRidePopupPanel, setConfirmRidePopupPanel }) => {
  const [otp, setOtp] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="">
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          setConfirmRidePopupPanel(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h1 className="font-bold text-xl">Confirm this ride to start</h1>
      <div className="flex items-center justify-between my-4">
        <div className="flex gap-2 items-center">
          <img
            src="https://cdn.shopify.com/s/files/1/0100/1622/7394/files/hairstyle_480x480.webp?v=1725449658"
            alt=""
            className="w-10 h-10 object-cover  rounded-full"
          />
          <h4 className="font-medium text-lg">Harsh Patel</h4>
        </div>
        <div>
          <h3 className="text-lg font-bold">2.2 Km</h3>
          <h6 className="text-sm text-gray-500 -mt-1">Distance</h6>
        </div>
      </div>
      <div className="w-full border-t border-gray-300 mb-4">
        <div className="flex gap-4 items-center mt-2">
          <i className="text-xl font-medium ri-map-pin-user-fill"></i>
          <div className="border-b border-gray-300 w-full pb-2">
            <h3 className="text-xl font-semibold">562/11-A</h3>
            <p className="text-gray-600 text-base ">Govindpuram, Ghaziabad</p>
          </div>
        </div>
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
        <div></div>
        <div></div>
      </div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          type="text"
          placeholder="Enter OTP"
          className="w-full text-base px-8 py-2 font-mono bg-[#dbdbdb] rounded-lg mt-3"
        />
        <div className="flex items-center justify-center gap-2 mt-5">
          <button
            className="bg-red-600 w-full py-2 rounded-xl text-xl font-semibold text-white"
            onClick={() => {
              setConfirmRidePopupPanel(false);
              setRidePopupPanel(false);
            }}
          >
            Cancel
          </button>
          <Link
            to="/captain-riding"
            className="bg-green-600 text-center w-full py-2 rounded-xl text-xl font-semibold text-white"
          >
            Confirm
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ConfirmRidePopup;
