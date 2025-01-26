import "remixicon/fonts/remixicon.css";

const LocationSearchPanel = ({ setVehiclepanel, setPanelOpen }) => {
  const locations = [
    "24B, Near Kapoor's cafe, Sherians coding School, Bhopal",
    "24A, Near Ashish's cafe, Sherians coding School, Bhopal",
    "24B, Near Metro station, Sherians coding School, Delhi",
    "24D, Near Petrol Pump, Sherians coding School, Ghaziabad",
  ];
  return (
    <div className="">
      {locations.map((location) => (
        <div
          onClick={() => {
            setVehiclepanel(true);
            setPanelOpen(false);
          }}
          key={location}
          className="flex gap-4 items-center justify-start my-2 px-2 py-1 border-2 border-white active:border-black rounded-xl"
        >
          <div className="w-12 h-8 bg-gray-200 rounded-md flex items-center justify-center">
            <i className="ri-map-pin-line text-xl"></i>
          </div>
          <div>{location}</div>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
