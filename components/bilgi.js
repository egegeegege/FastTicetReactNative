import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const bilgi = ({ label}) => {
  return (
    <View style={styles.container}>
     
      <Text style={styles.labelStyle}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginRight: 10,
    alignItems: 'center',
  },
  labelStyle: {
    fontSize: 13,
  },
});

export default bilgi;