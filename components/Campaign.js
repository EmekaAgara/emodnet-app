import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Campaign = (props) => {

  const campaign = props.campaign;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80'}}
      />

      <Text style={styles.textcontainer}>{post.category}Sea Bed Litter Cleaning</Text>
      <Text style={styles.Maintext}>{post.title}Expedition spain july 26th</Text>   
      <Text style={styles.description}>{post.description}Join us in cleaning up the sea bed litter in june in cleaning up the sea bed litter in june ...</Text>
      <Text style={styles.midText2}>{post.raised}$100 Raised - 500 participants</Text>

    </View>
  )
}
  
export default Campaign

const styles = StyleSheet.create({

  image:{
    width:'100%',
    aspectRatio:3/1.6,
    resizeMode:'cover',
    borderRadius:7,
  },

  Maintext:{
    fontWeight:700,
    fontSize:18
  },

  midText2:{
    fontWeight:500,
    paddingBottom:10
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

})