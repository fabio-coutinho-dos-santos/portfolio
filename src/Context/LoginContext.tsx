import { useState, createContext } from "react";
interface LoginProviderProps{
  children: React.ReactNode
}
export const LoginContext = createContext({loggedIn: false,setLoggedIn: (loggedIn: boolean) => {}});

// see https://blog.devgenius.io/react-context-api-using-typescript-9d54e1c921dd
// see https://www.youtube.com/watch?v=2-6K-TMA-nw&t=738s

export const LoginProvider = ({ children }: LoginProviderProps) => {
  const [loggedIn, setLoggedIn] = useState(true)
  return (
   <LoginContext.Provider value={{loggedIn, setLoggedIn}}>{children}</LoginContext.Provider>
  );
};