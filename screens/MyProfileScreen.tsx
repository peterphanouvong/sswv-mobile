import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { useAuth } from "../hooks/useAuth";
import { RootTabScreenProps } from "../types";

export default function MyProfileScreen({
  navigation,
}: RootTabScreenProps<"MyProfile">) {
  const { user } = useAuth();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My profile</Text>
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
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
