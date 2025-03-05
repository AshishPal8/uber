import { useContext, useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/captain/CaptainDetails";
import RidePopup from "../components/captain/RidePopup";
import ConfirmRidePopup from "../components/captain/ConfirmRidePopup";
import { CaptainDataContext } from "../context/captainContext";
import { SocketContext } from "../context/socketContext";

const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(true);
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);

  const ridePopupPanelRef = useRef(null);
  const confirmRidePopupPanelRef = useRef(null);

  const { captain } = useContext(CaptainDataContext);
  const { socket } = useContext(SocketContext);

  console.log(captain);

  useEffect(() => {
    socket.emit("join", { userType: "captain", userId: captain._id });
  });

  useGSAP(
    function () {
      if (ridePopupPanel) {
        gsap.to(ridePopupPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ridePopupPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridePopupPanel]
  );

  useGSAP(
    function () {
      if (confirmRidePopupPanel) {
        gsap.to(confirmRidePopupPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePopupPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePopupPanel]
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
      <div className="h-2/3">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="uber map"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="py-4 px-2">
        <CaptainDetails />
      </div>
      <div
        ref={ridePopupPanelRef}
        className="fixed z-10 bottom-2 bg-green-200 translate-y-full p-2 w-full rounded-t-xl py-6 pt-12"
      >
        <RidePopup
          setRidePopupPanel={setRidePopupPanel}
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
        />
      </div>
      <div
        ref={confirmRidePopupPanelRef}
        className="fixed z-10 bottom-2 bg-green-200 translate-y-full p-2 w-full h-screen rounded-t-xl py-6 pt-12"
      >
        <ConfirmRidePopup
          setRidePopupPanel={setRidePopupPanel}
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
        />
      </div>
    </div>
  );
};

export default CaptainHome;
