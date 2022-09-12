import { Input, Spinner, Icon, Datepicker } from "@ui-kitten/components/ui";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView, Text, View } from "../components/Themed";
import TopNavigation from "../components/TopNavigation";
import { useAuth } from "../hooks/useAuth";

export default function MyProfileProfileScreen() {
  const { user } = useAuth();

  const [displayName, setDisplayName] = useState<string | null | undefined>(
    user?.displayName
  );

  const [date, setDate] = useState<string | null | undefined>();

  if (!user) return <Spinner />;

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation hasBackButton={true} title="Profile" />
      <View style={styles.form}>
        <Input
          style={styles.formItem}
          placeholder="Your name"
          value={displayName!}
          onChangeText={(nextValue) => setDisplayName(nextValue)}
          label="Full name"
        />
        <Datepicker
          label="Date of birth"
          placeholder="Pick Date"
          date={date}
          onSelect={(nextDate) => setDate(nextDate)}
          accessoryRight={<Icon name="calendar-outline" />}
          style={styles.formItem}
        />
        <Input
          style={styles.formItem}
          placeholder="email"
          value={user.email!}
          onChangeText={(nextValue) => setDisplayName(nextValue)}
          label="Email"
        />
      </View>

      <Text>Hello</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    paddingHorizontal: 20,
    gap: 20,
  },
  formItem: {
    marginBottom: 10,
  },
});
