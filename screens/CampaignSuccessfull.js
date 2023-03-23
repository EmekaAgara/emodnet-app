import { Image,Dimensions, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import CustomButton from '../components/CustomButton'


const CampaignSuccessfull = () => {

  const onNextPressed=()=>{
    // console.warn('Successfull')
    navigation.navigate('Campaigns')
    
  }


  const navigation = useNavigation();
  return (
    <View
    style={{
      width:'100%',
      height:'100%',
      backgroundColor:'white',
    }}>


    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView
        style={{
          width:'100%',
          flexDirection:'row',
          justifyContent:'space-between',
        }}>
        </SafeAreaView>
      <View style={{
        marginBottom:10,
        padding:16,
      }}>
      <Text style={{
        fontSize:25,
        color:'black',
        fontWeight:'500',
        letterSpacing:1,
        marginBottom:10,
      }}>
       Successful !!
      </Text>

      <Text style={{
        fontSize:14,
        color:'black',
        fontWeight:'400',
        letterSpacing:1,
        lineHeight:24,
      }}>
       Your campaign has been cretaed, click next to view all campaigns.
      </Text>
      <Image
        style={styles.image}
        source={require('../assets/success.gif')}
      />
      <CustomButton text="Next" onPress={onNextPressed}/>
      </View>
    </ScrollView>
    
  </View>
  )
}

export default CampaignSuccessfull

const styles = StyleSheet.create({
  image: {
    marginTop:-120,
    flex: 0.6,
    width: '100%',
    resizeMode: 'contain',
  },

});