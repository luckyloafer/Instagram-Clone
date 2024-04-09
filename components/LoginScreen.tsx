import React from 'react'
import { View, Dimensions, TouchableOpacity, Text, Image, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '../constants/images'
import styles from '../styles/LoginScreen.scss'


const win = Dimensions.get('window');

const LoginScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={{ paddingBottom: 20, paddingTop: 60, backgroundColor: '#003366', width: win.width, height: win.height, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
      <View style={{ alignItems: 'center', display: 'flex', gap: 120 }}>

        <View >
          <Image
            source={images.instaicon}
            style={{ width: 80, height: 80 }}
          />
        </View>

        <View style={styles.inputCont}>
          <View style={styles.inputBox}>
            <TextInput placeholder='Username' />
          </View>
          <View style={styles.inputBox}>
            <TextInput placeholder='Password' secureTextEntry={true} style={{ color: 'white' }} />
          </View>
          <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Home')}>
            <Text style={{ color: 'white', fontWeight: 'bold' }} >Log in</Text>
          </TouchableOpacity>

        </View>
      </View>


      <TouchableOpacity style={styles.registerButton}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Create an account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )

}

export default LoginScreen