const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Mainlevel from "./screens/Mainlevel";
import Levels from "./screens/Levels";
import IPhone11ProMax1 from "./screens/IPhone11ProMax1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Inter_regular: require("./assets/fonts/Inter_regular.ttf"),
    Inter_bold: require("./assets/fonts/Inter_bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen
              name="IPhone11ProMax1"
              component={IPhone11ProMax1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Mainlevel"
              component={Mainlevel}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Levels"
              component={Levels}
              options={{ headerShown: false }}
            />
        
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
