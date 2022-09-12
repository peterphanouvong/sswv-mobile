import { IdTokenResult, User, UserCredential } from "firebase/auth";
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
  const [user, setUser] = useState<UserCredential["user"] | undefined>({
    displayName: "Tom Phanouvong",
    emailVerified: false,
    isAnonymous: false,
    // @ts-ignore
    metadata: null,
    providerData: [],
    refreshToken: "",
    tenantId: null,
    delete: function (): Promise<void> {
      throw new Error("Function not implemented.");
    },
    getIdToken: function (forceRefresh?: boolean | undefined): Promise<string> {
      throw new Error("Function not implemented.");
    },
    getIdTokenResult: function (
      forceRefresh?: boolean | undefined
    ): Promise<IdTokenResult> {
      throw new Error("Function not implemented.");
    },
    reload: function (): Promise<void> {
      throw new Error("Function not implemented.");
    },
    toJSON: function (): object {
      throw new Error("Function not implemented.");
    },
    email: "peterphanouvong@gmail.com",
    phoneNumber: null,
    photoURL:
      "https://yt3.ggpht.com/ytc/AMLnZu-0wvMMkH9Bla_YkA0sZbYF2KIaWbKJk2-0bi-Z=s900-c-k-c0x00ffffff-no-rj",
    providerId: "",
    uid: "",
  });

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
