import React, { useState, useEffect } from "react";
import axios from "axios";
import AlbumItem from "../../components/AlbumItem/AlbumItem";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";

const AlbumList = ({ navigation }) => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums?userId=1")
      .then(({ data }) => {
        setAlbums(data);
      });
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {albums.map((album, id) => (
        <AlbumItem
          key={id}
          title={album.title}
          handlePress={() => {
            navigation.navigate("Album", { id: album.id, title: album.title });
          }}
        />
      ))}
    </ScrollView>
  );
};

const styles = {
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff !important",
  },
};

export default AlbumList;
