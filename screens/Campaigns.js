import { StyleSheet, Text, View,Image,TextInput, KeyboardAvoidingView,TouchableOpacity, ImageBackground, ScrollView, SafeAreaView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Campaign from '../components/Campaign'





const data = [
  {
    id:"1",
    image:require('../assets/pollution.png'),
    title:"Create a campaign",
    description:"Create a beach/seabed litter cleaning event",
    screen:"NewOpWallet"
  },

  {
    id:"2",
    image:require('../assets/pollution.png'),
    title:"Join a Campaign",
    description:"Join a beach/seabed litter cleaning event",
    screen:"OperationalAccount"
  },

  {
    id:"3",
    image:require('../assets/pollution.png'),
    title:"Trending Locations",
    description:"View trending Locations with beach and seabed litter",
    screen:"CreateTrustlineOp"
  },

  {
    id:"4",
    image:require('../assets/pollution.png'),
    title:"Historical Data",
    description:"Explore EMODNET data on beach/seabed litter",
    screen:"NftsOw"
  },

  {
    id:"5",
    image:require('../assets/pollution.png'),
    title:"Submit new data",
    description:"Submit new insights about beach/seabed litter",
    screen:"MyOpWallet"
  },

  {
    id:"6",
    image:require('../assets/pollution.png'),
    title:"Make Donation",
    description:"Make donations to beach/seabed litter cleaaning event",
    screen:"MyOpWallet"
  },

  {
    id:"7",
    image:require('../assets/pollution.png'),
    title:"Join a Community",
    description:"Create awareness about beach and seabed litter ",
    screen:"MyOpWallet"
  },

  {
    id:"8",
    image:require('../assets/pollution.png'),
    title:"My Profile",
    description:"My profile, participation and  achievements",
    screen:"MyOpWallet"
  },

  {
    id:"9",
    image:require('../assets/pollution.png'),
    title:"Near Me",
    description:"Beach and seabed litter events near you",
    screen:"MyOpWallet"
  },

  {
    id:"10",
    image:require('../assets/pollution.png'),
    title:"Logout",
    description:"Logout of your SER acccount",
    screen:"MyOpWallet"
  }
]


const Campaigns = () => {
    
    const navigation = useNavigation();

    const onNewOpWalletPress = () => {
      navigation.navigate('NewOpWallet');
    };

    const onOperationalAccountPress = () => {
      navigation.navigate('OperationalAccount');
    };

    const onCreateTlOwPress = () => {
      navigation.navigate('CreateTrustlineOp');
    };

    const onNftsPress = () => {
      navigation.navigate('NftsOw');
    };

    const onWalletPress = () => {
      navigation.navigate('MyOpWallet');
    };

  return (

    <View style={styles.container} behavior="padding">

    <Text style={styles.HelloText}>campaignss</Text>
    <Text style={styles.descText1}>Select an option to get started</Text>

      <Campaign/>


      <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={({ item }) => (

        <TouchableOpacity onPress={() => navigation.navigate(item.screen)} style={styles.ButtonContainer}>
         <Text style={styles.mainText}>{item.title}</Text>
        <Text style={styles.descText}>{item.description}</Text>
     </TouchableOpacity>
      )}

    />

    </View>
  )
}

export default Campaigns

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    paddingBottom:30,
    paddingTop:40,
    paddingHorizontal:20,
  },

  HelloText:{
    color:'black',
    fontSize:25,
    fontWeight:500,
    textAlign:'left',
    paddingBottom:6
},

  cardImage: {
    padding: 55,
    margin:20,
    paddingBottom:30,
    height: 35,
    width: 35,
    resizeMode: 'contain',
    alignSelf: 'flex-start',
    position: 'absolute',
  },

  mainText:{
    color:'white',
    fontSize:16,
    fontWeight:700,
    textAlign:'left',
    paddingBottom:5,
  },

  descText:{
    color:'#898A8B',
    fontSize:12,
    fontWeight:300,
    textAlign:'left',
},

descText1:{
  color:'#898A8B',
  fontSize:14,
  fontWeight:300,
  textAlign:'left',
  paddingBottom:20
},


  ButtonContainer: {
    backgroundColor: "#141518",
    borderRadius: 5,
    paddingVertical: 40,
    paddingHorizontal: 20,
    marginBottom:10,
    marginRight:10,
    maxWidth:'50%',
    justifyContent: 'center',
    flex: 1, 
},

CardContainer: {
  backgroundColor: "#5659C6",
  borderRadius: 5,
  paddingVertical: 20,
  paddingHorizontal: 140,
  marginBottom:10,
  height:100, 
},

});