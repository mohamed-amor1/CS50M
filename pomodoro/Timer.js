import React from "react";
import { Text } from "react-native";

class Timer extends React.Component {
  formatTime = () => {
    const { minutes, seconds } = this.props;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  render() {
    const { style } = this.props;
    return <Text style={style}>{this.formatTime()}</Text>;
  }
}

export default Timer;
