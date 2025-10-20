import { Stack } from "expo-router";
import React from "react";
import { useFonts, Poppins_800ExtraBold, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { Lato_400Regular } from "@expo-google-fonts/lato";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins_800ExtraBold,
    Poppins_700Bold,
    Lato_400Regular,
  });

  if (!fontsLoaded) return null;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="hjem" />
      <Stack.Screen name="prosjekter" />
      <Stack.Screen name="kontakt" />
      <Stack.Screen name="cv" />
    </Stack>
  );
}
