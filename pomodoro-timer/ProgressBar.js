import React from "react";
import { Dimensions, View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  progress: {
    backgroundColor: "blue",
    height: 10,
    width: 100,
  },
});

const ProgressBar = (props) => {
  const { width } = Dimensions.get("window");
  const percent = 1 - props.timeRemaining / props.timeTotal;
  return <View style={[styles.progress, { width: percent * width }]} />;
};

ProgressBar.propTypes = {
  timeRemaining: PropTypes.number,
  timeTotal: PropTypes.number,
  isRunning: PropTypes.bool,
};

export default ProgressBar;
