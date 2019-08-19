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


import MyApppointmentCard from './MyAppointmentCard';
const GET_Branch = gql`
  {
    getBranch(id:"4a045f8c-dad6-4b05-8bd4-3aeb8f7df436")
  {
    branchName,
    address,
    email
  }
  }
`;
const GET_Doctor = gql`
  {
    getDoctorDetails(id:"033822a1-5c99-4421-93b1-bef91af89eea"){
        id,
         qualification,
        user{id}
       }
  }
`;



export default function MyAppointmentCardProvider() {
  const { loading, error, data } = useQuery(GET_Branch);
   const { data:d1 } = useQuery(GET_Doctor);
 
  console.log("branch"+data.getBranch)
  console.log(d1.getDoctorDetails)

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>{`Error! ${error.message}`}</Text>;
else{
  console.log(data.getBranch)
  return (
    <View>
    {data.getBranch.map(d=>{
      return(
        <View>
        <Text>{d.id}</Text>
        <MyApppointmentCard hospitalName={d.branchName} slotTime='9-30 AM' distance='10 Miles' qrCode='AFGAEFGIGWI' />
        </View>
      );
    })}
    </View>
  );
}

}
