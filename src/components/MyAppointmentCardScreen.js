import React, { useState } from "react";
import { Platform, StatusBar, View } from "react-native";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "../util/apollo";
import MyAppointmentCardProvider from "./MyAppointmentCardProvider";

export default class MyAppointmentCardScreen extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <View>
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          <MyAppointmentCardProvider />
        </View>
      </ApolloProvider>
    );
  }
}
