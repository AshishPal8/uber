const VehiclePanel = ({
  setVehiclepanel,
  setConfirmRidePanel,
  fare,
  selectedVehicle,
}) => {
  return (
    <div>
      <div className="flex items-center justify-between px-3">
        <h1 className="font-bold text-xl">Choose a Vehicle</h1>
        <h5
          onClick={() => {
            setVehiclepanel(false);
          }}
          className="text-xl font-semibold"
        >
          <i className="ri-arrow-down-wide-line"></i>
        </h5>
      </div>
      <div
        onClick={() => {
          setVehiclepanel(false);
          setConfirmRidePanel(true);
          selectedVehicle("car");
        }}
        className="flex w-full items-center justify-between p-2 border-2 active:border-black rounded-xl my-2"
      >
        <img
          className="h-14"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png"
          alt=""
        />
        <div className="w-1/2">
          <h4 className="font-medium text-sm">
            UberGo{" "}
            <span>
              <i className="ri-user-line"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-medium text-xs">Affordable, compact rides</p>
        </div>
        <h2 className="text-xl font-bold">₹{fare.car}</h2>
      </div>
      <div
        onClick={() => {
          setVehiclepanel(false);
          setConfirmRidePanel(true);
          selectedVehicle("moto");
        }}
        className="flex w-full items-center justify-between p-2 border-2 active:border-black rounded-xl my-2"
      >
        <img
          className="h-10"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className="w-1/2">
          <h4 className="font-medium text-sm">
            Moto{" "}
            <span>
              <i className="ri-user-line"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-medium text-xs">Affordable motorcycle rides</p>
        </div>
        <h2 className="text-xl font-bold">₹{fare.moto}</h2>
      </div>
      <div
        onClick={() => {
          setVehiclepanel(false);
          setConfirmRidePanel(true);
          selectedVehicle("auto");
        }}
        className="flex w-full items-center justify-between p-2 border-2 active:border-black rounded-xl my-2"
      >
        <img
          className="h-14"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        />
        <div className="w-1/2">
          <h4 className="font-medium text-sm">
            UberAuto{" "}
            <span>
              <i className="ri-user-line"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">1 mins away</h5>
          <p className="font-medium text-xs">Affordable auto rides</p>
        </div>
        <h2 className="text-xl font-bold">₹{fare.auto}</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
