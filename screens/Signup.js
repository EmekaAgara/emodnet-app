import { StyleSheet, Text, View,Image,TouchableOpacity, SafeAreaView, useWindowDimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'

const Signup = () => {

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
          source={require('../assets/Square.png')}
          style={[styles.logo, {height:height * 0.3}]}
        
        
        />
        <Text style={styles.title}>Create a NAVR account</Text>
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


    
    // <View style={styles.container}>
    //     <Image style={styles.image}
    //         source={require('../assets/Square.png')}
    //     />
    // <View style={styles.textcontainer}>
    // <Text style={styles.mainText}>Signup Polution</Text>
    // <Text style={styles.subText}>Eliminating pollution of our seas, waters, and Oceans by rewarding campaign participants</Text>
    // </View>
    //     <TouchableOpacity onPress={onNextPress} style={styles.SecButtonContainer}>
    //         <Text style={styles.ButtonText}>Next</Text>
    //     </TouchableOpacity>

    //     <TouchableOpacity onPress={onGetStartedPress} style={styles.ButtonContainer}>
    //         <Text style={styles.ButtonText}>Get Started</Text>
    //     </TouchableOpacity>
    
    // </View>
  )
}

export default Signup

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