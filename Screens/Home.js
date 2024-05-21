import React from 'react';
import { StyleSheet, View, FlatList,Text,TouchableOpacity,Image,IconLabel,Dimensions} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const flight = [
  {
    name: 'Turkish Airlines',
    categories: 'Economy Class',
    deliveryTime: 'Istanbul-Bratislava',
    distance: '1520,3 KM  Pm 09:00',
     image:source=require('../assets/istanbul.jpg'),
     koltuk:120,
    id: 1,
  },
  {
     name: 'Pegasus',
    categories: 'Economy Class',
    deliveryTime: 'Amsterdam-Kahire',
    distance: '3282 KM Pm 06:00',
      image:source=require('../assets/amsterdam.jpg'),
koltuk:146,
    id: 2,
  },
  {
     name: 'Qatar Airlines',
    categories: 'First Class',
    deliveryTime: 'Berlin-Brüksel',
     image:source=require('../assets/bruksel.jpg'),
koltuk:128,
    distance: '754,3 KM Pm 17:00',
    id: 3,
  },
  {
    name: 'Sunexpress',
    categories: 'Economy Class',
    deliveryTime: 'Varşova-Buenos Aires',
     image:source=require('../assets/varsova.jpg'),
koltuk:100,
    distance: '12.320 km Pm 11:00',
    id: 4,
  },
  {
    name: 'Anadolu Jet',
    categories: 'First Class',
    deliveryTime: 'Norwich-Oslo',
     image:source=require('../assets/oslo.jpg'),
koltuk:153,
    distance: '1645,6 km Pm 07:00',
    id: 5,
  },
  {
    name: 'British Airways',
    categories: 'First Class',
    deliveryTime: 'Tokyo-Montevideo',
     image:source=require('../assets/tokyo.jpg'),
koltuk:80,
    distance: '18.565 km Pm 01:00',
    id: 6,
  },
    {
    name: 'Air France',
    categories: 'Economy Class',
    deliveryTime: 'Calais-Dublin',
     image:source=require('../assets/dublin.jpg'),
    distance: '764.2 km Pm 15:20',
    koltuk:180,
    id: 7, 
  },
    {
    name: 'Lufthansa',
    categories: 'Economy Class',
    deliveryTime: 'Bogota-Tahran',
     image:source=require('../assets/bogota.jpg'),
    distance: '12.767 km Pm 23:40',
    id: 8,
    koltuk:194
  },
   {
    name: 'Emirates',
    categories: 'Economy Class',
    deliveryTime: 'Viyana-Paris',
     image:source=require('../assets/paris.jpg'),
    distance: '1235,3 km Pm 10:30',
    id: 9,
    koltuk:183
  },
   {
    name: 'KLM',
    categories: 'Economy Class',
    deliveryTime: 'Moscow-Canberra',
     image:source=require('../assets/moskova.jpg'),
    distance: '14.472 km Pm 08:10',
    id: 10,
    koltuk:124
  },
];

export default function HomeScreen ({navigation}) {
  return (

<View style={styles.container}>
      

      <FlatList
        data={flight}
         keyExtractor={item => item.id}
                 renderItem={({ item }) => (

                <TouchableOpacity >
                     <View style={styles.cardContainer}>
      
                        <Image
                            style={styles.imageStyle}
                            source= {item.image}
                              />
       
                            <View style={styles.infoStyle}>
                            <Text style={styles.titleStyle}>{item.name}</Text>
       
                             <View style={styles.dusunce}> 
                             <Text style={styles.categoryStyle}>{item.categories}</Text>
                             </View> 

                         <View style={styles.iconLabelStyle}>
                         <Text> {item.deliveryTime} </Text>
                       <Text> {item.distance}  </Text>
                       <TouchableOpacity style={styles.create}>
                          <Text style={styles.createText} onPress={()=>navigation.navigate("Detay",{item})}>Bilete Git</Text>
                        </TouchableOpacity>
                     </View>
                   </View>
                </View>   
             </TouchableOpacity >
              
         )}
      />
       
   </View>
   
  );    
}
const deviceWidth = Math.round(Dimensions.get('window').width);
const offset = 40;
const radius = 15;


const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#03AED2',
  },
  cardContainer: {
    width: deviceWidth - offset,
    backgroundColor: '#fff',
    height: 200,
    borderRadius: radius,
    shadowColor: '#333',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    margin:20
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
    fontSize: 20,
    fontWeight: '800',
    color:"#0D9276",
  },
  categoryStyle: {
    fontWeight: '500',
    fontSize: 15,
    color:"#0F1035",
  },
  infoStyle: {
    marginHorizontal: 10,
     fontWeight: '500',
     color:"#0F1035",
  },
  iconLabelStyle: {
    flexDirection: 'row',
  },
     create:{
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#6DC5D1",
    borderRadius: 5,
    height: 20,
    width:"100px",
  },
  createText:{
   fontSize:"10px",
   textAlign:"center",
    alignItems:"center",
    color:"white",
    fontWeight:"700",
    paddingHorizontal: 10,
  },
});