import "remixicon/fonts/remixicon.css";

const LocationSearchPanel = ({
  suggestions,
  setPanelOpen,
  setVehiclepanel,
  setPickup,
  setDestination,
  activeField,
}) => {
  const handleSuggestionClick = (location) => {
    if (activeField === "pickup") {
      setPickup(location);
    } else if (activeField === "destination") {
      setDestination(location);
    }
  };

  return (
    <div className="overflow-y-auto max-h-[60vh] p-4 bg-gray-50 border border-gray-200 rounded-lg">
      {suggestions.length > 0 ? (
        suggestions.map((location, index) => (
          <div
            key={index}
            onClick={() => handleSuggestionClick(location)}
            className="flex items-center gap-3 my-3 px-3 py-2 bg-white rounded-lg cursor-pointer hover:bg-gray-100 hover:scale-105 transition-all duration-200"
          >
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <i className="ri-map-pin-line text-lg text-gray-600"></i>
            </div>
            <div className="text-gray-800 text-base">{location}</div>
          </div>
        ))
      ) : (
        <div className="text-center py-4 text-gray-500">
          Start typing to find your spot!
        </div>
      )}
    </div>
  );
};

export default LocationSearchPanel;
