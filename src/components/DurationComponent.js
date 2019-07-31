
import React,{Component} from 'react';
import {View} from 'react-native';
import InputSpinner from 'react-native-input-spinner';
export default class TextInputExample extends Component{
    render(){
        return(
            <View>
            <InputSpinner
    max={100}
    min={1}
    step={1}
    color={'#590DF0'}
    value={1}
    Not rounded={false}
    showBorder={true}
    onChange={(num)=>{}} />
        </View>);
    }
}
