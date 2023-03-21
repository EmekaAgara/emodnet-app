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
          source={require('../assets/Square.png')}
          style={[styles.logo, {height:height * 0.3}]}
        
        
        />
        <Text style={styles.title}>Login to your account</Text>
        {/* <CustomInput name="name" placeholder="Fullname" rules={{required:'Enter your Fullname',}}/> */}
        {/* <CustomInput name="username" placeholder="Username" rules={{required:'Enter your username',}}/> */}
        <CustomInput name="email" placeholder="Email address" rules={{required:'Enter your email address'}}/>
        <CustomInput name="password" placeholder="Password" secureTextEntry rules={{required:'Enter your password',}} />
        {/* <CustomInput name="password-repeat" placeholder="Confirm Password" secureTextEntry rules={{validate: value => value === pwd || 'Passwords do not match',}} /> */}
        <CustomButton text="Login" onPress={onLoginPressed}/>
        {/* <Text style={styles.text}>By creating an account, you confirm that you have accepted our{' '}<Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of use</Text> and <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text></Text> */}
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
  },

  title:{
    fontSize:24,
    fontWeight:'bold',
    color:'black',
    margin:10,
  },

  text:{
    color:'gray',
    marginVertical:10,

  },

  link:{
    color:'#4765A9'

  }

});