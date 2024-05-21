import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

const Disconnected = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://static.thenounproject.com/png/26774-200.png' }}
        style={styles.image}
      />
      <Text style={styles.text}>İnternet bağlantınız kesldi başka bir zaman deneyiniz</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    marginTop: 20,
    fontSize: 16,
    color: '#333',
  },
});

export default Disconnected;
