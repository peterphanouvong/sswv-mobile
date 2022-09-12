import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider } from "./hooks/useAuth";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import React from "react";

const firebaseConfig = {
  apiKey: "AIzaSyC3ULRmVVRjFgndhKEsrW2Y_JdPKCFjlXs",
  authDomain: "sswv-360613.firebaseapp.com",
  projectId: "sswv-360613",
  storageBucket: "sswv-360613.appspot.com",
  messagingSenderId: "679383163848",
  appId: "1:679383163848:web:aa5eaded749e5b023156fd",
  measurementId: "G-LGPTRBVYLX",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva[colorScheme]}>
          <SafeAreaProvider>
            <AuthProvider>
              <Navigation colorScheme={colorScheme} />
            </AuthProvider>
            <StatusBar />
          </SafeAreaProvider>
        </ApplicationProvider>
      </>
    );
  }
}
