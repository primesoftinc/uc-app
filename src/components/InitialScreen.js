import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function InitialScreen() {
  return (
    <View style={styles.container}>
      <Text>Welcome to urgent care</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
  },
});