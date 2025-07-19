import { AuthContext } from "./AuthContext";
import { useEffect, useState } from "react";

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
  const storedUser = localStorage.getItem("user");
  try {
    return storedUser && storedUser !== "undefined"
      ? JSON.parse(storedUser)
      : null;
  } catch {
    return null;
  }
});

  const updateUser = (data) => {
    //  console.log("Updating user with:", data);
    setCurrentUser(data);
  };

 useEffect(() => {
  if (currentUser !== null && currentUser !== undefined) {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }
}, [currentUser]);

  return (
 <AuthContext.Provider value={{ currentUser, updateUser }}>{children}</AuthContext.Provider>

  );
};
