import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import Header from "@/components/header";
import { Link } from "expo-router";


export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Header />

      <View style={styles.hero}>
      <Image source={require("../assets/images/Meg.png")} style={styles.image} />

        <View style={styles.textContainer}>
          <Text style={styles.tagline}>Hei!</Text>
          <Text style={styles.title}>
            Det er på tide å <Text style={styles.highlight}>vise</Text> hva du kan
          </Text>
          <Text style={styles.description}>
            Jeg er en kreativ utvikler og designer med lidenskap for å bygge visuelle og interaktive løsninger som skiller seg ut.
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
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 300, 
    height: 400,
    borderRadius: 12,
    margin: 10,
  },
  textContainer: {
    flex: 1,
    maxWidth: 400,
    margin: 10,
  },
  tagline: {
    color: "#D47CBF",
    fontStyle: "italic",
    fontSize: 18,
  },
  title: {
    fontSize: 34,
    fontWeight: "700",
    lineHeight: 40,
  },
  highlight: {
    color: "#D47CBF",
    fontStyle: "italic",
  },
  description: {
    marginVertical: 16,
    fontSize: 16,
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
