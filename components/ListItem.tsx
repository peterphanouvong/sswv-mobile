import React from "react";
import { Text, View } from "./Themed";
import { StyleSheet } from "react-native";
import { Icon } from "@ui-kitten/components";

type Props = {
  text: string;
  icon?: string;
};

export const ListItem = (props: Props) => {
  return (
    <View style={styles.listItem}>
      {props.icon ? (
        <Icon style={styles.listItemIcon} fill="#000" name={props.icon} />
      ) : (
        <></>
      )}
      <Text style={styles.listItemText}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  listItemIcon: {
    height: 25,
    marginRight: 10,
    width: 25,
  },
  listItemText: {
    fontSize: 18,
  },
});
