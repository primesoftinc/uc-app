import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../components/MyButton";
import ButtonCom from "../components/ButtonComponent";
export default class AppointmentScreen extends Component {
  constructor(props) {
    super(props);
  }
  _select = async () => {
    this.props.navigation.navigate("MyAppointmentCard");
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 3 }}>
          <View>
            <Text style={styles.headingStyle}>Select Appoinment Date</Text>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <View
                style={{
                  flex: 0.5,
                  height: 100,
                  width: 100,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Button title="Today" />
              </View>
              <View
                style={{
                  flex: 0.25,
                  height: 100,
                  width: 100,
                  justifyContent: "center",
                  alignItems: "flex-start"
                }}
              >
                <Button title="Tommorow" />
              </View>
            </View>
          </View>
        </View>
        <View style={{ flex: 5 }}>
          <View style={{ paddingTop: 10 }}>
            <Text style={styles.headingStyle}>Select Appointment Time</Text>
            <View
              style={{
                height: 50,
                flexDirection: "row",
                paddingTop: 15,
                justifyContent: "space-around"
              }}
            >
              <Button title={"9:00 AM"} />
              <Button title={"9:15 AM"} />
              <Button title={"9:30 AM"} />
            </View>
            <View
              style={{
                height: 50,
                flexDirection: "row",
                paddingTop: 15,
                justifyContent: "space-around"
              }}
            >
              <Button title={"9:45 AM"} />
              <Button title={"10:00 AM"} />
              <Button title={"10:15 AM"} />
            </View>
            <View
              style={{
                height: 50,
                flexDirection: "row",
                paddingTop: 15,
                justifyContent: "space-around"
              }}
            >
              <Button title={"10:30 AM"} />
              <Button title={"10:45 AM"} />
              <Button title={"11:00AM"} />
            </View>
          </View>
        </View>
        <View
          style={{ flex: 4, justifyContent: "center", alignItems: "center" }}
        >
          <ButtonCom
            title={"Confirm"}
            type="solid"
            style={{ backgroundColor: "#4e38fe" }}
            textColor="#ffffff"
            radius={40}
            size="small"
            onPress={this._select}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  headingStyle: {
    fontSize: 17,
    color: "#5B5850",
    fontWeight: "normal",
    padding: 10
  },
  mainContainer: {
    backgroundColor: "#6600ff",
    paddingTop: 20,
    flex: 1
  },
  subContainer: {
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    flex: 1,
    backgroundColor: "#e6e6e6"
  },
  buttonViewOutline: {
    width: 95,
    borderColor: "#e6e6e6",
    borderWidth: 1,
    height: 35,
    borderRadius: 30
  },
  outLineButtonText: {
    fontStyle: "normal",
    fontSize: 13,
    color: "#5B5850"
  }
});
