import React from 'react'
import { Text, View, StyleSheet,ScrollView,Platform, UIManager,Image} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import MyAppointmentCard from './MyAppointmentCard'
import { Card } from 'react-native-elements';

export default class AppointmentData extends React.Component {
  constructor() {
    super();
 
    this.state = {
      doctorTitle: ['Hospital :', 'Address :', 'DoctorName :', 'Specialization :'],
      doctorData: [
        ['Apollo Hospitals'],
        ['Roadno-12,saghal Sreet,Kakinada'],
        ['Dr.Rajendra Prasad'],
        ['Neuro surgeon']
      ],
      patientTitle: ['PatientName :', 'Slot :', 'Problem :', 'Medication :'],
      patientData: [
        ['Abdul'],
        ['09:30 Am - 10:30 Am'],
        ['Nreves Weakness'],
        ['prescription']
      ]
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
          <MyAppointmentCard/>
          </View>
       
          <View style={styles.details}>
             <View  >
             <Image
                style={styles.image}
                source={require('./assets/Hospital.jpg')}/>
                 <View  style={{alignItems:'center',paddingTop:5}}>
                <Text style={styles.textBase}>Hospital Details  </Text>
                </View>
                <Card style={styles.hospitalDetails}>
                <Table borderStyle={{borderColor: 'transparent'}} >
          <TableWrapper style={styles.wrapper}>
            <Col data={state.doctorTitle} style={styles.title} heightArr={[30,30,30,30]} textStyle={styles.textBase}/>
            <Rows data={state.doctorData} flexArr={[2]} style={styles.row} textStyle={styles.textAddress}/>
          </TableWrapper>
        </Table>
                </Card>
                <View  style={{alignItems:'center',paddingTop:5}}>
                <Text style={styles.textBase}>Patient Details  </Text>
                </View>
                <Card style={styles.patientDetails}>
                <Table borderStyle={{borderColor: 'transparent'}} >
          <TableWrapper style={styles.wrapper}>
            <Col data={state.patientTitle} style={styles.title} heightArr={[30,30,30,30]} textStyle={styles.textBase}/>
            <Rows data={state.patientData} flexArr={[2]} style={styles.row} textStyle={styles.textAddress}/>
          </TableWrapper>
        </Table>
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
    height:800
   
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
    fontSize:14,
    justifyContent:'center'
},
textAddress:{
    color:'#5B5850',
    fontStyle:'normal',
    fontSize:13
},
details:{
  flex:2,
  backgroundColor:'white',
  paddingTop:10,
  borderWidth:1,
  borderColor:'#f2f2f2',
  borderRadius:5,
  width:325,
 
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
  paddingTop:0,
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
  wrapper: { flexDirection: 'row' },
  title: { flex:2 ,height:40,  },
  row: {  height: 30  }
});