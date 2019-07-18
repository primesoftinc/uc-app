import * as React from 'react';
import StarRating from 'react-native-star-rating';
import {View, StyleSheet } from 'react-native';
/* contains 5 stars for rating*/ 

export default class DynamicRating extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      starCount: 0  
    };
  } 

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    return (
      <View style={{flex:1}}>
           <StarRating 
              disabled={false}
              emptyStar={'ios-star-outline'}
              fullStar={'ios-star'}
              containerStyle={{width:150}}
              iconSet={'Ionicons'}
              maxStars={5}
              starSize = {30}
              rating={this.state.starCount}
              selectedStar={(rating) => this.onStarRatingPress(rating)}
              fullStarColor={'#F5A21A'}
              />

      </View>
    );
  }
}

