import { ReactNode, createContext, useState } from "react";

type UserContextType = {
  isOpenModal: boolean,
  setIsOpenModal: (newState: boolean) => void
}

type UserContextProps = {
  children: ReactNode;
}

const initialValue = {
  isOpenModal: false,
  setIsOpenModal: (newState: boolean) => { },
}

export const UserContext = createContext<UserContextType>(initialValue)

export const UserContextProvider = ({ children }: UserContextProps) => {

  const [isOpenModal, setIsOpenModal] = useState(initialValue.isOpenModal)

  return (
    <UserContext.Provider value={{ isOpenModal, setIsOpenModal }}>
      {children}
    </UserContext.Provider>
  )
}