import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="hjem" />
      <Stack.Screen name="prosjekter" />
      <Stack.Screen name="kontakt" />
    </Stack>
  );
}
