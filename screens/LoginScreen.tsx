import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { ActivityIndicator, Button, StyleSheet, View } from "react-native";
import { db } from "../App";
import { useAuth } from "../hooks/useAuth";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const { setUser, setAuthToken, getAuthToken } = useAuth();

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      "679383163848-pmsicghgdv3hdf5av1iqdo37hj810o31.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    const signIn = async (response: any) => {
      const { id_token } = response.params;

      const auth = getAuth();
      const credential = GoogleAuthProvider.credential(id_token);

      try {
        setIsLoading(true);
        const res = await signInWithCredential(auth, credential);
        setAuthToken(JSON.stringify(res));
        setUser(res.user);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };

    if (response?.type === "success") {
      signIn(response);
    }
  }, [response]);

  const handleAddToFirestore = async () => {
    console.log(db);
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.log("Error adding document: ", e);
    }
  };

  const handleButton = async () => {
    console.log(await getAuthToken());
  };

  if (isLoading) return <ActivityIndicator />;

  return (
    <View style={styles.container}>
      <Button
        disabled={!request}
        title="Login with google"
        onPress={() => {
          promptAsync();
        }}
      />
      {/* <Button title="Add to firestore" onPress={handleAddToFirestore} /> */}
      <Button title="Get auth token" onPress={handleButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
  },
});
