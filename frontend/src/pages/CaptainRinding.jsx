import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FinishRide from "../components/captain/FinishRide";

const CaptainRinding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);

  useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishRidePanel]
  );

  return (
    <div className="h-screen relative">
      <div className="fixed flex items-center justify-between p-3 w-full">
        <img
          className="w-16 mb-5 absolute top-5 left-5"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="uber"
        />
        <Link
          to="/captain-home"
          className="absolute right-2 top-2 h-10 w-10 rounded-full flex items-center justify-center bg-white"
        >
          <i className="text-lg font-semibold ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="uber map"
          className="object-cover h-full w-full"
        />
      </div>
      <div
        className="h-1/5 py-4 px-2 flex items-center justify-between relative bg-yellow-100 pt-10"
        onClick={() => {
          setFinishRidePanel(true);
        }}
      >
        <h5
          className="p-1 text-center w-[90%] absolute top-0"
          onClick={() => {}}
        >
          <i className="text-3xl text-gray-800 ri-arrow-up-wide-line"></i>
        </h5>
        <h4 className="text-xl font-semibold">4 KM away</h4>
        <button className="bg-green-600 text-white font-semibold p-3 px-10 rounded-lg">
          Complete Ride
        </button>
      </div>
      <div
        ref={finishRidePanelRef}
        className="fixed z-10 bottom-0 bg-white p-2 w-full translate-y-full rounded-t-xl py-6 pt-12"
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>
    </div>
  );
};

export default CaptainRinding;
