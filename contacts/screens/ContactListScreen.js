import React, { useState, useLayoutEffect } from "react";
import { Button, View, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import AddContactScreen from "./AddContactScreen";

import SectionListContacts from "../SectionListContacts";

const ContactListScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [showContacts, setShowContacts] = useState(true);

  const toggleContacts = () => {
    setShowContacts((prevShowContacts) => !prevShowContacts);
  };

  const handleSelectContact = (contact) => {
    navigation.navigate("ContactDetails", contact);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Contacts",
      headerRight: () => (
        <Button
          title="Add"
          onPress={() => navigation.navigate("Add Contact")}
          color="#a41034"
        />
      ),
    });
  }, [navigation]);

  const contacts = route.params?.contacts || []; // Access the contacts from route.params

  return (
    <View style={styles.container}>
      <Button title="toggle contacts" onPress={toggleContacts} />
      {showContacts && (
        <SectionListContacts
          contacts={contacts}
          onSelectContact={handleSelectContact}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ContactListScreen;
