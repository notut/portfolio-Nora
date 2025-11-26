import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, useWindowDimensions } from "react-native";
import Header from "@/components/header";
import { Link } from "expo-router";

export default function ContactScreen() {
    const { width } = useWindowDimensions();
    const isWide = width >= 900;

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Header />

        <View style={[styles.card, !isWide && styles.cardNarrow]}>
            <View style={[styles.left, !isWide && styles.leftNarrow]}>
                <Text style={styles.kicker}>Nora Tufte Thoresen</Text>
                <Text style={styles.title}>KONTAKT</Text>
                
                <Text style={styles.intro}>For jobbstillinger, prosjekter eller bare en hyggelig prat - ta kontakt.</Text>

                <View style={styles.grid}>
                    <View style={styles.col}>
                        <Text style={styles.label}>Navn</Text>
                        <Text style={styles.value}>Nora Tufte Thoresen</Text>

                        <Text style={[styles.label, { marginTop: 18 }]}>Basert i</Text>
                        <Text style={styles.value}>Oslo, Norge</Text>
                    </View>

                    <View style={styles.col}>
                        <Text style={styles.label}>E-post</Text>
                        <Link href="mailto:noratt66@gmail.com" style={styles.link} accessibilityRole="link">noratt66@gmail.com</Link>

                        <Text style={[styles.label, { marginTop: 18 }]}>Telefon</Text>
                        <Link href="tel:+4740100141" style={styles.link} accessibilityRole="link">+47 401 00 141</Link>

                        <Text style={[styles.label, { marginTop: 18 }]}>LinkedIn</Text>
                        <Link 
                        href="https://www.linkedin.com/in/nora-tufte-thoresen-9b8a76294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
                        style={styles.link} 
                        accessibilityRole="link">linkedin.com/in/nora-tufte-thoresen</Link>
                    </View>
                </View>
            </View>

            <View style={[styles.right, !isWide && styles.rightNarrow]}>
                <Image source={require("@/assets/images/Meg.png")} resizeMode="cover" style={styles.hero} />
            </View>
        </View>

        </ScrollView>
    );
}

const CARD_MAX_W = 2000;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f6f4ef",
      },
      content: {
        paddingBottom: 40,
      },
      card: {
        alignSelf: "center",
        width: "92%",
        maxWidth: CARD_MAX_W,
        backgroundColor: "#fff",
        borderRadius: 16,
        marginTop: 16,
        padding: 33,
        flexDirection: "row",
        gap: 24,
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 6 },
        elevation: 3,
        minHeight: 600,
      },
      cardNarrow: {
        flexDirection: "column",
        padding: 20,
      },
      left: {
        flex: 3,
        paddingRight: 8,
      },
      leftNarrow: {
        paddingRight: 0,
      },
      right: {
        flex: 2.1,
        borderRadius: 12,
        overflow: "hidden",
      },
      rightNarrow: {
        height: 240,
        marginTop: 12,
      },
      hero: {
        width: "100%",
        height: "100%",
      },
      kicker: {
        textTransform: "uppercase",
        letterSpacing: 2,
        fontSize: 18,
        color: "#6b6b6b",
        marginBottom: 6,
      },
      title: {
        fontSize: 62,
        lineHeight: 60,
        fontWeight: "800",
        color: "#111",
        marginBottom: 14,
      },
      intro: {
        fontSize: 18,
        fontFamily: "Lato_400Regular",
        lineHeight: 24,
        color: "#333",
        marginBottom: 22,
      },
      grid: {
        flexDirection: "row",
        gap: 40,
        flexWrap: "wrap",
        marginTop: 40,
      },
      col: {
        flex: 1,
        minWidth: 220,
      },
      label: {
        fontSize: 16,
        color: "#8a8a8a",
        textTransform: "uppercase",
        fontFamily: "Lato_400Regular",
        letterSpacing: 1,
        marginBottom: 4,
      },
      value: {
        fontSize: 18,
        color: "#1b1b1b",
        fontFamily: "Poppins_700Bold",
      },
      link: {
        fontSize: 18,
        color: "#1e90ff",
        textDecorationLine: "underline",
      },
});