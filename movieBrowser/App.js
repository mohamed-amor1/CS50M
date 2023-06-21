import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";
import MovieDetailsScreen from "./screens/MovieDetailsScreen";
import SearchScreen from "./screens/SearchScreen";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="MovieDetails"
        component={MovieDetailsScreen}
        options={{ title: "Movie Details" }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeTintColor: "#deb522",
            style: { backgroundColor: "#000" },
            labelStyle: { fontSize: 12 },
            showLabel: false,
            keyboardHidesTabBar: true,
            activeBackgroundColor: "#000",
            inactiveBackgroundColor: "#000",
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={SearchScreen}
            options={{
              tabBarLabel: "Search",
              tabBarIcon: ({ color }) => (
                <Ionicons name="search" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcf7f7",
    fontFamily: "monospace",
  },
});

export default App;
