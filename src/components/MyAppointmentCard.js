import React ,{Component}from 'react';
import {StyleSheet,View} from 'react-native';
import { Card, Text} from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {MaterialIcons as Direction, 
  AntDesign as Qrcode,
  MaterialCommunityIcons as Time} from '@expo/vector-icons'
export default class MyApppointmentCard extends Component { 
  constructor(props){
    super(props);
  }
   render() {  
    const { hospitalName, slotTime,distance,qrCode} = this.props;
       return(
         <View style={{paddingTop:10}}>
          <Card 
            containerStyle={styles.CardContainerType}>
            <View>
            <View style={{height:30,justifyContent:'flex-start'}}>
                <Text style={styles.textBase}>{hospitalName}</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',}}>
            <TouchableOpacity>
              <View style={styles.slotTimings}>
                <Text style={styles.slotText}> </Text>
                <Text style={styles.slotText}> <Time size={15} name='clock-outline'color='#6600ff'/> {slotTime}</Text>
                <Text style={styles.slotText}> - </Text>
                <Text style={styles.slotText}> <Time size={15} name='clock-outline'color='#6600ff'/> {slotTime}</Text>
                <View style={{flex:1}}><Text style={styles.slot}>Slot Time </Text></View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.direction}>
                <Direction size={90} name='directions'  color='#6600ff'/>
               <View style={{flex:1}}><Text style={styles.directionText}>{distance} </Text></View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.qrcode}>
                <Qrcode size={90} name='qrcode'/>
                <View style={{flex:1}}><Text style={styles.qrText}>{qrCode} </Text></View>
              </View>
            </TouchableOpacity>
            </View>
            </View>
          </Card>
          </View>
       );
   }
}
const styles = StyleSheet.create({
    CardContainerType: {
        borderRadius:10,
        height:180
    },
    slotTimings: {
        width:90,
        height:120,
        borderRadius:5,
        justifyContent:'space-evenly'
    },
    direction:{
        justifyContent:'center',
        width:90,
        height:120,
        borderRadius:5,
    },
    qrcode:{
        width:90,
        height:120,
        borderRadius:5,
        justifyContent:'center'
    },
    slotText:{
        color: 'black',
        fontStyle:'normal',
        fontSize:13,
        textAlign:'center',
        fontWeight: 'bold',
    },
    slot:{
        padding:15,
        paddingHorizontal:15,
        color: 'black',
        fontStyle:'normal',
        fontSize:12,
        textAlign:'right',
        fontWeight: 'bold',
    },
    directionText:{
        color: 'black',
        fontStyle:'normal',
        fontSize:13,
        textAlign:'center',
        fontWeight: 'bold',
    },
    qrText:{
        color: 'black',
        fontStyle:'normal',
        fontSize:12,
        textAlign:'center',
        fontWeight: 'bold',
        justifyContent:'center',
        alignItems:'center'
    },
    textBase:{
        color:'#8C2DEC',
        fontStyle:'normal',
        fontSize:11,
        justifyContent:'flex-start',
        padding:2,
        fontStyle:'normal',
        fontSize: 17,
        fontWeight: 'bold',
    },
});
