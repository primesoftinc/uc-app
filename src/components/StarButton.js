import StaticRating from "./StaticRating";
import * as React from "react";
import { View } from "react-native";

export default class StarButton extends React.Component {
  render() {
    return (
      <View>
        <StaticRating starCount={"1"} />
        <View style={{ width: 50 }}>
          <StaticRating starCount={"5"} />
        </View>
      </View>
    );
  }
}
