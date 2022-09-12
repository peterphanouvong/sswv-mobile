import { User } from "@firebase/auth";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Avatar, Button, Icon, Input } from "@ui-kitten/components";
import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { RootTabParamList, RootStackParamList } from "../types";
import { LightText, TitleText } from "./StyledText";

interface Props {
  user: User | undefined;
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<RootTabParamList, "Home", undefined>,
    // @ts-ignore
    NativeStackNavigationProp<RootStackParamList, string, undefined>
  >;
}

const HomeScreenHeader = ({ user, navigation }: Props) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.avatarContainer}>
          <Avatar
            size={"large"}
            style={{ marginRight: 12 }}
            // @ts-ignore
            source={{
              uri: user?.photoURL,
            }}
          />
          <View style={styles.textContainer}>
            <LightText>Good morning 👋</LightText>
            <Pressable onPress={() => navigation.navigate("MyProfile")}>
              <TitleText style={styles.title}>{user?.displayName}</TitleText>
            </Pressable>
          </View>
        </View>
        <Button
          style={styles.button}
          status="basic"
          appearance="outline"
          accessoryLeft={<Icon style={styles.icon} name="bell-outline" />}
        />
      </View>
      <View style={styles.searchBarContainer}>
        <Input
          placeholder="Search"
          value={searchValue}
          accessoryLeft={<Icon name="search-outline" />}
          accessoryRight={<Icon name="options-2-outline" />}
          onChangeText={(nextValue) => setSearchValue(nextValue)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  avatarContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    borderRadius: 24,
    width: 24,
    height: 24,
  },
  innerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textContainer: {
    display: "flex",
    gap: 4,
  },
  title: {
    fontSize: 16,
  },
  icon: {
    width: 32,
    height: 32,
  },
  searchBarContainer: {
    marginTop: 20,
  },
});

export default HomeScreenHeader;
