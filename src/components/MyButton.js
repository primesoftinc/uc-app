import React ,{Component}from 'react';
import {StyleSheet,Text,View ,Alert} from 'react-native';
import {Button} from 'react-native-elements'
export default class AppointmentScreen extends Component{
    constructor(props){
        super(props);
        this.state={buttonStatus:false}
    }
    handleClick =()=>{
        
          if(this.state.buttonStatus==true)
              this.setState({buttonStatus:false});
              else
              this.setState({buttonStatus:true});
      }

    render(){
        const {title} =this.props
        return (
            <Button
              disabled={false}
              type={"outline"}
               buttonStyle={[styles.buttonViewOutline,this.state.buttonStatus?(style={backgroundColor:'#4e38fe'}):style={backgroundColor:'white'}]}
                onPress={this.handleClick}
               title={title}
               titleStyle={[styles.outLineButtonText,this.state.buttonStatus?(style={color:'#ffffff'}):style={color:'#5B5850'}]}
               />
        )
    }
}
const styles = StyleSheet.create({
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