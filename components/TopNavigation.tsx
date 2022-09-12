import { useNavigation } from "@react-navigation/native";
import { Icon } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { TitleText } from "./StyledText";
import { View } from "./Themed";

interface Props {
  title: string;
  hasBackButton?: boolean;
  backButtonHref?: string;
}

export default function TopNavigation({
  title,
  hasBackButton,
  backButtonHref,
}: Props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {hasBackButton ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            style={styles.backButton}
            name="arrow-back-outline"
            fill="#000"
          />
        </TouchableOpacity>
      ) : null}

      <TitleText style={styles.title}>{title}</TitleText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
  },
  backButton: {
    width: 20,
    height: 20,
    color: "white",
    marginRight: 10,
  },
  firstImage: {
    marginLeft: 20,
  },
});
