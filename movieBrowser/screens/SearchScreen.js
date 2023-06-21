import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import top250 from "../top250.json";

export default class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      isScrollViewHidden: true,
      filteredMovies: [],
    };
  }

  handleMoviePress = (item) => {
    this.props.navigation.navigate("MovieDetails", { movie: item });
  };

  handleMovieSearch = (text) => {
    if (text.length === 0) {
      alert("Please enter a search term");
      return;
    } else {
      const lowerCaseText = text.toLowerCase();
      const movies = top250.filter((item) =>
        item.name.toLowerCase().includes(lowerCaseText)
      );

      if (movies.length === 0) {
        alert("No movies found");
      }

      this.setState({
        text: "",
        isScrollViewHidden: false,
        filteredMovies: movies,
      });
    }
  };

  componentDidMount() {
    this.setState({
      text: "",
    });
  }

  render() {
    const { isScrollViewHidden, text, filteredMovies } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Search</Text>

        <TextInput
          placeholder="Search for a movie"
          style={styles.searchBar}
          onChangeText={(text) => {
            this.setState({
              text: text,
              isScrollViewHidden: true,
            });
          }}
          value={text} // Use the state value directly, no need for `this.state.text`
          onSubmitEditing={() => {
            this.handleMovieSearch(text); // Use the state value directly, no need for `this.state.text`
          }}
        />

        {!isScrollViewHidden && (
          <ScrollView contentContainerStyle={styles.contentContainer}>
            <Text style={styles.resultsText}>Search results</Text>
            <FlatList
              data={filteredMovies.sort((a, b) => b.rating - a.rating)}
              numColumns={2 || 1}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.movieContainer}
                  onPress={() => this.handleMoviePress(item)}
                >
                  <Text style={styles.movieName}>
                    {item.name.replace(/\u0026apos;/g, "'")}
                  </Text>
                  <Image
                    source={{ uri: item.image_url }}
                    style={styles.movieImage}
                  />
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.name.toString()}
            />
          </ScrollView>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcf7f7",
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "monospace",
    marginBottom: 20,
  },
  searchBar: {
    width: "80%",
    height: 40,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#000",
    paddingHorizontal: 10,
    borderRadius: 10,
    fontFamily: "monospace",
    fontSize: 16,
    fontWeight: "bold",
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: "center",
  },
  resultsText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "monospace",
  },
  movieContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 5,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#deb522",
    shadowColor: "#000",
  },
  movieName: {
    fontSize: 12,
    textAlign: "center",
    color: "black",
    marginTop: 10,
    marginBottom: 5,
    fontWeight: "bold",
    fontFamily: "monospace",
  },
  movieImage: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
});
