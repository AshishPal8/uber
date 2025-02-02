const CaptainDetails = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwBBr7GLG5lj4h9ULGFCEq3dkvncwRtwihkpUElLHOe7KOSWBPLGctnnwaNR_aX8xYmdI&usqp=CAU"
            alt=""
            className="w-10 h-10  rounded-full"
          />
          <h4 className="font-medium text-lg">Harsh Patel</h4>
        </div>
        <div>
          <h3 className="text-lg font-bold">₹599.20</h3>
          <h6 className="text-sm text-gray-500 -mt-1">Earned</h6>
        </div>
      </div>
      <div className="mt-3 py-4 bg-gray-300 rounded-lg flex items-center justify-center gap-5">
        <div className="text-center">
          <i className="text-3xl font-thin ri-time-line"></i>
          <h2 className="text-lg font-semibold">8.2</h2>
          <h4 className="text-sm text-gray-500">Haurs Online</h4>
        </div>
        <div className="text-center">
          <i className="text-3xl font-thin ri-speed-up-fill"></i>
          <h2 className="text-lg font-semibold">8.2</h2>
          <h4 className="text-sm text-gray-500">Haurs Online</h4>
        </div>
        <div className="text-center">
          <i className="text-3xl font-thin ri-book-line"></i>
          <h2 className="text-lg font-semibold">8.2</h2>
          <h4 className="text-sm text-gray-500">Haurs Online</h4>
        </div>
      </div>
    </>
  );
};

export default CaptainDetails;
