import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const IPhone11ProMax1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone11ProMax1}>
      <Image
        style={[styles.bolo1Icon, styles.bolo1IconPosition]}
        resizeMode="cover"
        source={require("../assets/bolo-1.png")}
      />
      <Image
        style={styles.iphone11ProMax1Child}
        resizeMode="cover"
        source={require("../assets/rectangle-46.png")}
      />
      <View style={[styles.iphone11ProMax1Item, styles.bolo1IconPosition]} />
      <Image
        style={styles.iphone11ProMax1Inner}
        resizeMode="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={styles.musicArtist}
        resizeMode="cover"
        source={require("../assets/24--music--artist.png")}
      />
      <Text style={styles.welcomeToBolo}>Welcome to BOLO</Text>
      <Image
        style={[styles.rectangleIcon, styles.wrapperPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-48.png")}
      />
      <Pressable
        style={[styles.wrapper, styles.wrapperPosition]}
        onPress={() => navigation.navigate("Levels")}
      >
 
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/rectangle-49.png")}
          // onPress={() => navigation.navigate("Levels")}
        />
   
      </Pressable>
      <Pressable onPress={()=>navigation.navigate("Levels")}
      >
      <Text style={[styles.getStarted, styles.getStartedFlexBox]}>
        Get started
      </Text>
      </Pressable>
      <Text style={[styles.yourPersonalSpeech, styles.getStartedFlexBox]}>
        Your personal speech therapist , now just a click away.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bolo1IconPosition: {
    left: 0,
    position: "absolute",
  },
  wrapperPosition: {
    top: 720,
    left:20,
    position: "absolute",
  },
  getStartedFlexBox: {
    letterSpacing: 0,
    textAlign: "center",
    position: "absolute",
  },
  bolo1Icon: {
    top: 0,
    left:2,
    width: 452,
    height: 474,
  },
  iphone11ProMax1Child: {
    top: -167,
    left: 488,
    width: 430,
    height: 650,
    position: "absolute",
  },
  iphone11ProMax1Item: {
    top: 432,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    backgroundColor: Color.background,
    width: 416,
    height: 493,
  },
  iphone11ProMax1Inner: {
    top: 450,
    left: '40%',
    width: 104,
    height: 104,
    position: "absolute",
  },
  musicArtist: {
    height: "7.03%",
    width: "15.22%",
    top: "60.79%",
    right: "40.58%",
    bottom: "39.17%",
    left: "45%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  welcomeToBolo: {
    top: 560,
    left: 85,
    fontSize: FontSize.size_8xl,
    color: "#2d0c57",
    width: 219,
    height: 63,
    textAlign: "center",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    position: "absolute",
  },
  rectangleIcon: {
    left: 63,
    width: 332,
    display: "none",
    height: 63,
  },
  icon: {
    borderRadius: 15,
    height: "100%",
    width: "100%",
  },
  wrapper: {
    // left: 10,
    width: 330,
    height: 40,
    // top:'-20%',
  },

  getStarted: {
    top: 730,
    left: 70,
    fontSize: 15,
    lineHeight: 18,
    textTransform: "uppercase",
    color: "#6c4f90",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 254,
    height: 45,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    letterSpacing: 0,
  },
  yourPersonalSpeech: {
    top: 655,
    left: 20,
    fontSize: FontSize.size_mid,
    lineHeight: 26,
    fontFamily: FontFamily.interRegular,
    color: "#9b8dac",
    width: 335,
    height: 71,
  },
  iphone11ProMax1: {
    backgroundColor: Color.white,
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone11ProMax1;
