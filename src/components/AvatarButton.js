import Avatar from './Avatar'
import * as React from 'react';
import { Alert,Text, View, StyleSheet } from 'react-native';

export default class AvatarButton extends React.Component {
  render() {
    return (
               <View style={{alignContent:'center'}}>
               <Avatar size="small" status="offline"/>
               <Avatar size="medium" status="busy"/>
               <Avatar size="large" status="online"/>
               </View> 
    );
  }
}