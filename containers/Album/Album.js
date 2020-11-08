import React, { useState, useEffect } from "react";
import axios from "axios";
import { ScrollView, Text } from "react-native";
import PhotoItem from "../../components/PhotoItem/PhotoItem";
import Loading from "../../components/Loading/Loading";
import capitalize from "../../utilities/capitalize";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";

const Album = ({ route, navigation }) => {
  const { id, title } = route.params;
  const [photos, setPhotos] = useState([]);
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
      .then(({ data }) => {
        setPhotos(data);
      });
  }, []);

  const content =
    photos.length === 0 || !fontsLoaded ? (
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
    fontFamily: "Roboto_400Regular",
  },
};

export default Album;
