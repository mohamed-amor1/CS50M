import React from "react";
import {
  Easing,
  Animated,
  Dimensions,
  View,
  StyleSheet,
  Text,
} from "react-native";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  progress: {
    backgroundColor: "blue",
    height: 10,
    width: 2,
  },
});

class ProgressBar extends React.Component {
  state = {
    percent: new Animated.Value(0),
  };

  startAnimation = () => {
    this.animation = Animated.timing(this.state.percent, {
      toValue: 100,
      duration: this.props.timeRemaining,
      easing: Easing.linear,
      useNativeDriver: true,
    });

    this.animation.start();
  };

  componentDidMount() {
    this.startAnimation();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.timeRemaining > this.props.timeRemaining) {
      this.setState({ percent: new Animated.Value(0) }, this.startAnimation);
    }
  }

  render() {
    const { percent } = this.state;
    const { width } = Dimensions.get("window");
    return (
      <Animated.View
        style={[
          styles.progress,
          {
            transform: [
              {
                scaleX: percent.interpolate({
                  inputRange: [0, 100],
                  outputRange: [0, width],
                }),
              },
            ],
          },
        ]}
      ></Animated.View>
    );
  }
}

ProgressBar.propTypes = {
  timeRemaining: PropTypes.number,
  timeTotal: PropTypes.number,
  isRunning: PropTypes.bool,
};

export default ProgressBar;
