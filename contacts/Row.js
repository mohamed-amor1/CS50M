import React from "react";
import { Text, View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  row: {
    padding: 20,
  },
});

const Row = (props) => (
  <View style={styles.row}>
    <Text> {props.name}</Text>
    <Text> {props.phone}</Text>
  </View>
);

Row.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default Row;
