import { Pressable, Image, View, Text, StyleSheet, ImageSourcePropType } from "react-native";

// Definerer hvilke verdier VideoCard skal motta
type VideoCardProps = {
  thumbnail: ImageSourcePropType;
  width: number;
  height: number;
  onOpen: () => void;
};

// Gjenbrukbart videokort
export default function VideoCard({
  thumbnail,
  width,
  height,
  onOpen,
}: VideoCardProps) {
  return (
    // Åpner videoen når brukeren trykker på kortet
    <Pressable
      onPress={onOpen}
      style={[styles.videoCard, { width, height }]}
    >
      {/* Bilde som vises for hver video */}
      <Image
        source={thumbnail}
        style={{ width: "100%", height: "100%" }}
        resizeMode="cover"
      />

      {/* Play-ikon */}
      <View style={styles.overlay}>
        <Text style={styles.overlayText}>▶︎</Text>
      </View>
    </Pressable>
  );
}

// Styling for videokortet
const styles = StyleSheet.create({
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

  overlayText: {
    color: "#fff",
    fontSize: 18,
  },
});