import React, { Component } from "react";
import { View, Dimensions, Text } from "react-native";
import InputSpinner from "react-native-input-spinner";
var { width } = Dimensions.get("window");

export default class TextInputExample extends Component {
  render() {
    const { Symptoms = "fever" } = this.props;
    return (
      <View style={{ flexDirection: "row", width: width, height: 100 }}>
        <View style={{ flex: 2, justifyContent: "center" }}>
          <Text style={{ fontSize: 15, paddingLeft: 10, fontWeight: "100" }}>
            {Symptoms}
          </Text>
        </View>
        <View
          style={{ flex: 4, justifyContent: "center", alignItems: "center" }}
        >
          <InputSpinner
            style={{ borderColor: "#4e38fe", borderWidth: 1 }}
            buttonTextColor={"#4e38fe"}
            buttonFontSize={16}
            activeOpacity={0.5}
            // buttonStyle={{borderColor:'#4e38fe',borderWidth:1}}
            // textColor={'#bfbfbf'}
            max={100}
            min={0}
            step={1}
            color={"#ffffff"}
            value={1}
            Not
            rounded={false}
            showBorder={true}
            onChange={num => {}}
          />
        </View>
      </View>
    );
  }
}
