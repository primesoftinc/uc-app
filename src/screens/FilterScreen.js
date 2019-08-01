import React, { Component } from 'react';
import {View,StyleSheet,ScrollView,Text,Alert} from 'react-native';
import {Card,Input,Button} from 'react-native-elements' 
import MultiSelect from '../components/MultiSelectDropDown'
export default class FilterForm extends Component{
  constructor(props){
    super(props);
    this.state={
      time:{
        from:'',
        to:''
      },
      Distance:'',
      Specialist:''
    }
  }
  handleClick=()=>{
    Alert.alert("hello");
  }
  // onChangeTime=()=>{
  //   this.setState({time:{}})
  // }
    render(){
      
        return(<View style={{backgroundColor:'#4e38fe',flex:1}}>
           <ScrollView>
             <Card containerStyle={{borderRadius:15,paddingTop:20}}>
                 <View style={{flexDirection:'row'}}>
                 <View style={{flex:1}}>
                     <Input
                    //  value={this.state.time}
                     label='Time'
                     labelStyle={[styles.label,]}    
                     onChange={this.onChangeTime}            
                     inputContainerStyle={{borderColor:'#4e38fe'}}          
                     containerStyle={{ marginTop:30}}
                     placeholder='From'
                      />
                   </View>
                   <View  style={{flex:1,paddingTop:24,}}>
                     <Input
                     labelStyle={[styles.label,]}                
                     inputContainerStyle={{borderColor:'#4e38fe'}}          
                     containerStyle={{ marginTop:30}}
                     placeholder='To'
                      />
                   </View>
                   </View>
                   <View >
                     <Input
                     label='Distance'
                     labelStyle={[styles.label,]}                
                     inputContainerStyle={{borderColor:'#4e38fe'}}          
                     containerStyle={{ marginTop:30}}
                     placeholder='Distance'
                      />
                   </View> 
                   <View >
                     <Text style={{fontSize:15,fontWeight:'normal',color:'#4e38fe',paddingTop:20,paddingLeft:10}}>Specialist</Text>
                    <MultiSelect/>
                  </View>
                 
               <Button
               buttonStyle={{backgroundColor:'#4e38fe',width:90,height:40,borderRadius:30,alignSelf:'flex-end'}}
               onPress={this.handleClick}
               title='Submit'
               titleStyle={{color:'#ffffff',fontSize:15,fontStyle:'normal'}}
               type='solid'
               />
        
               </Card>
               </ScrollView>

        </View>)
    }
}
const styles = StyleSheet.create({
   label:{
     color:'#4e38fe', 
 fontWeight:"normal"}
   })