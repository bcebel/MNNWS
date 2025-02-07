import React from "react";
import { Stack } from "expo-router";

import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="music" options={{ title: "Music" }} />
      <Tabs.Screen name="food" options={{ title: "Food" }} />
      <Tabs.Screen name="real-estate" options={{ title: "Real Estate" }} />
      <Tabs.Screen name="tech" options={{ title: "Tech" }} />
    </Tabs>
  );
}
