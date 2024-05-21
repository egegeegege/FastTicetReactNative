import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import HomeScreen from '../Screens/Home';
import LoginScreen from '../Screens/Login'
import SigninScreen from '../Screens/Signin'
import DisconnectedScreen from '../Screens/Disconnected'
import DetayScreen from '../Detay/detay'
import OnayScreen from '../Screens/Correct'

const Stack=createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' >
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Home' component={HomeScreen}/>
         <Stack.Screen name='Signin' component={SigninScreen}/>
          <Stack.Screen name='Disconnected' component={DisconnectedScreen}/>
          <Stack.Screen name='Detay' component={DetayScreen}/>
          <Stack.Screen name='Onay' component={OnayScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}