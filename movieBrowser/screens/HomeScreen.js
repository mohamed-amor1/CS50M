import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import top250 from "../top250.json";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleMoviePress = (item) => {
    navigation.navigate("MovieDetails", { movie: item });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Top 250 Movies</Text>
      <FlatList
        data={top250.sort((a, b) => b.rating - a.rating)}
        numColumns={3}
        renderItem={({ item }) => (
          <View style={styles.movieContainer}>
            <TouchableOpacity onPress={() => handleMoviePress(item)}>
              <Text style={styles.movieName}>
                {item.name.replace(/\u0026apos;/g, "'")}
              </Text>
              <Image
                source={{ uri: item.image_url }}
                style={{ width: 100, height: 100, resizeMode: "contain" }}
              />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.name.toString()}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fcf7f7",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
    color: "#128bb5",
    fontFamily: "monospace",
  },
  movieContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
  },
  movieName: {
    fontSize: 12,
    textAlign: "center",
    color: "black",
    marginTop: 10,
    marginBottom: 5,
    padding: 5,
    fontWeight: "bold",
    backgroundColor: "#deb522",
    borderRadius: 5,
    fontFamily: "monospace",
  },
});

export default HomeScreen;
