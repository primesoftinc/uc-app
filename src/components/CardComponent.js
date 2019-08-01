import React ,{Component}from 'react';
import {StyleSheet,Image,View,ScrollView,TouchableOpacity ,Alert} from 'react-native';
import StaticRating from './StaticRating';
import { Card, Text} from 'react-native-elements'
import { EvilIcons as Icons } from '@expo/vector-icons';
   export default class CardComponent extends Component {
    constructor(props){
        super(props);
      }
      handleCard(){
        Alert.alert("clicked")
      }
      render() { 
        const { images, place,Spec,Name} = this.props;
        return(
          <ScrollView>
      
          {/* <Card containerStyle={styles.cardContainer}>
               <View style={{flexDirection:'row'}}>
                 <View style={{flex:6,}}>
                   <Text style={styles.textHospitalName}>{Name}</Text>
                   <Text style={styles.textBase}>{place} </Text>
                   <Text style={styles.textStyle}>{Spec}</Text>
                   <Text style={styles.textStyle}>Distance</Text>
                 </View>
                 <View style={{flex:1,flexDirection:'column',alignItems:'center'}}>
                     <StaticRating starCount='1' style={{paddingLeft:50}}/>
   
                     <Icons 
                     style={{paddingTop:10,color:'#5B5850'}}
                     name='location' size={20}></Icons>
                     <Text style={{color:'#5B5850',fontStyle:'normal',fontSize:12,}}>2 mi</Text>
                     </View>
                     
                     </View>
                     <View style={{paddingTop:10,alignSelf:'flex-end'}}>
                     <View style={styles.buttonView}>
                   <Text style={styles.buttonText}>Book</Text>
                 </View>
                 </View>
             </Card>
             <Card containerStyle={styles.cardContainer}>
               <View style={{flexDirection:'row'}}>
                 <View style={{flex:2,}}>
                   <Image
                     style={styles.image}
                     source={images.source[0]} />
                 </View>
                 <View style={{flex:4,}}>
                   <Text style={[styles.textHospitalName,styles.TextCard]}>{Name}</Text>
                   <Text style={[styles.textBase,styles.withImage]}>{place} </Text>
                   <Text style={[styles.textStyle,styles.withImage]}>{Spec}</Text>
                   <Text style={[styles.textStyle,styles.withImage]}>Distance</Text>
                   <View style={{paddingTop:5}}>
                   </View>
                 </View>
                 <View style={{flex:1,flexDirection:'column',alignItems:'center'}}>
                     <StaticRating starCount='1' style={{paddingLeft:50}}/>
   
                     <Icons 
                     style={{paddingTop:10,color:'#5B5850'}}
                     name='location' size={20}></Icons>
                     <Text  style={[styles.textStyle,styles.withImage]}>2 mi</Text>
                     
                     
                     </View>
   
               </View>
               <View style={{paddingTop:10,alignSelf:'flex-end'}}>
                     <View style={styles.buttonView}>
                   <Text style={styles.buttonText}>Book</Text>
                 </View>
                 </View>
              
                 
             </Card> */}
             <Card containerStyle={styles.cardContainer}>
               <TouchableOpacity onPress={this.handleCard}>
            <View style={{flexDirection:'row'}}>
              <View style={{flex:2,}}>
                <Image
                  style={styles.image}
                  source={images.source[0]} />
              </View>
              <View style={{flex:4,}}>
                <Text  style={[styles.textHospitalName]}>{Name}</Text>
                <Text style={[styles.textBase,styles.withImage]}>{place} </Text>
                <Text style={[styles.textStyle,styles.withImage]}>{Spec}</Text>
                <Text style={[styles.textStyle,styles.withImage]}>Distance</Text>
                <View style={{paddingTop:5}}>
                </View>
              </View>
              <View style={{flex:1,flexDirection:'column',alignItems:'center'}}>
                  <StaticRating starCount='1' style={{paddingLeft:50}}/>

                  <Icons 
                  style={{paddingTop:10,color:'#5B5850'}}
                  name='location' size={20}></Icons>
                  <Text style={{color:'#5B5850',fontStyle:'normal',fontSize:12,}}>2 mi</Text>
                  </View>

            </View>
            <View style={{height:50,flexDirection:'row',paddingTop:15
            ,justifyContent:'space-around'}}>
              <View style={styles.buttonViewOutline}>
                <Text style={styles.outLineButtonText}>09:00 A.M</Text>
              </View>
              <View style={styles.buttonViewOutline}>
              <Text style={styles.outLineButtonText}>09:15 A.M</Text>              
              </View>
              <View style={styles.buttonViewOutline}>
              <Text style={styles.outLineButtonText}>09:30 A.M</Text>              
              </View>
              <View style={styles.buttonViewOutline}>
              <Text style={styles.outLineButtonText}>09:45 A.M</Text>              
              </View>
              </View>
              </TouchableOpacity>
          </Card>

             
             
             </ScrollView>
   
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
    textCard:{
      fontSize:15
    },
    image:{
       width:75,
       height:75,
       borderRadius:15
      },
      textStyle:{
        color:'#5B5850',
          fontStyle:'normal',
          fontSize:13
      },
      withImage:{
        fontSize:12
      },
      textHospitalName:{
        color:'#5B5850',
        fontStyle:'normal',
        fontSize:13,
      },
      textBase:{
          color:'#4e38fe',
          fontStyle:'normal',
          fontSize:13
      },
      textAddress:{
          color:'#5B5850',
          fontStyle:'normal',
          fontSize:13
      },
      buttonView:{
       height:30,
         width:60,borderRadius:15,
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        backgroundColor:'#4e38fe',
        paddingTop:5,
       
      },
      buttonViewOutline:{
        borderColor:'#4e38fe',
        borderWidth:1,
        height:30,
        width:65,
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center'
      },
      outLineButtonText:{
        fontStyle:'normal',
        fontSize:12,
        color:'#4e38fe'
      },
      buttonText:{
        fontStyle:'normal',
        fontSize:13,
        color:'#ffffff'
      }

  });