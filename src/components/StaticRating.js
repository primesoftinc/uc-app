import * as React from "react";
import StarRating from "react-native-star-rating";
import { View, Text } from "react-native";

export default class StaticRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratingValue: "1.0"
    };
  }

  avgStarRating() {
    var averageRating = 4.5;
    this.setState({
      ratingValue: averageRating
    });
  }
  render() {
    const { starCount = "" } = this.props;

    return (
      <View style={{}}>
        <View style={{}}>
          <StarRating
            disabled={true}
            emptyStar={"ios-star-outline"}
            fullStar={"ios-star"}
            iconSet={"Ionicons"}
            maxStars={Number(starCount)}
            halfStar={"ios-star-half"}
            starSize={15}
            rating={Number(starCount)}
            fullStarColor={"#F5A21A"}
          />

          <Text
            style={{
              color: "#5B5850",
              alignSelf: "flex-start",
              fontStyle: "normal",
              fontSize: 10
            }}
          >
            {this.state.ratingValue}
          </Text>
        </View>
      </View>
    );
  }
}
