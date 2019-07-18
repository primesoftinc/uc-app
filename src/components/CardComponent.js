
import React ,{Component}from 'react';
import {StyleSheet,Image,View,ScrollView,Alert } from 'react-native';
import StaticStar from './StaticStar';

import { Card, Text, Button} from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class CardExample extends Component {
  onPressCard =() => {
    Alert.alert("you clicked");
  }
   render() { 
       return(
        <ScrollView>
          <TouchableOpacity onPress={this.onPressCard}>
          <Card containerStyle={styles.cardContainer}>
            <View style={{flex:1,flexDirection:'row'}}> 
              <Image
                style={styles.image}
                source={{uri:  'https://s-media-cache-ak0.pinimg.com/originals/ee/51/39/ee5139157407967591081ee04723259a.png'
                }}/>
              <View style={{flex:2,}}><Text>start</Text></View>
            </View>

            <Text style={{marginBottom: 10}}>
              The idea with React Native Elements is more about component structure than actual design.
              </Text>
          </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onPressCard}
           activeOpacity={1}>
          <Card containerStyle={styles.cardContainer}>
            <View style={{flex:1,flexDirection:'row'}}> 
              <Image
                style={styles.image}
                source={{uri:  'https://s-media-cache-ak0.pinimg.com/originals/ee/51/39/ee5139157407967591081ee04723259a.png'
                }}/>
              <View style={{flex:2,}}></View>
              <View style={{flex:1,}}><Text>start</Text></View>
            </View>
            <Text style={{marginBottom: 10}}>
              The idea with React Native Elements is more about component structure than actual design.
              </Text>
          </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onPressCard}>
          <Card containerStyle={styles.cardContainer}>
            <View style={{flex:1,flexDirection:'row'}}> 
              <Image
                style={styles.image}
                source={{uri:  'https://s-media-cache-ak0.pinimg.com/originals/ee/51/39/ee5139157407967591081ee04723259a.png'
                }}/>
              <View style={{flex:2,}}></View>
              <View style={{flex:1,}}><Text>start</Text></View>
            </View>
            <Text style={{marginBottom: 10}}>
              The idea with React Native Elements is more about component structure than actual design.
              </Text>
          </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onPressCard}>
          <Card containerStyle={styles.cardContainer}>
            <View style={{flex:1,flexDirection:'row'}}> 
              <Image
                style={styles.image}
                source={{uri:  'https://s-media-cache-ak0.pinimg.com/originals/ee/51/39/ee5139157407967591081ee04723259a.png'
                }}/>
              <View style={{flex:2,}}></View>
              <View style={{flex:1,}}><Text>start</Text></View>
            </View>
            <Text style={{marginBottom: 10}}>
              The idea with React Native Elements is more about component structure than actual design.
              </Text>
          </Card>
          </TouchableOpacity>
        </ScrollView>
       );
   }
}
const styles = StyleSheet.create({
    cardContainer: {
    borderRadius:10,
    shadowColor: "#000",
    shadowOffset: {
	    width: 3,
	    height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 10,
},
  image:{
     width:100,
     height:100
    }
});