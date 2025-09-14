import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MusicScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nightlife & Music</Text>
      <Text>Explore Austin's vibrant music scene here!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});

export default MusicScreen;
