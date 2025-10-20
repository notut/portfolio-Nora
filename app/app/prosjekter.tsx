import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, useWindowDimensions } from "react-native";
import Header from "@/components/header";
import { Link } from "expo-router";

export default function ProjectScreen() {
    return (
        <ScrollView style={styles.container}>
        <Header />

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f6f4ef",
      },
});
