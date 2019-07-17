import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function InitialScreen() {
  return (
    <View style={styles.container}>
      <Text>This is Weelcome screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});