import { StyleSheet, Text, View,Image,TextInput, KeyboardAvoidingView,TouchableOpacity, ImageBackground, ScrollView, SafeAreaView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Campaign from '../components/Campaign'

const data = [
  {
    id:"1",
    image:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80',
    category:"Sea Bed Litter Cleaning",
    title:"Expedition spain july 26th",
    description:"Join us in cleaning up the sea bed litter in june in cleaning up the sea bed litter in june ...",
    raised:"$100 Raised - 20 participants",
    screen:"NewOpWallet"
  },

  {
    id:"2",
    image:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80',
    category:"Sea Bed Litter Cleaning",
    title:"Expedition spain july 26th",
    description:"Join us in cleaning up the sea bed litter in june in cleaning up the sea bed litter in june ...",
    raised:"$100 Raised - 20 participants",
    screen:"NewOpWallet"
  },

  {
    id:"3",
    image:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80',
    category:"Sea Bed Litter Cleaning",
    title:"Expedition spain july 26th",
    description:"Join us in cleaning up the sea bed litter in june in cleaning up the sea bed litter in june ...",
    raised:"$100 Raised - 20 participants",
    screen:"NewOpWallet"
  },

  {
    id:"4",
    image:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80',
    category:"Sea Bed Litter Cleaning",
    title:"Expedition spain july 26th",
    description:"Join us in cleaning up the sea bed litter in june in cleaning up the sea bed litter in june ...",
    raised:"$100 Raised - 20 participants",
    screen:"NewOpWallet"
  },

  {
    id:"5",
    image:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80',
    category:"Sea Bed Litter Cleaning",
    title:"Expedition spain july 26th",
    description:"Join us in cleaning up the sea bed litter in june in cleaning up the sea bed litter in june ...",
    raised:"$100 Raised - 20 participants",
    screen:"NewOpWallet"
  },

  {
    id:"6",
    image:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80',
    category:"Sea Bed Litter Cleaning",
    title:"Expedition spain july 26th",
    description:"Join us in cleaning up the sea bed litter in june in cleaning up the sea bed litter in june ...",
    raised:"$100 Raised - 20 participants",
    screen:"NewOpWallet"
  },

  {
    id:"7",
    image:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80',
    category:"Sea Bed Litter Cleaning",
    title:"Expedition spain july 26th",
    description:"Join us in cleaning up the sea bed litter in june in cleaning up the sea bed litter in june ...",
    raised:"$100 Raised - 20 participants",
    screen:"NewOpWallet"
  },

  {
    id:"8",
    image:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80',
    category:"Sea Bed Litter Cleaning",
    title:"Expedition spain july 26th",
    description:"Join us in cleaning up the sea bed litter in june in cleaning up the sea bed litter in june ...",
    raised:"$100 Raised - 20 participants",
    screen:"NewOpWallet"
  },

  {
    id:"9",
    image:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80',
    category:"Sea Bed Litter Cleaning",
    title:"Expedition spain july 26th",
    description:"Join us in cleaning up the sea bed litter in june in cleaning up the sea bed litter in june ...",
    raised:"$100 Raised - 20 participants",
    screen:"NewOpWallet"
  },

  {
    id:"10",
    image:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80',
    category:"Sea Bed Litter Cleaning",
    title:"Expedition spain july 26th",
    description:"Join us in cleaning up the sea bed litter in june in cleaning up the sea bed litter in june ...",
    raised:"$100 Raised - 20 participants",
    screen:"NewOpWallet"
  },

]


const Campaigns = () => {
    
    const navigation = useNavigation();

    const onNewOpWalletPress = () => {
      navigation.navigate('NewOpWallet');
    };


  return (

    <View style={styles.container} behavior="padding">

    <Text style={styles.HelloText}>Good day, Admin</Text>
    <Text style={styles.descText1}>Select an option to get started</Text>

      <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (

        <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
        <Image
        style={styles.image}
        source={{uri:item.image}}
      />

      <Text style={styles.textcontainer}>{item.category}</Text>
      <Text style={styles.Maintext}>{item.title}</Text>   
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.midText2}>{item.raised}</Text>

     </TouchableOpacity>
      )}

    />

    </View>
  )
}

export default Campaigns

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    justifyContent: 'center',
    paddingTop:'15%',
    paddingHorizontal:20,
  },

  HelloText:{
    color:'black',
    fontSize:25,
    fontWeight:500,
    textAlign:'left',
    paddingBottom:6
},


descText1:{
  color:'#898A8B',
  fontSize:14,
  fontWeight:300,
  textAlign:'left',
  paddingBottom:20
},

image:{
  width:'100%',
  aspectRatio:3/1.5,
  resizeMode:'cover',
  borderRadius:7,
},

Maintext:{
  fontWeight:700,
  fontSize:18
},

midText2:{
  fontWeight:500,
  paddingBottom:30
},

textcontainer:{
  paddingVertical:5,
  fontWeight:700,
  color:'#528CFD'  
},

description:{
  paddingVertical:5,
  color:'gray'
},

});