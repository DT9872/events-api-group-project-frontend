import { ReactNode, useEffect, useState } from "react";
import User from "../models/Users";
import UserContext from "./UserContext";

interface Props {
  children: ReactNode;
}

const UserContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>({
    _id: "63ebd51996022c8340139163",
  });

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
