import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const SplashScreen4 = () => {

    const navigation = useNavigation();

    const onGetStartedPress = () => {
      navigation.navigate('Welcome');
    };

    const onNextPress = () => {
      navigation.navigate('SplashScreen');
    };


  return (
    
    <View style={styles.container}>
        <Image style={styles.image}
            source={require('../assets/Square.png')}
        />
    <View style={styles.textcontainer}>
    <Text style={styles.mainText}>Make Donations</Text>
    <Text style={styles.subText}>Contributions can be made to a campaign aimed at cleaning up the Oceans and Reducing PLastic Litter</Text>
    </View>
        <TouchableOpacity onPress={onNextPress} style={styles.SecButtonContainer}>
            <Text style={styles.ButtonText}>Next</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onGetStartedPress} style={styles.ButtonContainer}>
            <Text style={styles.ButtonText}>Get Started</Text>
        </TouchableOpacity>
    
    </View>
  )
}

export default SplashScreen4

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },

    textcontainer: {
        backgroundColor: '#fff',
        // alignItems: 'left',
    },  

    mainText:{
        color:'black',
        fontSize:22,
        fontWeight:700,
        textAlign:'left',
        paddingBottom:10,
        paddingTop:20,
        paddingHorizontal:'8%',
    },

    subText:{
        color:'white',
        fontSize:13,
        fontWeight:500,
        textAlign:'left', 
        paddingHorizontal:'8%',
        color:'#818589',
        lineHeight:20,
        paddingBottom:20,
    },

    ButtonContainer: {
        backgroundColor: "#2699E6",
        borderRadius: 5,
        paddingVertical: 20,
        paddingHorizontal: 10,
        width:'85%'

    },

    SecButtonContainer: {
      backgroundColor: "#E63B60",
      borderRadius: 5,
      paddingVertical: 20,
      paddingHorizontal: 140,
      width:'85%',
      marginBottom:10,
    },


    TetButtonContainer: {
        borderWidth:0.5,
        borderColor:'white',
        borderRadius: 5,
        paddingVertical: 20,
        paddingHorizontal: 140,
        width:'85%',
        marginBottom:10,
    },
      


    ButtonText: {
        fontSize: 15,
        color: "#fff",
        fontWeight: 500,
        alignSelf: "center",
    },

    image:{
        width:'100%',
        height:'68%',
        resizeMode:'cover'
    }


  });