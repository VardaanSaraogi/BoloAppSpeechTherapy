import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";

import { useEffect ,useState} from "react";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios'
// import MicStream from 'react-native-microphone-stream';
// import
import { ReactMic } from '@cleandersonlobo/react-mic';
const Mainlevel =  () => {
  const navigation = useNavigation();
  const [data, setText] = useState([])
  useEffect(()=>{
    let data = axios.get('https://api.quotable.io/random?minLength=10&maxLength=45').then(d=>{
      setText(d.data.content)
    }).catch(e=>{
      console.log(e)
    })
    console.log(data)
  } , [])

  // let quote =  getQuote();
  return (
    <View style={[styles.mainlevel, styles.mainlevelLayout]}>
      <View style={styles.mainlevelChild} />
      <Text style={[styles.level1, styles.quoteFlexBox]}>Level 1</Text>
      <Pressable onPress={() => navigation.navigate("Levels")} style={[styles.tabBarIcon, styles.mainlevelLayout]}>

      <Image
       
        resizeMode="cover"
        source={require("../assets/tab-bar.png")}
      />
      </Pressable>
      <Text style={[styles.quote, styles.quoteFlexBox]}>Quote:</Text>
      <Text style={[styles.toBeOr, styles.quoteFlexBox]}>
        {data}

      </Text>
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/icon.png")}
      />
      <Image
        style={styles.icon1}
        resizeMode="cover"
        source={require("../assets/icon1.png")}
      />

      <Image
        style={styles.mainlevelItem}
        resizeMode="cover"
        source={require("../assets/group-30.png")}
      />
     

    </View>
  );
};

const styles = StyleSheet.create({
  mainlevelLayout: {
    overflow: "hidden",
    width: "100%",
  },
  quoteFlexBox: {
    textAlign: "left",
    lineHeight: 41,
    letterSpacing: 0,
    position: "absolute",
  },
  mainlevelChild: {
    top: 0,
    left: 0,
    borderBottomRightRadius: Border.br_11xl,
    borderBottomLeftRadius: Border.br_11xl,
    backgroundColor: "#5de1e6",
    width: 414,
    height: 431,
    position: "absolute",
  },
  level1: {
    top: 40,
    // fontSize: FontSize.size_8xl,
    color: "#723587",
    width: 331,
    height: 58,
    // fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 20,
    textAlign: "left",
    lineHeight: 41,
    letterSpacing: 0,
  },
  tabBarIcon: {
    height: "8.93%",
    top: "92.19%",
    right: "5%",
    bottom: "0%",
    left: "-5%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
  },
  quote: {
    top: 89,
    fontSize: 19,
    color: "#9e8bd3",
    width: 88,
    height: 36,
    // fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: 20,
    textAlign: "left",
    lineHeight: 41,
    letterSpacing: 0,
  },
  toBeOr: {
    top: 145,
    left: 20  ,
    fontSize: 16,
    // fontFamily: FontFamily.interRegular,
    color: Color.white,
    textAlign: "left",
    lineHeight: 41,
    letterSpacing: 0,
  },
  icon: {
    width: 98,
    height: 107,
    top:200,
    left:60
  },
  icon1: {
    width: 126,
    height: 107,
    top:100,
    left:180
  },
  mainlevelItem: {
    top: 500,
    left: 100,
    width: 177,
    height: 159,
    position: "absolute",
  },
  mainlevel: {
    backgroundColor: Color.white,
    flex: 1,
    height: 896,
  },
});

export default Mainlevel;
