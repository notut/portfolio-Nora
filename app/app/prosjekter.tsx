import Header from "@/components/header";
import VideoCard from "@/components/videoCard";
import {
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  View,
  Text,
} from "react-native";
import { useMemo } from "react";
import { useRouter } from "expo-router";

export default function ProjectScreen() {
  // Henter bredden og høyden for responsivt design
  const { width, height } = useWindowDimensions();
  // Viser video og tekst ved siden av hverandre på brede skjermer
  const isWide = width >= 900;
  // Navigerer mellom sider
  const router = useRouter();

  // Beregner størrelsen på videokortene ut fra skjermstørrelsen
  const dims = useMemo(() => {
    // Maksimal bredde er 640
    const boxW = Math.min(width * 0.46, 640);
    // Maksimal høyde er 520
    const boxH = Math.min(height * 0.56, 520);

    return { boxW, boxH };
  }, [width, height]);

  return (
    // Gjør det mulig å scrolle gjennom alle prosjektene
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Header />

      {/* Tekstapp - bachelor prosjekt */}
      <View style={styles.boxes}>
        {/* Plasserer video og tekst ved siden av hverandre på brede skjermer, under hverandre på smalere skjermer */}
        <View style={[styles.row, 
          { flexDirection: isWide ? "row" : "column", gap: isWide ? 24 : 16 },]}>
          {/* Videokort med eget forsidebilde */}
          <VideoCard
            thumbnail={require("../assets/images/statensVegvesen.png")}
            width={dims.boxW}
            height={dims.boxH}
            // Åpner riktig video når brukeren trykker på kortet
            onOpen={() =>
              router.push({
                pathname: "/videoPlayer",
                params: { id: "tekstapp" },
              })
            }
          />

          {/* Tekstområdet ved siden av videoen */}
          <View style={[styles.textSide, { paddingRight: isWide ? 24 : 16 }]}>
            <Text style={styles.title}>Tekstapp</Text>
            <Text style={styles.lead}>Trykk på videoen for å åpne den i fullskjerm og se hele formatet.</Text>
            <Text style={styles.developed}>Utviklet i: TypeScript med rammeverk React.</Text>
            <Text style={styles.body}>
              Jeg utviklet sammen med bachelorgruppen min et nytt administrasjonsgrensesnitt for Tekstapp, 
              et internt verktøy hos Statens vegvesen for håndtering av tekster på bokmål, nynorsk og engelsk til vegvesen.no.{"\n"} 
              Løsningen gjør det enklere å opprette, finne, redigere og organisere tekstnøkler, og er utviklet med React, TypeScript, Vite, Netlify og Firebase.{"\n\n"}
              Gjennom prosjektet har jeg styrket ferdighetene mine innen frontendutvikling, komponentbasert design og utvikling av brukervennlige grensesnitt. 
              Vi jobbet iterativt med Design Sprint, smidig utvikling og brukertesting, og gjennomførte syv brukertester med ansatte i Statens vegvesen. 
              Tilbakemeldingene ble brukt aktivt til å videreutvikle og forbedre løsningen.
              Bachelorprosjektet ga meg spesielt verdifull erfaring med å utvikle en løsning basert på reelle brukerbehov og krav fra en ekstern oppdragsgiver. 
              Jeg fikk også større forståelse for hvordan struktur, søk, filtrering og tydelige arbeidsflyter kan gjøre komplekse administrative systemer enklere å bruke.
              Prosjektet ga meg erfaring med hele utviklingsprosessen, fra innsiktsarbeid og design til implementasjon, testing og ferdig løsning.{"\n\n"} 
              Vedlagt ligger et skjermopptak av den endelige løsningen vi utviklet.{"\n"}
              Link til repository: https://github.com/KajaJohanne/BAO304-Tekstapp
            </Text>
          </View>
        </View>
      </View>

      {/* Kryssplattform eksamen */}
      <View style={styles.boxes}>
        {/* Tilpasser plasseringen av video og tekst til skjermbredden */}
        <View
          style={[
            styles.row,
            {
              flexDirection: isWide ? "row" : "column",
              gap: isWide ? 24 : 16,
            },
          ]}
        >
          {/* Videokort med forsidebilde og navigasjon til videospilleren */}
          <VideoCard
            thumbnail={require("../assets/images/Dugnadhub.png")}
            width={dims.boxW}
            height={dims.boxH}
            onOpen={() =>
              router.push({
                pathname: "/videoPlayer",
                params: { id: "eksamen" },
              })
            }
          />
          {/* Prosjektinformasjon */}
          <View style={[styles.textSide, { paddingRight: isWide ? 24 : 16 }]}>
            <Text style={styles.title}>DugnadHub</Text>
            <Text style={styles.lead}>
              Trykk på videoen for å åpne den i fullskjerm og se hele formatet.
            </Text>
            <Text style={styles.developed}>
              Utviklet i: JavaScript med kryssplattform rammeverk React Native.
            </Text>
            <Text style={styles.body}>
              Jeg utviklet DugnadHub, en kryssplattform-applikasjon som forenkler
              organisering av dugnader gjennom{"\n"}
              funksjoner som innlogging, påmelding, bildehåndtering, kommentarfelt
              og administrasjon av arrangementer.{"\n"}
              Løsningen er bygget med React Native, Expo og Firebase, og fungerer
              både på web og iOS.{"\n\n"}
              Gjennom arbeidet har jeg styrket ferdighetene mine innen strukturert
              mobil- og webutvikling,{"\n"}
              komponentbasert design, database-modellering og autentisering. Jeg
              lærte spesielt mye om å tilpasse UI{"\n"}
              og funksjonalitet på tvers av plattformer, samt å bygge en ryddig og
              gjenbrukbar kodebase.{"\n\n"}
              Eksamen har også gitt meg bedre forståelse for arkitekturvalg,
              state-håndtering og hvordan man planlegger{"\n"}
              funksjonalitet basert på kravspesifikasjoner. Jeg har jobbet
              selvstendig med problemløsing, feilhåndtering og{"\n"}
              teknisk kvalitet, og sitter igjen med et ferdig og funksjonelt
              produkt jeg er stolt av.{"\n\n"}
              Vedlagt ligger et skjermopptak av den endelige løsningen jeg lagde,
              vist på web.
            </Text>
          </View>
        </View>
      </View>

      {/* iOS Eksamen */}
      <View style={styles.boxes}>
        {/* Tilpasser plasseringen av video og tekst til skjermbredden */}
        <View
          style={[
            styles.row,
            {
              flexDirection: isWide ? "row" : "column",
              gap: isWide ? 24 : 16,
            },
          ]}
        >
          {/* Selve video kort */}
          <VideoCard
            thumbnail={require("../assets/videos/iOS-Eksamen.mp4")}
            width={dims.boxW}
            height={dims.boxH}
            // Åpner fullvisning av video
            onOpen={() =>
              router.push({
                pathname: "/videoPlayer",
                params: { id: "iosEksamen" },
              })
            }
          />
          {/* Tekst ved siden av video, posisjonering */}
          <View style={[styles.textSide, { paddingRight: isWide ? 24 : 16 }]}>
            <Text style={styles.title}>Beacon</Text>
            <Text style={styles.lead}>
              Trykk på videoen for å åpne den i fullskjerm og se hele formatet.
            </Text>
            <Text style={styles.developed}>Utviklet i: Swift.</Text>
            <Text style={styles.body}>
              I dette prosjektet utviklet jeg en komplett iOS-app som kombinerer
              kart, søk, datahåndtering og lokal{"\n"}
              lagring. Jeg brukte SwiftUI, MapKit, Geoapify og SwiftData for å
              bygge en løsning som både fungerer{"\n"}
              teknisk og gir en moderne brukeropplevelse. Målet var å samle alt
              jeg har lært i én helhetlig applikasjon.{"\n\n"}
              Gjennom prosessen lærte jeg mye om asynkrone API-kall,
              datastrukturer, state-håndtering og feilhåndtering.{"\n"}
              Jeg erfarte hvor viktig det er med god struktur, tydelige modeller
              og ryddige tjenester når prosjektet vokser.{"\n"}
              Arbeidet ga meg bedre forståelse av hvordan data flyter fra API til
              UI.{"\n\n"}
              Jeg fikk også verdifull innsikt i UI/UX, animasjoner og hvordan små
              designvalg påvirker helhetsinntrykket.{"\n"}
              Prosjektet gjorde meg tryggere på å bygge større løsninger, teste
              underveis og tenke som en utvikler som{"\n"}
              både skriver kode og skaper en opplevelse. Det har gitt meg
              sterkere ferdigheter i moderne iOS-utvikling.{"\n\n"}
              Vedlagt ligger et skjermopptak av den endelige løsningen jeg lagde.
            </Text>
          </View>
        </View>
      </View>

      {/* iOS arbeidskrav */}
      <View style={styles.boxes}>
        {/* Tilpasser plasseringen av video og tekst til skjermbredden */}
        <View
          style={[
            styles.row,
            {
              flexDirection: isWide ? "row" : "column",
              gap: isWide ? 24 : 16,
            },
          ]}
        >
          {/* Selve video kort */}
          <VideoCard
            thumbnail={require("../assets/videos/Arbeidskrav-iOS.mp4")}
            width={dims.boxW}
            height={dims.boxH}
            // Åpner video
            onOpen={() =>
              router.push({
                pathname: "/videoPlayer",
                params: { id: "iosArbeidskrav" },
              })
            }
          />
          {/* Prosjektbeskrivelse */}
          <View style={[styles.textSide, { paddingRight: isWide ? 24 : 16 }]}>
            <Text style={styles.title}>ToDo App</Text>
            <Text style={styles.lead}>
              Trykk på videoen for å åpne den i fullskjerm og se hele formatet.
            </Text>
            <Text style={styles.developed}>Utviklet i: Swift.</Text>
            <Text style={styles.body}>
              I arbeidskravet ToDo utviklet jeg en enkel, men funksjonell notat-
              og oppgaveapp i Swift og SwiftUI. Målet{"\n"}
              var å lære grunnleggende appstruktur, datastrøm og interaksjon i
              moderne iOS-utvikling. Appen lot brukeren{"\n"}
              opprette, lagre og slette notater, og hver oppføring ble presentert
              i en oversiktlig listevisning som{"\n"}
              oppdaterte seg dynamisk med SwiftUI sin state-håndtering.{"\n\n"}
              Gjennom arbeidet fikk jeg praktisk erfaring med å bygge egne
              modeller, bruke @State og @Binding, og strukturere{"\n"}
              visninger på en måte som gjorde appen lett å forstå og
              videreutvikle. Jeg lærte også å håndtere enkel lagring,{"\n"}
              enten via UserDefaults eller en lokal modell i minnet, og hvordan
              SwiftUI gjør det enkelt å holde UI{"\n"}
              synkronisert med data.{"\n\n"}
              Prosjektet ga meg en solid introduksjon til SwiftUI-tankegangen,
              spesielt hvordan små komponenter kan settes{"\n"}
              sammen for å bygge en helhetlig app. Det var et fint første steg
              før de større prosjektene i faget, og ga meg{"\n"}
              trygghet i å jobbe med lister, inputs, navigasjon og
              grunnleggende app-logikk.{"\n\n"}
              Vedlagt ligger et skjermopptak av den endelige løsningen jeg lagde.
            </Text>
          </View>
        </View>
      </View>

      {/* Planet Points */}
      <View style={styles.boxes}>
        {/* Tilpasser plasseringen av video og tekst til skjermbredden */}
        <View
          style={[
            styles.row,
            {
              flexDirection: isWide ? "row" : "column",
              gap: isWide ? 24 : 16,
            },
          ]}
        >
          {/* Selve video kort */}
          <VideoCard
            thumbnail={require("../assets/images/PP.png")}
            width={dims.boxW}
            height={dims.boxH}
            // Åpner video
            onOpen={() =>
              router.push({
                pathname: "/videoPlayer",
                params: { id: "innovasjon" },
              })
            }
          />
          {/* Prosjektbeskrivelse */}
          <View style={[styles.textSide, { paddingRight: isWide ? 24 : 16 }]}>
            <Text style={styles.title}>Planet Points</Text>
            <Text style={styles.lead}>
              Trykk på videoen for å åpne den i fullskjerm.
            </Text>
            <Text style={styles.developed}>Utviklet i: Figma.</Text>
            <Text style={styles.body}>
              I dette gruppeprosjektet utviklet vi et fiktivt produkt fra idéfase
              til ferdig prototype, med mål om å{"\n"}
              skape en innovativ løsning med reell brukerverdi. Prototypen fikk
              navnet "Planet Points", en app{"\n"}
              med bærekraft i fokus som belønner brukere for miljøvennlige valg i
              hverdagen.{"\n\n"}
              Prosessen besto av flere deler: idéutvikling, konseptbeskrivelse,
              business case, utvikling av{"\n"}
              prototype og brukertesting med reelle brukere. Vi jobbet
              systematisk med innovasjonsmetoder{"\n"}
              fra pensum, og testet tidlig for å samle innsikt og forbedre
              løsningen basert på tilbakemeldinger.{"\n\n"}
              Prosjektet ga meg erfaring med hele innovasjonsløpet, fra research
              og konseptutvikling til{"\n"}
              prototyping, brukertesting og iterasjon. Jeg fikk særlig styrket
              ferdighetene mine innen{"\n"}
              interaksjonsdesign, tverrfaglig samarbeid og å formidle en løsning
              gjennom både skriftlig{"\n"}
              oppgave og presentasjon.{"\n\n"}
              Vedlagt ligger et skjermopptak av den endelige prototypen vi lagde
              i dette prosjektet.
            </Text>
          </View>
        </View>
      </View>

      {/* TrumpVerse */}
      <View style={styles.boxes}>
        {/* Tilpasser plasseringen av video og tekst til skjermbredden */}
        <View
          style={[
            styles.row,
            {
              flexDirection: isWide ? "row" : "column",
              gap: isWide ? 24 : 16,
            },
          ]}
        >
          {/* Selve video kort */}
          <VideoCard
            thumbnail={require("../assets/videos/Eksamen-webutvikling.mp4")}
            width={dims.boxW}
            height={dims.boxH}
            // Åpner video
            onOpen={() =>
              router.push({
                pathname: "/videoPlayer",
                params: { id: "webEksamen" },
              })
            }
          />
          {/* Prosjektbeskrivelse */}
          <View style={[styles.textSide, { paddingRight: isWide ? 24 : 16 }]}>
            <Text style={styles.title}>Trump Verse</Text>
            <Text style={styles.lead}>
              Trykk på videoen for å åpne den i fullskjerm.
            </Text>
            <Text style={styles.developed}>Utviklet i: Java med React.</Text>
            <Text style={styles.body}>
              I denne eksamensoppgaven hvor temaet måtte være Trump, utviklet jeg en fullstack-applikasjon kalt
              "TrumpVerse", en nettside{"\n"}
              med CRUD-funksjonalitet (Create, Read, Update, Delete) for
              produkter. Løsningen besto av en{"\n"}
              backend bygget i ASP.NET Core med SQLite-database og et REST API,
              samt en frontend laget i "React"{"\n"}
              med Tailwind CSS.{"\n\n"}
              Brukerne kan legge til, oppdatere, vise og slette produkter
              (TrumpMerch), samt laste opp bilder{"\n"}
              gjennom et eget API-endepunkt. Jeg implementerte også
              søkefunksjon, responsivt design og universell{"\n"}
              utforming ved hjelp av semantisk HTML, fargevalg for lesbarhet og
              varsler ved handlinger.{"\n\n"}
              Prosjektet ga meg praktisk erfaring med å bygge en komplett
              applikasjon, feilsøke integrasjonen{"\n"}
              mellom frontend og backend, og sikre både brukervennlighet og
              teknisk robusthet i løsningen.{"\n\n"}
              Vedlagt ligger det endelige resultatet av nettsiden.
            </Text>
          </View>
        </View>
      </View>

      {/* Android */}
      <View style={styles.boxes}>
        {/* Tilpasser plasseringen av video og tekst til skjermbredden */}
        <View
          style={[
            styles.row,
            {
              flexDirection: isWide ? "row" : "column",
              gap: isWide ? 24 : 16,
            },
          ]}
        >
          {/* Videokort */}
          <VideoCard
            thumbnail={require("../assets/images/rickAndmorty.png")}
            width={dims.boxW}
            height={dims.boxH}
            // Åpner videos
            onOpen={() =>
              router.push({
                pathname: "/videoPlayer",
                params: { id: "androidEksamen" },
              })
            }
          />
          {/* Prosjektbeskrivelse */}
          <View style={[styles.textSide, { paddingRight: isWide ? 24 : 16 }]}>
            <Text style={styles.title}>Rick & Morty App</Text>
            <Text style={styles.lead}>
              Trykk på videoen for å åpne den i fullskjerm.
            </Text>
            <Text style={styles.developed}>Utviklet i: Kotlin.</Text>
            <Text style={styles.body}>
              I denne eksamensoppgaven utviklet jeg en Android-app som henter
              data fra et eksternt API og{"\n"}
              kombinerer dette med funksjonalitet for å opprette og lagre egne
              elementer lokalt. Appen viser{"\n"}
              en liste med karakterer fra API-et, med mulighet for å klikke seg
              inn på detaljerte sider og legge{"\n"}
              til egne notater. Brukeren kan også opprette egne karakterer, som
              lagres i en lokal Room-database,{"\n"}
              og få oversikt over dem i en egen seksjon.{"\n\n"}
              Jeg implementerte Jetpack Compose for å bygge grensesnittet,
              Retrofit og OkHttpClient for API-kall,{"\n"}
              og ViewModel for å håndtere data og livssyklus. For å sikre god
              struktur organiserte jeg koden i moduler{"\n"}
              og brukte tydelige navn og kommentarer.{"\n\n"}
              Prosjektet ga meg praktisk erfaring med moderne Android-utvikling,
              særlig integrasjonen mellom API-data,{"\n"}
              lokal lagring og et intuitivt brukergrensesnitt med Compose.{"\n\n"}
              Vedlagt ligger et skjermopptak av den endelige appen.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

// Styling for prosjektsiden
const styles = StyleSheet.create({
  // Bakgrunn og størrelse på hele siden
  container: { 
    flex: 1, 
    backgroundColor: "#f6f4ef" 
  },
  content: { 
    paddingBottom: 48 
  },
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
  textSide: { 
    flex: 1, 
    minWidth: 240, 
    paddingHorizontal: 12 
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
    color: "#2a2a2a" 
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
    marginBottom: 16 
  },
});
