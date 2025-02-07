import React from "react";
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome to Minnowspace https://sovrn.co/gm4fz5y</Text>
      <Link href="https://sovrn.co/gm4fz5y">Go to Your New Place!</Link>
    </View>
  );
}
