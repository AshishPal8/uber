import { useContext, useEffect, useState } from "react";
import { CaptainDataContext } from "../context/captainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainProtectWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { setCaptain } = useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const validateToken = async () => {
      // If no token, redirect immediately
      if (!token) {
        navigate("/captain-login");
        return;
      }

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/captains/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 201) {
          setCaptain(response.data);
          setIsLoading(false);
        }
      } catch (err) {
        console.error("Authentication error:", err);
        localStorage.removeItem("token");
        navigate("/captain-login");
      }
    };

    validateToken();
  }, [token, navigate, setCaptain]);

  // Only show loading state if we have a token and are validating
  if (isLoading && token) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg font-medium">Loading...</div>
      </div>
    );
  }

  return children;
};

export default CaptainProtectWrapper;
