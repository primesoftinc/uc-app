import React ,{Component}from 'react';
import {StyleSheet,Image,View,TextInput,Alert } from 'react-native';
import StaticRating from './StaticRating';
import { Card, Text} from 'react-native-elements'
import { EvilIcons as Icons } from '@expo/vector-icons';
   export default class CardComponent extends Component {
    constructor(props){
        super(props);
        this.state={
          status:'open'
        }
      }
      render() { 
        const { images, place,Spec,Name} = this.props;
        return(
            <View>

            <Card containerStyle={styles.cardContainer}>
            <View style={{flexDirection:'row'}}>
              <View style={{flex:2,}}>
                <Image
                  style={styles.image}
                  source={'https://images.pexels.com/photos/1516648/pexels-photo-1516648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} />
              </View>
              <View style={{flex:4,}}>
                <Text style={styles.textHospitalName}>Name</Text>
                <Text style={styles.textBase}>place </Text>
                <Text style={styles.textStyle}>Spec</Text>
                <Text style={styles.textStyle}>Distance</Text>
                <View style={{paddingTop:5}}>
                </View>
              </View>
              <View style={{flex:1,flexDirection:'column',alignItems:'center'}}>
                  <StaticRating starCount='1' style={{paddingLeft:50}}/>

                  <Icons 
                  style={{paddingTop:10}}
                  name='location' size={20}></Icons>
                  <Text style={{color:'#5B5850',fontStyle:'normal',fontSize:12,}}>2 min</Text>
                  </View>

            </View>
            <View style={{height:50,flexDirection:'row',paddingTop:15
            ,justifyContent:'space-around'}}>
              <View style={styles.buttonView}>
                <Text style={styles.baseText}>9:00</Text>
              </View>
              <View style={styles.buttonViewOutline}>
              <Text style={styles.baseText}>9:15</Text>              
              </View>
              <View style={styles.buttonViewOutline}>
              <Text style={styles.baseText}>9:30</Text>              
              </View>
              <View style={styles.buttonViewOutline}>
              <Text style={styles.baseText}>9:45</Text>              
              </View>
              </View>
              
          </Card>


         
          </View>
        )

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
    elevation: 2,
    height:150
  },
  image:{
     width:75,
     height:75,
     borderRadius:15
    },
    textHospitalName:{
      color:'#5B5850',
      fontStyle:'normal',
      fontSize:15,
    },
    textBase:{
        color:'#8C2DEC',
        fontStyle:'normal',
        fontSize:12
    },
    textStyle:{
        color:'#5B5850',
        fontStyle:'normal',
        fontSize:12
    },
    buttonView:{
      borderColor:'#6600ff',
      borderWidth:1,height:30,
       width:60,borderRadius:15,
      alignItems:'center',
      justifyContent:'center',
      padding:10
    },
    buttonViewOutline:{
      borderColor:'#6600ff',
      borderWidth:1,
      height:30,
      width:60,
      borderRadius:15,
      alignItems:'center',
      justifyContent:'center'
    },
    baseText:{
      fontStyle:'normal',
      fontSize:11,
      color:'#6600ff'
    }
});