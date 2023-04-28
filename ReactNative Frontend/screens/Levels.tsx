import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";
import Mainlevel from "./Mainlevel";

const Levels = () => {
  const navigation = useNavigation();
 
  return (
    <Pressable
      style={styles.levels}
      onPress={() => navigation.navigate('Mainlevel')}
      
    >
      <Pressable onPress={() => navigation.navigate("IPhone11ProMax1")} style={[styles.tabBarIcon]}>
      <Image
        style={[styles.tabBarIcon, styles.iconLayout3]}
        resizeMode="cover"
        source={require("../assets/tab-bar1.png")}
      />
      </Pressable>
      <View style={styles.navigationBar}>
        <View style={[styles.background, styles.iconLayout2]} />
        <Image
          style={[styles.vectorIcon, styles.iconLayout3]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
      </View>
      <Text style={[styles.welcomeVardaan, styles.levelTypo]}>
        Welcome , Vardaan
      </Text>
      <Image
        style={styles.levelsChild}
        resizeMode="cover"
        source={require("../assets/group-29.png")}
      />
      <Image
        style={[styles.levelsItem, styles.levelsLayout]}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <Image
        style={[styles.levelsInner, styles.levelsLayout]}
        resizeMode="cover"
        source={require("../assets/line-2.png")}
      />
      <Image
        style={styles.lineIcon}
        resizeMode="cover"
        source={require("../assets/line-3.png")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Mainlevel")}
      >
        <Image
          style={styles.iconLayout2}
          resizeMode="cover"
          source={require("../assets/ellipse-14.png")}
        />
      </Pressable>
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-15.png")}
      />
      <Image
        style={[styles.levelsChild1, styles.ellipseIconPosition]}
        resizeMode="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <Text style={[styles.level1, styles.levelTypo]}>Level 1</Text>
      <Text style={[styles.level2, styles.levelTypo]}>Level 2</Text>
      <Text style={[styles.level3, styles.levelTypo]}>{`Level 3
`}</Text>
      <Text style={[styles.points, styles.pointsTypo]}>100/2,000 points</Text>
      <Text style={[styles.points1, styles.pointsTypo]}>0/10,000 points</Text>
      <Text style={[styles.points2, styles.pointsTypo]}>0/25,000 points</Text>
      <Image
        style={[styles.lock2Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/lock-2.png")}
      />
      <Image
        style={[styles.lock3Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/lock-3.png")}
      />
      <Image
        style={[styles.unlock1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/unlock-1.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconLayout3: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  iconLayout2: {
    height: "100%",
    width: "100%",
  },
  levelTypo: {
    textAlign: "left",
    // fontFamily: FontFamily.interBold,
    fontWeight: "700",
    lineHeight: 41,
    letterSpacing: 0,
    fontSize: FontSize.size_8xl,
    position: "absolute",
  },
  levelsLayout: {
    height: 150,
    width: 10,
    position: "absolute",
  },
  ellipseIconPosition: {
    left: 120,
    height: 118,
    width: 118,
    position: "absolute",
  },
  pointsTypo: {
    color: Color.plum_100,
    // fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    lineHeight: 41,
    letterSpacing: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 63,
    width: 63,
    overflow: "hidden",
    position: "absolute",
  },
  tabBarIcon: {
    // height: "8.93%",
    top: "92.19%",
    // right: "5%",
    // bottom: "10%",
    // left: "",
    right:'-2%',
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
  },
  background: {
    top: "0%",
    shadowColor: "rgba(0, 0, 0, 0.01)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 18,
    elevation: 18,
    shadowOpacity: 1,
    display: "none",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    backgroundColor: Color.background,
  },
  vectorIcon: {
    height: "14.06%",
    width: "1.81%",
    top: "63.8%",
    right: "93.3%",
    bottom: "22.14%",
    left: "4.89%",
  },
  navigationBar: {
    top: 0,
    left: 0,
    width: 414,
    height: 96,
    opacity: 0.11,
    position: "absolute",
  },
  welcomeVardaan: {
    top: 39,
    left: 21,
    color: "#4cc0c5",
    width: 331,
    height: 58,
  },
  levelsChild: {
    top: 844,
    left: 195,
    width: 32,
    height: 32,
    position: "absolute",
  },
  levelsItem: {
    top: 220,
    left: 180,
  },
  levelsInner: {
    top: 450,
    left: 180,
  },
  lineIcon: {
    top: 780,
    left: 10,
    height: 41,
    width: 10,
    position: "absolute",
  },
  wrapper: {
    left: 120,
    top: 107,
    height: 118,
    width: 118,
    position: "absolute",
  },
  ellipseIcon: {
    top: 350,
  },
  levelsChild1: {
    top: 550,
  },
  level1: {
    left: 256,
    color: "#5e1bb4",
    top: 150,
  },
  level2: {
    top: 380,
    left: 20,
    color: "#a087b5",
  },
  level3: {
    top: 600,
    left: 256,
    color: "#cb6d84",
  },
  points: {
    top: 190,
    left: 250,
  },
  points1: {
    top: 410,
    left: 30,
  },
  points2: {
    top: 640,
    left: 250,
  },
  lock2Icon: {
    top: 375,
    left: 150,
    height: 63,
    width: 63,
  },
  lock3Icon: {
    top: 580,
    left: 150,
    height: 63,
    width: 63,
  },
  unlock1Icon: {
    left: 150,
    top: 135,
  },
  levels: {
    flex: 1,
    height: 800,
    width: "100%",
    backgroundColor: Color.background,
  },
});

export default Levels;
