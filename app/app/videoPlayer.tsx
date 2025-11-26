// app/video-player.tsx
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

// Alle videoene dine samlet her
const SOURCES: Record<string, any> = {
  oppgave2: require("../assets/videos/Oppgave2-video.mp4"),
  iosEksamen: require("../assets/videos/iOS-Eksamen.mp4"),
  iosArbeidskrav: require("../assets/videos/iOS-Arbeidskrav.mp4"),
  innovasjon: require("../assets/videos/Innovasjon.mp4"),
  webEksamen: require("../assets/videos/Eksamen-webutvikling.mp4"),
  androidEksamen: require("../assets/videos/Android-eksamen.mp4"),
};

export default function VideoPlayerScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const videoRef = useRef<Video>(null);
  const { width, height } = useWindowDimensions();

  const source = id ? SOURCES[id] : null;

  // Autoplay (ikke brukt på web)
  useEffect(() => {
    if (Platform.OS !== "web" && videoRef.current) {
      (async () => {
        try {
          await videoRef.current!.playAsync();
        } catch {}
      })();
    }
  }, []);

  if (!source) {
    return (
      <View style={[styles.root, styles.center]}>
        <Text style={{ color: "white", marginBottom: 12 }}>
          Fant ikke video 🤔
        </Text>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backTxt}>Tilbake</Text>
        </Pressable>
      </View>
    );
  }

  // 🔥 WEB-VERSJONEN – bruker HTML <video> for perfekt fullskjerm
  if (Platform.OS === "web") {
    // Bundleren (Vite/Webpack) gir en URL-string på web
    const src = source as unknown as string;

    return (
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
        <video
          src={src}
          style={{
            width: "100vw",
            height: "100vh",
            objectFit: "contain", // viser HELE videoen riktig
            backgroundColor: "black",
          }}
          controls
          autoPlay
          loop
        />

        {/* Lukk-knapp */}
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

  // 📱 NATIVE-VERSJONEN (expo-av)
  return (
    <View style={styles.root}>
      <StatusBar hidden />

      <View style={styles.videoWrapper}>
        <Video
          ref={videoRef}
          source={source}
          style={{ width, height }}
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          isLooping
        />
      </View>

      <Pressable onPress={() => router.back()} style={styles.closeBtn}>
        <Text style={styles.closeTxt}>✕</Text>
      </Pressable>
    </View>
  );
}

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
