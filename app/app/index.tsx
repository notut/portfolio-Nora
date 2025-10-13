import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import Header from "@/components/header";
import { Link } from "expo-router";

const { height, width } = Dimensions.get("window");

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Header />

      <View style={styles.hero}>
      <Image source={require("../assets/images/Meg.png")} style={styles.image} />

        <View style={styles.textContainer}>
          <Text style={styles.title}>OM MEG</Text>
          {/*<Text style={styles.tagline}>Hei!</Text>*/}
          <Text style={styles.description}>
          Hei! Mitt navn er Nora Tufte Thoresen.
          Jeg er tredjeårsstudent i informasjonsteknologi frontend- og mobilutvikling ved Høyskolen Kristiania, 
          og planlegger en master i interaksjonsdesign høsten 2026. 
          Jeg brenner for å skape brukervennlige digitale løsninger som kombinerer kreativitet og teknologi. 
          Med erfaring fra både design og utvikling trives jeg i tverrfaglige team, 
          og motiveres av å gjøre komplekse prosesser enkle og intuitive for brukeren.
          </Text>
          <Link href="../app/prosjekter" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Se mine prosjekter</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefdfb",
  },
  hero: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 20,
    margin: 0,
  },
  image: {
    width: width * 0.5, 
    height: height,
    resizeMode: "cover",
    borderRadius: 10,
    margin: 5,
  },
  textContainer: {
    flex: 1,
    maxWidth: 400,
    margin: 10,
    alignSelf: "flex-start",
  },
  tagline: {
    color: "#D47CBF",
    fontStyle: "italic",
    fontSize: 18,
  },
  title: {
    fontSize: 54,
    fontWeight: "800",
    lineHeight: 60,
  },
  highlight: {
    color: "#D47CBF",
    fontStyle: "italic",
  },
  description: {
    marginVertical: 16,
    fontSize: 18,
    color: "#333",
  },
  button: {
    backgroundColor: "#D47CBF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
