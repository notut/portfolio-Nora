import { Text, View, StyleSheet, ScrollView, useWindowDimensions, Pressable, Platform, Modal, StatusBar } from "react-native";
import Header from "@/components/header";
import { Video, ResizeMode, AVPlaybackStatus } from "expo-av";
import { useRef, useState, useMemo, useEffect } from "react";

// --- Enkel "lightbox" for fullskjermvideo
function VideoLightbox({
  visible,
  source,
  onClose,
}: {
  visible: boolean;
  source: any; // require(...) eller { uri }
  onClose: () => void;
}) {
  const fullRef = useRef<Video>(null);

  // Autoplay når modalen åpner
  useEffect(() => {
    (async () => {
      if (visible && fullRef.current) {
        try {
          await fullRef.current.playAsync();
        } catch {}
      }
    })();
  }, [visible]);

  // Rydd opp når vi lukker (pause)
  const handleRequestClose = async () => {
    try {
      await fullRef.current?.pauseAsync();
    } catch {}
    onClose();
  };

  return (
    <Modal
      visible={visible}
      onRequestClose={handleRequestClose}
      animationType="fade"
      transparent
    >
      {Platform.OS !== "web" ? <StatusBar hidden /> : null}
      <Pressable style={styles.backdrop} onPress={handleRequestClose}>
        {/* Stopper klikk-boble når man treffer selve spilleren */}
        <Pressable style={styles.lightbox} onPress={() => {}}>
          <Video
            ref={fullRef}
            source={source}
            style={styles.lightboxVideo}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN} // viser hele videoen
            shouldPlay
            isLooping
          />
          <Pressable onPress={handleRequestClose} style={styles.closeBtn} accessibilityLabel="Lukk video">
            <Text style={styles.closeTxt}>✕</Text>
          </Pressable>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

// --- Gjenbrukbart videokort (thumbnail + play-ikon)
function VideoCard({
  source,
  width,
  height,
  onOpen,
}: {
  source: any;
  width: number;
  height: number;
  onOpen: () => void;
}) {
  const thumbRef = useRef<Video>(null);

  // Vi lar thumbnailen stå på pause og bruke contain så man ser formatet i kortet også
  return (
    <Pressable onPress={onOpen} style={[styles.videoCard, { width, height }]}>
      <Video
        ref={thumbRef}
        source={source}
        style={{ width: "100%", height: "100%" }}
        useNativeControls={false}
        resizeMode={ResizeMode.CONTAIN}
        shouldPlay={false}
        isLooping
      />
      <View style={styles.overlay}>
        <Text style={styles.overlayText}>▶︎</Text>
      </View>
    </Pressable>
  );
}

export default function ProjectScreen() {
  const { width, height } = useWindowDimensions();
  const isWide = width >= 900;

  const dims = useMemo(() => {
    const boxW = Math.min(width * 0.46, 640);
    const boxH = Math.min(height * 0.56, 520);
    return { boxW, boxH };
  }, [width, height]);

  // Lightbox state
  const [lightboxSrc, setLightboxSrc] = useState<any | null>(null);
  const openLightbox = (src: any) => setLightboxSrc(src);
  const closeLightbox = () => setLightboxSrc(null);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Header />

      {/* Kryssplattform eksamen */}
      <View style={styles.boxes}>
        <View style={[styles.row, { flexDirection: isWide ? "row" : "column", gap: isWide ? 24 : 16 }]}>
          <VideoCard
            source={require("../assets/videos/Oppgave2-video.mp4")}
            width={dims.boxW}
            height={dims.boxH}
            onOpen={() => openLightbox(require("../assets/videos/Oppgave2-video.mp4"))}
          />
          <View style={[styles.textSide, { paddingRight: isWide ? 24 : 16 }]}>
            <Text style={styles.title}>DugnadHub</Text>
            <Text style={styles.lead}>Trykk på videoen for å åpne i popup og se hele formatet.</Text>
            <Text style={styles.developed}>Utviklet i: JavaScript med kryssplattform rammeverk React Native.</Text>
            <Text style={styles.body}>…</Text>
          </View>
        </View>
      </View>

      {/* iOS arbeidskrav */}
      <View style={styles.boxes}>
        <View style={[styles.row, { flexDirection: isWide ? "row" : "column", gap: isWide ? 24 : 16 }]}>
          <VideoCard
            source={require("../assets/videos/iOS-Arbeidskrav.mp4")}
            width={dims.boxW}
            height={dims.boxH}
            onOpen={() => openLightbox(require("../assets/videos/iOS-Arbeidskrav.mp4"))}
          />
          <View style={[styles.textSide, { paddingRight: isWide ? 24 : 16 }]}>
            <Text style={styles.title}>Notat App</Text>
            <Text style={styles.lead}>Trykk på videoen for å åpne i popup og se hele formatet.</Text>
            <Text style={styles.developed}>Utviklet i: Swift.</Text>
            <Text style={styles.body}>…</Text>
          </View>
        </View>
      </View>

      {/* Planet Points */}
      <View style={styles.boxes}>
        <View style={[styles.row, { flexDirection: isWide ? "row" : "column", gap: isWide ? 24 : 16 }]}>
          <VideoCard
            source={require("../assets/videos/Innovasjon.mp4")}
            width={dims.boxW}
            height={dims.boxH}
            onOpen={() => openLightbox(require("../assets/videos/Innovasjon.mp4"))}
          />
          <View style={[styles.textSide, { paddingRight: isWide ? 24 : 16 }]}>
            <Text style={styles.title}>Planet Points</Text>
            <Text style={styles.lead}>Trykk på videoen for popup.</Text>
            <Text style={styles.developed}>Utviklet i: Figma.</Text>
            <Text style={styles.body}>…</Text>
          </View>
        </View>
      </View>

      {/* TrumpVerse */}
      <View style={styles.boxes}>
        <View style={[styles.row, { flexDirection: isWide ? "row" : "column", gap: isWide ? 24 : 16 }]}>
          <VideoCard
            source={require("../assets/videos/Eksamen-webutvikling.mp4")}
            width={dims.boxW}
            height={dims.boxH}
            onOpen={() => openLightbox(require("../assets/videos/Eksamen-webutvikling.mp4"))}
          />
          <View style={[styles.textSide, { paddingRight: isWide ? 24 : 16 }]}>
            <Text style={styles.title}>Trump Verse</Text>
            <Text style={styles.lead}>Trykk på videoen for popup.</Text>
            <Text style={styles.developed}>Utviklet i: Java med React.</Text>
            <Text style={styles.body}>…</Text>
          </View>
        </View>
      </View>

      {/* Android */}
      <View style={styles.boxes}>
        <View style={[styles.row, { flexDirection: isWide ? "row" : "column", gap: isWide ? 24 : 16 }]}>
          <VideoCard
            source={require("../assets/videos/Android-eksamen.mp4")}
            width={dims.boxW}
            height={dims.boxH}
            onOpen={() => openLightbox(require("../assets/videos/Android-eksamen.mp4"))}
          />
          <View style={[styles.textSide, { paddingRight: isWide ? 24 : 16 }]}>
            <Text style={styles.title}>Rick & Morty App</Text>
            <Text style={styles.lead}>Trykk på videoen for popup.</Text>
            <Text style={styles.developed}>Utviklet i: Kotlin.</Text>
            <Text style={styles.body}>…</Text>
          </View>
        </View>
      </View>

      {/* Lightbox modal – vises når lightboxSrc != null */}
      <VideoLightbox
        visible={!!lightboxSrc}
        source={lightboxSrc}
        onClose={closeLightbox}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f6f4ef" },
  content: { paddingBottom: 48 },
  boxes: {
    backgroundColor: "#F2EDE9",
    height: 500,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
  },
  row: {
    marginTop: 16,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  videoCard: {
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#eae6de",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    position: "relative",
    marginLeft: 16,
    alignSelf: "flex-start",
  },
  overlay: {
    position: "absolute",
    bottom: 12,
    right: 12,
    backgroundColor: "rgba(0,0,0,0.45)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },
  overlayText: { color: "#fff", fontSize: 18 },
  textSide: { flex: 1, minWidth: 240, paddingHorizontal: 12 },
  title: { fontSize: 35, fontFamily: "Poppins_700Bold", marginBottom: 8, color: "#1a1a1a" },
  lead: { fontSize: 16, lineHeight: 22, marginBottom: 8, color: "#2a2a2a" },
  developed: { fontSize: 16, lineHeight: 22, marginBottom: 8, color: "#2a2a2a" },
  body: { fontSize: 15, lineHeight: 22, color: "#444", marginBottom: 16 },

  // Lightbox styles
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.75)",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  lightbox: {
    width: "100%",
    maxWidth: 1200,
    aspectRatio: 16 / 9, // ramme; selve videoen er "contain"
    backgroundColor: "#000",
    borderRadius: 16,
    overflow: "hidden",
  },
  lightboxVideo: {
    width: "100%",
    height: "100%",
  },
  closeBtn: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },
  closeTxt: { color: "#fff", fontSize: 16 },
});
