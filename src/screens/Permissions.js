import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Card, Input, Avatar } from "react-native-elements";

import Button from "../components/ButtonComponent";
const themeColor = "#6600FF";
export default class Permissions extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.background}>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            width: 350,
            paddingBottom: 20,
            marginLeft: 30
          }}
        >
          <View
            style={{ height: 150, width: 150, padding: 10, marginLeft: 10 }}
          >
            <Avatar
              size={"xlarge"}
              avatarStyle={{ height: 200, width: 150 }}
              source={{
                uri:
                  "https://image.shutterstock.com/image-photo/smiling-doctor-clinic-giving-handshake-600w-390902179.jpg"
              }}
            />
          </View>
          <View style={{ padding: 10, height: 150, width: 150 }}>
            <Avatar
              size={"xlarge"}
              avatarStyle={{ height: 200, width: 150 }}
              source={{
                uri:
                  "https://image.shutterstock.com/image-photo/smiling-doctor-clinic-giving-handshake-600w-390902179.jpg"
              }}
            />
          </View>
        </View>

        <Card containerStyle={{ borderRadius: 15, flex: 1 }}>
          <Text style={{ color: themeColor, fontSize: 17 }}>
            Medical History:
          </Text>
          <View>
            <Input
              label="Allergic to Particular Medications if Any*"
              labelStyle={[styles.label]}
              inputContainerStyle={{ borderColor: themeColor }}
              containerStyle={{ marginTop: 10 }}
              placeholder="ex: Brufin,Aspirin etc"
            />
            <Input
              label="Health issues if Any "
              labelStyle={[styles.label]}
              inputContainerStyle={{ borderColor: themeColor }}
              containerStyle={{ marginTop: 10 }}
              placeholder="ex: sugar,High Blood pressure etc"
            />
          </View>
        </Card>
        <Card containerStyle={{ borderRadius: 15, flex: 1 }}>
          <Text style={{ color: themeColor, fontSize: 17 }}>Address:</Text>
          <View>
            <Input
              label="Pincode*"
              labelStyle={[styles.label]}
              inputContainerStyle={{ borderColor: themeColor }}
              containerStyle={{ marginTop: 10 }}
              placeholder="PinCode"
            />
          </View>
          <View>
            <Input
              label="House No.,Building name*"
              labelStyle={[styles.label]}
              inputContainerStyle={{ borderColor: themeColor }}
              containerStyle={{ marginTop: 30 }}
              placeholder="House No.,Building name*"
            />
          </View>
          <View>
            <Input
              label="Road Name,Area,Colony*"
              labelStyle={styles.label}
              inputContainerStyle={{ borderColor: themeColor }}
              containerStyle={{ marginTop: 30 }}
              placeholder="Road Name,Area,Colony*"
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Input
                label="City*"
                labelStyle={[styles.label]}
                inputContainerStyle={{ borderColor: themeColor }}
                containerStyle={{ marginTop: 30 }}
                placeholder="City"
              />
            </View>
            <View style={{ flex: 1 }}>
              <Input
                label="State*"
                labelStyle={[styles.label]}
                inputContainerStyle={{ borderColor: themeColor }}
                containerStyle={{ marginTop: 30 }}
                placeholder="State"
              />
            </View>
          </View>
        </Card>

        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: themeColor,
            marginVertical: 30
          }}
        >
          <Button
            title="Create a New Account"
            type="outline"
            size="medium"
            onPress={{}}
            radius="25"
            textColor={themeColor}
            buttonColor="#fff"
          />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: themeColor
  },
  label: {
    color: themeColor,
    fontWeight: "normal"
  },
  container: {
    width: 350,
    justifyContent: "center"
  },
  shadow: {
    elevation: 10,
    borderColor: "black",
    shadowOffset: { width: 40, height: 40 },
    shadowOpacity: 1,
    shadowColor: "black"
  }
});
