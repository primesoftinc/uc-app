import React, { useState } from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";

import DemoScreen from "./DemoScreen";

export default class MyAppointmentCardScreen extends React.Component {
  render() {
    return (
      <View>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <DemoScreen />
      </View>
    );
  }
}
