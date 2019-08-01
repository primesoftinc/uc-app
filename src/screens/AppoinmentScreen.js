import React ,{Component}from 'react';
import {StyleSheet,Text,View ,Alert} from 'react-native';
import Calendar from '../components/CalendarComponent'
import Button from '../components/MyButton'
import ButtonCom from '../components/ButtonComponent'
export default class AppointmentScreen extends Component{
    constructor(props){
        super(props);
       
    }
    render(){
        return (
            <View style={{flex:1}}>
              <View style={{flex:3,}}>
                <View >
                <Text style={styles.headingStyle}>Select Appoinment Date</Text>
                <Calendar/>
                </View>
                </View>
                <View style={{flex:5,}}>

                <View style={{paddingTop:10}}>
                <Text  style={styles.headingStyle}>Select Appointment Time</Text>
                <View style={{height:50,
                flexDirection:'row',paddingTop:15,
                justifyContent:'space-around'}}>
                  <Button  title={'9:00 AM'}></Button>
                  <Button  title={'9:15 AM'} ></Button>
                  <Button  title={'9:30 AM'} ></Button>

              </View>
              <View style={{height:50,
                flexDirection:'row',paddingTop:15,
                justifyContent:'space-around'}}>
                  <Button title={'9:45 AM'}></Button>
                  <Button title={'10:00 AM'} ></Button>
                  <Button  title={'10:15 AM'}></Button>

              </View>
              <View style={{height:50,
                flexDirection:'row',paddingTop:15,
                justifyContent:'space-around'}}>
                 
                  <Button title={'10:30 AM'} ></Button>
                  <Button title={'10:45 AM'} ></Button>
                  <Button title={'11:00AM'} ></Button>

              </View>
              </View>
              </View>
              <View style={{flex:4,justifyContent:'center',alignItems:'center'}}>
                <ButtonCom title={'Confirm'} type="solid" style={{backgroundColor:'#4e38fe',}} 
               textColor='#ffffff'
                radius={40} 
                size='small'
                ></ButtonCom>
              </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    headingStyle:{
        fontSize:17,
        color:'#5B5850',
        fontWeight:"normal",
        padding:10
    },
    mainContainer:{
        backgroundColor:'#6600ff',
        paddingTop:20,
        flex:1
    },
    subContainer:{
        borderTopStartRadius:20,
        borderTopEndRadius:20,
        flex:1,
        backgroundColor:'#e6e6e6'
    },
    buttonViewOutline:{
        width:95,
        borderColor:'#e6e6e6',
        borderWidth:1,
        height:35,
        borderRadius:30,
    },
      outLineButtonText:{
        fontStyle:'normal',
        fontSize:13,
        color:'#5B5850'
      },
    })