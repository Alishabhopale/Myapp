
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';



export default function SignupScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.Welcome}>Registration</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
      />
       <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity
        style={styles.userBtn}
        >
          <Text style={styles.btnTxt}>Signup</Text>
        </TouchableOpacity>
      </View>
    
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: "#fff", 
  },
  input: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10
  },
  userBtn: {
    backgroundColor: "#DDDDDD",
    padding: 15,
    width: "90%"
  },
  btnTxt:{
    fontSize: 18,
    textAlign: "center"
  }
});
