import { View, StyleSheet, Image, FlatList } from "react-native";
import { Text } from "./Themed";
import React from "react";
import { TitleText } from "./StyledText";

const events = [
  {
    id: "1",
    name: "Saturday Socials",
    location: "Fairfield Leisure Centre",
    price: 12,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaJV24EqWv0D9TZQr0jmPRWCvpL5HENm6nC7LTBi6zAB19NtFXCL2IJaCbukXZNNngIwA&usqp=CAU",
  },
  {
    id: "2",
    name: "Saturday Socials",
    location: "Fairfield Leisure Centre",
    price: 12,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaJV24EqWv0D9TZQr0jmPRWCvpL5HENm6nC7LTBi6zAB19NtFXCL2IJaCbukXZNNngIwA&usqp=CAU",
  },
  {
    id: "3",
    name: "Saturday Socials",
    location: "Fairfield Leisure Centre",
    price: 12,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaJV24EqWv0D9TZQr0jmPRWCvpL5HENm6nC7LTBi6zAB19NtFXCL2IJaCbukXZNNngIwA&usqp=CAU",
  },
];

export default function FeaturedEvents() {
  return (
    <View>
      <TitleText style={{ fontSize: 18, marginBottom: 20, marginLeft: 20 }}>
        Featured events
      </TitleText>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item, index }) => (
          <View
            style={[
              styles.eventCard,
              index === 0 ? styles.eventCardFirst : null,
            ]}
          >
            <Image style={styles.eventImage} source={{ uri: item.image }} />
            <View style={styles.eventCardContent}>
              <Text style={styles.eventCardName}>{item.name}</Text>
              <Text style={styles.eventCardLocation}>{item.location}</Text>
              <Text style={styles.eventCardName}>${item.price}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  eventCard: {
    marginLeft: 30,
    position: "relative",
  },
  eventCardFirst: {
    marginLeft: 20,
  },
  eventImage: {
    borderRadius: 30,
    height: 400,
    width: 300,
  },
  eventCardContent: {
    position: "absolute",
    bottom: 0,
    padding: 20,
  },
  eventCardName: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 22,
    marginBottom: 5,
  },
  eventCardLocation: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 8,
  },
  eventCardPrice: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 22,
  },
});
