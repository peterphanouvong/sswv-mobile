import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { useAuth } from "../hooks/useAuth";
import { RootTabScreenProps } from "../types";

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  const { user } = useAuth();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{user?.email}</Text>
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
