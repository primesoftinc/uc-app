import React ,{Component}from 'react';
import {StyleSheet,View} from 'react-native';
export default class Header extends Component{
    render(){
        return(
            <View style={styles.mainContainer}>
                <View style={styles.subContainer}></View>
            </View>

        )
    }
}
const styles=StyleSheet.create({
    mainContainer:{
        backgroundColor:'blue',
        paddingTop:50,
        flex:1
    },
    subContainer:{
        borderTopStartRadius:30,
        borderTopEndRadius:30,
        flex:1,
        backgroundColor:'white'
    }
})

