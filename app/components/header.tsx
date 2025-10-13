import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function Header() {
    return(
        <View style={styles.header}>
            <Text style={styles.logo}>NORA <Text style={{color:"#D47CBF"}}>TUFTE THORESEN</Text></Text>
            <View style={styles.links}>
                <Link href="/" asChild>
                    <TouchableOpacity><Text style={styles.link}>Om meg</Text></TouchableOpacity>
                </Link>
                <Link href="/prosjekter" asChild>
                    <TouchableOpacity><Text style={styles.link}>Mine prosjekter</Text></TouchableOpacity>
                </Link>
                <Link href="/kontakt" asChild>
                    <TouchableOpacity><Text style={styles.link}>Kontakt</Text></TouchableOpacity>
                </Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 50,
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    logo: {
        fontSize: 24,
        fontWeight: "700",
    },
    links: {
        flexDirection: "row",
        gap: 20,
    },
    link: {
        fontSize: 16,
        color: "#333",
    },
});