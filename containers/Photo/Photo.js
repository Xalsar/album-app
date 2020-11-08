import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, Text, Image } from "react-native";
import Loading from "../../components/Loading/Loading";
import capitalize from "../../utilities/capitalize";

const Photo = ({ route }) => {
  const { id } = route.params;
  const [photo, setPhoto] = useState();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then(({ data }) => setPhoto(data));
  }, []);

  const content = !photo ? (
    <Loading />
  ) : (
    <View style={styles.container}>
      <Image
        source={{
          width: 300,
          height: 300,
          uri: photo.url,
        }}
        fadeDuration={1000}
      />
      <Text style={styles.title}>{capitalize(photo.title)}</Text>
    </View>
  );

  return content;
};

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    textAlign: "center",
    marginTop: 30,
  },
};

export default Photo;
