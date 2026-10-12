import React, { useEffect, useRef } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  Platform,
  StatusBar,
  useWindowDimensions,
} from "react-native";
import { Video, ResizeMode } from "expo-av";

// Alle videoene samlet her
const SOURCES: Record<string, any> = {
  tekstapp: require("../assets/videos/Tekstapp.mp4"),
  eksamen: require("../assets/videos/eksamen.mp4"),
  iosEksamen: require("../assets/videos/iOS-Eksamen.mp4"),
  iosArbeidskrav: require("../assets/videos/Arbeidskrav-iOS.mp4"),
  innovasjon: require("../assets/videos/planetPoints.mp4"),
  webEksamen: require("../assets/videos/Eksamen-webutvikling.mp4"),
  androidEksamen: require("../assets/videos/Android-eksamen.mp4"),
};
// Hovedkomponenten som viser den valgte videoen
export default function VideoPlayerScreen() {
  // Henter id-en til videoen fra navigasjonsparameterne
  const { id } = useLocalSearchParams<{ id: string }>();
  // Gjør det mulig å navigere tilbake til forrige side
  const router = useRouter();
  // Oppretter en referanse til videospilleren for å styre avspillingen
  const videoRef = useRef<Video>(null);
  // Henter skjermens bredde og høyde
  const { width, height } = useWindowDimensions();

  // Finner riktig video basert på id-en som ble sendt fra prosjektsiden
  const source = id ? SOURCES[id] : null;

  // Starter videoen automatisk på mobil, men ikke på web
  useEffect(() => {
    // Sjekker at plattformen ikke er web og at videospilleren finnes
    if (Platform.OS !== "web" && videoRef.current) {
      // Asynkron funksjon som starter videoavspillingen
      (async () => {
        try {
          await videoRef.current!.playAsync();
        } catch {}
        // Ignorerer eventuelle feil ved automatisk avspilling
      })();
    }
  }, []);

  // Viser en feilmelding dersom videoen ikke finnes
  if (!source) {
    return (
      <View style={[styles.root, styles.center]}>
        {/* Feilmelding */}
        <Text style={{ color: "white", marginBottom: 12 }}>
          Fant ikke video 🤔
        </Text>
        {/* Knapp som navigerer tilbake til forrige side */}
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backTxt}>Tilbake</Text>
        </Pressable>
      </View>
    );
  }

  // Egen videospiller for web
  if (Platform.OS === "web") {
    // Konverterer videokilden til en URL som HTML-videoen kan bruke
    const src = source as unknown as string;

    return (
      // Container som dekker hele vinduet
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "black",
          zIndex: 9999,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* HTML videoelement med innebygde avspillingskontroller */}
        <video
          src={src}
          style={{
            width: "100vw",
            height: "100vh",
            // Viser hele videoen uten å beskjære den
            objectFit: "contain", // viser hele videoen
            backgroundColor: "black",
          }}
          // Viser kontroller for avspilling, pause og lyd
          controls
          // Starter videoen automatisk
          autoPlay
          // Spiller videoen på nytt når den er ferdig
          loop
        />

        {/* Lukk knapp, går tilbake til forrige side */}
        <button
          onClick={() => router.back()}
          style={{
            position: "fixed",
            top: 16,
            right: 16,
            zIndex: 10000,
            background: "rgba(0,0,0,0.6)",
            borderRadius: "999px",
            border: "none",
            padding: "4px 10px",
            color: "white",
            cursor: "pointer",
            fontSize: 20,
            lineHeight: 1,
          }}
        >
          ✕
        </button>
      </div>
    );
  }

  // Egen videospiller for iOS og Android med expo-av
  return (
    // Hovedcontainer med svart bakgrunn
    <View style={styles.root}>
      {/* Skjuler statuslinjen på mobilen */}
      <StatusBar hidden />

      {/* Plasserer videoen midt på skjermen */}
      <View style={styles.videoWrapper}>
        <Video
          ref={videoRef} // Kobler videospilleren til referansen videoRef
          source={source} // Velger riktig videofil
          style={{ width, height }} // Tilpasser videospilleren til skjermens størrelse
          resizeMode={ResizeMode.CONTAIN} // Viser hele videoen uten beskjæring
          useNativeControls // Viser mobilens innebygde videokontroller
          shouldPlay // Starter avspillingen automatisk
          isLooping // Gjentar videoen når den er ferdigs
        />
      </View>

      {/* Lukke knapp for mobil versjon */}
      <Pressable onPress={() => router.back()} style={styles.closeBtn}>
        <Text style={styles.closeTxt}>✕</Text>
      </Pressable>
    </View>
  );
}

// Styling for siden
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "black",
  },
  videoWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  closeBtn: {
    position: "absolute",
    top: 16,
    right: 16,
    zIndex: 10,
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },
  closeTxt: {
    color: "white",
    fontSize: 20,
  },
  backBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: "white",
  },
  backTxt: {
    color: "black",
  },
});
