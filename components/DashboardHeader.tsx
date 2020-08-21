import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Color from '../constants/color';

export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>John Doe</Text>
      <Text style={{ color: '#fff', opacity: 0.6 }}>20 Aug 2020</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 150,
    backgroundColor: '#1A73E8',
    padding: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    fontSize: 36,
    fontWeight: '500',
    color: '#ffffff',
    // textAlign: 'center',
  }
});