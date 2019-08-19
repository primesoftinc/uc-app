import React, { Component } from "react";
import { Text, View, StyleSheet,Image } from "react-native";
import {MaterialIcons as Person,Entypo as Address,Foundation as Specialization, 
  FontAwesome as HopitalImage,
  FontAwesome as Symptom,AntDesign as Prescription,Ionicons as TimeSlot,MaterialCommunityIcons as Doctor} from '@expo/vector-icons' 
import { Card } from "native-base";

export default class AppointmentDetails extends Component {
  constructor(props){
    super(props);
  }
   render() {  
    const { doctorName, specialization,address,symptom} = this.props;
    return (
      <View  style={{alignItems:'center',paddingTop:5}}>

      <View style={{padding:20,flex:1,flexDirection:'column'}}>
        <View style={styles.cardStyle}>
          <View style={{width:250,height:450}}>
          <View style={styles.row}>
        <View style={styles.inputTitleDiff}>
        <Doctor size={20} name='doctor'color='#6600ff'/> 
        </View>
        <View style={styles.inputData}>
          <Text style={styles.inputDataText}>{doctorName}</Text> 
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.inputTitleDiff}>
        <Address size={20} name='location-pin'color='#6600ff'/>
        </View>
        <View style={styles.inputData}>
          <Text style={styles.inputDataText}>{address}</Text> 
        </View>
      </View>
     
      <View style={styles.row}>
        <View style={styles.inputTitle}>
           <Specialization size={20} name='clipboard-pencil'color='#6600ff'/> 
        </View>
        <View style={styles.inputData}>
          <Text style={styles.inputDataText}>{specialization}</Text> 
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.inputTitle}>
        <Symptom size={20} name='stethoscope'color='#6600ff'/> 
        </View>
        <View style={styles.inputData}>
          <Text style={styles.inputDataText}>{symptom}</Text> 
        </View>
      </View>
      </View>
      </View>
      </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 0.08,
    flexDirection: "row"
  },
  inputData: {
    alignSelf:'center',
  },
  inputTitle: {
    paddingLeft:5,
    alignSelf:'center',
    justifyContent:'center',
  },
  inputTitleDiff: {
    
    alignSelf:'center',
    justifyContent:'flex-start',
  },
  inputDataText: {
    justifyContent:'center',
    fontSize: 14,
    margin:20,
    color: "#6a4595"
  },
  HeadingText: {
    justifyContent:'center',
    fontSize: 14,
    paddingTop:0,
    margin:20,
    color: "#6a4595"
  },
  cardStyle:{
    height:175,
    width:300,
    alignContent:'space-between',
    alignSelf:'stretch',
    paddingTop:10,
    paddingLeft:10,
   
  }
});