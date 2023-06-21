import React, { useState } from "react";
import { View } from "react-native";
import AddContactForm from "../AddContactForm"; // Import the AddContactForm component

// Rest of the code...

const AddContactScreen = () => {
  const handleSubmit = (contactData) => {
    // Handle the submission logic here
    // You can access the contactData object to save the contact
    // For example, you can make an API call to save the contact data
    console.log("Name:", contactData.name);
    console.log("Phone:", contactData.phone);
  };

  return (
    <View>
      <View>
        <AddContactForm onSubmit={handleSubmit} />
      </View>
    </View>
  );
};

export default AddContactScreen;
