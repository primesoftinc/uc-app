import { Button } from 'react-native-elements';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions,Image,TouchableOpacity } from 'react-native';
import Carousel, { Pagination ,ParallaxImage} from 'react-native-snap-carousel';
import {Entypo as Icon} from '@expo/vector-icons';
const SCREEN_WIDTH = Dimensions.get('window').width

const Screen = (props) => (
  <View style={{ flex : 1,backgroundColor:"blue" }}>
    <Image src= "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"  style={{width:(SCREEN_WIDTH -10),height:300,borderRadius:15}}/>
    

  </View>
)

export default class Carousal extends Component {
  
  SCREENS = [
    <Screen text='first screen' />,
    <Screen text='second screen' />,
    <Screen text='third screen' />
  ]
  
  constructor(props) {
    super(props)
    this.state = {
      activeTab : 0,
      
       list: [
        {
          id: "WpIAc9by5iU",
          thumbnail: "https://image.shutterstock.com/image-photo/smiling-doctor-clinic-giving-handshake-600w-390902179.jpg",
          title: "Led Zeppelin - Stairway To Heaven"
        }, {
          id: "sNPnbI1arSE",
          thumbnail: "https://image.shutterstock.com/image-photo/smiling-doctor-shaking-hand-patient-600w-1137974861.jpg",
          title: "Eminem - My Name Is"
        }, {
          id: "VOgFZfRVaww",
          thumbnail: "https://image.shutterstock.com/image-photo/attractive-female-doctor-front-medical-600w-557085679.jpg",
          title: "Are You Ready"
        }
      ]
    }
  }

   _renderItem = ( {item, index} ) => {
    console.log("rendering,", index, item)
    return (
       <View style={{flex:1}}>
       <View style={{flex:1}}>
       <Text style={{textAlign:"center"}}>{item.title}</Text>
        </View>
        <View style={{flex:2}}>
          <TouchableOpacity
             onPress={ () => { 
                console.log("clicked to index", index)
                this._carousel.snapToItem(index);
              }}
          >
          <View style={{backgroundColor:"white"}}>
            <Image  source={{ uri: item.thumbnail }} style={{width:450,height:300}}/>
          </View>      
          </TouchableOpacity>
            
            
       </View>  
       </View> 
    );
  }
  
  render() {
    return (
      
      <View style={styles.container}>
        <View>
        <Button
  title="Urgent Care"
  type="solid" buttonStyle={{alignContent:"center",width:SCREEN_WIDTH,marginBottom:10}}
/>

        </View>
      
      <View style={{flex:2}}>
        <Carousel
        
          ref={ ref => this.carouselRef = ref }
          data={ this.state.list }
          renderItem={ this._renderItem.bind(this)}
          
          onSnapToItem={ i => this.setState({ activeTab : i }) }
          sliderWidth={ SCREEN_WIDTH }
          itemWidth={ SCREEN_WIDTH }
          itemHeight= {300}
          slideStyle={{ width : SCREEN_WIDTH }}
          inactiveSlideOpacity={ 1 }
          inactiveSlideScale={ 1 }
        
        />
        </View>
        <View
          style={ styles.tabBar }
        >
          <Pagination
            containerStyle={ styles.tabsContainer }
            
            activeDotIndex={ this.state.activeTab }
            dotsLength={ 3 }
            tappableDots={ !!this.carouselRef }
            carouselRef={ this.carouselRef }
            inactiveDotColor ="#98A0AB"
            dotColor="#0C17D9"
          />
        </View>
        <View>
        <Button
  title="Get Started"
  type="solid" buttonStyle={{alignContent:"center",width:350,borderRadius:15,marginLeft:20}}
/>

        </View>
        
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40
  },
  tabBar : {
    flex: 1,
    textAlign:"center",
    width:SCREEN_WIDTH,
  
    
    backgroundColor : '#fff'
  },
  tabsContainer : {
    flexDirection : 'row',
    height : 50,
    paddingTop : 0,
    paddingBottom : 0
  }
})