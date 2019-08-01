import * as React from 'react';
import { Text, View, StyleSheet,ScrollView,Switch,Dimensions } from 'react-native';
import Constants from 'expo-constants';
import Button from '../components/ButtonComponent';

import {Input} from 'react-native-elements';
// You can import from local files

// or any pure javascript modules available in npm


export default class SignUp extends React.Component {
  
  constructor(props){
   super(props);
   this.state ={switchValue:false}

  }
  toggleSwitch = (value) => {
      //onValueChange of the switch this function will be called
      this.setState({switchValue: value})
      //state changes according to switch
      //which will result in re-render the text
   }
  render() {
    const themeColor="#6600ff"
    return (
     <View style={{flex:1,backgroundColor:themeColor}}>
      <View style={{marginTop:30,flex:1,textAlign:'center',justifyContent:'center'}}>
          <Text style={{fontSize:30,color:'white',textAlign:'center'}}>
          SignUp
         </Text>
        </View>
      <ScrollView showsHorizontalScrollIndicator={false}  contentContainerStyle={[styles.container]}>
       
      <View style={{marginTop:10,padding:10}}>
       
           <View >
       <Input
                       label='Name'
                       labelStyle={{color:themeColor}}                
                      inputContainerStyle={{borderColor:themeColor}}          
                     containerStyle={{ marginTop:30}}
                        placeholder='Username'
                      
                        />
      </View>
      <View >                  
      <Input
                         label='Phone'
                       labelStyle={{color:themeColor}}            
                       inputContainerStyle={{borderColor:themeColor}}
                     containerStyle={{ marginTop:30}}
                        placeholder='Phonenumber'
                      
                      />
     </View>
     <View >                 
     <Input
                       label='Mail'
                       labelStyle={{color:themeColor}}            
                     inputContainerStyle={{borderColor:themeColor}}
                     containerStyle={{ marginTop:30}}
                        placeholder='Mail'
                       
                      />
    </View>
    <View  >
    <Input
                      label='Password'
                       labelStyle={{color:themeColor}}            
                    inputContainerStyle={{borderColor:themeColor}}
                     containerStyle={{ marginTop:30}}
                        placeholder='Password'
                       
                        
                      />   
     </View>
     <View >
     <Input
                     label='Re-enter Password'
                       labelStyle={{color:themeColor}}            
                   inputContainerStyle={{borderColor:themeColor}}
                     containerStyle={{ marginTop:30}}
                        placeholder='Re-enter Password'
                       
                      />  
      </View>
                       
          <View style={{flexDirection:"row",paddingTop:30,marginBottom:30}} >
          <View style={{flex:1,justifyContent:'center'}}>
           <Switch
              style={{ marginRight:5, transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
              onValueChange = {this.toggleSwitch}
              value = {this.state.switchValue}/>
           </View> 
            <View style={{ flex:5}}>
              <Text>I accept 
               <Text style ={{textDecorationLine: 'underline',color:'blue'}}>{" terms and condition"} </Text>
              </Text>
           </View>   
                 
         </View>   
     </View>    
   
     
      
        
      
    
       
         
          
     
      </ScrollView>

 <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:themeColor}}>
         <Button
        title="Next"  
         type='outline'
        size= "medium" 
        onPress ={{}}
        
        textColor = {themeColor}
        buttonColor = "#fff"
        />  
        </View>

</View>


    );
  }
}


const styles = StyleSheet.create({
    container:{
        borderColor:"black",
        borderRadius:25,
         marginHorizontal:10,
        backgroundColor:"#fff",
      
      justifyContent:'center',
      elevation:10,
    shadowOffset:{  width: 20,  height: 15,  },
    shadowOpacity: 0.7,
    shadowColor:'black'
   
   
    }
});

