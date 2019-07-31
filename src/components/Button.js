

/* all non icon buttons ,google  button ,and mail button */
import { TouchableOpacity, StyleSheet, Text,View,Image,ActivityIndicator } from 'react-native';
import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import {
Ionicons as Icon } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
   
const radius1={ yes :{
  borderRadius :50
}}    
const sizes= {
  small:{
    width:200,
    height:50
  },
  medium:{

    width:300,
    height:60
  },
  large:{
    width:350,
    height:60
  }
 
}

export default class Buttons extends Component {
  constructor(props, context) {
    super(props, context);
      this.state = {
        isDisabled: false,
         state:'normal',
         isLoading :false,
         istype:'solid'
      }
      this.handlePress = this.handlePress.bind(this);
      this.handleLoading = this.handleLoading.bind(this);
      this.handleType = this.handleType.bind(this);
      this.handleGoogle = this.handleGoogle.bind(this);
      this.showiconButton =this.showiconButton(this);

    }
  handlePress( ) {
    console.log('Now, button disabled');

   this.setState({
     isDisabled: true
   });

}
  
  handleLoading( ) {
    console.log('Now, button is loading');

   this.setState({
     isLoading: true,
     isDisabled: true
   });

}

handleType( ) {
    console.log('Now, button is changing');
 
   this.setState({
     istype : "outline",
     isDisabled: true
   });

}

handleGoogle(){
  if(this.state.isLoading == false)
  {this.setState({isLoading:true});
    
  }
}


showiconButton(){
  const { isDisabled ,isLoading,istype} = this.state;
    const { title = 'Enter', style = {}, textStyle = {}, onPress,size,design,type='enter',state ,radius,icon} = this.props;
    
<Button
        icon ={ <Icon name="md-mail" size={25}  iconStyle={{padding:25,marginRight: 20}}/> }
        title ="Sign in with mail" titleStyle={{padding:25,marginLeft: 15}} buttonStyle={[{backgroundColor:"red"},styles.container,sizes[size],radius1[radius],{height:45},style]}
        />
}   


     
  render() {
    const { isDisabled ,isLoading,istype} = this.state;
    const { title = 'Enter', style = {}, textStyle = {}, onPress,size,design,type='enter',state ,radius,icon} = this.props;
     
    return (
      <View style={{alignItems:'center',justifyContent:'center'}}>
      {
        icon=="mail"?
        (<Button
         icon ={ 
           
         <Icon name="md-mail" size={25} color="white" iconStyle={{padding:25,marginRight: 20}}  
           
           /> }
        title ="Sign in with mail" titleStyle={{padding:25,marginLeft: 15}} 
        buttonStyle={[{backgroundColor:"red",padding:5,marginLeft: 20},styles.container,sizes[size],radius1[radius],{height:45},style]}
         loading ={isLoading} disabled={isDisabled} type= {istype}
         onPress={this.handleLoading}
        />
)  
        
        
        
        
        :<Text/>
      }

{
        ( icon=="google" && isLoading ==false) ?
        (

          <TouchableOpacity style={[styles.GooglePlusStyle,sizes[size],radius,{flexDirection:"row"}]} activeOpacity={0.5}  onPress={this.handleGoogle}>
          <View>
          <Image
            //We are showing the Image from online
            source={{
              uri:
                'https://cdn.pixabay.com/photo/2015/10/31/12/56/google-1015752_960_720.png',
            }}
           
            style={styles.ImageIconStyle}
          />
          </View>
          <View>
          <Text style={{marginLeft:20,color:'#676868',fontStyle:'bold'}}> Sign in with Google </Text>
          </View>
        </TouchableOpacity>
      
)   
        
        
        
        
        :<Text/>
      }

     {
       ( icon=="google" && isLoading ==true)?(
           <ActivityIndicator size="large" color="#0000ff" />
    )
       :
      <Text />
     }


     

    




      {
      (state == "disable" )?( 
      <Button    
        title={title}     
        type= {istype}      
        style={{ fontSize: 20, color: 'white' }}
        styleDisabled={{ color: 'white' }}
        disabled={isDisabled} 
        containerStyle={styles.container,sizes[size],radius1[radius]}
        disabledContainerStyle={{ backgroundColor: 'pink' }}
        onPress ={()=>this.handlePress()}         
       />
    
             
     )
     :<Text> </Text>
      }

    
    

        {
    
    (state=="loading")?
    (
      <Button       
         title="Book Now"  
          type="solid"
          loading ={isLoading}
           disabled={isDisabled} 
          style={{ fontSize: 20, color: 'white' }}
          buttonStyle = {styles.container,sizes[size]}
          onPress={this.handleLoading}
          
      />
      ) :<Text> </Text>
    
    }      
    {
    (state=="normal")?
      <Button    
          title={title}
          type={istype}
        style={{ fontSize: 20, color: 'black' }}
        styleDisabled={{ color: 'white' }}
        disabled= {isDisabled} 
        
        buttonStyle={[styles.container,sizes[size],radius1[radius]]}
        disabledContainerStyle={{ backgroundColor: 'pink' }}
        onPress={this.handleType}
        />
        
      
    

      :<Text> </Text>
    }

       </View>  
    );
  }
 
}
const styles = StyleSheet.create({
container:{
  alignItems:'center',
 justifyContent:'center',
 padding: 20, height: 45, borderRadius: 5,width:200

},
ImageIconStyle: {
    padding: 7,
    marginLeft: 15,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
   GooglePlusStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    height: 37,
    width: 220,
    borderRadius: 5,
    margin: 5,
    elevation:10
  }

});