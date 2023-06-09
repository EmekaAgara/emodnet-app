import { StyleSheet, Text, View,Image,TouchableOpacity, SafeAreaView, useWindowDimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'

const Login = () => {

  const {height} = useWindowDimensions();

    const navigation = useNavigation();

    const onSignupPressed = () => {
      navigation.navigate('Signup');
    };

    const onLoginPressed = () => {
      navigation.navigate('Home');
    };


  return (


    <SafeAreaView>
      <View style={styles.root}>
        <Image
          source={require('../assets/SER.png')}
          style={[styles.logo, {height:height * 0.2}]}
        />
        <Text style={styles.title}>Login to your account</Text>
        <CustomInput name="email" placeholder="Email address" rules={{required:'Enter your email address'}}/>
        <CustomInput name="password" placeholder="Password" secureTextEntry rules={{required:'Enter your password',}} />
        <CustomButton text="Login" onPress={onLoginPressed}/>
        <CustomButton text="Have an account? Sign up" onPress={onSignupPressed} type="tertiary"/>
      </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  root: {
    alignItems:'center',
    padding:20,
    paddingTop:'40%',
  },

  logo:{
    width:'70%',
    maxWidth:150,
    maxHeight:150,
    borderRadius:10,
    resizeMode:'cover',
    alignSelf:'flex-start',
  },

  title:{
    fontSize:24,
    fontWeight:'bold',
    color:'black',
    margin:10,
    alignSelf:'flex-start',
  },

  text:{
    color:'gray',
    marginVertical:10,

  },

  link:{
    color:'#4765A9'

  }

});