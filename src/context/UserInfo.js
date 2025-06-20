"use client";

import { createContext, useContext } from "react";

const UserInfoContext = createContext(undefined);

export default function UserInfoProvider({ children, userInfo }) {
  // Get user Info;
  return (
    <UserInfoContext.Provider value={userInfo}>
      {children}
    </UserInfoContext.Provider>
  );
}

export const useUserInfo = () => {
  return useContext(UserInfoContext);
};
