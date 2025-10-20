import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, useWindowDimensions } from "react-native";
import Header from "@/components/header";
import { Link } from "expo-router";

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const isWide = width >= 900;
  const imgW = isWide ? width * 0.45 : Math.min(width - 48, 420); // bildebredden

  return (
    <ScrollView style={styles.container}>
      <Header />

      {/* SEKSJON 1 – bilde venstre, tekst høyre */}
      <View style={[styles.section, isWide ? styles.row : styles.col]}>
        <View style={[styles.frame, { width: imgW }]}>
          <Image
            source={require("@/assets/images/Meg.png")}
            style={styles.frameImage}
          />
        </View>

        <View style={styles.textBlock}>
          <Text style={styles.h1}>Nora Tufte Thoresen</Text>
          <Text style={styles.lead}>Frontend- og mobilutvikling</Text>

          <Link href="/kontakt" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Kontakt meg!</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>

      {/* SEKSJON 2 – tekst venstre, bilde høyre helt ut til kanten */}
      <View
        style={[
          styles.section,
          isWide ? [styles.row, styles.bleedRight] : styles.col,
        ]}
      >
        <View style={styles.textBlock}>
          <Text style={styles.title}>OM MEG</Text>
          <Text style={styles.description}>
            Hei! Mitt navn er Nora Tufte Thoresen.{"\n"}
            Jeg er tredjeårsstudent i informasjonsteknologi frontend- og mobilutvikling ved Høyskolen Kristiania,
            og planlegger en master i interaksjonsdesign høsten 2026.{"\n"}
            Jeg brenner for å skape brukervennlige digitale løsninger som kombinerer kreativitet og teknologi.
            Med erfaring fra både design og utvikling trives jeg i tverrfaglige team, og motiveres av å gjøre
            komplekse prosesser enkle og intuitive for brukeren.
          </Text>

          <Link href="/cv" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Se min CV</Text>
            </TouchableOpacity>
          </Link>
        </View>

        {/* Bilde trekkes ut til høyre */}
        <View style={[styles.frame, { width: imgW }, isWide && styles.rightAligned, isWide && styles.flushRightImage]}>
          <Image
            source={require("@/assets/images/IMG_5194.jpg")}
            style={styles.frameImage}
          />
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

  /* Layout */
  section: {
    width: "100%",
    paddingHorizontal: 24,
    paddingVertical: 48,
    alignItems: "center",
    gap: 24,
  },
  row: { flexDirection: "row" },
  col: { flexDirection: "column" },

  /* Ramme rundt bilder */
  frame: {
    aspectRatio: 3 / 4,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#eee",
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  frameImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    // For web (react-native-web)
    // @ts-ignore
    objectFit: "cover",
    // @ts-ignore
    objectPosition: "center",
  },

  /* Tekstblokk */
  textBlock: { 
    flex: 1, 
    maxWidth: 700, 
    marginLeft: 40, 
  },
  h1: { 
    fontSize: 65, 
    lineHeight: 54,
    fontFamily: "Poppins_800ExtraBold", 
    marginBottom: 10 
  },
  lead: { 
    fontSize: 18, 
    lineHeight: 26, 
    fontFamily: "Lato_400Regular", 
    color: "#333" 
  },
  title: { 
    fontSize: 54, 
    fontFamily: "Poppins_800ExtraBold",
    lineHeight: 60 
  },
  description: { 
    marginTop: 12, 
    fontSize: 18, 
    fontFamily: "Lato_400Regular",
    lineHeight: 27, 
    color: "#333" 
  },

  /* Knapp */
  button: {
    marginTop: 16,
    backgroundColor: "#BE82A0",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    alignSelf: "flex-start",
  },
  buttonText: { 
    color: "#fff",
    fontFamily: "Lato_400Regular", 
    fontSize: 16 
},

  /* Spesielt for nederste seksjon */
  bleedRight: {
    paddingRight: 30, // fjern høyre padding
  },
  rightAligned: {
    marginLeft: "auto",
  },
  flushRightImage: {
    marginRight: -24, // trekk bildet helt ut til høyre
    borderTopRightRadius: 10, // ingen avrunding mot skjermkant
    borderBottomRightRadius: 0,
  },
});
