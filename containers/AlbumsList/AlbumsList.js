import React, { useState, useEffect } from "react";
import axios from "axios";
import Album from "../../components/Album/Album";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";

const AlbumList = (props) => {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums?userId=1")
      .then((response) => {
        setAlbums(response.data);
      });
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        flexDirection: "column",
      }}
    >
      {albums.map((album, id) => (
        <Album key={id} title={album.title} />
      ))}
    </ScrollView>
  );
};

const styles = {};

export default AlbumList;
