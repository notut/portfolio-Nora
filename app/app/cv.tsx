import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import Header from "@/components/header";
import { Link } from "expo-router";

const { height, width } = Dimensions.get("window");

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
        <Header />

        <View style={styles.mainRow}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Nora Tufte Thoresen</Text>
            <Text style={styles.intro}>
              Granbakken 12, 1386 Asker{"\n"}
              Født: 04.12.2003{"\n"}
              +47 40100141 | noratt66@gmail.com
            </Text>

          <Text style={styles.educationTitle}>Utdanning</Text>
            <Text style={styles.education}>
              <Text style={{fontWeight: "600"}}>Syddansk Universitetet</Text>
                , Kolding - Master i IT, Web communication design.{"\n"}
              <Text style={{color:"#BE82A0", fontSize: 16}}>August 2026 - </Text>
            </Text>
            <Text style={styles.description}>
              Jeg studerer for tiden en master i IT, Web communication design ved SDU i Kolding.{"\n\n"}
            </Text>

            <Text style={styles.education}>
              <Text style={{fontWeight: "600"}}>Høyskolen Kristiania</Text>
                , Bergen - Bachelor i Informasjonsteknologi, frontend- og mobilutvikling.{"\n"}
              <Text style={{color:"#BE82A0", fontSize: 16}}>August 2023 - Juni 2026</Text>
            </Text>
            <Text style={styles.description}>
              Gjennom denne bacheloren gjennomførte jeg en bacheloroppgave i gruppe, hos Statens vegvesen. 
              Under bacheloroppgaven har jeg vært med på å  utvikle en intern nettside for de ansatte hos 
              Statens vegvesen. Dette prosjektet har gitt meg erfaring med brukerforståelse, design og
              utvikling i team, fra start til slutt.
            </Text>

          <Text style={styles.workTitle}>Arbeidshistorikk</Text>
            <Text style={styles.work}>
              <Text style={{fontWeight: "600"}}>Veas,</Text> Slemmestad - Sommerhjelp{"\n"}
              <Text style={{color:"#BE82A0", fontSize: 16}}>Juni 2025 - August 2026</Text>
            </Text>
            <Text style={styles.description}>
              I denne jobben utviklet jeg dashboards i Grafana for ABB Edge Insight hos{"\n"}
              Veas, basert på sanntidsdata via OPC UA. Arbeidet omfattet paneler,{"\n"}
              visualiseringer og design i Figma. Denne erfaringen styrket mine{"\n"}
              ferdigheter innen datavisualisering, systemforståelse og brukervennlig design. 
              Jeg jobbet her sommeren 2025 og sommeren 2026.
            </Text>
            <Text style={styles.work}>
              <Text style={{fontWeight: "600"}}>Deltidsstillinger</Text> - Medarbeider, deltid{"\n"}
              <Text style={{color:"#BE82A0", fontSize: 16}}>Juli 2018 - Juni 2026 </Text>
            </Text>
            <Text style={styles.description}>
              Diverse deltidsjobber ved siden av skolen.{"\n"}
            </Text>

          <Text style={styles.voluntaryTitle}>Frivillig arbeid</Text>
            <Text style={styles.voluntary}>
              <Text style={{fontWeight: "600"}}>Nestleder, </Text> SMB løpet - Verv ved Høyskolen Kristiania{"\n"}
              <Text style={{color:"#BE82A0", fontSize: 16}}>Februar 2024 - Desember 2024</Text>
            </Text>
            <Text style={styles.description}>
              Jeg jobbet fra februar til og med desember 2024 som nestleder i{"\n"}
              prosjektgruppen Studentunionen mot barnekreft. I dette vervet hadde jeg{"\n"}
              mye ansvar og jobbet tett med andre om å planlegge og promotere for et løp{"\n"}
              til inntekt for barnekreftforeningen. Her har jeg fått mye erfaring med
              koordinering og prosjektledelse.
            </Text>
        </View>

        <View style={styles.rightColumn}>
          <Image 
          source={require("../assets/images/Meg.png")}
          style={styles.image}
          />
          <View style={styles.rightTextContainer}>
            <Text style={styles.rightTitle}>Teknologier og verktøy</Text>
            <View style={styles.skillsWrap}>
              {[
                "Figma",
                "Miro",
                "Adobe XD",
                "Illustrator",
                "Photoshop",
                "Premiere Pro",
                "InDesign",
                "After Effects"
            ].map((item) => (
              <View key={item} style={styles.chip}>
                <Text style={styles.chipText}>{item}</Text>
              </View>
            ))}
            </View> 

            <View style={styles.skillsWrap}>
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "Java",
                "React",
                "React Native",
                "Kotlin",
                "C#",
                "Swift",
                "Python"
            ].map((item) => (
              <View key={item} style={styles.chip}>
                <Text style={styles.chipText}>{item}</Text>
              </View>
            ))}
            </View>

            <View style={styles.skillsWrap}>
              {[
                ".NET",
                "SQLite",
                "Orange",
                "ABB Edge Insight",
                "Netlify",
                "Git",
                "GitHub"
            ].map((item) => (
              <View key={item} style={styles.chip}>
                <Text style={styles.chipText}>{item}</Text>
              </View>
            ))}
            </View>
            <Text style={styles.rightTitle}>Referanser</Text>
            <Text style={styles.rightText}>Referanser fås ved forespørsel.</Text>
            <Text style={styles.rightTitle}>Språk</Text>
            <Text style={styles.rightText}>Norsk og engelsk.</Text>
            <Text style={styles.rightTitle}>Sertifikater</Text>
            <Text style={styles.rightText}>TOEFL iBT Test.</Text>

            <Text style={styles.rightTitle}>LinkedIn</Text>
              <Link
                href="https://www.linkedin.com/in/nora-tufte-thoresen-9b8a76294/"
                target="_blank"
                style={styles.rightText}
              >
                https://www.linkedin.com/in/nora-tufte-thoresen-9b8a76294/
              </Link>            
            <Text style={styles.rightTitle}>Bachelor prosjekt</Text>
              <Link
                  href="https://github.com/KajaJohanne/BAO304-Tekstapp"
                  target="_blank"
                  style={styles.rightText}
                >
                https://github.com/KajaJohanne/BAO304-Tekstapp
              </Link> 
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
    textContainer: {
      flex: 1,
      maxWidth: 600,
      margin: 20,
      alignSelf: "flex-start",
    },
    title: {
      fontSize: 44,
      fontWeight: "800",
      fontFamily: "Poppins_700Bold",
      lineHeight: 60,
    },
    intro: {
      fontSize: 16,
      fontFamily: "Lato_400Regular",
      marginTop: 5,
      marginLeft: 5,
    },
    mainRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      padding: 20,
    },
    rightColumn: {
      width: "30%",
      alignItems: "center",
    },
    rightTextContainer: {
      padding: 20,
    },
    image: {
      width: 400,
      height: 410,
      borderRadius: 5,
      marginBottom: 20,
      marginTop: 30,
    },
    rightTitle: {
      fontSize: 24,
      fontWeight: "700",
      fontFamily: "Poppins_700Bold",
      marginBottom: 10,
    },
    rightText: {
      fontSize: 16,
      lineHeight: 22,
      color: "#333",
      marginBottom: 10,
    },
    skillsWrap: {
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      marginBottom: 16,
    },
    chip: {
      paddingVertical: 6,
      paddingHorizontal: 12,
      borderRadius: 999,
      borderWidth: 1,
      borderColor: "#D9D9D9",
      marginRight: 8,
      marginBottom: 8,
    },
    chipText: {
      fontSize: 14,
      fontWeight: "600",
      color: "#333",
    },
    
    educationTitle: {
      fontSize: 38,
      fontWeight: "700",
      fontFamily: "Poppins_700Bold",
      marginTop: 20,
    },
    education: {
      fontSize: 20,
      fontFamily: "times-new-roman",
      marginTop: 5,
      marginLeft: 5,
    },
    
    workTitle: {
      fontSize: 38,
      fontWeight: "700",
      fontFamily: "Poppins_700Bold",
      marginTop: 20,
    },
    work: {
      fontSize: 20,
      fontFamily: "times-new-roman",
      marginTop: 10,
      marginLeft: 5,
    },
    description: {
      fontSize: 18,
      fontFamily: "Lato_400Regular",
      marginTop: 5,
      marginLeft: 5,
    },

    voluntaryTitle: {
      fontSize: 38,
      fontWeight: "700",
      fontFamily: "Poppins_700Bold",
      marginTop: 20,
    },
    voluntary: {
      fontSize: 20,
      fontFamily: "times-new-roman",
      marginTop: 10,
      marginLeft: 5
    },
});