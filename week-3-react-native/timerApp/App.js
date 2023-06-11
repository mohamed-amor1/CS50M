import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

// Style definition for the app container and count text
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  count: {
    fontSize: 48,
  },
});

// Counter component that displays the count and increments it every second
class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  // Starts the interval when the component is mounted
  componentDidMount() {
    this.interval = setInterval(this.inc, 1000);
  }

  // Cleans up the interval when the component is unmounted
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // Increment the count and update the state
  inc = () => {
    console.log("incrementing!");
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <View style={styles.appContainer}>
        <Text style={styles.count}>{this.state.count}</Text>
      </View>
    );
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCounter: true,
    };
  }

  // Toggles the visibility of the Counter component
  toggleCounter = () =>
    this.setState((prevState) => ({
      showCounter: !prevState.showCounter,
    }));

  render() {
    if (this.state.showCounter) {
      // Render the Counter component along with the toggle button
      return (
        <View style={styles.appContainer}>
          <Button title="toggle" onPress={this.toggleCounter} />
          <Counter />
        </View>
      );
    } else {
      // Render only the toggle button
      return <Button title="toggle" onPress={this.toggleCounter} />;
    }
  }
}
