import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import top250 from "../top250.json";

const MovieDetailsScreen = ({ route }) => {
  const { movie } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.movieName}>
        {movie.name.replace(/\u0026apos;/g, "'")} ({movie.year})
      </Text>
      <Text style={styles.rating}>Rating: {movie.rating}/10</Text>

      <Image source={{ uri: movie.image_url }} style={styles.image} />
      <Text style={styles.text}>Director: {movie.directors.join(", ")}</Text>
      <Text style={styles.text}>Actors: {movie.actors.join(", ")}</Text>
      <Text style={[styles.text, styles.genre]}>
        Genre: {movie.genre.join(", ")}
      </Text>
      <Text style={styles.description}>
        Description: {movie.desc.replace(/\u0026apos;/g, "'")}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcf7f7",
    padding: 16,
  },
  image: {
    width: 350,
    height: 350,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center",
    resizeMode: "contain",
  },
  movieName: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 10,
    color: "#000000",
    fontFamily: "monospace",
  },
  rating: {
    fontSize: 18,
    color: "#deb522",
    marginBottom: 10,
    alignSelf: "center",
    marginTop: 10,
    fontWeight: "bold",
    fontFamily: "monospace",
  },
  text: {
    fontSize: 16,
    color: "#000000",
    marginBottom: 6,
    marginTop: 6,
    fontFamily: "monospace",
  },
  genre: {
    marginTop: 10,
    fontFamily: "monospace",
  },
  description: {
    fontSize: 16,
    fontFamily: "monospace",

    color: "#000000",

    marginTop: 16,
  },
});

export default MovieDetailsScreen;
