import React from "react";
import { Button, View } from "react-native";
import { createSwitchNavigator } from "react-navigation";

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
          // onPress={() => this.props.navigation.navigate("RouteNameTwo")}
        />
      </View>
    );
  }
}

const AppNavigator = createSwitchNavigator({
  RouteNameOne: ScreenComponentOne,
});

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}
