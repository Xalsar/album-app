import React, { useState, useEffect } from "react";
import axios from "axios";
import Thumbnail from "../Thumbnail/Thumbnail";
import { Text, View, TouchableOpacity } from "react-native";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import capitalize from "../../utilities/capitalize";
import Icon from "react-native-vector-icons/Fontisto";

const AlbumItem = ({ id, title, navigation }) => {
  const [thumbnails, setThumbnails] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
      .then(({ data }) => {
        setThumbnails(data.slice(0, 3));
      })
      .catch((error) => setError(error));
  }, []);

  if (thumbnails.length === 0) {
    return <Loading />;
  } else if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => {
          navigation.navigate("Album", {
            id,
            title,
          });
        }}
      >
        <Text style={styles.title}>{capitalize(title)}</Text>
        <View>
          <Icon name="nav-icon-grid-a" size={17} color="#2c272d" />
        </View>
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {thumbnails.length === 0 ? (
          <Loading />
        ) : (
          thumbnails.map((thumbnail, id) => (
            <Thumbnail
              key={id}
              url={thumbnail.thumbnailUrl}
              handlePress={() => {
                navigation.navigate("Photo", {
                  id: thumbnail.id,
                });
              }}
            />
          ))
        )}
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    paddingTop: 34,
    paddingBottom: 34,
    borderBottomWidth: 1.5,
    borderBottomColor: "#ededed",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 26,
  },
  title: {
    fontSize: 17,
    maxWidth: "70%",
    fontFamily: "Roboto_400Regular",
    color: "#2c272d",
  },
};

export default AlbumItem;
