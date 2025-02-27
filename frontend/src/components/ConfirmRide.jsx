const ConfirmRide = ({
  setConfirmRidePanel,
  setVehicleFound,
  createRide,
  pickup,
  destination,
  vehicleType,
  fare,
}) => {
  return (
    <div className="">
      <h1 className="font-bold text-xl">Confirm your ride</h1>
      <div className="w-full flex items-center justify-center">
        <img
          className="w-1/2"
          src={
            vehicleType === "car"
              ? "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png"
              : vehicleType === "moto"
              ? "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
              : "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          }
          alt={
            vehicleType === "car"
              ? "car"
              : vehicleType === "moto"
              ? "moto"
              : "auto"
          }
        />
      </div>
      <div className="w-full border-t border-gray-300 mb-4">
        <div className="flex gap-4 items-center mt-2">
          <i className="text-xl font-medium ri-map-pin-user-fill"></i>
          <div className="border-b border-gray-300 w-full pb-2">
            <p className="text-gray-600 text-base ">{pickup}</p>
          </div>
        </div>
        <div className="flex gap-4 items-center mt-2">
          <i className="text-xl font-medium ri-map-pin-fill"></i>
          <div className="border-b border-gray-300 w-full pb-2">
            <p className="text-gray-600 text-base ">{destination}</p>
          </div>
        </div>
        <div className="flex gap-4 items-center mt-2">
          <i className="text-xl font-medium ri-bank-card-line"></i>
          <div>
            <h3 className="text-xl font-semibold">₹{fare[vehicleType]}</h3>
            <p className="text-gray-600 text-base ">Cash</p>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
      <button
        onClick={() => {
          setConfirmRidePanel(false);
          setVehicleFound(true);
          createRide();
        }}
        className="bg-green-600 w-full py-2 rounded-xl text-xl font-semibold text-white"
      >
        Confirm Ride
      </button>
    </div>
  );
};

export default ConfirmRide;
