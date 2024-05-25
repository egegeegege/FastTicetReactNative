import React from 'react';
import { View, Text ,Dimensions,Image,TouchableOpacity} from 'react-native';
import {StyleSheet} from "react-native"
export default function Detailscreen({ route,navigation }) {
const {item} = route.params;
return (
                  <View style={styles.container}>
                  <Text style={styles.titleStyle}>{item.name}</Text>
                    <Image
                            style={styles.imageStyle}
                            source= {item.image}
                              />
                        
                 <Text style={styles.categoryStyle}>{item.categories}  {item.deliveryTime}</Text>
                        <Text style={styles.categoryStyle}>{item.distance}</Text>
                        <Text style={styles.categoryStyle}>Koltuk sayısı: {item.koltuk}</Text>

<View style={styles.buttonContainer}>
 <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={()=>navigation.navigate("Onay")}>Bu bileti satın al</Text>
      </TouchableOpacity>
</View>
            </View>
 );
}

const deviceWidth = Math.round(Dimensions.get('window').width);
const offset = 40;
const radius = 40;
const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#03AED2',
  },
  
  imageStyle: {
    height: 130,
    width: deviceWidth - offset,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    opacity: 0.9,
    alignContent: 'center',
    alignSelf: 'center',
  },
  titleStyle: {
    fontSize: 40,
    fontWeight: '800',
    color:"#0D9276",
  },
  categoryStyle: {
    fontWeight: '500',
    fontSize: 15,
    color:"#0F1035",
  },
  iconLabelStyle: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#E49BFF',
     borderRadius: 10,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: '160%',
    marginRight:"10px",
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight:"500",
  },
  buttonContainer: {
    alignItems:'center',
    justifyContent: 'center',
    width: '50%',
  },
   
});
