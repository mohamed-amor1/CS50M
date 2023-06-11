import React, { Component } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Button,
  View,
} from "react-native";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    justifyContent: "center",
  },
  input: {
    marginBottom: 16,
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  button: {
    marginTop: 16,
  },
});

export default class AddContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    phone: "",
    isFormValid: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.name !== this.state.name ||
      prevState.phone !== this.state.phone
    ) {
      this.validateForm();
    }
  }

  getHandler = (key) => (val) => {
    this.setState({ [key]: val });
  };

  handleNameChange = (name) => {
    if (name.length >= 3) {
      this.setState({ name }, this.validateForm);
    }
  };

  handlePhoneChange = (phone) => {
    if (+phone >= 0 && phone.length <= 10) {
      this.setState({ phone }, this.validateForm);
    }
  };

  validateForm = () => {
    const names = this.state.name.split(" ");
    const isFormValid =
      +this.state.phone >= 0 &&
      this.state.phone.length === 10 &&
      names.length >= 2;

    this.setState({ isFormValid });
  };

  handleSubmit = () => {
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={this.getHandler("name")}
          placeholder="Name"
        />

        <TextInput
          style={styles.input}
          value={this.state.phone}
          onChangeText={this.getHandler("phone")}
          placeholder="Phone"
          keyboardType="numeric"
        />

        <Button
          style={styles.button}
          title="Add Contact"
          onPress={this.handleSubmit}
          disabled={!this.state.isFormValid}
        />
      </KeyboardAvoidingView>
    );
  }
}
