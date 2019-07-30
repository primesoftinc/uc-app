import React from 'react'
import { Text, View, StyleSheet,ScrollView,Platform, UIManager,Image} from 'react-native';

import SingleCard from './SingleCard'
import { Card } from 'react-native-elements';
import { Table, Row, Rows } from 'react-native-table-component';
export default class AppointmentData extends React.Component {
  constructor() {
    super();
 
    this.state = { expanded: false ,
      
      tableData: [
        ['Address:','RoadNo-120,shaghal street,kakinada'] ],
        widthArr: [65, 200]
    }
    
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  render() {
    const state = this.state;
    return (
      <ScrollView>
      <View style={styles.container}>
        
        <View style={{flex:1}}>
          <SingleCard/>
          </View>
       
          <View style={styles.details}>
             <View  >
             <Image
                style={styles.image}
                source={{uri:'https://s-media-cache-ak0.pinimg.com/originals/ee/51/39/ee5139157407967591081ee04723259a.png'
                }}/>
                 <View  style={{alignItems:'center',paddingTop:5}}>
                <Text style={styles.textBase}>Hospital Details  </Text>
                </View>
                <Card style={styles.hospitalDetails}>
                <Text style={styles.textBase}>Hospital :  <Text style={styles.textAddress}>Apollo Hospitals</Text> </Text>
                <Text style={styles.textBase}>Address :  <Text style={styles.textAddress}>Roadno-12,saghal Sreet,Kakinada</Text> </Text>
                <Text style={styles.textBase}> Doctor Name : <Text style={styles.textAddress}> Dr.Rajendra Prasad</Text></Text>
                <Text style={styles.textBase}> Doctor specialization : <Text style={styles.textAddress}>Neuro surgeon</Text></Text>
                </Card>
                <View  style={{alignItems:'center',paddingTop:5}}>
                <Text style={styles.textBase}>Patient Details  </Text>
                </View>
                <Card style={styles.patientDetails}>
                <Text style={styles.textBase}> Patient Name :<Text style={styles.textAddress}> Abdul</Text></Text>
                <Text style={styles.textBase}> Slot :  <Text style={styles.textAddress}>9:30 Am - 10:30  Am</Text></Text>
                <Text style={styles.textBase}> Problem :  <Text style={styles.textAddress}>nerves weakness</Text></Text>
                <Text style={styles.textBase}> Medication :<Text style={{color: 'red'}}
                          onPress={() => LinkingIOS.openURL('http://google.com')}>Prescription</Text></Text>
                </Card>
             </View>
          </View> 
          <View style={{borderWidth:10,borderColor:'white'}}></View>
            
    </View>
    </ScrollView>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    paddingTop:10,
    height:700
   
  },
  image:{
    width:250,
    height:100,
    borderRadius:5,
    alignSelf:'center'
   },

textBase:{
    color:'#4e38fe',
    fontStyle:'normal',
    fontSize:15
},
textAddress:{
    color:'#5B5850',
    fontStyle:'normal',
    fontSize:14
},
details:{
  flex:2,
  backgroundColor:'white',
  paddingTop:10,
  borderWidth:1,
  borderColor:'#f2f2f2',
  borderRadius:5,
  width:325,
  height:450,
  alignSelf:'center',
  shadowColor: "#000",
  shadowOffset: {
    width: 3,
    height: 2,
  },
  shadowOpacity: 0.5,
  shadowRadius: 3.84,
  elevation: 5,
 
},
hospitalDetails:{
  borderRadius:5,
  backgroundColor:'white',
  shadowColor: "#000",
  shadowOffset: {
    width: 3,
    height: 2,
  },
  shadowOpacity: 0.5,
  shadowRadius: 3.84,
  elevation: 5,
},
patientDetails:{
    borderRadius:5,
    backgroundColor:'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
},

});