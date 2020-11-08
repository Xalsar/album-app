import React, { useState, useEffect } from "react";
import axios from "axios";
import { ScrollView, Text } from "react-native";
import PhotoItem from "../../components/PhotoItem/PhotoItem";
import Loading from "../../components/Loading/Loading";
import capitalize from "../../utilities/capitalize";

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

  const content =
    photos.length === 0 ? (
      <Loading />
    ) : (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>{capitalize(title)}</Text>
        {photos.map((photo, id) => (
          <PhotoItem
            key={id}
            url={photo.thumbnailUrl}
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

  return content;
};

const styles = {
  title: {
    fontSize: 22,
    paddingTop: 10,
  },
};

export default Album;
