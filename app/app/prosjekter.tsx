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

        {/* Arbeidskrav iOS */}       
        <View style={styles.notesContainer}>
            <View style={[styles.row, { flexDirection: isWide ? "row" : "column", gap: isWide ? 24 : 16 }]}>
                <Pressable
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
                    source={require("@/assets/videos/iOS-Arbeidskrav.mov")}
                    useNativeControls={false}
                    resizeMode={ResizeMode.CONTAIN}
                    isLooping
                    shouldPlay={false}
                    />

                    <View style={styles.overlay}>
                        <Text style={styles.overlayText}>{isPlaying ? "⏸︎" : "▶︎"}</Text>
                    </View>
                </Pressable>

                <View style={[styles.textSide, { paddingRight: isWide ? 24 : 16 }]}>
                    <Text style={styles.title}>Notat App</Text>
                    <Text style={styles.lead}>Trykk på videoen for å spille/pause.</Text>
                    <Text style={styles.developed}>Utviklet i: Swift.</Text>
                    <Text style={styles.body}>
                    Dette prosjektet er et arbeidskrav i faget iOS-programmering, der jeg utviklet en notatapp{"\n"} 
                    for iOS ved hjelp av Swift. Appen lar brukeren opprette nye notater, velge kategori, slette{"\n"} 
                    og gjenopprette oppgaver. Den har også støtte for både lys og mørk modus, og en meny der{"\n"} 
                    brukeren kan sortere og filtrere notatene etter ulike kriterier for å få bedre oversikt.{"\n\n"}
                    Gjennom prosjektet fikk jeg erfaring med UIKit, datastrukturer og bruk av interaktive elementer{"\n"} 
                    i iOS, samtidig som jeg fikk en bedre forståelse for hvordan man bygger et funksjonelt og{"\n"} 
                    brukervennlig grensesnitt. Målet var å lage en enkel, men helhetlig applikasjon som viser{"\n"} 
                    hvordan man kan kombinere funksjonalitet og design på en effektiv måte.{"\n\n"}
                    Vedlagt ligger et skjermopptak av den endelige appen jeg lagde i dette prosjektet.</Text>
                </View>
            </View>
        </View>

        {/* Planet Points prototype */}       
        <View style={styles.planetContainer}>
            <View style={[styles.row, { flexDirection: isWide ? "row" : "column", gap: isWide ? 24 : 16 }]}>
                <Pressable
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
                    />

                    <View style={styles.overlay}>
                        <Text style={styles.overlayText}>{isPlaying ? "⏸︎" : "▶︎"}</Text>
                    </View>
                </Pressable>

                <View style={[styles.textSide, { paddingRight: isWide ? 24 : 16 }]}>
                    <Text style={styles.title}>Planet Points</Text>
                    <Text style={styles.lead}>Trykk på videoen for å spille/pause.</Text>
                    <Text style={styles.developed}>Utviklet i: Figma.</Text>
                    <Text style={styles.body}>
                        I denne gruppeeksamenen utviklet vi et fiktivt produkt fra idéfase til ferdig prototype,{"\n"} 
                        med mål om å skape en innovativ løsning med reell brukerverdi. Prototypen fikk navnet "Planet Points",{"\n"}  
                        en app med bærekraft i fokus som belønner brukere for miljøvennlige valg i hverdagen.{"\n\n"}  
                        Prosessen besto av flere deler: idéutvikling, konseptbeskrivelse, business case, utvikling av prototype{"\n"}  
                        og brukertesting med reelle brukere. Vi jobbet systematisk med innovasjonsmetoder fra pensum,{"\n"}  
                        og testet tidlig for å samle innsikt og forbedre løsningen basert på tilbakemeldinger.{"\n"} 
                        Prosjektet ga meg erfaring med hele innovasjonsløpet, fra research og konseptutvikling til prototyping,{"\n"}  
                        brukertesting og iterasjon. Jeg fikk særlig styrket ferdighetene mine innen interaksjonsdesign,{"\n"}  
                        Figma, tverrfaglig samarbeid og å formidle en løsning gjennom både skriftlig oppgave og presentasjon.{"\n\n"} 
                        Vedlagt ligger et skjermopptak av den endelige prototypen vi lagde i dette prosjektet.</Text>
                </View>
            </View>
        </View>

        {/* Trump nettside */}       
        <View style={styles.trumpContainer}>
            <View style={[styles.row, { flexDirection: isWide ? "row" : "column", gap: isWide ? 24 : 16 }]}>
                <Pressable
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
                    source={require("@/assets/videos/Eksamen-webutvikling.mov")}
                    useNativeControls={false}
                    resizeMode={ResizeMode.CONTAIN}
                    isLooping
                    shouldPlay={false}
                    />

                    <View style={styles.overlay}>
                        <Text style={styles.overlayText}>{isPlaying ? "⏸︎" : "▶︎"}</Text>
                    </View>
                </Pressable>

                <View style={[styles.textSide, { paddingRight: isWide ? 24 : 16 }]}>
                    <Text style={styles.title}>Trump Verse</Text>
                    <Text style={styles.lead}>Trykk på videoen for å spille/pause.</Text>
                    <Text style={styles.developed}>Utviklet i: Java med React.</Text>
                    <Text style={styles.body}>
                    I denne eksamensoppgaven utviklet jeg en fullstack-applikasjon kalt "TrumpVerse",{"\n"} 
                    en nettside med CRUD-funksjonalitet (Create, Read, Update, Delete) for produkter.{"\n"} 
                    Løsningen besto av en backend bygget i ASP.NET Core med SQLite-database og et REST API,{"\n"} 
                    samt en frontend laget i React med Tailwind CSS. Brukerne kan legge til, oppdatere,{"\n"} 
                    vise og slette produkter (TrumpMerch), samt laste opp bilder gjennom et eget API-endepunkt.{"\n"} 
                    Jeg implementerte også søkefunksjon, responsivt design og universell utforming ved hjelp{"\n"} 
                    av semantisk HTML, fargevalg for lesbarhet og varsler ved handlinger.{"\n\n"}
                    Prosjektet ga meg praktisk erfaring med å bygge en komplett applikasjon,{"\n"} 
                    feilsøke integrasjonen mellom frontend og backend, og sikre både brukervennlighet og{"\n"} 
                    teknisk robusthet i løsningen.{"\n\n"}
                    Vedlagt ligger det endelige resultatet av nettsiden.</Text>
                </View>
            </View>
        </View>

         {/* Android eksamen */}       
         <View style={styles.androidContainer}>
            <View style={[styles.row, { flexDirection: isWide ? "row" : "column", gap: isWide ? 24 : 16 }]}>
                <Pressable
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
                    source={require("@/assets/videos/Android-eksamen.mov")}
                    useNativeControls={false}
                    resizeMode={ResizeMode.CONTAIN}
                    isLooping
                    shouldPlay={false}
                    />

                    <View style={styles.overlay}>
                        <Text style={styles.overlayText}>{isPlaying ? "⏸︎" : "▶︎"}</Text>
                    </View>
                </Pressable>

                <View style={[styles.textSide, { paddingRight: isWide ? 24 : 16 }]}>
                    <Text style={styles.title}>Rick & Morty App</Text>
                    <Text style={styles.lead}>Trykk på videoen for å spille/pause.</Text>
                    <Text style={styles.developed}>Utviklet i: Kotlin.</Text>
                    <Text style={styles.body}>
                    I denne eksamensoppgaven utviklet jeg en Android-app som henter data fra et eksternt API{"\n"} 
                    og kombinerer dette med funksjonalitet for å opprette og lagre egne elementer lokalt.{"\n"} 
                    Appen viser en liste med karakterer fra API-et, med mulighet for å klikke seg inn på{"\n"} 
                    detaljerte sider og legge til egne notater. Brukeren kan også opprette egne karakterer,{"\n"} 
                    som lagres i en lokal Room-database, og få oversikt over dem i en egen seksjon. Jeg{"\n"} 
                    implementerte Jetpack Compose for å bygge grensesnittet, Retrofit og OkHttpClient for{"\n"} 
                    API-kall, og ViewModel for å håndtere data og livssyklus. For å sikre god struktur{"\n"} 
                    organiserte jeg koden i moduler og brukte tydelige navn og kommentarer.{"\n\n"}
                    Prosjektet ga meg praktisk erfaring med moderne Android-utvikling, særlig integrasjonen{"\n"} 
                    mellom API-data, lokal lagring og et intuitivt brukergrensesnitt med Compose.{"\n\n"}
                    Vedlagt ligger et skjermopptak av den endelige appen.</Text>
                </View>
            </View>
        </View>

        {/* Interaksjonsdesign eksamen */}       
        <View style={styles.traineContainer}>
            <View style={[styles.row, { flexDirection: isWide ? "row" : "column", gap: isWide ? 24 : 16 }]}>
                <Pressable
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
                    source={require("@/assets/videos/Interaksjonsdesign-eksamen.mov")}
                    useNativeControls={false}
                    resizeMode={ResizeMode.CONTAIN}
                    isLooping
                    shouldPlay={false}
                    />

                    <View style={styles.overlay}>
                        <Text style={styles.overlayText}>{isPlaying ? "⏸︎" : "▶︎"}</Text>
                    </View>
                </Pressable>

                <View style={[styles.textSide, { paddingRight: isWide ? 24 : 16 }]}>
                    <Text style={styles.title}>Trainé Prototype</Text>
                    <Text style={styles.lead}>Trykk på videoen for å spille/pause.</Text>
                    <Text style={styles.developed}>Utviklet i: Figma.</Text>
                    <Text style={styles.body}>
                    I denne eksamensoppgaven utviklet vi en prototype av treningsappen "Trainé", som kombinerer{"\n"} 
                    trening, kosthold og aktivitets­sporing i én helhetlig løsning. Målet var å gjøre det enklere{"\n"} 
                    og mer motiverende for brukere å skape og opprettholde sunne vaner i hverdagen. Vi startet{"\n"} 
                    med idémyldring, innsiktsarbeid (spørreundersøkelse, SWOT-analyse og personas) og definerte{"\n"} 
                    en primærmålgruppe på unge voksne med interesse for helse og livsstil. Min rolle var spesielt{"\n"}
                    knyttet til interaksjonsdesign og prototyping i Figma, der jeg utarbeidet wireframes, fargeprofil{"\n"} 
                    og interaktive sider. Vi testet prototypen på brukere og justerte blant annet kontraster og{"\n"} 
                    navigasjon for å gjøre løsningen mer intuitiv og universelt utformet.{"\n\n"}
                    Prosjektet ga meg praktisk erfaring med hele designløpet, fra innsikt og idéutvikling til ferdig{"\n"} 
                    klikkbar prototype. Prosjektet styrket også ferdighetene mine innen brukervennlig design, universell{"\n"} 
                    utforming og iterative prosesser.{"\n\n"}
                    Vedlagt ligger den endelige prototypen.</Text>
                </View>
            </View>
        </View>

        {/* Unity eksamen */}       
        <View style={styles.unityContainer}>
            <View style={[styles.row, { flexDirection: isWide ? "row" : "column", gap: isWide ? 24 : 16 }]}>
                <Pressable
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
                    source={require("@/assets/videos/Interaksjonsdesign-eksamen.mov")}
                    useNativeControls={false}
                    resizeMode={ResizeMode.CONTAIN}
                    isLooping
                    shouldPlay={false}
                    />

                    <View style={styles.overlay}>
                        <Text style={styles.overlayText}>{isPlaying ? "⏸︎" : "▶︎"}</Text>
                    </View>
                </Pressable>

                <View style={[styles.textSide, { paddingRight: isWide ? 24 : 16 }]}>
                    <Text style={styles.title}>Ballongjakten</Text>
                    <Text style={styles.lead}>Trykk på videoen for å spille/pause.</Text>
                    <Text style={styles.developed}>Utviklet i: Unity.</Text>
                    <Text style={styles.body}>
                    I denne gruppeeksamenen utviklet vi et spill i Unity, der målet var å lage en interaktiv opplevelse{"\n"} 
                    med både spillmekanikk, lyd, animasjon og enkel kunstig intelligens. Spilleren kan bevege seg rundt,{"\n"} 
                    skyte ballonger og unngå en KI-styrt agent som følger etter ved hjelp av Unitys NavMesh-system.{"\n"} 
                    Spillet inneholder startmeny, pausefunksjon, vinn/avslutningsskjerm og tydelige overganger for å gi{"\n"} 
                    en helhetlig opplevelse. Jeg bidro særlig med design, interaktivitet og implementering av funksjoner{"\n"} 
                    i C#, inkludert scripts for ballonger, poengtelling og våpenmekanikk. Vi brukte Unitys animasjonssystem{"\n"} 
                    til partikkel­effekter ved eksplosjoner, og la til lyd for bevegelse, pust, tidsnedtelling og{"\n"} 
                    ballong­sprekking for å styrke atmosfæren.{"\n\n"}
                    Prosjektet ga meg erfaring med å bygge en komplett spillopplevelse fra idé til ferdig build, inkludert{"\n"} 
                    samarbeid gjennom GitHub, testing av kollisjoner, universell utforming og iterative forbedringer.{"\n\n"}
                    Vedlagt ligger lenke til GitHub repositoryet vi brukte og et skjermopptak av det endelige spillet.{"\n"}
                    <Link href="https://github.com/katrineNaess/UnityEksamen.git"style={styles.link}>Se GitHub Repositoryet her</Link>
                    </Text>
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
      notesContainer: {
        backgroundColor: "#F5D5E4",
        height: 500,
        marginBottom: 20,
      },
      planetContainer: {
        backgroundColor: "#E1EDDA",
        height: 500,
        marginBottom: 20,
      },
      trumpContainer: {
        backgroundColor: "#FBE5C8",
        height: 500,
        marginBottom: 20,
      },
      androidContainer: {
        backgroundColor: "#E8ECF3",
        height: 500,
        marginBottom: 20,
      },
      traineContainer: {
        backgroundColor: "#D8CEE6",
        height: 500,
        marginBottom: 20,
      },
      unityContainer: {
        backgroundColor: "#FEE7E6",
        height: 500,
        marginBottom: 20,
      },
      link: {
        color: "#1e90ff",
        marginTop: 8,
        textDecorationLine: "underline",
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
      developed: {
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
