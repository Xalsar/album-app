import React, { useState, useEffect } from "react";
import axios from "axios";
import { ScrollView, Text } from "react-native";
import PhotoItem from "../../components/PhotoItem/PhotoItem";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import Header from "../../components/Header/Header";
import capitalize from "../../utilities/capitalize";

const Album = ({ route, navigation }) => {
  const { id, title } = route.params;
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
      .then(({ data }) => {
        setPhotos(data);
      })
      .catch((error) => setError(error));
  }, []);

  if (photos.length === 0) {
    return <Loading />;
  } else if (error) {
    return <Error />;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header title={"Album"} navigation={navigation} />
      <Text style={styles.title}>{capitalize(title)}</Text>
      {photos.map((photo, id) => (
        <PhotoItem
          key={id}
          url={photo.thumbnailUrl}
          handlePress={() => {
            navigation.navigate("Photo", {
              id: photo.id,
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
    fontSize: 20,
    padding: 12,
    paddingTop: 10,
    fontFamily: "Roboto_400Regular",
    color: "#2c272d",
  },
};

export default Album;
