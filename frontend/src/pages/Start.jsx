import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div className="bg-[url(/home.jpeg)] bg-cover bg-left h-screen pt-5  flex justify-between flex-col w-full">
      <img
        className="w-20 ml-14"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div className="bg-white py-4  px-4">
        <h2 className="text-3xl font-bold">Get Started with Uber</h2>
        <Link
          to="/login"
          className="w-full flex items-center justify-center bg-black text-white py-3 rounded-md mt-4"
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Start;
