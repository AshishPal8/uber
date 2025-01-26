import { createContext, useState } from "react";

export const UserDateContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({
    fullName: {
      firstName: "",
      lastName: "",
    },
    email: "",
  });
  return (
    <div>
      <UserDateContext.Provider value={{ user, setUser }}>
        {children}
      </UserDateContext.Provider>
    </div>
  );
};

export default UserContext;
