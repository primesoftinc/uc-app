
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';



import { ApolloProvider } from '@apollo/react-hooks';
import client from '../util/apollo'

import MyAppointmentCard from './MyAppointmentCard'


export default class MyAppointmentCardScreen extends React.Component{
    render(){
        return(
            <ApolloProvider client={client}>
            <View >
              {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
              <MyAppointmentCard/>
            </View>
            </ApolloProvider>
        )
    }
}