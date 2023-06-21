import React from "react";
import { Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function ScreenComponentOne({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 25,
        borderColor: "teal",
      }}
    >
      <Button
        title="Go to Screen Two"
        onPress={() => navigation.navigate("RouteNameTwo")}
      />
    </View>
  );
}

function ScreenComponentTwo() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 25,
        borderColor: "orange",
      }}
    >
      <Button
        title="Go to screen one"
        onPress={() => navigation.navigate("RouteNameOne")}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="RouteNameOne" component={ScreenComponentOne} />
        <Stack.Screen name="RouteNameTwo" component={ScreenComponentTwo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
