import React, { useState, useEffect } from "react";
import axios from "axios";
import Thumbnail from "../Thumbnail/Thumbnail";
import { Text, View, TouchableOpacity } from "react-native";
import Loading from "../Loading/Loading";
import capitalize from "../../utilities/capitalize";

const AlbumItem = ({ id, title, navigation }) => {
  const [thumbnails, setThumbnails] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
      .then(({ data }) => {
        setThumbnails(data.slice(0, 3));
      });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        marginTop: 20,
        marginBottom: 20,
      }}
    >
      <View style={styles.header}>
        <Text style={styles.title}>{capitalize(title)}</Text>
        <TouchableOpacity
          style={{
            backgroundColor: "lightblue",
            padding: 10,
            borderRadius: 8,
          }}
          onPress={() => {
            navigation.navigate("Album", {
              id,
              title,
            });
          }}
        >
          <Text>See more</Text>
        </TouchableOpacity>
      </View>
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    maxWidth: "70%",
  },
};

export default AlbumItem;
