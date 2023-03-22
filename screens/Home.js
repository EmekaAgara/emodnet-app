import { StyleSheet, Text, View,Image,TextInput, KeyboardAvoidingView,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native';

const data = [
  {
    id:"1",
    image:require('../assets/pollution.png'),
    title:"Create a yyyyyyyyycampaign",
    description:"Create a new operational",
    screen:"NewOpWallet"
  },

  {
    id:"2",
    image:require('../assets/pollution.png'),
    title:"Join a ggggggggggggggggCampaign",
    description:"Send XRP",
    screen:"OperationalAccount"
  },

  {
    id:"3",
    image:require('../assets/pollution.png'),
    title:"Trending Locations",
    description:"between accounts",
    screen:"CreateTrustlineOp"
  },

  {
    id:"4",
    image:require('../assets/pollution.png'),
    title:"Historical Data",
    description:"Mint, burn",
    screen:"NftsOw"
  },

  {
    id:"5",
    image:require('../assets/pollution.png'),
    title:"Post an update",
    description:"Get new",
    screen:"MyOpWallet"
  },

  {
    id:"6",
    image:require('../assets/pollution.png'),
    title:"Make Donation",
    description:"Get new",
    screen:"MyOpWallet"
  },

  {
    id:"7",
    image:require('../assets/pollution.png'),
    title:"Join a Community",
    description:"Get new",
    screen:"MyOpWallet"
  },

  {
    id:"8",
    image:require('../assets/pollution.png'),
    title:"My Rewards",
    description:"Get new",
    screen:"MyOpWallet"
  },

  {
    id:"9",
    image:require('../assets/pollution.png'),
    title:"Near Me",
    description:"Get new",
    screen:"MyOpWallet"
  },

  {
    id:"10",
    image:require('../assets/pollution.png'),
    title:"Logout",
    description:"Get new",
    screen:"MyOpWallet"
  }
]


const HomeOperationalWallet = () => {
    
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

    <Text style={styles.HelloText}>Good day, Admin</Text>

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

export default HomeOperationalWallet

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    paddingBottom:30,
    paddingTop:60,
    padding:6,
    paddingHorizontal:10
  },


  HelloText:{
    color:'black',
    fontSize:25,
    fontWeight:700,
    textAlign:'left',
    paddingBottom:20
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
    // paddingLeft:90,
  },

  descText:{
    color:'#898A8B',
    fontSize:14,
    fontWeight:300,
    textAlign:'left',
    // paddingLeft:90,
},

  ButtonContainer: {
    backgroundColor: "#141518",
    borderRadius: 5,
    paddingVertical: 40,
    paddingHorizontal: 20,
    marginBottom:10,
    marginRight:10,
    maxWidth:'50%',
    // maxHeight:'100%'
    
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