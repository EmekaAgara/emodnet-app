import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const SplashScreen3 = () => {

    const navigation = useNavigation();

    const onGetStartedPress = () => {
      navigation.navigate('Welcome');
    };

    const onNextPress = () => {
      navigation.navigate('SplashScreen4');
    };


  return (
    
    <View style={styles.container}>
        <Image style={styles.image}
            source={require('../assets/Square.png')}
        />
    <View style={styles.textcontainer}>
    <Text style={styles.mainText}>Engage the community</Text>
    <Text style={styles.subText}>Engage the community, raise awareness of the issue of ocean pollution, and demonstrate the use eModnet data.</Text>
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

export default SplashScreen3

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
        backgroundColor: "#3B71F3",
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