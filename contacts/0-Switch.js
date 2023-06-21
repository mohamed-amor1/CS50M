import React from "react";
import { Button, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

class ScreenComponentOne extends React.Component {
  render() {
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
          onPress={() => this.props.navigation.navigate("RouteNameTwo")}
        />
      </View>
    );
  }
}

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="RouteNameOne" component={ScreenComponentOne} />
  </Stack.Navigator>
);

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}
