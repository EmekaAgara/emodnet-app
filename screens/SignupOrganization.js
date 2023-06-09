import { StyleSheet, Text, View,Image,TouchableOpacity, SafeAreaView, useWindowDimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'

const SignupOrganization = () => {

  const {height} = useWindowDimensions();

    const navigation = useNavigation();

    const onSigninPressed = () => {
      navigation.navigate('Login');
    };

    const onRegisterPressed = () => {
      navigation.navigate('Home');
    };

    const onTermsOfUsePressed = () => {
      navigation.navigate('Login');
    };

    const onPrivacyPolicyPressed = () => {
      navigation.navigate('Login');
    };


  return (


    <SafeAreaView>
      <View style={styles.root}>
        <Image
          source={require('../assets/SER.png')}
          style={[styles.logo, {height:height * 0.2}]}
        />
        <Text style={styles.title}>Organization Create account</Text>
        <CustomInput name="name" placeholder="Fullname" rules={{required:'Enter your Fullname',}}/>
        {/* <CustomInput name="username" placeholder="Username" rules={{required:'Enter your username',}}/> */}
        <CustomInput name="email" placeholder="Email address" rules={{required:'Enter your email address'}}/>
        <CustomInput name="password" placeholder="Password" secureTextEntry rules={{required:'Enter your password',}} />
        <CustomInput name="password-repeat" placeholder="Confirm Password" secureTextEntry rules={{validate: value => value === pwd || 'Passwords do not match',}} />
        <CustomButton text="Create Account" onPress={onRegisterPressed}/>
        {/* <Text style={styles.text}>By creating an account, you confirm that you have accepted our{' '}<Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of use</Text> and <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text></Text> */}
        <CustomButton text="Have an account? Sign in" onPress={onSigninPressed} type="tertiary"/>
      </View>
    </SafeAreaView>
  )
}

export default SignupOrganization

const styles = StyleSheet.create({
  root: {
    alignItems:'center',
    padding:20,
    paddingTop:'20%',
  },

  title:{
    fontSize:24,
    fontWeight:'bold',
    color:'black',
    margin:10,
    alignSelf:'flex-start',
  },

  logo:{
    width:'70%',
    maxWidth:150,
    maxHeight:150,
    borderRadius:10,
    resizeMode:'cover',
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