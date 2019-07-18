import * as React from 'react';
import StarRating from 'react-native-star-rating';
import {View, Text} from 'react-native';
/*single start comonent */
export default class StaticRating extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ratingValue: 1,
      ratingCount:0
    };
  } 

  avgStarRating() {
    var averageRating = 3;
    this.setState({
      ratingValue:averageRating
    });
  }

  render() {
    return (
      <View style={{flex:1,flexDirection:'row'}}>
        <View style={{flex:1}}>
           <StarRating 
              disabled={false}
              emptyStar={'ios-star-outline'}
              fullStar={'ios-star'}
              iconSet={'Ionicons'}
              maxStars={1}
              halfStar={'ios-star-half'}
              starSize = {30}
              rating={this.state.ratingValue}
              selectedStar={() => this.avgStarRating()}
              fullStarColor={'#F5A21A'}
              />
              <Text style={{padding:10}}>{this.state.ratingValue}</Text>
          </View>
          <View style={{flex:1}}><Text style={{fontSize:20,color:'#f5b041',alignContent:'center'}}>({this.state.ratingCount})</Text></View>
        </View>
    );
  }
}
