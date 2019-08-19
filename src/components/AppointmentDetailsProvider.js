import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import ApppointmentDetails from './AppointmentDetails';
const Get_Doctor = gql`
  {
    getDoctorDetails(id:"033822a1-5c99-4421-93b1-bef91af89eea"){
        id,
         qualification,
         doctorName,
        user{id}
       }
  }
`;

 export default function AppointmentDetailsProvider() {
  const { loading, error, data } = useQuery(Get_Doctor);
  // const { loading:l, error:e, data:data1 } = useQuery(GET_Branch_Address);
  console.log(data)
 

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>{`Error! ${error.message}`}</Text>;
else{
  
  console.log(data.getDoctorDetails.address)
  return (
   
    <View>
    {data.getDoctorDetails.map(d=>{
      return(
        <View>
        
        <ApppointmentDetails doctorName={d.doctorName} address='road no-12,kakinada' specialization={d.qualification} symptom='hyperTension' />
        </View>
      );
    })}
    </View>
  );
}

}