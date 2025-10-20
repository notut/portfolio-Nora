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
              Granbakken 12{"\n"}
              1386, Asker, Norge{"\n"}
              Født: 04.12.2003{"\n"}
              +47 40100141{"\n"}
              noratt66@gmail.com
            </Text>

            <Text style={styles.educationTitle}>Utdanning</Text>
              <Text style={styles.education}>
              <Text style={{fontWeight: "600"}}>Høyskolen Kristiania</Text>
              , Bergen - Bachelor i Informasjonsteknologi, frontend- og mobilutvikling.{"\n"}
              <Text style={{color:"#BE82A0", fontSize: 16}}>August 2023 -</Text>
              </Text>
              <Text style={styles.education}>
              <Text style={{fontWeight: "600"}}>Sunnmøre folkehøyskole</Text>
              , Ulsteinvik.{"\n"}
              <Text style={{color:"#BE82A0", fontSize: 16}}>August 2022 - Mai 2023</Text>
              </Text>
              <Text style={styles.education}>
              <Text style={{fontWeight: "600"}}>Sandvika vgs</Text>
              , Bærum - Medie og kommunikasjons linje.{"\n"}
              <Text style={{color:"#BE82A0", fontSize: 16}}>August 2019 - Juni 2022</Text>
              </Text>
              <Text style={styles.education}>
              <Text style={{fontWeight: "600"}}>Risenga ungdomsskole</Text>
              , Asker.{"\n"}
              <Text style={{color:"#BE82A0", fontSize: 16}}>August 2016 - Juni 2019</Text>
              </Text>

            <Text style={styles.technologyTitle}>Teknologier og verktøy</Text>
              <Text style={styles.designTitle}>Design</Text>
                <Text style={styles.technology}> <Text style={{color:"gray"}}>
                  Figma, Adobe XD, Illustrator, Photoshop, Premiere Pro, InDesign, After Effects.</Text>
                </Text>
              <Text style={styles.developerTitle}>Utvikling</Text>
                <Text style={styles.technology}> <Text style={{color:"gray"}}>
                  HTML, CSS, JavaScript, Java, Kotlin, C#, Swift.</Text>
                </Text>
              <Text style={styles.classesTitle}>Relevante fag</Text>
                <Text style={styles.technology}> <Text style={{color:"gray"}}>
                  iOS programmering, Android programmering, Interaksjonsdesign, Webutvikling, Kryssplattform.</Text>
                </Text>
              <Text style={styles.otherTitle}>Annen teknologi</Text>
                <Text style={styles.technology}> <Text style={{color:"gray"}}>
                  React, .NET, SQLite, ABB Edge Insight, GitHub.</Text>
                </Text>

          <Text style={styles.workTitle}>Arbeidshistorikk</Text>
            <Text style={styles.work}>
              <Text style={{fontWeight: "600"}}>Veas,</Text> Slemmestad - Sommerhjelp{"\n"}
              <Text style={{color:"#BE82A0", fontSize: 16}}>Juni 2025 - August 2025</Text>
            </Text>
            <Text style={styles.description}>
              I denne jobben utviklet jeg dashboards i Grafana for ABB Edge Insight hos{"\n"}
              Veas, basert på sanntidsdata via OPC UA. Arbeidet omfattet paneler,{"\n"}
              visualiseringer og design i Figma. Denne erfaringen styrket mine{"\n"}
              ferdigheter innen datavisualisering, systemforståelse og brukervennlig design.
            </Text>
            <Text style={styles.work}>
              <Text style={{fontWeight: "600"}}>BRGN Consept Store & Bistro,</Text> Bergen - Medarbeider, tilkallingshjelp{"\n"}
              <Text style={{color:"#BE82A0", fontSize: 16}}>September 2023 - </Text>
            </Text>
            <Text style={styles.description}>
              Jeg jobber for tiden på BRGN Concept Store & Bistro som tilkallingshjelp.{"\n"}
              Her jobber jeg som selger i butikk, og barista i cafe. Jeg har i denne jobben{"\n"}
              utviklet en sterk serviceinnstilling, og gode problemløsningsevner.
            </Text>
            <Text style={styles.work}>
              <Text style={{fontWeight: "600"}}>Mester Grønn,</Text> Sandvika - Butikkmedarbeider, deltid{"\n"}
              <Text style={{color:"#BE82A0", fontSize: 16}}>November 2021 - April 2023</Text>
            </Text>
            <Text style={styles.description}>
              Jeg jobbet på Mester Grønn på Sandvika Storsenter som butikkmedarbeider.{"\n"}
              Her lærte jeg mye om kundeservice og fikk erfart mye forskjellige oppgaver
              og situasjoner.
            </Text>
            <Text style={styles.work}>
              <Text style={{fontWeight: "600"}}>Home & Cottage,</Text> Sandvika - Butikkmedarbeider, deltid{"\n"}
              <Text style={{color:"#BE82A0", fontSize: 16}}>Juni 2023 - Juli 2023</Text>
            </Text>
            <Text style={styles.description}>
              Jeg har tidligere jobbet på Home & Cottage som butikkmedarbeider.{"\n"}
              Her jobbet jeg med kundeservice og andre butikkoppgaver.
            </Text>
            <Text style={styles.work}>
              <Text style={{fontWeight: "600"}}>Spiterstulen Turisthytte,</Text> Lom - Medarbeider, fulltid{"\n"}
              <Text style={{color:"#BE82A0", fontSize: 16}}>Juni 2023</Text>
            </Text>
            <Text style={styles.description}>
              Jeg jobbet hos Spiterstulen turisthytte en liten periode i juni 2023, der bidro{"\n"}
              jeg med varierte oppgaver som vaskehjelp, servitør og kjøkkenhjelp.
            </Text>
            <Text style={styles.work}>
              <Text style={{fontWeight: "600"}}>Body Green,</Text> Asker - Lagermedarbeider, tilkallingshjelp{"\n"}
              <Text style={{color:"#BE82A0", fontSize: 16}}>Juni 2021 - Januar 2023</Text>
            </Text>
            <Text style={styles.description}>
              Jeg jobbet hos Body Green som lagermedarbeider fra Juni 2021 - Januar{"\n"}
              2023. Der jobbet jeg som tilkallingshjelp, og jobbet med å pakke ned og
              holde orden i varer.
            </Text>
            <Text style={styles.work}>
              <Text style={{fontWeight: "600"}}>Eie Eiendomsmegling,</Text> Asker - Vaskehjelp{"\n"}
              <Text style={{color:"#BE82A0", fontSize: 16}}>Juli 2018 - Juli 2022</Text>
            </Text>
            <Text style={styles.description}>
              Jeg har tidligere jobbet hos Eie eiendomsmegling som vaskehjelp fra Juli 2018{"\n"} 
              til Juli 2022. Der lærte jeg å holde orden, i tillegg til å jobbe selvstendig og effektivt.
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
            <Text style={styles.voluntary}>
              <Text style={{fontWeight: "600"}}>Gullhella Sykehjem, </Text> Asker kommune - Frivillig på sykehjem{"\n"}
              <Text style={{color:"#BE82A0", fontSize: 16}}>Januar 2019 - Februar 2019</Text>
            </Text>
            <Text style={styles.description}>
              Jeg jobbet på Gullhella sykehjem vinteren 2019, der jobbet jeg som{"\n"}
              frivillig med å snakke, underholde og lese for beboerne.
            </Text>
        </View>

        <View style={styles.rightColumn}>
          <Image 
          source={require("../assets/images/Meg.png")}
          style={styles.image}
          />
          <View style={styles.rightTextContainer}>
            <Text style={styles.rightTitle}>Egenskaper</Text>
            <View style={styles.skillsWrap}>
              {[
                "Engasjert",
                "Pålitelig",
                "Lærevillig",
                "Interesse for teknologi og design",
                "Detaljorientert",
                "Strukturert",
                "Rask til å lære",
                "Samarbeidsvillig",
                "Positiv",
                "Effektiv"
            ].map((item) => (
              <View key={item} style={styles.chip}>
                <Text style={styles.chipText}>{item}</Text>
              </View>
            ))}
            </View>
            <Text style={styles.rightTitle}>Referanser</Text>
            <Text style={styles.rightText}>Referanser fås ved forespørsel.{"\n\n"}</Text>
            <Text style={styles.rightTitle}>Språk</Text>
            <Text style={styles.rightText}>Norsk, engelsk og litt fransk.{"\n\n"}</Text>
            <Text style={styles.rightTitle}>Sertifikater</Text>
            <Text style={styles.rightText}>TOEFL iBT Test.{"\n\n"}</Text>
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
      fontSize: 20,
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
    },
    skillsWrap: {
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
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
      fontSize: 44,
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
    
    technologyTitle: {
      fontSize: 44,
      fontWeight: "700",
      fontFamily: "Poppins_700Bold",
      marginTop: 20,
    },
    designTitle: {
      fontSize: 20,
      fontWeight: "700",
      fontFamily: "Poppins_700Bold",
      marginLeft: 5,
      marginTop: 10,
    },
    technology: {
      fontSize: 16,
      fontFamily: "Lato_400Regular",
      marginTop: 5,
      marginLeft: 5,
    },
    developerTitle: {
      fontSize: 20,
      fontWeight: "700",
      fontFamily: "Poppins_700Bold",
      marginLeft: 5,
      marginTop: 10,
    },
    classesTitle: {
      fontSize: 20,
      fontWeight: "700",
      fontFamily: "Poppins_700Bold",
      marginLeft: 5,
      marginTop: 10,
    },
    otherTitle: {
      fontSize: 20,
      fontWeight: "700",
      fontFamily: "Poppins_700Bold",
      marginLeft: 5,
      marginTop: 10,
    },
    
    workTitle: {
      fontSize: 44,
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
      fontSize: 44,
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