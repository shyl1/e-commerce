
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [Token, setToken] = useState(null);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) setToken(savedToken);
  }, []);

  return (
    <UserContext.Provider value={{ Token, setToken }}>
      {children}
    </UserContext.Provider>
  );
}
