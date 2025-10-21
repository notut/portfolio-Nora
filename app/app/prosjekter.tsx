import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, useWindowDimensions, Pressable, Platform } from "react-native";
import Header from "@/components/header";
import { Link } from "expo-router";
import { Video, ResizeMode } from "expo-av";
import { useRef, useState, useMemo } from "react";

export default function ProjectScreen() {
    const { width, height } = useWindowDimensions();
    const isWide = width >= 900;
    const videoRef = useRef<Video>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const dims = useMemo(() => {
        const boxW = Math.min(width * 0.46, 640);
        const boxH = Math.min(height * 0.56, 520);
        return { boxW, boxH };
    }, [width, height]);

    const onTogglePlay = async () => {
        const status = await videoRef.current?.getStatusAsync();
        if (!status || !('isPlaying' in status)) return;
        if (status.isPlaying) {
            await videoRef.current?.pauseAsync();
            setIsPlaying(false);
        } else {
            await videoRef.current?.playAsync();
            setIsPlaying(true);
        }
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Header />

        <View style={styles.planetContainer}>
            <View style={[styles.row, { flexDirection: isWide ? "row" : "column", gap: isWide ? 24 : 16 }]}>
                '<Pressable
                onPress={onTogglePlay}
                style={[styles.videoCard, {
                    width: dims.boxW,
                    height: dims.boxH,
                    marginLeft: isWide ? 16 : 12, 
                    alignSelf: isWide ? "flex-start" : "center",
                    },
                ]}
                >
                    <Video
                    ref={videoRef}
                    style={{ width: "100%", height: "100%" }}
                    source={require("@/assets/videos/Innovasjon.mov")}
                    useNativeControls={false}
                    resizeMode={ResizeMode.CONTAIN}
                    isLooping
                    shouldPlay={false}
                    posterSource={require("@/assets/images/PP.png")}
                    posterStyle={styles.videoPoster}
                    />

                    <View style={styles.overlay}>
                        <Text style={styles.overlayText}>{isPlaying ? "⏸︎" : "▶︎"}</Text>
                    </View>
                </Pressable>

                <View style={[styles.textSide, { paddingRight: isWide ? 24 : 16 }]}>
                    <Text style={styles.title}>Planet Points</Text>
                    <Text style={styles.lead}>Trykk på videoen for å spille/pause.</Text>
                    <Text style={styles.body}>
                        I denne gruppeeksamenen utviklet vi et fiktivt produkt fra idéfase til ferdig prototype,{"\n"} 
                        med mål om å skape en innovativ løsning med reell brukerverdi. Prototypen fikk navnet "Planet Points",{"\n"}  
                        en app med bærekraft i fokus som belønner brukere for miljøvennlige valg i hverdagen.{"\n\n"}  
                        Prosessen besto av flere deler: idéutvikling, konseptbeskrivelse, business case, utvikling av prototype{"\n"}  
                        og brukertesting med reelle brukere. Vi jobbet systematisk med innovasjonsmetoder fra pensum,{"\n"}  
                        og testet tidlig for å samle innsikt og forbedre løsningen basert på tilbakemeldinger.{"\n"} 
                        Prosjektet ga meg erfaring med hele innovasjonsløpet, fra research og konseptutvikling til prototyping,{"\n"}  
                        brukertesting og iterasjon. Jeg fikk særlig styrket ferdighetene mine innen interaksjonsdesign,{"\n"}  
                        tverrfaglig samarbeid og å formidle en løsning gjennom både skriftlig oppgave og presentasjon.{"\n\n"} 
                        Vedlagt ligger et skjermopptak av den endelige prototypen vi lagde i dette prosjektet.</Text>
                </View>
            </View>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f6f4ef",
      },
      planetContainer: {
        backgroundColor: "#FBE5C8",
        height: 500,
      },
      content: {
        paddingBottom: 48,
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
      },
      video: {
        width: "100%",
        height: "100%",
        ...(Platform.OS === "web" ? { objectFit: "contain", objectPosition: "center" } : {}),
      },
      videoPoster: {
        width: "100%",
        height: "100%",
        ...(Platform.OS === "web" ? { objectFit: "contain", objectPosition: "center" } : {}),
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
      textSide: {
        flex: 1,
        minWidth: 240,
        paddingHorizontal: 12,
      },
      title: {
        fontSize: 35,
        fontFamily: "Poppins_700Bold",
        marginBottom: 8,
        color: "#1a1a1a",
      },
      lead: {
        fontSize: 16,
        lineHeight: 22,
        marginBottom: 8,
        color: "#2a2a2a",
      },
      body: {
        fontSize: 15,
        lineHeight: 22,
        color: "#444",
        marginBottom: 16,
      },
});
