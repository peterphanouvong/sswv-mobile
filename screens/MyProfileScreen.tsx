import { Avatar, Icon, Menu, MenuItem } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import { TitleText } from "../components/StyledText";
import { SafeAreaView, View } from "../components/Themed";
import TopNavigation from "../components/TopNavigation";
import { useAuth } from "../hooks/useAuth";
import { RootTabScreenProps } from "../types";

export default function MyProfileScreen({
  navigation,
}: RootTabScreenProps<"MyProfile">) {
  const { user } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation title="My profile" />
      <View style={styles.mainContent}>
        <View style={styles.avatarName}>
          <Avatar style={styles.avatar} source={{ uri: user?.photoURL }} />
          <TitleText style={styles.title}>{user?.displayName}</TitleText>
        </View>
        <Menu style={styles.menu}>
          <MenuItem
            title="Profile"
            accessoryLeft={<Icon name="person-outline" />}
            accessoryRight={<Icon name="chevron-right-outline" />}
            onPress={() => navigation.navigate("MyProfileProfile")}
          />
          <MenuItem
            title="My events"
            accessoryLeft={<Icon name="calendar-outline" />}
            accessoryRight={<Icon name="chevron-right-outline" />}
          />
          <MenuItem
            title="Notifications"
            accessoryLeft={<Icon name="bell-outline" />}
            accessoryRight={<Icon name="chevron-right-outline" />}
          />
          <MenuItem
            title="Security"
            accessoryLeft={<Icon name="shield-outline" />}
            accessoryRight={<Icon name="chevron-right-outline" />}
          />
          <MenuItem
            title="Language"
            accessoryLeft={<Icon name="message-square-outline" />}
            accessoryRight={<Icon name="chevron-right-outline" />}
          />
          <MenuItem
            title="Logout"
            accessoryLeft={<Icon name="log-out-outline" />}
            accessoryRight={<Icon name="chevron-right-outline" />}
          />
        </Menu>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    width: 120,
    height: 120,
  },
  avatarName: {
    alignItems: "center",
  },
  mainContent: {
    padding: 20,
  },
  list: {
    flex: 1,
    height: "100%",
    width: "100%",
    marginTop: 15,
  },
  title: {
    fontSize: 20,
    marginTop: 15,
  },
  dividerTop: {
    marginTop: 20,
    marginBottom: 10,
  },
  divider: {
    marginVertical: 10,
  },
  menu: {
    marginTop: 15,
  },
});
