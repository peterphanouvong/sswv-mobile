import React from "react";
import { StyleSheet } from "react-native";
import FeaturedEvents from "../components/FeaturedEvents";
import HomeScreenHeader from "../components/HomeScreenHeader";
import { SafeAreaView, View } from "../components/Themed";
import { useAuth } from "../hooks/useAuth";

import { RootTabScreenProps } from "../types";

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  const { user } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <HomeScreenHeader user={user} navigation={navigation} />
        <FeaturedEvents />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
