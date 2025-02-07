import { Stack } from "expo-router";

export default function MusicLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Music" }} />
      <Stack.Screen name="[id]" options={{ title: "Music Details" }} />
    </Stack>
  );
}
