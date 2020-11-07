import React, { useState, useEffect } from "react";
import axios from "axios";
import { ScrollView, Text } from "react-native";
import PhotoItem from "../../components/PhotoItem/PhotoItem";

const Album = ({ route, navigation }) => {
  const { id, title } = route.params;
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
      .then(({ data }) => {
        setPhotos(data);
      });
  }, []);

  const capitalized = title.charAt(0).toUpperCase() + title.slice(1);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>{capitalized}</Text>
      {photos.map((photo, id) => (
        <PhotoItem
          key={id}
          handlePress={() => {
            navigation.navigate("Photo", {
              id: photo.id,
              title: photo.title,
              url: photo.url,
            });
          }}
        >
          {photo.title}
        </PhotoItem>
      ))}
    </ScrollView>
  );
};

const styles = {
  title: {
    fontSize: 22,
    paddingTop: 10,
  },
};

export default Album;
