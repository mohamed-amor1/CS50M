import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { vibrate } from "./utils";
import Timer from "./Timer";

export default class App extends React.Component {
  state = {
    startTimer: false,
    minutes: 25,
    seconds: 0,
    interval: 1000,
    disabled: false,
    mode: true ? "Work Timer" : "Break Timer",
  };

  // Function to start the timer
  startTimer = () => {
    this.setState({ disabled: true, startTimer: true });
    this.timer = setInterval(() => {
      this.setState((prevState) => {
        if (prevState.seconds === 0) {
          // Decrease minutes by 1 and set seconds to 59 when seconds reach 0
          return {
            minutes: prevState.minutes - 1,
            seconds: 59,
          };
        } else {
          // Decrease seconds by 1
          return {
            seconds: prevState.seconds - 1,
          };
        }
      });

      // When the timer reaches 00:00
      if (this.state.minutes === 0 && this.state.seconds === 0) {
        this.handleVibrate();
        // change mode to break and vice versa
        this.setState({
          mode: !this.state.mode,
          minutes: this.state.mode ? 0 : 0,
          seconds: 5,
          disabled: true,
          startTimer: true,
        });
      }
    }, this.state.interval);
  };

  // Function to pause the timer
  pauseTimer = () => {
    this.setState({ disabled: false, startTimer: false });
    clearInterval(this.timer);
  };

  // Function to reset the timer
  resetTimer = () => {
    if (this.state.mode === "Work Timer") {
      this.setState({
        minutes: 25,
        seconds: 0,
        disabled: false,
        startTimer: false,
      });
    } else {
      this.setState({
        minutes: 5,
        seconds: 0,
        disabled: false,
        startTimer: false,
      });
    }

    clearInterval(this.timer);
  };

  // Function to handle vibration
  handleVibrate = () => {
    vibrate();
  };

  render() {
    const { mode } = this.state; // Retrieve the mode from state

    return (
      <View style={styles.container}>
        {mode ? (
          <Text style={styles.appName}>Work Timer</Text>
        ) : (
          <Text style={styles.appName}>Break Timer</Text>
        )}
        {/* Rest of your code */}
        <Timer
          style={styles.clock}
          minutes={this.state.minutes}
          seconds={this.state.seconds}
        />
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.startTimer}
            title="Start"
            disabled={this.state.disabled}
            color="black"
          />
          <View style={styles.buttonSpacing} /> {/* Add space here */}
          <Button
            onPress={this.pauseTimer}
            title="Pause"
            disabled={!this.state.disabled}
            color="#607D8B"
          />
          <View style={styles.buttonSpacing} /> {/* Add space here */}
          <Button title="Reset" color="#B00020" onPress={this.resetTimer} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF", // Material Design color: white
    alignItems: "center",
    justifyContent: "center",
  },

  clock: {
    fontSize: 72,
    fontWeight: "bold",
    color: "#1565C0", // Material Design color: dark blue
    textAlign: "center",
    marginBottom: 50,
    marginTop: 20,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },

  appName: {
    fontSize: 56,
    fontWeight: "bold",
    color: "#C62828", // Material Design color: red
    marginTop: 0,
    marginBottom: 30,
    textAlign: "center",
  },

  buttonSpacing: {
    marginHorizontal: 10, // Adjust the value as per your desired spacing
  },
});
