import React ,{Component}from 'react';
import {Image,View,StyleSheet,Alert} from 'react-native';
const avat={
        small:{
            height:50,
            width:50
        },
        medium:{
            height:75,
            width:75
        },
        large:{
            height:100,
            width:100
        },
        Xlarge:{
            height:125,
            width:125
        }
}
const avatStatus={
    online:{
        borderColor:'#42f563'
    },
    offline:{
        borderColor:'#f54842'
    },
    busy:{
        borderColor:'#fcc705'
    }
}
export default class Avatar extends Component{
   
    render(){
        const {status,size} = this.props
        return(<View>
            <Image
                style={[styles.imageStyle,avat[size],avatStatus[status]]}
                source={{uri:  'https://images.pexels.com/photos/42273/doctor-medical-medicine-health-42273.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                }}/>
        </View>

        );
    }
}
const styles = StyleSheet.create({
    imageStyle: {
        borderRadius:50,
        height:75,
        width:75,
        borderWidth:2
}
});