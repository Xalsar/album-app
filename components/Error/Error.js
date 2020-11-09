import React from "react";
import Loading from "../Loading/Loading";
import { Alert } from "react-native";

const Error = () => {
  Alert.alert(
    "Application error",
    "An error has ocurred, please restart the app. If the error presist, contact with technical assistance."
  );
  return <Loading />;
};

export default Error;
