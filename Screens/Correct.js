import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

const Disconnected = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://w7.pngwing.com/pngs/688/951/png-transparent-correct-mark-tick-icon.png" }}
        style={styles.image}
      />
      <Text>biletiniz başarıyla oluşturulmuştur iyi yolculuklar</Text>
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
});

export default Disconnected;
