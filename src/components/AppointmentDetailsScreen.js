import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { ApolloProvider } from '@apollo/react-hooks';
import client from '../util/apollo'
import AppointmentDetailsProvider from './AppointmentDetailsProvider'
export default class AppointmentDetailsScreen extends React.Component{
    render(){
        return(
            <ApolloProvider client={client}>
              {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
              <AppointmentDetailsProvider/>
            </ApolloProvider>
        )
    }
}