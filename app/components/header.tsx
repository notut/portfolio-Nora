import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function Header() {
    return(
        <View style={styles.header}>
            <Text style={styles.logo}>PORTEFØLJE</Text>
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
                <Link href="/cv" asChild>
                    <TouchableOpacity><Text style={styles.link}>CV</Text></TouchableOpacity>
                </Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingHorizontal: 30,

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        backgroundColor: "#f6f4ef",
        //Linje under header
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    logo: {
        fontSize: 34,
        fontFamily: "Poppins_800ExtraBold",
        color: "#BE82A0",
    },
    links: {
        flexDirection: "row",
        gap: 20,
    },
    link: {
        fontSize: 18,
        color: "#333",
    },
});