import { User, UserCredential } from "firebase/auth";
import React, { createContext, ReactNode, useContext, useState } from "react";
import * as SecureStore from "expo-secure-store";

const AuthContext = createContext<{
  user: UserCredential["user"] | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  setAuthToken: (token: any) => Promise<void>;
  getAuthToken: () => Promise<string | null>;
}>({
  user: undefined,
  setUser: () => {},
  setAuthToken: () => new Promise(() => {}),
  getAuthToken: () => new Promise(() => null),
});

interface Props {
  children?: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<UserCredential["user"] | undefined>();

  const setAuthToken = async (token: any) => {
    await SecureStore.setItemAsync("auth_token", token);
  };

  const getAuthToken = async () => {
    return await SecureStore.getItemAsync("auth_token");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        setAuthToken,
        getAuthToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
