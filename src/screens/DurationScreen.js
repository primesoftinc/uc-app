import React ,{Component}from 'react';
import Multiplerender from '../screens/Multiplerender'
import {Dimensions,Text,View,TextInput,Alert, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
var {height} =Dimensions.get('window')
 export default class ViewWithScroll extends Component{
     
     render(){
         return(
             <View style={{height:height}}>
                 <Text style={{paddingTop:10,fontSize:15,alignSelf:'center'}}>Duration for Symptoms</Text>
             <ScrollView contentContainerStyle={{alignItems:'center',padding:20}}>
                <Multiplerender />
               
           
             </ScrollView>
             <View style={{height:125,justifyContent:'flex-start'}}>
                <Button title='Next'
              type='solid'
              buttonStyle={{backgroundColor:'#4e38fe'}}></Button>
              </View>
            
              </View>
         )
     }
 }