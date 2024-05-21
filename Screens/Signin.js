import React,{useState} from 'react';
import {SafeAreaView,Text,Button,TextInput,View,StyleSheet,TouchableOpacity} from 'react-native';

export default function Signin({navigation}) {

const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [verifypassword, setverifypassword] = useState("");
  const [usernamee, setusername] = useState("");
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FastTicket</Text>
      <View style={styles.inputView}>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        secureTextEntry
        value={usernamee}
        onChangeText={text => setusername(text)}
        placeholderTextColor="gray"
      />
     </View>
       <View style={styles.inputView}>
      <TextInput
        style={styles.input}
        placeholder="Mobil number or email adress"
        value={email}
        onChangeText={text => setemail(text)}
        placeholderTextColor="gray"
      />
      </View>
       <View style={styles.inputView}>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
        placeholderTextColor="gray"
      />
     </View>
      <View style={styles.inputView}>
      <TextInput
        style={styles.input}
        placeholder="verify your password"
        secureTextEntry
        value={verifypassword}
        onChangeText={text => setverifypassword(text)}
        placeholderTextColor="gray"
      />
     </View>
<View style={styles.buttonContainer}>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={()=>navigation.navigate("Home")}>Sign Up</Text>
      </TouchableOpacity>
      
    </View>
    <View>
     <TouchableOpacity style={styles.forgot}>
        <Text style={styles.forgetText}>By signin up you agree to our Terms.Privacy </Text>
        <Text style={styles.forgetText}>  Policy and Cookies Policy  </Text>
      </TouchableOpacity>

              <Text style={styles.or}>or</Text>
          <View style={styles.hr} />
    </View>
     <View style={styles.createbutton}>
<TouchableOpacity style={styles.create}>
        <Text style={styles.createText} onPress={()=>navigation.navigate("Login")}>Have an account? Log in</Text>
      </TouchableOpacity>
    </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: '750',
    color: '#40A2E3',
    marginBottom: 70,
    textAlign:"center",
  },
  input: {
    borderWidth: 1,
    borderColor: '#EEEDEB',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    color: 'black',
    backgroundColor: "#EEEDEB",
  },
  
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  button: {
    backgroundColor: '#40A2E3',
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
  forgot:{
    textAlign:"center",
    alignItems:"center",
  },
  forgetText:{
    color:"gray",
    fontSize:"15px",
    paddingTop:"10px",
    backgroundColor:"#transparent",
    fontWeight:"500",
  },
  or:{
    paddingTop:"20px",
    textAlign:"center",
    fontWeight:"500",
    fontSize:"16px",
  },
  hr:{
     borderBottomColor: 'black',
    borderBottomWidth: 1,
     marginVertical: 5,
  },
  createbutton:{
      flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
     paddingTop:"20px",
     
  },
  create:{
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#59AC78",
    borderRadius: 5,
    height: 40,
    width:"220px",
  },
  createText:{
   fontSize:"15px",
   textAlign:"center",
    alignItems:"center",
    color:"white",
    fontWeight:"700",
    paddingHorizontal: 20,
  },
});
