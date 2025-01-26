const WaitingForDriver = () => {
  return (
    <div className="">
      <div className="w-full flex items-center justify-between">
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
      <button className="bg-green-600 w-full py-2 rounded-xl text-xl font-semibold text-white">
        Confirm Ride
      </button>
    </div>
  );
};

export default WaitingForDriver;
