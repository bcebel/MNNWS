import { Link } from "expo-router";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to ATXTXA</Text>

      <Link href="/music" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Explore Live Music & Nightlife</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/food" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Find Your Next Meal</Text>
        </TouchableOpacity>
      </Link>
      {/* Add more links for Real Estate and Tech */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
